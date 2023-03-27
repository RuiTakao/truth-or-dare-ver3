import { ClickButton } from "./component/event/ClickButton";
import { SelectDemand } from "./component/event/SelectDemand";
import { Button } from "./component/objects/Button";
import { Frame } from "./component/objects/Frame";
import { Message } from "./component/objects/Message";
import { Select } from "./component/objects/Select";

export class ChooseDemand {
  constructor(hostElement: HTMLDivElement) {
    const frame: Frame = new Frame(hostElement);
    const message: Message = new Message(frame.getMessageFrame);
    const select: Select = new Select(frame.getSelectFrame);
    const button: Button = new Button(frame.getButtonFrame);
    frame.attach();
    message
      .attach()
      .then(() => select.attach())
      .then(() => button.attach())
      .then(() => {
        new SelectDemand(select, button);
        new ClickButton(button, select, frame, hostElement);
      });
  }
}
