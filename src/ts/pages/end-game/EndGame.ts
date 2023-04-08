import { ClickReturnChooseCardButton } from "./component/event/ClickReturnChooseCardButton";
import { ClickReturnEnterNameButton } from "./component/event/ClickReturnEnterNameButton";
import { Button } from "./component/objects/Button";
import { Frame } from "./component/objects/Frame";
import { Message } from "./component/objects/Message";

export class EndGame {
  constructor(hostElement: HTMLDivElement) {
    const frame = new Frame(hostElement);
    const message = new Message(frame.getMessageFrame);
    const button = new Button(frame.getButtonFrame);
    const clickReturnChooseCardButton = new ClickReturnChooseCardButton(
      button.getReturnChooseCardButton,
      frame
    );
    const clickReturnEnterNameButton = new ClickReturnEnterNameButton(
      button.getReturnEnterNameButton,
      frame
    );

    frame.attach();
    message
      .attach()
      .then(() => button.attach())
      .then(() => {
        clickReturnChooseCardButton.onClick();
        clickReturnEnterNameButton.onClick();
      });
  }
}
