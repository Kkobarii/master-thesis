export class OperationManager {
  // ... stavové proměnné (currentOperation, currentStep, operations) ...

  public next(): void {
    if (!this.canDoNext()) return;

    if (this.showSteps) {
      // Mikro-úroveň: Posun po jednotlivých atomech operace
      if (this.currentStep < this.operations[this.currentOperation].steps.length - 1) {
        this.incrementCurrentStep(); // Interně emituje CurrentStepChanged
      } else if (this.currentOperation < this.operations.length - 1) {
        this.incrementCurrentOperation(); // Interně emituje CurrentOperationChanged
      }
    } else {
      // Makro-úroveň: Plynulý posun po celých operacích
      if (this.currentOperation < this.operations.length - 1) {
        this.incrementCurrentOperation();
      }
    }
  }
}
