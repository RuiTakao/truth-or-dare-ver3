import { ClickButtonEvent } from "../../../../../interface/ClickButtonEvent";
import { Bubble } from "../../objects/Bubble";

export abstract class ClickYesButton implements ClickButtonEvent {
  target: HTMLButtonElement;
  protected hostElement: HTMLDivElement;
  constructor(bubble: Bubble, hostElement: HTMLDivElement) {
    this.target = bubble.getYesButton;
    this.hostElement = hostElement;
  }

  onClick = (): void =>
    this.target.addEventListener(
      "click",
      this.clickHandler.bind(this),
      { once: true }
    );

  abstract clickHandler(): void;
}
