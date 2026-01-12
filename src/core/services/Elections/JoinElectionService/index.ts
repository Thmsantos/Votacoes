import { electionsRepository } from "../../../../infra/repositories/Elections";
import { JoinElectionService } from "./JoinElectionService";

export const joinElectionService = new JoinElectionService(electionsRepository);
