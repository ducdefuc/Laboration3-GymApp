import GymLibrary from '../../L2-GymLibrary/src/GymLibrary.js';

export class createWorkoutController {

  constructor() {
    this.gymLibrary = new GymLibrary();
  }

  index(req, res, next) {
    res.render("createWorkoutView");
  }

  createWorkoutPost(req, res, next) {
    const workoutName = this.#getWorkoutName(req);
    this.gymLibrary.createWorkout(workoutName);
    this.#redirectToHome(res);
  }

  #getWorkoutName(req) {
    const { workoutName } = req.body;
    return workoutName;
  }

  #redirectToHome(res) {
    res.redirect("/");
  }
}