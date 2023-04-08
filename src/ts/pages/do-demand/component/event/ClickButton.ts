import { ClickButtonEvent } from "../../../../interface/event/click-event/ClickButtonEvent";
import { EndGame } from "../../../end-game/EndGame";
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
    this.frame.destroy();
    new EndGame(this.hostElement);
  };
}
