import { createCandidateService } from "../../services/CreateCandidate";
import { getCandidatesService } from "../../services/GetCandidatesService";
import { getResultsService } from "../../services/GetResults";
import CandidateController from "./CreateCandidateController";

export const createCandidateController = new CandidateController(
    createCandidateService,
    getCandidatesService,
    getResultsService
);