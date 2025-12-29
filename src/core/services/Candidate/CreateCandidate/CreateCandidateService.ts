import type CandidateRepository from "../../../../infra/repositories/Candidates/CandidateRepository";
import type { CandidateBody } from "../../../value_objects/types/types";

export default class CreateCandidateService {
    private candidateRepository: CandidateRepository;

    constructor(candidateRepository: CandidateRepository) {
        this.candidateRepository = candidateRepository;
    }

    public async execute(body: CandidateBody) {
        const { name } = body;

        const exists = await this.candidateRepository.findByName(name);
        
        if (exists) {
            throw new Error("USER_EXISTS");
        }

        const candidate = await this.candidateRepository.create(name);

        return candidate;
    }
}
