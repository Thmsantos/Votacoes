import { electionsRepository } from "../../../../infra/repositories/Elections";
import GetElectionsByNameService from "./CreateElectionsService";

export const electionsService = new GetElectionsByNameService(
    electionsRepository,
);
