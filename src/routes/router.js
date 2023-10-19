import express from 'express';
import homeRouter from './homeRouter.js';
import createWorkoutRouter from './createWorkoutRouter.js';
import listWorkoutsRouter from './listWorkoutsRouter.js';

export default class router {
  constructor(gymLibrary) {
    this.router = express.Router();
    this.#setupRoutes(gymLibrary);
  }

  #setupRoutes(gymLibrary) {
    const homeRouterInstance = new homeRouter().getRouter();
    const createWorkoutRouterInstance = new createWorkoutRouter(gymLibrary).getRouter();
    const listWorkoutsRouterInstance = new listWorkoutsRouter(gymLibrary).getRouter();

    this.router.use('/', homeRouterInstance);
    this.router.use('/createWorkout', createWorkoutRouterInstance);
    this.router.use('/listWorkouts', listWorkoutsRouterInstance);
  }

  getRouter() {
    return this.router;
  }
}