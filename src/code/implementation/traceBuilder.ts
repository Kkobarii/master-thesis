export class DetailedTraceBuilder {
  private readonly array: Item[];
  private readonly steps: DetailedSortStep[] = [];

  paint(options: TracePaintOptions): void {
    if (options.compared) {
      options.compared.forEach(
        (i) => (this.array[i].highlightType = ItemHighlightType.Compare),
      );
    }
    // ...
  }

  record(step: Omit<DetailedSortStep, "array">): void {
    const snapshotArray = deepCopy(this.array);

    this.steps.push({
      array: snapshotArray,
      codePartId: step.codePartId,
      stepLabel: step.stepLabel,
      // ...
    });
  }

  build(): DetailedSortStep[] {
    return this.steps;
  }
}
