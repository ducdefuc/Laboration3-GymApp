import express from 'express';
import viewWorkoutsController from '../controllers/viewWorkoutsController.js';

export default class viewWorkoutsRouter {
  constructor(gymLibrary) {
    this.router = express.Router();
    this.controller = new viewWorkoutsController(gymLibrary);
    this.#setupRoutes();
  }

  #setupRoutes() {
    this.router.get('/', (req, res, next) => this.controller.renderPage(req, res, next));
  }

  getRouter() {
    return this.router;
  }
}
