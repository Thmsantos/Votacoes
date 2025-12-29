import type CandidateRepository from "../../../../infra/repositories/Candidates/CandidateRepository";

export default class GetCandidatesService {
    private candidateRepository: CandidateRepository;

    constructor(candidateRepository: CandidateRepository) {
        this.candidateRepository = candidateRepository;
    }

    public async execute() {
        return this.candidateRepository.findMany();
    }
}
