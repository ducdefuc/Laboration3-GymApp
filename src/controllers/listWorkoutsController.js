export default class listWorkoutsController {

  constructor(gymLibrary) {
    this.gymLibrary = gymLibrary;
  }

  renderPage(req, res, next) {
    const workouts = this.gymLibrary.listAllWorkouts();
    res.render("listWorkoutsView", { workouts });
  }

  renderWorkoutDetails(req, res, next) {
    const workoutName = req.params.name;

    const workoutDetails = this.gymLibrary.getWorkout(workoutName);
    res.render("workoutDetailsView", { workout: workoutDetails });
  }
}