export default class editWorkoutController {

  constructor(gymLibrary) {
    this.gymLibrary = gymLibrary;
  }

  renderPage(req, res, next) {
    const workoutName = req.params.name;
    const workout = this.gymLibrary.getWorkout(workoutName);

    res.render("editWorkoutView", {
      workout: workout,
      gymLibrary: this.gymLibrary
    });
  }

  editWorkoutPost(req, res, next) {
  }

}