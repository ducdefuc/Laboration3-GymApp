export default class createWorkoutController {

  constructor(gymLibrary) {
    this.gymLibrary = gymLibrary;
  }

  renderCreateWorkoutPage(req, res, next) {
    res.render("createWorkoutView");
  }

  createWorkoutPost(req, res, next) {
    const workoutName = this.#getWorkoutName(req);
    this.gymLibrary.createWorkout(workoutName);
    this.#redirectToHomePage(res);
  }

  #getWorkoutName(req) {
    const { workoutName } = req.body;
    return workoutName;
  }

  #redirectToHomePage(res) {
    res.redirect("/gym-app/");
  }
}