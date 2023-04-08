import { ClickButtonEvent } from "../../../../interface/event/click-event/ClickButtonEvent";
import { truthDare } from "../../../../strage/truthDare";
import { ConfirmTruthDare } from "../../../confirm-truth-dare/ConfirmTruthDare";
import { Frame } from "../objects/Frame";

export abstract class ClickButton implements ClickButtonEvent {
  target: HTMLButtonElement;
  private frame: Frame;
  private hostElement: HTMLDivElement;
  constructor(
    target: HTMLButtonElement,
    frame: Frame,
    hostElement: HTMLDivElement
  ) {
    this.target = target;
    this.frame = frame;
    this.hostElement = hostElement;
  }

  onClick = (): void =>
    this.target.addEventListener("click", this.clickHandler.bind(this), {
      once: true,
    });

  clickHandler = (): void => {
    truthDare.setChooseContent(this.truthDare());
    this.frame.getFrame.classList.add("fade-out");
    this.frame.getFrame.addEventListener("animationend", () => {
      this.frame.destroy();
      new ConfirmTruthDare(this.hostElement);
    });
  };

  abstract truthDare(): "truth" | "dare";
}
