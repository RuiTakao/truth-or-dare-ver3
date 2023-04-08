import { secondUser } from "../../../../strage/user";
import { MakeLayer } from "../../../make-layer/MakeLayer";
import { Juge } from "../../modules/Juge";
import { SetNumber } from "../../modules/SetNumber";
import { Bubble } from "../objects/Bubble";
import { CardList } from "../objects/CardList";
import { ClickCard } from "./ClickCard";

export class LastClickYesButton {
  constructor(
    bubble: Bubble,
    cardList: CardList,
    clickCard: ClickCard,
    hostElement: HTMLDivElement
  ) {
    bubble.getYesButton.addEventListener(
      "click",
      () => {
        if (cardList.getCardList.querySelectorAll(".mark").length === 1) {
          try {
            if (secondUser.getName !== null) {
              const secondUserName: string = secondUser.getName;
              const target = cardList.getCardList.querySelector(
                ".mark"
              ) as HTMLLIElement;

              secondUser.setChooseCard(target);
              cardList.addCheck(target, secondUserName);
              bubble.destroy();
              clickCard.removeConfigure();
              new SetNumber(cardList.getCardList);
              new Juge();
              cardList.turn().then(() => new MakeLayer(hostElement));
            } else throw new Error("名前が設定されていません");
          } catch (e) {
            console.error("エラー：", e);
          }
        }
      },
      {
        once: true,
      }
    );
  }
}
