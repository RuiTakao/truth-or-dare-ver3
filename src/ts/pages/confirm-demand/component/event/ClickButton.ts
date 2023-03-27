import { DoDemand } from "../../../do-demand/DoDemand";
import { Button } from "../objects/Button";
import { Frame } from "../objects/Frame";

export class ClickButton {
  constructor(button: Button, frame: Frame, hostElement: HTMLDivElement) {
    const target: HTMLButtonElement = button.getButton;

    target.addEventListener("click", () => {
      frame.getFrame.classList.add("fade-out");
      frame.getFrame.addEventListener(
        "animationend",
        () => {
          frame.destroy();
          new DoDemand(hostElement);
        },
        { once: true }
      );
    });
  }
}
