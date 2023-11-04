import express from 'express';
import startWorkoutController from '../controllers/startWorkoutController.js';

export default class startWorkoutRouter {
  constructor(gymLibrary) {
    this.router = express.Router();
    this.controller = new startWorkoutController(gymLibrary);
    this.#setupRoutes();
  }

  #setupRoutes() {
    this.router.get('/', (req, res, next) => this.controller.renderStartWorkoutPage(req, res, next));

    this.router.get('/activeWorkout/:name', (req, res, next) => this.controller.renderActiveWorkoutPage(req, res, next));
  }

  getRouter() {
    return this.router;
  }
}
