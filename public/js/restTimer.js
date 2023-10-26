import GymLibrary from '/L2-GymLibrary/GymLibrary.js';

class RestTimer {	

	constructor() {
		this.gymLibrary = new GymLibrary();
		this.timerDuration = 180;
		this.restTimerDisplayMinutes = document.getElementById('restMinutes');
		this.restTimerDisplaySeconds = document.getElementById('restSeconds');
		this.timerControl = document.getElementById('timerControl');
		this.timerReset = document.getElementById('timerReset');
		this.#updateDisplay(this.timerDuration);

		this.#addEventListeners();
	}

	#addEventListeners() {
		this.timerControl.addEventListener('click', () => this.#toggleTimer());
		this.timerReset.addEventListener('click', () => this.#resetTimer())
	}

	#updateDisplay(seconds) {
		const minutes = Math.floor(seconds / 60);
		const remainingSeconds = seconds % 60;
		this.restTimerDisplayMinutes.textContent = this.#formatTime(minutes);
		this.restTimerDisplaySeconds.textContent = this.#formatTime(remainingSeconds);
	}

	#formatTime(number) {
		if (number < 10) {
			return '0' + number;
		}
		return number.toString();
	}

	#toggleTimer() {
		if (this.gymLibrary.isRestTimerRunning()) {
			this.gymLibrary.pauseRestTimer();
			this.timerControl.textContent = "Resume";
		} else {
			if (this.timerControl.textContent === "Resume") {
				this.gymLibrary.resumeRestTimer();
				this.timerControl.textContent = "Pause";
			} else {
				const onTickCallback = (remainingSeconds) => {
					this.#updateDisplay(remainingSeconds);
				};
				const onExpireCallback = () => {
					alert("Rest time over! Get back to work!");
					this.#updateDisplay(this.timerDuration);
					this.timerControl.textContent = "Start";
				};
				this.gymLibrary.startRestTimer(this.timerDuration, onExpireCallback, onTickCallback);
				this.timerControl.textContent = "Pause";
			}
		}
	}

	#resetTimer() {
		this.gymLibrary.resetRestTimer();
		this.timerControl.textContent = "Start";
		this.timerDuration = 180;
		this.#updateDisplay(this.timerDuration);
	}

}

document.addEventListener('DOMContentLoaded', () => {
	new RestTimer();
});
