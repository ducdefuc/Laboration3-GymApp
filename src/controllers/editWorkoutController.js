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

  renderRemoveExercisePage(req, res) {
    const workout = this.#getWorkoutFromName(req.params.name);
    const exerciseName = req.params.exerciseName;
    const exercise = workout.exercises.find(exercise => exercise.name === exerciseName);
    res.render("removeExerciseView", { workout, exercise, gymLibrary: this.gymLibrary });
  }

  #renderPage(req, res, viewName) {
    const workout = this.#getWorkoutFromName(req.params.name);
    res.render(viewName, { workout, gymLibrary: this.gymLibrary });
  }

  #getWorkoutFromName(workoutName) {
    return this.gymLibrary.getWorkout(workoutName);
  }

  removeExercisePost(req, res) {
    const workoutName = req.params.name;
    const exerciseName = req.body.exerciseName;
    this.gymLibrary.removeExerciseFromWorkout(workoutName, exerciseName);
    this.#redirectToEditPage(res, workoutName);
  }

  addExerciseToWorkoutPost(req, res) {
    const workoutName = req.params.name;
    const exercise = this.#createExerciseFromRequest(req)
    this.gymLibrary.addExerciseToWorkout(workoutName, exercise);
    this.#redirectToEditPage(res, workoutName);
  }

  #redirectToEditPage(res, workoutName) {
    res.redirect(`/editWorkout/${workoutName}`);
  }

  #createExerciseFromRequest(req) {
    const exerciseName = req.body.exerciseName;
    const exercise = this.gymLibrary.createExercise(exerciseName);
    const sets = this.#extractSetsFromRequest(req);

    sets.forEach(set => {
      if (set.type === 'warmupSet') {
        exercise.addWarmupSet(set.reps, set.weight);
      } else {
        exercise.addWorkingSet(set.reps, set.weight);
      }
    });

    return exercise;
  }

  #extractSetsFromRequest(req) {
    // Makes sure that the request body is an array, to handle single and multiple sets.
    const setTypes = Array.isArray(req.body['setTypes']) ? req.body['setTypes'] : [req.body['setTypes']];
    const weights = Array.isArray(req.body['weights']) ? req.body['weights'] : [req.body['weights']];
    const repsList = Array.isArray(req.body['reps']) ? req.body['reps'] : [req.body['reps']];

    const sets = [];
    for (let i = 0; i < setTypes.length; i++) {
      sets.push({
        type: setTypes[i],
        weight: parseFloat(weights[i]),
        reps: parseInt(repsList[i])
      });
    }

    return sets;
  }

}