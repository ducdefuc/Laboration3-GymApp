export default class startWorkoutController {

  constructor(gymLibrary) {
    this.gymLibrary = gymLibrary;
  }

  renderPage(req, res, next) {
    const workouts = this.gymLibrary.listAllWorkouts();
    res.render("startWorkoutView", { workouts });
  }

  renderActiveWorkoutPage(req, res, next) {
    const workoutName = req.params.name;

    const workoutInformation = this.gymLibrary.getWorkout(workoutName);
    res.render("activeWorkoutView", { workout: workoutInformation });
  }
}