import { ClickReturnChooseCardButton } from "./component/event/ClickReturnChooseCardButton";
import { ClickReturnEnterNameButton } from "./component/event/ClickReturnEnterNameButton";
import { Button } from "./component/objects/Button";
import { Frame } from "./component/objects/Frame";
import { Message } from "./component/objects/Message";

export class EndGame {
  constructor(hostElement: HTMLDivElement) {
    const frame: Frame = new Frame(hostElement);
    const message: Message = new Message(frame.getMessageFrame);
    const button: Button = new Button(frame.getButtonFrame);
    const clickReturnChooseCardButton: ClickReturnChooseCardButton =
      new ClickReturnChooseCardButton(button.getReturnChooseCardButton, frame);
    const clickReturnEnterNameButton: ClickReturnEnterNameButton =
      new ClickReturnEnterNameButton(button.getReturnEnterNameButton, frame);

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
