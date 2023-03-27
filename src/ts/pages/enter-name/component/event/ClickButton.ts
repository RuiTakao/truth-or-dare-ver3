import { firstUser } from "../../../../strage/user";
import { Bubble } from "../objects/Bubble";
import { Button } from "../objects/Button";
import { Frame } from "../objects/Frame";
import { Input } from "../objects/Input";
import { InputName } from "./InputName";
import { LastClickButton } from "./LastClickButton";

export class ClickButton {
  constructor(
    button: Button,
    bubble: Bubble,
    beforeInput: Input,
    frame: Frame,
    hostElement: HTMLDivElement
  ) {
    const input: Input = new Input(frame.getInputFrame);

    const clickHandler: () => void = () => {
      if (beforeInput.getInput.value.length > 1) {
        firstUser.setName(beforeInput.getInput.value)
        button.disable();
        beforeInput.disable();
        button.getButton.removeEventListener("click", clickHandler);

        const promise: Promise<void> = new Promise((resolve) => {
          const change: Promise<void> = bubble
            .change()
            .then(() => beforeInput.slideOut())
            .then(() => input.slideIn());
          setTimeout(() => resolve(change));
        });

        promise.then(() => {
          new InputName(input, button);
          new LastClickButton(button, bubble, input, frame, hostElement);
        });
      }
    };

    button.getButton.addEventListener("click", clickHandler);
  }
}
