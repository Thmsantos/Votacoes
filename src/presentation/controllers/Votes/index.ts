import { getResultsService } from "../../../core/services/Candidate/GetResults";
import { votesService } from "../../../core/services/Votes";
import GetResultsController from "./GetResults";
import VotesController from "./VoteController";

export const votesController = new VotesController(votesService);

export const getResultsController = new GetResultsController(getResultsService);
