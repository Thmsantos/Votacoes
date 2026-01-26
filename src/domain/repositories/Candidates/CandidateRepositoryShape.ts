export interface Candidate {
    id: string;
    name: string;
    votes: number;
}
export interface CandidateRepositoryShape {
    findByName(name: string): Promise<Candidate | null>;
    findMany(): Promise<Candidate[]>;
    findResults(): Promise<Pick<Candidate, "name" | "votes">[]>;
    create(name: string, electionId: number): Promise<Candidate>;
}
