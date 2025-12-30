import type GetResultsService from "../../../core/services/Candidate/GetResultsService/GetResultsService";

export default class GetResultsController {
    constructor(private readonly getResultsService: GetResultsService) {}

    public async handle() {
        try {
            const results = await this.getResultsService.execute();

            return {
                status: 200,
                body: {
                    data: results,
                },
            };
        } catch (error) {
            return {
                status: 500,
                body: {
                    message: "Internal error",
                    error,
                },
            };
        }
    }
}
