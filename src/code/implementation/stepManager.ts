export class StepManager<T> {
  steps: T[];
  currentStepIndex: number;
  isPlaying: boolean;
  delayMs: number;
  private timer: Timer;

  play() {
    if (this.currentStepIndex >= this.steps.length - 1) {
      this.currentStepIndex = 0; // Restart, pokud je algoritmus již dokončen
    }
    this.isPlaying = true;
    this.timer.start(this.delayMs, this.tickStep.bind(this));
  }

  pause() {
    this.isPlaying = false;
    this.timer.stop();
  }

  private tickStep() {
    if (this.currentStepIndex < this.steps.length - 1) {
      this.currentStepIndex += 1;
    } else {
      this.pause(); // Bezpečné ukončení simulace
    }
  }
}
