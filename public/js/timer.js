class Timer {
  constructor() {
    this.hours = 0;
    this.minutes = 0;
    this.seconds = 0;
    this.hoursSpan = document.getElementById('hours');
    this.minutesSpan = document.getElementById('minutes');
    this.secondsSpan = document.getElementById('seconds');
    this.#startTimer();
  }

  #updateDisplay() {
    this.hoursSpan.textContent = this.#formatTime(this.hours);
    this.minutesSpan.textContent = this.#formatTime(this.minutes);
    this.secondsSpan.textContent = this.#formatTime(this.seconds);
  }

  #formatTime(number) {
    if (number < 10) {
      return '0' + number;
    }
    return number.toString();
  }

  #startTimer() {
    setInterval(() => {
      this.seconds++;
      if (this.seconds === 60) {
        this.seconds = 0;
        this.minutes++;
        if (this.minutes === 60) {
          this.minutes = 0;
          this.hours++;
        }
      }
      this.#updateDisplay();
    }, 1000);
  }
}

document.addEventListener('DOMContentLoaded', function () {
  new Timer();
});