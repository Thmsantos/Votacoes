import type CandidateRepository from "../../../../domain/repositories/Candidates/CandidateRepository";
import type { CandidateBody } from "../../../value_objects/types/types";

export default class CreateCandidateService {
    private candidateRepository: CandidateRepository;

    constructor(candidateRepository: CandidateRepository) {
        this.candidateRepository = candidateRepository;
    }

    public async execute(body: CandidateBody, request: Request) {
        const API_KEY = process.env.API_KEY;
        const { name } = body;

        const key = request.headers.get("API_KEY");
        if (String(key) !== String(API_KEY)) {
            throw new Error("UNAUTHORIZED");
        }

        const exists = await this.candidateRepository.findByName(name);
        if (exists) {
            throw new Error("USER_EXISTS");
        }

        const candidate = await this.candidateRepository.create(name);

        return candidate;
    }
}
