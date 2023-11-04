import express from 'express';
import listAllWorkoutsController from '../controllers/listAllWorkoutsController.js';

export default class listAllWorkoutsRouter {
  constructor(gymLibrary) {
    this.router = express.Router();
    this.controller = new listAllWorkoutsController(gymLibrary);
    this.#setupRoutes();
  }

  #setupRoutes() {
    this.router.get('/', (req, res, next) => this.controller.renderPageWithAllWorkouts(req, res, next));
    this.router.get('/:name', (req, res, next) => this.controller.renderPageWithWorkoutInformation(req, res, next));
  }

  getRouter() {
    return this.router;
  }
}
