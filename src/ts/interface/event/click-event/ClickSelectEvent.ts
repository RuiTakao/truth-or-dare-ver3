import { ClickEvent } from "./ClickEvent";

export interface ClickSelectEvent extends ClickEvent {
  target: NodeListOf<HTMLLIElement>;
  clickHandler(target: HTMLLIElement): void
}