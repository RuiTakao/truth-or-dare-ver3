import { ClickButtonEvent } from "../../../../../interface/event/click-event/ClickButtonEvent";
import { secondUser } from "../../../../../strage/user";
import { MakeLayer } from "../../../../make-layer/MakeLayer";
import { Juge } from "../../../modules/Juge";
import { SetNumber } from "../../../modules/SetNumber";
import { Bubble } from "../../objects/Bubble";
import { CardList } from "../../objects/CardList";
import { ClickCard } from "../ClickCard";
import { ClickYesButton } from "./ClickYesButton";

export class LastClickYesButton extends ClickYesButton implements ClickButtonEvent {
  private bubble: Bubble
  private cardList: CardList;
  private clickCard: ClickCard;
  constructor(
    bubble: Bubble,
    cardList: CardList,
    clickCard: ClickCard,
    hostElement: HTMLDivElement
  ) {
    super(bubble, hostElement);
    this.bubble = bubble
    this.cardList = cardList;
    this.clickCard = clickCard;
  }

  clickHandler = (): void => {
    if (this.cardList.getCardList.querySelectorAll(".mark").length === 1) {
      try {
        if (secondUser.getName !== null) {
          const secondUserName: string = secondUser.getName;
          const target: HTMLLIElement =
            this.cardList.getCardList.querySelector(".mark")!;

          secondUser.setChooseCard(target);
          this.cardList.addCheck(target, secondUserName);
          this.bubble.destroy();
          this.clickCard.removeConfigure();
          new SetNumber(this.cardList.getCardList);
          new Juge();
          this.cardList.turn().then(() => new MakeLayer(this.hostElement));
        } else throw new Error("名前が設定されていません");
      } catch (e) {
        console.error("エラー：", e);
      }
    }
  };
}
