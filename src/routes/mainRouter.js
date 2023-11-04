import express from 'express';
import homeRouter from './homeRouter.js';
import createWorkoutRouter from './createWorkoutRouter.js';
import listAllWorkoutsRouter from './listAllWorkoutsRouter.js';
import editWorkoutRouter from './editWorkoutRouter.js';
import deleteWorkoutRouter from './deleteWorkoutRouter.js';
import startWorkoutRouter from './startWorkoutRouter.js';

export default class mainRouter {
  constructor(gymLibrary) {
    this.router = express.Router();
    this.#setupRoutes(gymLibrary);
  }

  #setupRoutes(gymLibrary) {
    const routes = [
      { path: '/', router: new homeRouter(gymLibrary) },
      { path: '/createWorkout', router: new createWorkoutRouter(gymLibrary) },
      { path: '/editWorkout', router: new editWorkoutRouter(gymLibrary) },
      { path: '/listAllWorkouts', router: new listAllWorkoutsRouter(gymLibrary) },
      { path: '/deleteWorkout', router: new deleteWorkoutRouter(gymLibrary) },
      { path: '/startWorkout', router: new startWorkoutRouter(gymLibrary) },
    ];

    for (const route of routes) {
      this.router.use(route.path, route.router.getRouter());
    }
  }

  getRouter() {
    return this.router;
  }
}