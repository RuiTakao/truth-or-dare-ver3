import { ClickDareButton } from "./component/event/ClickDareButton";
import { ClickTruthButton } from "./component/event/ClickTruthButton";
import { Button } from "./component/objects/Button";
import { Frame } from "./component/objects/Frame";
import { Message } from "./component/objects/Message";

export class ChooseTruthDare {
  constructor(hostElement: HTMLDivElement) {
    const frame: Frame = new Frame(hostElement);
    const message: Message = new Message(frame.getMessageFrame);
    const button: Button = new Button(frame.getButtonFrame);
    const clickTruthButton: ClickTruthButton = new ClickTruthButton(
      button.getTruthButton,
      frame,
      hostElement
    );
    const clickDareButton: ClickDareButton = new ClickDareButton(
      button.getDarebutton,
      frame,
      hostElement
    );

    frame.attach();
    message
      .attach()
      .then(() => button.attach())
      .then(() => {
        clickTruthButton.onClick();
        clickDareButton.onClick();
      });
  }
}
