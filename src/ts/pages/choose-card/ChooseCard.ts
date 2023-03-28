import { Bubble } from "./components/objects/Bubble";
import { CardList } from "./components/objects/CardList";
import { Frame } from "./components/objects/Frame";
import { ShuffleUser } from "./modules/ShuffleUser";
import { Announce } from "./components/objects/Announce";
import { firstUser } from "../../strage/user";
import { ClickCard } from "./components/event/ClickCard";
import { ClickNoButton } from "./components/event/ClickNoButton";
import { ClickYesButton } from "./components/event/ClickYesButton";

export class ChooseCard {
  constructor(hostElement: HTMLDivElement) {
    try {
      if (firstUser.getName !== null) {
        const firstUserName = firstUser.getName;
        new ShuffleUser();
        const frame: Frame = new Frame(hostElement);
        const bubble: Bubble = new Bubble(frame.getBubbleFrame, firstUserName);
        const cardList: CardList = new CardList(frame.getCardListFrame);
        const announce: Announce = new Announce(frame.getFrame, firstUserName);
        frame.attach();
        cardList
          .attach()
          .then(() => announce.attach())
          .then(() => bubble.attach())
          .then(() => {
            cardList.enable();
            const clickCard: ClickCard = new ClickCard(cardList, bubble);
            new ClickNoButton(bubble, cardList);
            new ClickYesButton(bubble, cardList, clickCard, frame, hostElement);
          });
      } else {
        throw new Error("名前が設定されていません");
      }
    } catch (e) {
      console.error("エラー：", e);
    }
  }
}
