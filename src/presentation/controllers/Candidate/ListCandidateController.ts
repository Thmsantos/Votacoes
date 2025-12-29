import type GetCandidatesService from "../../../core/services/Candidate/GetCandidatesService/GetCandidatesService";
import type { HttpResponse } from "../../ports/HttpResponse";

export default class ListCandidateController {
    private getCandidatesService;

    constructor(getCandidatesService: GetCandidatesService) {
        this.getCandidatesService = getCandidatesService;
    }

    public async handle(): Promise<HttpResponse> {
        try {
            const candidates = await this.getCandidatesService.execute();

            return { status: 200, body: { data: candidates } };
        } catch (error) {
            return { body: { message: "Internal error", error }, status: 500 };
        }
    }
}
