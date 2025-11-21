import type { Context } from "elysia";
import type { CandidateBody } from "../../types/types";
import type CreateCandidateService from "../../services/CreateCandidate/CreateCandidateService";
import type GetCandidatesService from "../../services/GetCandidatesService/GetCandidatesService";
import type GetResultsService from "../../services/GetResults/GetResultsService";

export default class CandidateController {
    private createCandidateService;
    
    private getCandidatesService;
    
    private getResultsService;

    constructor(
        createCandidateService: CreateCandidateService,
        getCandidatesService: GetCandidatesService,
        getResultsService: GetResultsService
    ){
        this.createCandidateService = createCandidateService,
        this.getCandidatesService = getCandidatesService,
        this.getResultsService = getResultsService;
    }

    public async create(ctx: Context<{ body: CandidateBody }>) {
        return await this.createCandidateService.handle(ctx.body, ctx.request);
    }

    public async list(){
        return await this.getCandidatesService.handle();
    }

    public async results(){
        return await this.getResultsService.handle();
    }
};
