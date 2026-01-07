import type { Context } from "elysia";
import type GetElectionsByIdService from "../../../core/services/Elections/GetElectionsByIdService/CreateElectionsService";
import type {
    getElectionByIdBody,
    getElectionByIdInput,
} from "../../../domain/entities/elections/types";
import type { Controller } from "../../ports/Controller";
import type { HttpResponse } from "../../ports/HttpResponse";

export default class GetElectionsByIdController implements Controller<
    getElectionByIdInput,
    HttpResponse
> {
    private getElectionsByIdService: GetElectionsByIdService;

    constructor(getElectionsByIdService: GetElectionsByIdService) {
        this.getElectionsByIdService = getElectionsByIdService;
    }

    public async handle(
        ctx: Context<{ body: getElectionByIdBody }>,
    ): Promise<HttpResponse> {
        try {
            const election = await this.getElectionsByIdService.execute(
                Number(ctx.body),
            );

            return { status: 200, body: { data: election } };
        } catch (error) {
            return { body: { message: "Internal error", error }, status: 500 };
        }
    }
}
