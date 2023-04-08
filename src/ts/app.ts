import "../scss/style.scss";
import { EnterName } from "./pages/enter-name/EnterName";

export const hostElement: HTMLDivElement = document.getElementById(
  "app"
)! as HTMLDivElement;

setTimeout(() => {
  new EnterName(hostElement);
}, 600);
