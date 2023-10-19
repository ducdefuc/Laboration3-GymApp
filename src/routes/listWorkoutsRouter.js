import express from 'express';
import listWorkoutsController from '../controllers/listWorkoutsController.js';

export default class listWorkoutsRouter {
  constructor(gymLibrary) {
    this.router = express.Router();
    this.controller = new listWorkoutsController(gymLibrary);
    this.#setupRoutes();
  }

  #setupRoutes() {
    this.router.get('/', (req, res, next) => this.controller.renderPage(req, res, next));
    this.router.get('/workout/:name', (req, res, next) => this.controller.renderWorkoutInformation(req, res, next));
  }

  getRouter() {
    return this.router;
  }
}
