import { ClickButtonEvent } from "../../../../interface/event/click-event/ClickButtonEvent";
import { ClickButton } from "./ClickButton";

export class ClickDareButton extends ClickButton implements ClickButtonEvent {
  truthDare = (): "truth" | "dare" => "dare";
}
