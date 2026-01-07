import { electionsRepository } from "../../../../infra/repositories/Elections";
import GetElectionsByIdService from "./CreateElectionsService";

export const electionsService = new GetElectionsByIdService(
    electionsRepository,
);
