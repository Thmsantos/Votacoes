import { electionsRepository } from "../../../../infra/repositories/Elections";
import GetElectionsByIdService from "./GetElectionsByIdService";

export const getElectionsByIdService = new GetElectionsByIdService(
    electionsRepository,
);
