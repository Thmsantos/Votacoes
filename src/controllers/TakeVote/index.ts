import { takeVoteService } from "../../services/TakeVote";
import TakeVoteController from "./takeVoteController";

export const takeVoteController = new TakeVoteController(
    takeVoteService
);