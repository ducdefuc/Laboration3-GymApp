import express from 'express';
import createWorkoutController from '../controllers/createWorkoutController.js';

export default class createWorkoutRouter {
  constructor(gymLibrary) {
    this.router = express.Router();
    this.controller = new createWorkoutController(gymLibrary);
    this.#setupRoutes();
  }

  #setupRoutes() {
    this.router.get('/', (req, res, next) => this.controller.renderPage(req, res, next));
    this.router.post('/create', (req, res, next) => this.controller.createWorkoutPost(req, res, next));
  }

  getRouter() {
    return this.router;
  }
}
