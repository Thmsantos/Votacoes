import type CandidateRepository from "../../repositories/Candidates/CandidateRepository";

export default class GetResultsService {
  private candidateRepository: CandidateRepository;

  constructor(candidateRepository: CandidateRepository) {
    this.candidateRepository = candidateRepository;
  }

  public async execute() {
    return this.candidateRepository.findResults();
  }
}
