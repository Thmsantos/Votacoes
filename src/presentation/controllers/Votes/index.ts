import { getResultsService } from "../../../core/services/Candidate/GetResultsService";
import { votesService } from "../../../core/services/Votes";
import GetResultsController from "./GetResultsController";
import VotesController from "./VoteController";

export const votesController = new VotesController(votesService);

export const getResultsController = new GetResultsController(getResultsService);
