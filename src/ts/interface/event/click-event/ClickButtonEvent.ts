import { ClickEvent } from "./ClickEvent";

export interface ClickButtonEvent extends ClickEvent{
  target: HTMLButtonElement;
  clickHandler(): void
}
