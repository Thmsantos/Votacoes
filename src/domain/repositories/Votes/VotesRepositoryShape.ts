export interface VotesRepositoryShape {
    createVote(candidateName: string): Promise<void>;
}
