import { electionsRepository } from "../../../../infra/repositories/Elections";
import CreateElectionService from "./CreateElectionsService";

export const electionsService = new CreateElectionService(electionsRepository);
