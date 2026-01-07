import { electionsRepository } from "../../../../infra/repositories/Elections";
import GetElectionsByNameService from "./CreateElectionsService";

export const getElectionsByNameService = new GetElectionsByNameService(
    electionsRepository,
);
