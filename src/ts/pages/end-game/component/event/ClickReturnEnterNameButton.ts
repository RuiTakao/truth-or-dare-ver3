import { hostElement } from "../../../../app";
import { EnterName } from "../../../enter-name/EnterName";
import { Button } from "../objects/Button";
import { Frame } from "../objects/Frame";

export class ClickReturnEnterNameButton {
  constructor(button: Button, frame: Frame) {
    button.getReturnEnterNameButton.addEventListener("click", () => {
      frame.destroy();
      new EnterName(hostElement);
    });
  }
}
