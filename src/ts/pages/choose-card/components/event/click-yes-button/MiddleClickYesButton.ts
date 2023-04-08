import { ClickButtonEvent } from "../../../../../interface/event/click-event/ClickButtonEvent";
import { firstUser, secondUser } from "../../../../../strage/user";
import { Announce } from "../../objects/Announce";
import { Bubble } from "../../objects/Bubble";
import { CardList } from "../../objects/CardList";
import { Frame } from "../../objects/Frame";
import { ClickCard } from "../ClickCard";
import { ClickNoButton } from "../ClickNoButton";
import { ClickYesButton } from "./ClickYesButton";
import { LastClickYesButton } from "./LastClickYesButton";

export class MiddleClickYesButton
  extends ClickYesButton
  implements ClickButtonEvent
{
  private bubble: Bubble;
  private cardList: CardList;
  private clickCard: ClickCard;
  private frame: Frame;
  constructor(
    bubble: Bubble,
    cardList: CardList,
    clickCard: ClickCard,
    frame: Frame,
    hostElement: HTMLDivElement
  ) {
    super(bubble, hostElement);
    this.bubble = bubble;
    this.cardList = cardList;
    this.clickCard = clickCard;
    this.frame = frame;
  }

  clickHandler = (): void => {
    if (this.cardList.getCardList.querySelectorAll(".mark").length === 1) {
      try {
        if (firstUser.getName !== null && secondUser.getName !== null) {
          const firstUserName: string = firstUser.getName;
          const secondUserName: string = secondUser.getName;
          const target: HTMLLIElement = this.cardList.getCardList.querySelector(
            ".mark"
          ) as HTMLLIElement;

          firstUser.setChooseCard(target);
          this.cardList.addCheck(target, firstUserName);
          this.cardList.disable();
          this.bubble.destroy();
          this.clickCard.removeConfigure();
          const bubble = new Bubble(this.frame.getBubbleFrame, secondUserName);
          const announce = new Announce(this.frame.getFrame, secondUserName);
          const clickCard = new ClickCard(this.cardList, bubble);
          const clickNoButton = new ClickNoButton(bubble, this.cardList);
          const clickYesButton = new LastClickYesButton(
            bubble,
            this.cardList,
            clickCard,
            this.hostElement
          );

          announce
            .attach()
            .then(() => bubble.attach())
            .then(() => {
              this.cardList.enable();
              clickCard.onClick();
              clickNoButton.onClick();
              clickYesButton.onClick();
            });
        } else throw new Error("名前が設定されていません");
      } catch (e) {
        console.error("エラー:", e);
      }
    }
  };
}
