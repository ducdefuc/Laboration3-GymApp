import express from 'express';
import startWorkoutController from '../controllers/startWorkoutController.js';

export default class startWorkoutRouter {
  constructor(gymLibrary) {
    this.router = express.Router();
    this.controller = new startWorkoutController(gymLibrary);
    this.#setupRoutes();
  }

  #setupRoutes() {
    this.router.get('/', (req, res, next) => this.controller.renderPage(req, res, next));
  }

  getRouter() {
    return this.router;
  }
}
