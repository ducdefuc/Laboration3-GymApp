export default class createWorkoutController {

  constructor(gymLibrary) {
    this.gymLibrary = gymLibrary;
  }

  renderPage(req, res, next) {
    res.render("createWorkoutView");
  }

  createWorkoutPost(req, res, next) {
    const workoutName = this.#getWorkoutName(req);
    this.gymLibrary.createWorkout(workoutName);
    const pushups = this.gymLibrary.createExercise("PushUps", "press yourself away from the floor");
    this.gymLibrary.addExerciseToWorkout(workoutName, pushups);
    pushups.addWarmupSet(10, 10);
    pushups.addWorkingSet(20, 10);
    pushups.addWorkingSet(20, 10);
    console.log(this.gymLibrary.getWorkout(workoutName));
    this.#redirectToHomePage(res);
  }

  #getWorkoutName(req) {
    const { workoutName } = req.body;
    return workoutName;
  }

  #redirectToHomePage(res) {
    res.redirect("/");
  }
}