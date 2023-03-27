import { hostElement } from "../../../../app";
import { ChooseCard } from "../../../choose-card/ChooseCard";
import { Button } from "../objects/Button";
import { Frame } from "../objects/Frame";

export class ClickReturnChooseCardButton {
  constructor(button: Button, frame: Frame) {
    button.getReturnChooseCardButton.addEventListener("click", () => {
      frame.destroy();
      new ChooseCard(hostElement);
    });
  }
}
