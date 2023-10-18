export default class viewWorkoutsController {

  constructor(gymLibrary) {
    this.gymLibrary = gymLibrary;
  }

  renderPage(req, res, next) {
    res.render("viewWorkoutsView", { workouts });
  }
}