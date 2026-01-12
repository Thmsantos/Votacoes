import { createElectionsService } from "../../../core/services/Elections/CreateElectionsService";
import { getElectionsByIdService } from "../../../core/services/Elections/GetElectionsByIdService";
import { getElectionsByNameService } from "../../../core/services/Elections/GetElectionsByNameService";
import { joinElectionService } from "../../../core/services/Elections/JoinElectionService";
import CreateElectionController from "./CreateElectionController";
import GetElectionsByIdController from "./GetElectionsByIdController";
import GetElectionsByNameController from "./GetElectionsByNameController";
import { JoinElectionController } from "./JoinElectionController";

export const createElectionController = new CreateElectionController(
    createElectionsService,
);

export const getElectionsByNameController = new GetElectionsByNameController(
    getElectionsByNameService,
);

export const getElectionsByIdController = new GetElectionsByIdController(
    getElectionsByIdService,
);

export const joinElectionController = new JoinElectionController(
    joinElectionService,
);
