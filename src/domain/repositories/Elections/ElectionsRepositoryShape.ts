import type { Election, ElectionDTO } from "../../entities/elections/types";

export interface ElectionsRepositoryShape {
    create(election: ElectionDTO): Promise<Election>;
    findById(id: number): Promise<Election | null>;
    findByName(name: string): Promise<Election | null>;
}
