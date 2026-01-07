import type { Context } from "elysia";
import type { Controller } from "../../ports/Controller";
import type { HttpResponse } from "../../ports/HttpResponse";
import type {
    getElectionByNameBody,
    getElectionByNameInput,
} from "../../../domain/entities/elections/types";
import type GetElectionsByNameService from "../../../core/services/Elections/GetElectionsByNameService/CreateElectionsService";

export default class GetElectionsByNameController implements Controller<
    getElectionByNameInput,
    HttpResponse
> {
    private getElectionsByNameService: GetElectionsByNameService;

    constructor(getElectionsByNameService: GetElectionsByNameService) {
        this.getElectionsByNameService = getElectionsByNameService;
    }

    public async handle(
        ctx: Context<{ body: getElectionByNameBody }>,
    ): Promise<HttpResponse> {
        try {
            const election = await this.getElectionsByNameService.execute(
                String(ctx.body),
            );

            return { status: 200, body: { data: election } };
        } catch (error) {
            return { body: { message: "Internal error", error }, status: 500 };
        }
    }
}
