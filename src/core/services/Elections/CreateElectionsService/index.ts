import { electionsRepository } from "../../../../infra/repositories/Elections";
import CreateElectionService from "./CreateElectionsService";

export const createElectionsService = new CreateElectionService(
    electionsRepository,
);
