export default class editWorkoutController {

  constructor(gymLibrary) {
    this.gymLibrary = gymLibrary;
  }

  renderEditPage(req, res) {
    this.#renderPage(req, res, "editWorkoutView");
  }

  renderAddExercisePage(req, res) {
    this.#renderPage(req, res, "addExerciseView");
  }

  #renderPage(req, res, viewName) {
    const workout = this.#getWorkoutFromName(req.params.name);
    res.render(viewName, { workout, gymLibrary: this.gymLibrary });
  }

  #getWorkoutFromName(workoutName) {
    return this.gymLibrary.getWorkout(workoutName);
  }

  addExerciseToWorkoutPost(req, res) {
    const workoutName = req.params.name;
    const exercise = this.#createExerciseFromRequest(req)
    this.gymLibrary.addExerciseToWorkout(workoutName, exercise);
    res.redirect(`/editWorkout/${workoutName}`);
  }

  #createExerciseFromRequest(req) {
    const exerciseName = req.body.exerciseName;
    const exercise = this.gymLibrary.createExercise(exerciseName);
    // Make sure that the request body is an array, to handle single and multiple sets.
    const exerciseSetTypes = Array.isArray(req.body['setTypes']) ? req.body['setTypes'] : [req.body['setTypes']];
    const exerciseWeights = Array.isArray(req.body['weights']) ? req.body['weights'] : [req.body['weights']];
    const exerciseReps = Array.isArray(req.body['reps']) ? req.body['reps'] : [req.body['reps']];

    for (let i = 0; i < exerciseSetTypes.length; i++) {
      const setType = exerciseSetTypes[i];
      const weight = parseFloat(exerciseWeights[i]);
      const reps = parseInt(exerciseReps[i]);

      if (setType === 'warmupSet') {
        exercise.addWarmupSet(reps, weight);
      } else {
        exercise.addWorkingSet(reps, weight);
      }
    }

    return exercise;
  }

}