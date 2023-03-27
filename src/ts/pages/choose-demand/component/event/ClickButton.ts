import { demand } from "../../../../strage/Demand";
import { ConfirmDemand } from "../../../confirm-demand/ConfirmDemand";
import { Button } from "../objects/Button";
import { Frame } from "../objects/Frame";
import { Select } from "../objects/Select";

export class ClickButton {
  constructor(
    button: Button,
    select: Select,
    frame: Frame,
    hostElement: HTMLDivElement
  ) {
    select.getInput.forEach((target) => {
      button.getButton.addEventListener("click", () => {
        if (target.checked) {
          demand.setDemand(target.value);
          console.log(demand);
          frame.getFrame.classList.add("fade-out");
          frame.getFrame.addEventListener(
            "animationend",
            () => {
              frame.destroy();
              new ConfirmDemand(hostElement);
            },
            {
              once: true,
            }
          );
        }
      });
    });
  }
}
