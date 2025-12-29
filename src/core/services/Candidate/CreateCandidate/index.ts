import { candidateRepository } from "../../../../infra/repositories/Candidates";
import CreateCandidateService from "./CreateCandidateService";

export const createCandidateService = new CreateCandidateService(
    candidateRepository,
);
