import type { Election } from "../../../../domain/entities/elections/types";
import type ElectionsRepository from "../../../../infra/repositories/Elections/ElectionsRepository";

export default class GetElectionsByNameService {
    private electionsRepository: ElectionsRepository;

    constructor(electionsRepository: ElectionsRepository) {
        this.electionsRepository = electionsRepository;
    }

    public async execute(name: string): Promise<Election | null> {
        return this.electionsRepository.findByName(name);
    }
}
