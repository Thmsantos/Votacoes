import { Elysia } from "elysia";
import { takeVoteController } from "../controllers/TakeVote";
import { takeVoteSchema } from "../types/types";

export const voteRoutes = new Elysia({ prefix: "/vote" }).post(
  "/",
  takeVoteController.vote.bind(takeVoteController),
  { body: takeVoteSchema },
);
