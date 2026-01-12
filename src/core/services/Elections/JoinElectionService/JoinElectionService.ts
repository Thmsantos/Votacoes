import type ElectionsRepository from "../../../../infra/repositories/Elections/ElectionsRepository";

export class JoinElectionService {
    private electionRepository: ElectionsRepository;

    constructor(electionRepository: ElectionsRepository) {
        this.electionRepository = electionRepository;
    }

    public async execute(electionId: number, key: string) {
        const election = await this.electionRepository.findById(electionId);

        if (election && key === election.key) {
            return election;
        }

        throw new Error("invalid key");
    }
}
