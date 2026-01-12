import type { Context } from "elysia";
import type CreateElectionService from "../../../core/services/Elections/CreateElectionsService/CreateElectionsService";
import type {
    electionDTOBody,
    electionDTOInput,
} from "../../../domain/entities/elections/types";
import type { Controller } from "../../ports/Controller";
import type { HttpResponse } from "../../ports/HttpResponse";

export default class CreateElectionController implements Controller<
    electionDTOInput,
    HttpResponse
> {
    private createElectionService: CreateElectionService;

    constructor(createElectionService: CreateElectionService) {
        this.createElectionService = createElectionService;
    }

    public async handle(
        ctx: Context<{ body: electionDTOBody }>,
    ): Promise<HttpResponse> {
        try {
            const election = await this.createElectionService.execute(ctx.body);

            return {
                status: 201,
                body: { message: "created", election },
            };
        } catch (error) {
            if (error instanceof Error) {
                if (error.message === "already_exists") {
                    return {
                        status: 409,
                        body: {
                            message: "this name to election already exists",
                        },
                    };
                }
            }

            return {
                status: 500,
                body: {
                    message: "internal error",
                    error: error instanceof Error ? error.message : error,
                },
            };
        }
    }
}
