import type { VotesBody } from "../../../domain/entities/votes/types";
import type TakeVoteRepository from "../../../infra/repositories/Votes/VotesRepository";

export default class VotesService {
    private takeVoteRepository: TakeVoteRepository;

    constructor(takeVoteRepository: TakeVoteRepository) {
        this.takeVoteRepository = takeVoteRepository;
    }

    public async execute(body: VotesBody) {
        const { name, electionId } = body;

        const exists = await this.takeVoteRepository.findCandidateByName(name);
        if (!exists) {
            throw new Error("CANDIDATE NOT FOUND");
        }

        await this.takeVoteRepository.createVote(name, electionId);
        await this.takeVoteRepository.incrementCandidateVote(name);

        return true;
    }
}
