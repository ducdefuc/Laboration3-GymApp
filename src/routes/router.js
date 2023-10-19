import express from 'express';
import homeRouter from './homeRouter.js';
import createWorkoutRouter from './createWorkoutRouter.js';
import listWorkoutsRouter from './listWorkoutsRouter.js';
import editWorkoutRouter from './editWorkoutRouter.js';

export default class router {
  constructor(gymLibrary) {
    this.router = express.Router();
    this.#setupRoutes(gymLibrary);
  }

  #setupRoutes(gymLibrary) {
    const homeRouterInstance = new homeRouter().getRouter();
    const createWorkoutRouterInstance = new createWorkoutRouter(gymLibrary).getRouter();
    const listWorkoutsRouterInstance = new listWorkoutsRouter(gymLibrary).getRouter();
    const editWorkoutRouterInstance = new editWorkoutRouter(gymLibrary).getRouter();

    this.router.use('/', homeRouterInstance);
    this.router.use('/createWorkout', createWorkoutRouterInstance);
    this.router.use('/editWorkout', editWorkoutRouterInstance);
    this.router.use('/listWorkouts', listWorkoutsRouterInstance);
  }

  getRouter() {
    return this.router;
  }
}