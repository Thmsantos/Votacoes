import type { CandidateBody } from "../../../../domain/entities/candidate/types";
import type CandidateRepository from "../../../../infra/repositories/Candidates/CandidateRepository";

export default class CreateCandidateService {
    private candidateRepository: CandidateRepository;

    constructor(candidateRepository: CandidateRepository) {
        this.candidateRepository = candidateRepository;
    }

    public async execute(body: CandidateBody) {
        const { name, adminUserId, election } = body;

        if (adminUserId === election.adminUserId) {
            const exists = await this.candidateRepository.findByName(name);

            if (exists) {
                return "candidate already exists";
            }

            const candidate = await this.candidateRepository.create(
                name,
                election.id,
            );

            return candidate;
        }

        return "permission denied";
    }
}
