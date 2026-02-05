export interface VotesRepositoryShape {
    createVote(name: string, electionId: number): Promise<void>;
}
