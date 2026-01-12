import type { Context } from "elysia";
import type { JoinElectionService } from "../../../core/services/Elections/JoinElectionService/JoinElectionService";
import type {
    joinElectionBody,
    joinElectionInput,
} from "../../../domain/entities/elections/types";
import type { Controller } from "../../ports/Controller";
import type { HttpResponse } from "../../ports/HttpResponse";

export class JoinElectionController implements Controller<
    joinElectionInput,
    HttpResponse
> {
    private joinElectionService: JoinElectionService;

    constructor(joinElectionService: JoinElectionService) {
        this.joinElectionService = joinElectionService;
    }

    public async handle(
        ctx: Context<{ body: joinElectionBody }>,
    ): Promise<HttpResponse> {
        try {
            const election = await this.joinElectionService.execute(
                ctx.body.electionId,
                ctx.body.key,
            );

            return {
                status: 200,
                body: { message: "joined", election },
            };
        } catch (error) {
            if (error instanceof Error) {
                if (error.message === "invalid key") {
                    return {
                        status: 200,
                        body: { message: "unauthorized" },
                    };
                }
            }

            return {
                status: 500,
                body: { message: "internal error" },
            };
        }
    }
}
