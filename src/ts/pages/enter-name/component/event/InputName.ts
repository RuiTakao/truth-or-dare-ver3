import { InputEvent } from "../../../../interface/event/InputEvent";
import { Button } from "../objects/Button";
import { Input } from "../objects/Input";

export class InputName implements InputEvent {
  target: HTMLInputElement;
  private button: Button;
  constructor(input: Input, button: Button) {
    this.target = input.getInput;
    this.button = button;
  }

  onInput = (): void =>
    this.target.addEventListener("input", this.inputHandler.bind(this));

  inputHandler = (): void => {
    if (this.target.value.length > 1) this.button.enable();
    else this.button.disable();
  };
}
