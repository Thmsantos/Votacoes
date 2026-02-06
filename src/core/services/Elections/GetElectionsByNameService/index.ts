import { electionsRepository } from "../../../../infra/repositories/Elections";
import GetElectionsByNameService from "./GetElectionsByNameService";

export const getElectionsByNameService = new GetElectionsByNameService(
    electionsRepository,
);
