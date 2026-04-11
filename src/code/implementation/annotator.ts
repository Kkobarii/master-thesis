// 1. Napojení vrstvy na vykreslovací cyklus knihovny vis-network
this.network.on("afterDrawing", () => {
  this.overlayCanvas.width = this.container.clientWidth;
  this.overlayCanvas.height = this.container.clientHeight;
  this.annotator.redrawCanvas();
});

// 2. Zjednodušená definice obsluhy vlastního plátna
export class DataStructureAnnotator {
  private ctx: CanvasRenderingContext2D;
  private shown: boolean = true;

  // ... pole registrovaných anotací

  public redrawCanvas(): void {
    if (!this.shown) return;

    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);

    this.idAnnotations.forEach((a) => a.draw(this.ctx));
    this.legsAnnotations.forEach((a) => a.draw(this.ctx));
    this.infoAnnotations.forEach((a) => a.draw(this.ctx));
    this.valueAnnotations.forEach((a) => a.draw(this.ctx));
  }
}
