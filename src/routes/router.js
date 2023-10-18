import express from 'express';
import homeRouter from './homeRouter.js';
import createWorkoutRouter from './createWorkoutRouter.js';
import viewWorkoutsRouter from './viewWorkoutsRouter.js';

export default class router {
  constructor(gymLibrary) {
    this.router = express.Router();
    this.#setupRoutes(gymLibrary);
  }

  #setupRoutes(gymLibrary) {
    const homeRouterInstance = new homeRouter().getRouter();
    const createWorkoutRouterInstance = new createWorkoutRouter(gymLibrary).getRouter();
    const viewWorkoutsRouterInstance = new viewWorkoutsRouter(gymLibrary).getRouter();

    this.router.use('/', homeRouterInstance);
    this.router.use('/createWorkout', createWorkoutRouterInstance);
    this.router.use('/viewWorkouts', viewWorkoutsRouterInstance);
  }

  getRouter() {
    return this.router;
  }
}