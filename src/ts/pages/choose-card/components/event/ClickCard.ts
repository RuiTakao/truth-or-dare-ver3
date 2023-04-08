import { ClickCardEvent } from "../../../../interface/event/click-event/ClickCardEvent";
import { Bubble } from "../objects/Bubble";
import { CardList } from "../objects/CardList";

export class ClickCard implements ClickCardEvent {
  target: NodeListOf<HTMLLIElement>;
  private targetEvent: (() => void)[];
  private cardList: CardList;
  private bubble: Bubble;

  constructor(cardList: CardList, bubble: Bubble) {
    this.target = cardList.getCardList.querySelectorAll("li");
    this.targetEvent = this.clickHandlerList();
    this.cardList = cardList;
    this.bubble = bubble;
  }

  onClick = (): void => {
    for (let i = 0; i < this.target.length; i++)
      this.target[i].addEventListener("click", this.targetEvent[i]);
  };

  clickHandler = (target: HTMLLIElement): void => {
    if (
      !target.classList.contains("mark") &&
      !target.classList.contains("check")
    ) {
      this.cardList.addMark(target);
      this.bubble.openBubbleButton();
    }
  };

  removeConfigure = (): void => {
    for (let i = 0; i < this.target.length; i++)
      this.target[i].removeEventListener("click", this.targetEvent[i]);
  };

  private clickHandlerList = (): (() => void)[] => {
    const array: (() => void)[] = [];
    for (let i = 0; i < this.target.length; i++)
      array.push(this.clickHandler.bind(this, this.target[i]));
    return array;
  };
}
