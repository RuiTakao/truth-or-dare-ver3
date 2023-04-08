import { ClickButtonEvent } from "../../../../interface/event/click-event/ClickButtonEvent";
import { ClickButton } from "./ClickButton";

export class ClickTruthButton extends ClickButton implements ClickButtonEvent {
  truthDare = (): "truth" | "dare" => "truth";
}
