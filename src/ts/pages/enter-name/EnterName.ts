import { ClickButton } from "./component/event/ClickButton";
import { InputName } from "./component/event/InputName";
import { Bubble } from "./component/objects/Bubble";
import { Button } from "./component/objects/Button";
import { Frame } from "./component/objects/Frame";
import { Input } from "./component/objects/Input";

export class EnterName {
  constructor(hostElement: HTMLDivElement) {
    const frame: Frame = new Frame(hostElement);
    const bubble: Bubble = new Bubble(frame.getBubbleFrame);
    const input: Input = new Input(frame.getInputFrame);
    const button: Button = new Button(frame.getButtonFrame);
    frame.attach();
    input
      .attach()
      .then(() => button.attach())
      .then(() => bubble.attach())
      .then(() => {
        new InputName(input, button);
        new ClickButton(button, bubble, input, frame, hostElement);
      });
  }
}
