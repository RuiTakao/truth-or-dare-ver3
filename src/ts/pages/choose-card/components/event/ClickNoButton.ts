import { ClickButtonEvent } from "../../../../interface/event/click-event/ClickButtonEvent";
import { Bubble } from "../objects/Bubble";
import { CardList } from "../objects/CardList";

export class ClickNoButton implements ClickButtonEvent {
  target: HTMLButtonElement;
  private bubble: Bubble;
  private cardList: CardList;
  constructor(bubble: Bubble, cardList: CardList) {
    this.target = bubble.getNoButton;
    this.bubble = bubble;
    this.cardList = cardList;
  }

  onClick = (): void =>
    this.target.addEventListener("click", this.clickHandler.bind(this));

  clickHandler = (): void => {
    if (this.cardList.getCardList.querySelectorAll(".mark").length === 1) {
      this.cardList.removeMark();
      this.bubble.closeBubbleButton();
    }
  };
}
