export default class viewWorkoutsController {

  constructor(gymLibrary) {
    this.gymLibrary = gymLibrary;
  }

  renderPage(req, res, next) {
    const workouts = this.gymLibrary.listAllWorkouts();
    res.render("viewWorkoutsView", { workouts });
  }

  renderWorkoutDetails(req, res, next) {
    const workoutName = req.params.name;

    const workoutDetails = this.gymLibrary.getWorkout(workoutName);
    res.render("workoutDetailsView", { workout: workoutDetails });
  }
}