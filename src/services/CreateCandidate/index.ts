import { candidateRepository } from "../../repositories/Candidates";
import CreateCandidateService from "./CreateCandidateService";

export const createCandidateService = new CreateCandidateService(
  candidateRepository,
);
