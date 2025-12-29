import { votesRepository } from "../../../infra/repositories/Votes";
import VotesService from "./VotesService";

export const votesService = new VotesService(votesRepository);
