import { Bubble } from "../objects/Bubble";
import { CardList } from "../objects/CardList";

export class ClickNoButton {
  constructor(bubble: Bubble, cardList: CardList) {
    bubble.getNoButton.addEventListener("click", () => {
      if (cardList.getCardList.querySelectorAll(".mark").length === 1) {
        cardList.removeMark();
        bubble.closeBubbleButton();
      }
    });
  }
}
