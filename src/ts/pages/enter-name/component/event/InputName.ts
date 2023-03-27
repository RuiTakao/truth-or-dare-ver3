import { Button } from "../objects/Button";
import { Input } from "../objects/Input";

export class InputName {
  constructor(input: Input, button: Button) {
    input.getInput.addEventListener("input", () => {
      if (input.getInput.value.length > 1) {
        button.enable();
      } else {
        button.disable();
      }
    });
  }
}
