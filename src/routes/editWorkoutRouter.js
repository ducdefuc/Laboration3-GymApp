import express from 'express';
import editWorkoutController from '../controllers/editWorkoutController.js';

export default class editWorkoutRouter {
  constructor(gymLibrary) {
    this.router = express.Router();
    this.controller = new editWorkoutController(gymLibrary);
    this.#setupRoutes();
  }

  #setupRoutes() {
    this.router.get('/:name', (req, res, next) => this.controller.renderPage(req, res, next));
    this.router.post('/:name', (req, res, next) => this.controller.editWorkoutPost(req, res, next));
  }

  getRouter() {
    return this.router;
  }
}
