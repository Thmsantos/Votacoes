import { electionsRepository } from "../../../../infra/repositories/Elections";
import GetElectionsByIdService from "./CreateElectionsService";

export const getElectionsByIdService = new GetElectionsByIdService(
    electionsRepository,
);
