import type {
    Election,
    ElectionDTO,
} from "../../../../domain/entities/elections/types";
import type ElectionsRepository from "../../../../infra/repositories/Elections/ElectionsRepository";

export default class CreateElectionService {
    private electionsRepository: ElectionsRepository;

    constructor(electionsRepository: ElectionsRepository) {
        this.electionsRepository = electionsRepository;
    }

    public async execute(election: ElectionDTO): Promise<Election | null> {
        const exists = await this.electionsRepository.findByName(election.name);

        if (exists) {
            throw new Error("already_exists");
        }

        return this.electionsRepository.create(election);
    }
}
