import { ClickEvent } from "./ClickEvent";

export interface ClickCardEvent extends ClickEvent {
  target: NodeListOf<HTMLLIElement>;
  clickHandler(target: HTMLLIElement): void
}
