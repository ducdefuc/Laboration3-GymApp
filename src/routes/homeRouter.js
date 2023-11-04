import express from 'express'
import homeController from '../controllers/homeController.js'

export default class homeRouter {
  constructor() {
    this.router = express.Router();
    this.controller = new homeController();
    this.#setupRoutes();
  }

  #setupRoutes() {
    this.router.get('/', (req, res, next) => this.controller.renderHomePage(req, res, next));
  }

  getRouter() {
    return this.router;
  }
}