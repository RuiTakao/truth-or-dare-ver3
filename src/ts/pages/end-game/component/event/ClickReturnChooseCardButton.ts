import { hostElement } from "../../../../app";
import { ClickButtonEvent } from "../../../../interface/event/click-event/ClickButtonEvent";
import { ChooseCard } from "../../../choose-card/ChooseCard";
import { ClickButton } from "./ClickButton";

export class ClickReturnChooseCardButton
  extends ClickButton
  implements ClickButtonEvent
{
  returnPage = (): void => {
    new ChooseCard(hostElement);
  };
}
