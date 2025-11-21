import { Elysia } from "elysia";
import swagger from "@elysiajs/swagger";

import { createCandidateController } from "./src/controllers/Candidate";
import { takeVoteController } from "./src/controllers/TakeVote";

import { createCandidateSchema, takeVoteSchema } from "./src/types/types";

new Elysia()
  .use(swagger())

  .post("/create", createCandidateController.create, { body: createCandidateSchema })
  .get("/candidates", createCandidateController.list)
  .get("/results", createCandidateController.results)

  .post("/vote", takeVoteController.vote, { body: takeVoteSchema })

  .listen(3200);

console.log("Server running at http://127.0.0.1:3200");
