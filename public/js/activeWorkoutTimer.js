class ActiveWorkoutTimer {

  #time;
  #hoursSpanElement;
  #minutesSpanElement;
  #secondsSpanElement;
  #restTimerButton;

  constructor() {
    this.#time = { hours: 0, minutes: 0, seconds: 0 };
    this.#hoursSpanElement = document.getElementById('hours');
    this.#minutesSpanElement = document.getElementById('minutes');
    this.#secondsSpanElement = document.getElementById('seconds');
    this.#restTimerButton = document.getElementById('restTimerButton');
    this.#startTimer();
  }

  #startTimer() {
    setInterval(() => {
      this.#updateTimeOnOverlap();
      this.#updateDisplay();
    }, 1000);
  }

  #updateTimeOnOverlap() {
    this.#time.seconds++;
    if (this.#time.seconds === 60) {
      this.#time.seconds = 0;
      this.#time.minutes++;
      if (this.#time.minutes === 60) {
        this.#time.minutes = 0;
        this.#time.hours++;
      }
    }
  }

  #updateDisplay() {
    this.#hoursSpanElement.textContent = this.#formatTime(this.#time.hours);
    this.#minutesSpanElement.textContent = this.#formatTime(this.#time.minutes);
    this.#secondsSpanElement.textContent = this.#formatTime(this.#time.seconds);
  }

  #formatTime(number) {
    if (number < 10) {
      return '0' + number;
    }
    return number.toString();
  }
}

document.addEventListener('DOMContentLoaded', function () {
  new ActiveWorkoutTimer();
});