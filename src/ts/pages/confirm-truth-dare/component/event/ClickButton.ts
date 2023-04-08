import { ClickButtonEvent } from "../../../../interface/event/click-event/ClickButtonEvent";
import { ChooseDemand } from "../../../choose-demand/ChooseDemand";
import { Frame } from "../objects/Frame";

export class ClickButton implements ClickButtonEvent {
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
    this.frame.getFrame.classList.add("fade-out");
    this.frame.getFrame.addEventListener(
      "animationend",
      () => {
        this.frame.destroy();
        new ChooseDemand(this.hostElement);
      },
      { once: true }
    );
  };
}
