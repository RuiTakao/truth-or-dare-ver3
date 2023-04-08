import { hostElement } from "../../../../app";
import { ClickButtonEvent } from "../../../../interface/event/click-event/ClickButtonEvent";
import { EnterName } from "../../../enter-name/EnterName";
import { ClickButton } from "./ClickButton";

export class ClickReturnEnterNameButton
  extends ClickButton
  implements ClickButtonEvent
{
  returnPage = (): void => {
    new EnterName(hostElement);
  };
}
