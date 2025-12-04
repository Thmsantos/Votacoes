import { takeVoteRepository } from "../../repositories/TakeVote";
import TakeVoteService from "./TakeVoteService";

export const takeVoteService = new TakeVoteService(takeVoteRepository);
