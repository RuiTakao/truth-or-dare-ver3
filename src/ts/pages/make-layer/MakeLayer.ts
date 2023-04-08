import { ChooseTruthDare } from "../choose-truth-dare/ChooseTruthDare";

export class MakeLayer {
  constructor(hostElement: HTMLDivElement) {
    const layer: HTMLDivElement = document.createElement("div");

    new Promise((resolve) => {
      layer.id = "truth-or-dare";
      layer.className = "cover-layer";
      layer.classList.add("hidden");

      hostElement.appendChild(layer);

      const fadeIn: void = layer.classList.add("fade-in");
      layer.addEventListener(
        "animationend",
        () => {
          layer.classList.remove("hidden");
          layer.classList.remove("fade-in");
          resolve(fadeIn);
        },
        { once: true }
      );
    }).then(() => new ChooseTruthDare(layer));
  }
}
