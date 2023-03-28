import "../scss/style.scss";
import { ChooseCard } from "./pages/choose-card/ChooseCard";
import { EndGame } from "./pages/end-game/EndGame";
import { EnterName } from "./pages/enter-name/EnterName";
import { MakeLayer } from "./pages/make-layer/MakeLayer";
import { firstUser, secondUser } from "./strage/user";

export const hostElement: HTMLDivElement = document.getElementById(
  "app"
)! as HTMLDivElement;

setTimeout(() => {
  firstUser.setName("なみこ")
  secondUser.setName("ゆうこ")
  // new ChooseCard(hostElement);
  new EndGame(hostElement)
//   new EnterName(hostElement);

  // winLose.winUser.name = "ゆうこ";
  // winLose.loseUser.name = "なみこ";
  // new MakeLayer();
}, 600);
