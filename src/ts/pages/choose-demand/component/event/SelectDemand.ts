import { Button } from "../objects/Button";
import { Select } from "../objects/Select";

export class SelectDemand {
  constructor(select: Select, button: Button) {
    const targetSelect: NodeListOf<HTMLLIElement> =
      select.getSelect.querySelectorAll("li");

    targetSelect.forEach((target) => {
      target.addEventListener("click", () => {
        targetSelect.forEach((target) => {
          if (target.classList.contains("mark")) {
            target.classList.remove("mark");
          }
        });
        target.classList.add("mark");
        button.getButton.classList.remove("disable");
      });
    });
  }
}
