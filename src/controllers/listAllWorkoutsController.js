export default class listAllWorkoutsController {

  constructor(gymLibrary) {
    this.gymLibrary = gymLibrary;
  }

  renderPage(req, res, next) {
    const workouts = this.gymLibrary.listAllWorkouts();
    res.render("listAllWorkoutsView", { workouts });
  }

  renderWorkoutInformation(req, res, next) {
    const workoutName = req.params.name;

    const workoutInformation = this.gymLibrary.getWorkout(workoutName);
    res.render("workoutInformationView", { workout: workoutInformation });
  }
}