import { ClickButton } from "./component/event/ClickButton";
import { Button } from "./component/objects/Button";
import { Frame } from "./component/objects/Frame";
import { Message } from "./component/objects/Message";

export class ConfirmDemand {
  constructor(hostElement: HTMLDivElement) {
    const frame: Frame = new Frame(hostElement);
    const message: Message = new Message(frame.getMessageFrame);
    const button: Button = new Button(frame.getButtonFrame);
    const clickButton = new ClickButton(button.getButton, frame, hostElement);

    frame.attach();
    message
      .attach()
      .then(() => button.attach())
      .then(() => clickButton.onClick());
  }
}
