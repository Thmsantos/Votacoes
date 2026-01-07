import type { Election } from "../../../../domain/entities/elections/types";
import type ElectionsRepository from "../../../../infra/repositories/Elections/ElectionsRepository";

export default class GetElectionsByIdService {
    private electionsRepository: ElectionsRepository;

    constructor(electionsRepository: ElectionsRepository) {
        this.electionsRepository = electionsRepository;
    }

    public async execute(id: number): Promise<Election | null> {
        return this.electionsRepository.findById(id);
    }
}
