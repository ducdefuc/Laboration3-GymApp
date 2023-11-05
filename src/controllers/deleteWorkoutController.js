export default class deleteWorkoutController {

  constructor(gymLibrary) {
    this.gymLibrary = gymLibrary;
  }

  renderDeletePage(req, res, next) {
    const workoutName = this.#getWorkoutNameFromRequest(req);
    const workout = this.gymLibrary.getWorkout(workoutName);
    res.render("deleteWorkoutView", {workout});
  }

  deleteWorkoutPost(req, res, next) {
    const workoutName = this.#getWorkoutNameFromRequest(req);
    this.gymLibrary.removeWorkout(workoutName);
    this.#redirectToWorkoutsList(res);
  }

  #getWorkoutNameFromRequest(req) {
    return req.params.name;
  }

  #redirectToWorkoutsList(res) {
    res.redirect("/gym-app/listAllWorkouts");
  }
}