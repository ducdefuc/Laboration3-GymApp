export default class startWorkoutController {

  constructor(gymLibrary) {
    this.gymLibrary = gymLibrary;
  }

  renderPage(req, res, next) {
    const workouts = this.gymLibrary.listAllWorkouts();
    res.render("startWorkoutView", { workouts });
  }
}