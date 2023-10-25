export default class deleteWorkoutController {

  constructor(gymLibrary) {
    this.gymLibrary = gymLibrary;
  }

  renderPage(req, res, next) {
    const workoutName = this.#getWorkoutName(req);
    const workout = this.gymLibrary.getWorkout(workoutName);
    res.render("deleteWorkoutView", {workout});
  }

  deleteWorkoutPost(req, res, next) {
    const workoutName = this.#getWorkoutName(req);
    this.gymLibrary.removeWorkout(workoutName);
    this.#redirectToWorkoutsList(res);
  }

  #getWorkoutName(req) {
    return req.params.name;
  }

  #redirectToWorkoutsList(res) {
    res.redirect("/listAllWorkouts");
  }
}