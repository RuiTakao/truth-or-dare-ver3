import { firstUser, secondUser } from "../../../../strage/user";
import { Announce } from "../objects/Announce";
import { Bubble } from "../objects/Bubble";
import { CardList } from "../objects/CardList";
import { Frame } from "../objects/Frame";
import { ClickCard } from "./ClickCard";
import { ClickNoButton } from "./ClickNoButton";
import { LastClickYesButton } from "./LastClickYesButton";

export class ClickYesButton {
  constructor(
    beforeBubble: Bubble,
    cardList: CardList,
    clickCard: ClickCard,
    frame: Frame,
    hostElement: HTMLDivElement
  ) {
    beforeBubble.getYesButton.addEventListener(
      "click",
      () => {
        if (cardList.getCardList.querySelectorAll(".mark").length === 1) {
          try {
            if (firstUser.getName !== null && secondUser.getName !== null) {
              const firstUserName: string = firstUser.getName;
              const secondUserName: string = secondUser.getName;
              const target: HTMLLIElement = cardList.getCardList.querySelector(
                ".mark"
              ) as HTMLLIElement;

              firstUser.setChooseCard(target);
              cardList.addCheck(target, firstUserName);
              cardList.disable();
              beforeBubble.destroy();
              clickCard.removeConfigure();
              const bubble = new Bubble(frame.getBubbleFrame);
              const announce = new Announce(frame.getFrame, secondUserName);

              announce
                .attach()
                .then(() => bubble.attach(secondUserName))
                .then(() => {
                  cardList.enable();
                  const clickCard = new ClickCard(cardList, bubble);
                  new ClickNoButton(bubble, cardList);
                  new LastClickYesButton(
                    bubble,
                    cardList,
                    clickCard,
                    hostElement
                  );
                });
            } else {
              throw new Error("名前が設定されていません");
            }
          } catch (e) {
            console.error("エラー:", e);
          }
        }
      },
      {
        once: true,
      }
    );
  }
}
