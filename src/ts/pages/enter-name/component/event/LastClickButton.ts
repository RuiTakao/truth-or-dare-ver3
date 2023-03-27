import { secondUser } from "../../../../strage/user";
import { ChooseCard } from "../../../choose-card/ChooseCard";
import { Bubble } from "../objects/Bubble";
import { Button } from "../objects/Button";
import { Frame } from "../objects/Frame";
import { Input } from "../objects/Input";

export class LastClickButton {
  constructor(
    button: Button,
    bubble: Bubble,
    input: Input,
    frame: Frame,
    hostElement: HTMLDivElement
  ) {
    const clickHandler: () => void = () => {
      if (input.getInput.value.length > 1) {
        secondUser.setName(input.getInput.value);
        button.getButton.removeEventListener("click", clickHandler);
        input.disable();
        button.disable();
        const promise: Promise<void> = new Promise((resolve) => {
          const fadeOut: Promise<void> = bubble
            .fadeOut()
            .then(() => input.slideOut())
            .then(() => button.fadeOut());
          setTimeout(() => resolve(fadeOut), 2000);
        });
        promise.then(() => {
          frame.destroy();
          new ChooseCard(hostElement);
        });
      }
    };

    button.getButton.addEventListener("click", clickHandler);
  }
}
