import { ClickButtonEvent } from "../../../../../interface/event/click-event/ClickButtonEvent";
import { secondUser } from "../../../../../strage/user";
import { ChooseCard } from "../../../../choose-card/ChooseCard";
import { Bubble } from "../../objects/Bubble";
import { Button } from "../../objects/Button";
import { Frame } from "../../objects/Frame";
import { Input } from "../../objects/Input";
import { ClickButton } from "./ClickButton";

export class LastClickButton extends ClickButton implements ClickButtonEvent {
  private button: Button;
  private bubble: Bubble;
  private input: Input;
  private frame: Frame;
  private targetEvent: () => void;

  constructor(
    button: Button,
    bubble: Bubble,
    input: Input,
    frame: Frame,
    hostElement: HTMLDivElement
  ) {
    super(button, hostElement)
    this.button = button;
    this.bubble = bubble;
    this.input = input;
    this.frame = frame;
    this.targetEvent = this.clickHandler.bind(this);
  }

  onClick = (): void => this.target.addEventListener("click", this.targetEvent);

  clickHandler = (): void => {
    if (this.input.getInput.value.length > 1) {
      secondUser.setName(this.input.getInput.value);
      this.target.removeEventListener("click", this.targetEvent);
      this.input.disable();
      this.button.disable();
      const promise: Promise<void> = new Promise((resolve) => {
        const fadeOut: Promise<void> = this.bubble
          .fadeOut()
          .then(() => this.input.slideOut())
          .then(() => this.button.fadeOut());
        setTimeout(() => resolve(fadeOut), 2000);
      });
      promise.then(() => {
        this.frame.destroy();
        new ChooseCard(this.hostElement);
      });
    }
  };
}
