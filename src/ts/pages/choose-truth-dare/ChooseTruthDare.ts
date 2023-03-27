import { ClickDareButton } from "./component/event/ClickDareButton";
import { ClickTruthButton } from "./component/event/ClickTruthButton";
import { Button } from "./component/objects/Button";
import { Frame } from "./component/objects/Frame";
import { Message } from "./component/objects/Message";

export class ChooseTruthDare {
  constructor(hostElement: HTMLDivElement) {
    const frame = new Frame(hostElement);
    const message = new Message(frame.getMessageFrame);
    const button = new Button(frame.getButtonFrame);
    frame.attach();
    message
      .attach()
      .then(() => button.attach())
      .then(() => {
        new ClickTruthButton(button.getTruthButton, frame, hostElement);
        new ClickDareButton(button.getDarebutton, frame, hostElement);
      });
  }
}
