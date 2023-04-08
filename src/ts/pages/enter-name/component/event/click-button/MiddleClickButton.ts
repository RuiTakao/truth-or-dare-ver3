import { ClickButtonEvent } from "../../../../../interface/event/click-event/ClickButtonEvent";
import { firstUser } from "../../../../../strage/user";
import { Bubble } from "../../objects/Bubble";
import { Button } from "../../objects/Button";
import { Frame } from "../../objects/Frame";
import { Input } from "../../objects/Input";
import { InputName } from "../InputName";
import { ClickButton } from "./ClickButton";
import { LastClickButton } from "./LastClickButton";

export class MiddleClickButton extends ClickButton implements ClickButtonEvent {
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
    super(button, hostElement);
    this.button = button;
    this.bubble = bubble;
    this.input = input;
    this.frame = frame;
    this.targetEvent = this.clickHandler.bind(this);
  }

  onClick = (): void => this.target.addEventListener("click", this.targetEvent);

  clickHandler = (): void => {
    if (this.input.getInput.value.length > 1) {
      const input: Input = new Input(this.frame.getInputFrame);
      firstUser.setName(this.input.getInput.value);
      this.button.disable();
      this.input.disable();
      this.target.removeEventListener("click", this.targetEvent);
      const inputName = new InputName(input, this.button);
      const clickButton = new LastClickButton(
        this.button,
        this.bubble,
        input,
        this.frame,
        this.hostElement
      );

      const promise: Promise<void> = new Promise((resolve) => {
        const change: Promise<void> = this.bubble
          .change()
          .then(() => this.input.slideOut())
          .then(() => input.slideIn());
        setTimeout(() => resolve(change));
      });

      promise.then(() => {
        inputName.onInput();
        clickButton.onClick();
      });
    }
  };
}
