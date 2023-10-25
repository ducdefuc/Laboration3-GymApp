import express from 'express';
import homeRouter from './homeRouter.js';
import createWorkoutRouter from './createWorkoutRouter.js';
import listAllWorkoutsRouter from './listAllWorkoutsRouter.js';
import editWorkoutRouter from './editWorkoutRouter.js';
import deleteWorkoutRouter from './deleteWorkoutRouter.js';

export default class router {
  constructor(gymLibrary) {
    this.router = express.Router();
    this.#setupRoutes(gymLibrary);
  }

  #setupRoutes(gymLibrary) {
    const homeRouterInstance = new homeRouter().getRouter();
    const createWorkoutRouterInstance = new createWorkoutRouter(gymLibrary).getRouter();
    const listAllWorkoutsRouterInstance = new listAllWorkoutsRouter(gymLibrary).getRouter();
    const editWorkoutRouterInstance = new editWorkoutRouter(gymLibrary).getRouter();
    const deleteWorkoutRouterInstance = new deleteWorkoutRouter(gymLibrary).getRouter();

    this.router.use('/', homeRouterInstance);
    this.router.use('/createWorkout', createWorkoutRouterInstance);
    this.router.use('/editWorkout', editWorkoutRouterInstance);
    this.router.use('/listAllWorkouts', listAllWorkoutsRouterInstance);
    this.router.use('/deleteWorkout', deleteWorkoutRouterInstance);
  }

  getRouter() {
    return this.router;
  }
}