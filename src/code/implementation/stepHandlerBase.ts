export abstract class StepHandlerBase {
  abstract stepSetup(
    currentStep: StepData,
    animator: DataStructureAnimator,
    annotator: DataStructureAnnotator,
    isForward: boolean,
  ): Promise<void> | void;

  abstract stepCleanup(
    currentStep: StepData,
    animator: DataStructureAnimator,
    annotator: DataStructureAnnotator,
    isForward: boolean,
  ): Promise<void> | void;

  abstract stepRoute(
    currentStep: StepData,
    animator: DataStructureAnimator,
    annotator: DataStructureAnnotator,
    operationManager: OperationManager,
    isForward?: boolean,
  ): Promise<void> | void;
}
