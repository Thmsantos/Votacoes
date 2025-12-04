import { candidateRepository } from "../../repositories/Candidates";
import GetResultsService from "./GetResultsService";

export const getResultsService = new GetResultsService(candidateRepository);
