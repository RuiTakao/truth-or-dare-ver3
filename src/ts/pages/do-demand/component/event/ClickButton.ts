import { EndGame } from "../../../end-game/EndGame";
import { Button } from "../objects/Button";
import { Frame } from "../objects/Frame";

export class ClickButton {
  constructor(button: Button, frame: Frame, hostElement: HTMLDivElement) {
    button.getButton.addEventListener(
      "click",
      () => {
        frame.destroy();
        new EndGame(hostElement);
      },
      { once: true }
    );
  }
}
