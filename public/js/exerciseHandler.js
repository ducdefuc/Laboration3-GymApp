class ExerciseHandler {
  constructor() {
    this.addSetButton = document.getElementById('addSetButton');
    this.setTypeElement = document.getElementById('setType');
    this.setWeightElement = document.getElementById('setWeight');
    this.setRepsElement = document.getElementById('setReps');
    this.#addEventListeners();
  }

  #addEventListeners() {
    this.addSetButton.addEventListener('click', (event) => this.#addSetToExercise(event));
  }

  #createHiddenInput(name, value) {
    const input = document.createElement('input');
    input.type = 'hidden';
    input.name = name;
    input.value = value;
    return input;
  }

  #addSetToExercise(event) {
    event.preventDefault();

    const setType = this.setTypeElement.value;
    const weight = parseFloat(this.setWeightElement.value);
    const reps = parseInt(this.setRepsElement.value);

    const div = document.createElement('div');
    if (isNaN(weight) || weight < 0 || isNaN(reps) || reps < 1) {
      return;
    } else {
      div.textContent = `${setType}: ${weight}kg: ${reps}reps`;
    }

    div.appendChild(this.#createHiddenInput('setTypes', setType));
    div.appendChild(this.#createHiddenInput('weights', weight));
    div.appendChild(this.#createHiddenInput('reps', reps));

    const targetDiv = setType === 'warmupSet' ? 'warmupSets' : 'workingSets';
    document.getElementById(targetDiv).appendChild(div);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new ExerciseHandler();
});