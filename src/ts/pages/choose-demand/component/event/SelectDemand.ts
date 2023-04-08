import { ClickSelectEvent } from "../../../../interface/event/click-event/ClickSelectEvent";
import { Button } from "../objects/Button";
import { Select } from "../objects/Select";

export class SelectDemand implements ClickSelectEvent {
  target: NodeListOf<HTMLLIElement>;
  private button: Button;
  constructor(select: Select, button: Button) {
    this.target = select.getSelect.querySelectorAll("li");
    this.button = button;
  }

  onClick = (): void =>
    this.target.forEach((target) =>
      target.addEventListener("click", this.clickHandler.bind(this, target))
    );

  clickHandler = (target: HTMLLIElement): void => {
    this.target.forEach((target) => {
      if (target.classList.contains("mark")) target.classList.remove("mark");
    });
    target.classList.add("mark");
    this.button.getButton.classList.remove("disable");
  }
}
