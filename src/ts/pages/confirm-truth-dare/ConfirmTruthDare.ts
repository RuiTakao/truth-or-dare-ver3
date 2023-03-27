import { ClickTruthButton } from "./component/event/ClickButton";
import { Button } from "./component/objects/Button";
import { Frame } from "./component/objects/Frame";
import { Message } from "./component/objects/Message";

export class ConfirmTruthDare {
  constructor(hostElement: HTMLDivElement) {
    const frame: Frame = new Frame();
    const message: Message = new Message(frame.getMessageFrame);
    const button: Button = new Button(frame.getButtonFrame);
    frame.attach();
    message
      .attach()
      .then(() => button.attach())
      .then(() => new ClickTruthButton(button, frame, hostElement));
  }
}
