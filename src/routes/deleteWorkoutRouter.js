import express from 'express';
import deleteWorkoutController from '../controllers/deleteWorkoutController.js';

export default class deleteWorkoutRouter {
  constructor(gymLibrary) {
    this.router = express.Router();
    this.controller = new deleteWorkoutController(gymLibrary);
    this.#setupRoutes();
  }

  #setupRoutes() {
    this.router.get('/:name', (req, res, next) => this.controller.renderDeletePage(req, res, next));
    this.router.post('/:name', (req, res, next) => this.controller.deleteWorkoutPost(req, res, next));
  }

  getRouter() {
    return this.router;
  }
}
