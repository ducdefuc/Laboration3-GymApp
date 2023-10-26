class ExerciseHandler {

  #addSetButtonElement;
  #setTypeElement;
  #setWeightElement;
  #setRepsElement;

  constructor() {
    this.#addSetButtonElement = document.getElementById('addSetButton');
    this.#setTypeElement = document.getElementById('setType');
    this.#setWeightElement = document.getElementById('setWeight');
    this.#setRepsElement = document.getElementById('setReps');
    this.#addEventListeners();
  }

  #addEventListeners() {
    this.#addSetButtonElement.addEventListener('click', (event) => this.#handleAddSetClick(event));
  }

  #handleAddSetClick(event) {
    event.preventDefault();

    const setType = this.#setTypeElement.value;
    const weight = parseFloat(this.#setWeightElement.value);
    const reps = parseInt(this.#setRepsElement.value);

    if (this.#isValidInput(weight, reps)) {
      const setDiv = this.#createSetDiv(setType, weight, reps);
      this.#appendToTargetDiv(setType, setDiv);
    }
  }

  #isValidInput(weight, reps) {
    return !isNaN(weight) && weight >= 0 && !isNaN(reps) && reps >= 1;
  }

  #createSetDiv(setType, weight, reps) {
    const div = document.createElement('div');
    div.textContent = `${setType}: ${weight}kg: ${reps}reps`;

    div.appendChild(this.#createHiddenInput('setTypes', setType));
    div.appendChild(this.#createHiddenInput('weights', weight));
    div.appendChild(this.#createHiddenInput('reps', reps));

    return div;
  }

  #appendToTargetDiv(setType, setDiv) {
    const targetDivId = setType === 'warmupSet' ? 'warmupSets' : 'workingSets';
    const targetDiv = document.getElementById(targetDivId);
    targetDiv.appendChild(setDiv);
  }

  #createHiddenInput(name, value) {
    const input = document.createElement('input');
    input.type = 'hidden';
    input.name = name;
    input.value = value;
    return input;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new ExerciseHandler();
});
