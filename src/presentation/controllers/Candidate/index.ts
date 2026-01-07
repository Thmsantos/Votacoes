import { createCandidateService } from "../../../core/services/Candidate/CreateCandidateService";
import { getCandidatesService } from "../../../core/services/Candidate/GetCandidatesService";
import CreateCandidateController from "./CreateCandidateController";
import ListCandidateController from "./ListCandidateController";

export const listCandidateController = new ListCandidateController(
    getCandidatesService,
);

export const createCandidateController = new CreateCandidateController(
    createCandidateService,
);
