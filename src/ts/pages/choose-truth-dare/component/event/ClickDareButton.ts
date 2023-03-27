import { truthDare } from "../../../../strage/truthDare";
import { ConfirmTruthDare } from "../../../confirm-truth-dare/ConfirmTruthDare";
import { Frame } from "../objects/Frame";

export class ClickDareButton {
  constructor(
    target: HTMLButtonElement,
    frame: Frame,
    hostElement: HTMLDivElement
  ) {
    target.addEventListener("click", () => {
      truthDare.setChooseContent("dare");
      frame.getFrame.classList.add("fade-out");
      frame.getFrame.addEventListener("animationend", () => {
        frame.destroy();
        new ConfirmTruthDare(hostElement);
      });
    });
  }
}
