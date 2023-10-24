import express from 'express';
import editWorkoutController from '../controllers/editWorkoutController.js';

export default class editWorkoutRouter {
  constructor(gymLibrary) {
    this.router = express.Router();
    this.controller = new editWorkoutController(gymLibrary);
    this.#setupRoutes();
  }

  #setupRoutes() {
    this.router.get('/:name', (req, res, next) => this.controller.renderEditPage(req, res, next));

    this.router.get('/addExercise/:name', (req, res, next) => this.controller.renderAddExercisePage(req, res, next));
    this.router.post('/addExercise/:name', (req, res, next) => this.controller.addExerciseToWorkoutPost(req, res, next));
  }

  getRouter() {
    return this.router;
  }
}
