import { ClickButtonEvent } from "../../../../../interface/event/click-event/ClickButtonEvent";
import { Button } from "../../objects/Button";

export abstract class ClickButton implements ClickButtonEvent {
    target: HTMLButtonElement
    protected hostElement: HTMLDivElement;

    constructor(button: Button, hostElement: HTMLDivElement) {
        this.target = button.getButton;
        this.hostElement = hostElement;
    }

    abstract onClick(): void

    abstract clickHandler(): void
}