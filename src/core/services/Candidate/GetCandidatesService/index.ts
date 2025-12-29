import { candidateRepository } from "../../../../infra/repositories/Candidates";
import GetCandidatesService from "./GetCandidatesService";

export const getCandidatesService = new GetCandidatesService(
    candidateRepository,
);
