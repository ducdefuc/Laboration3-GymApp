import GymLibrary from '/L2-GymLibrary/GymLibrary.js';

class RestTimer {

  #gymLibrary;
  #timerDurationInSeconds;
  #minutesDisplayElement;
  #secondsDisplayElement;
  #restTimerActionButton;
  #restTimerResetButton;

  constructor() {
    this.#gymLibrary = new GymLibrary();
    this.#timerDurationInSeconds = 180;
    this.#minutesDisplayElement = document.getElementById('restMinutes');
    this.#secondsDisplayElement = document.getElementById('restSeconds');
    this.#restTimerActionButton = document.getElementById('restTimerActionButton');
    this.#restTimerResetButton = document.getElementById('restTimerResetButton');

    this.#updateRestTimerDisplay(this.#timerDurationInSeconds);
    this.#addEventListeners();
  }

  #addEventListeners() {
    this.#restTimerActionButton.addEventListener('click', () => this.#toggleRestTimer());
    this.#restTimerResetButton.addEventListener('click', () => this.#resetRestTimer())
  }

  #updateRestTimerDisplay(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    this.#minutesDisplayElement.textContent = this.#formatTime(minutes);
    this.#secondsDisplayElement.textContent = this.#formatTime(remainingSeconds);
  }

  #formatTime(number) {
    if (number < 10) {
      return '0' + number;
    }
    return number.toString();
  }

  #toggleRestTimer() {
    if (this.#gymLibrary.isRestTimerRunning()) {
      this.#pauseRestTimer();
    } else {
      this.#resumeOrStartRestTimer();
    }
  }

  #pauseRestTimer() {
    this.#gymLibrary.pauseRestTimer();
    this.#restTimerActionButton.textContent = "Resume";
  }

  #resumeOrStartRestTimer() {
    if (this.#restTimerActionButton.textContent === "Resume") {
      this.#resumeTimer();
    } else {
      this.#startTimer();
    }
  }

  #resumeTimer() {
    this.#gymLibrary.resumeRestTimer();
    this.#restTimerActionButton.textContent = "Pause";
  }

  #startTimer() {
    const onTickCallback = (remainingSeconds) => {
      this.#updateRestTimerDisplay(remainingSeconds);
    };
    const onExpireCallback = () => {
      alert("Rest time over! Get back to work!");
      this.#updateRestTimerDisplay(this.#timerDurationInSeconds);
      this.#restTimerActionButton.textContent = "Start";
    };
    this.#gymLibrary.startRestTimer(this.#timerDurationInSeconds, onExpireCallback, onTickCallback);
    this.#restTimerActionButton.textContent = "Pause";
  }

  #resetRestTimer() {
    this.#gymLibrary.resetRestTimer();
    this.#restTimerActionButton.textContent = "Start";
    this.#timerDurationInSeconds = 180;
    this.#updateRestTimerDisplay(this.#timerDurationInSeconds);
  }

}

document.addEventListener('DOMContentLoaded', () => {
  new RestTimer();
});
