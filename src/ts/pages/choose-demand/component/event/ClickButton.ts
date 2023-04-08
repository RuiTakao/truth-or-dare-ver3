import { ClickButtonEvent } from "../../../../interface/event/click-event/ClickButtonEvent";
import { demand } from "../../../../strage/Demand";
import { ConfirmDemand } from "../../../confirm-demand/ConfirmDemand";
import { Frame } from "../objects/Frame";
import { Select } from "../objects/Select";

export class ClickButton implements ClickButtonEvent {
  target: HTMLButtonElement;
  private select: Select;
  private frame: Frame;
  private hostElement: HTMLDivElement;
  private targetEvent: () => void;
  constructor(
    target: HTMLButtonElement,
    select: Select,
    frame: Frame,
    hostElement: HTMLDivElement
  ) {
    this.target = target;
    this.select = select;
    this.frame = frame;
    this.hostElement = hostElement;
    this.targetEvent = this.clickHandler.bind(this);
  }

  onClick = (): void => this.target.addEventListener("click", this.targetEvent);

  clickHandler = (): void =>
    this.select.getInput.forEach((target) => {
      if (target.checked) {
        this.target.removeEventListener("click", this.targetEvent);
        demand.setDemand(target.value);
        this.frame.getFrame.classList.add("fade-out");
        this.frame.getFrame.addEventListener("animationend", () => {
          this.frame.destroy();
          new ConfirmDemand(this.hostElement);
        });
      }
    });
}
