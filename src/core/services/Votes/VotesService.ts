import type TakeVoteRepository from "../../../infra/repositories/Votes/VotesRepository";
import type { VotesBody } from "../../value_objects/types/types";

export default class VotesService {
    private takeVoteRepository: TakeVoteRepository;

    constructor(takeVoteRepository: TakeVoteRepository) {
        this.takeVoteRepository = takeVoteRepository;
    }

    public async execute(body: VotesBody) {
        const { name } = body;

        const exists = await this.takeVoteRepository.findCandidateByName(name);
        if (!exists) {
            throw new Error("CANDIDATE NOT FOUND");
        }

        await this.takeVoteRepository.createVote(name);
        await this.takeVoteRepository.incrementCandidateVote(name);

        return true;
    }
}
