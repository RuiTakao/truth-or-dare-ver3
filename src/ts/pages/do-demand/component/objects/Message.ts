import { Object } from "../../../../interface/object/Object";
import { demand } from "../../../../strage/Demand";
import { truthDare } from "../../../../strage/truthDare";
import { loseUser } from "../../../../strage/user";

export class Message implements Object {
  private hostElement: HTMLDivElement;
  private message: HTMLDivElement;
  private oneLineMessage: HTMLParagraphElement;
  private twoLineMessage: HTMLParagraphElement;
  constructor(hostElement: HTMLDivElement) {
    this.hostElement = hostElement;

    this.message = document.createElement("div");
    this.message.className = "do-demand__message";

    this.oneLineMessage = document.createElement("p");
    this.oneLineMessage.className = "do-demand__one-line-message";
    this.oneLineMessage.classList.add("hidden");

    this.twoLineMessage = document.createElement("p");
    this.twoLineMessage.className = "do-demand__two-line-message";
    this.twoLineMessage.classList.add("hidden");

    this.message.append(this.oneLineMessage, this.twoLineMessage);

    try {
      if (demand.getDemand !== "") {
        switch (truthDare.getChooseContent) {
          case "truth":
            this.twoLineMessage.innerText = `${demand.getDemand}について真実を話してください`;
            this.twoLineMessage.classList.add("truth");
            break;
          case "dare":
            this.twoLineMessage.innerText = `${demand.getDemand}に挑戦してください`;
            this.twoLineMessage.classList.add("dare");
            break;
          default:
            throw new Error("無効な値が指定されました");
        }
      } else throw new Error("無効な値が指定されました");

      if (loseUser.getName !== null)
        this.oneLineMessage.innerHTML = `${loseUser.getName}さん`;
      else throw new Error("名前が設定されていません");
    } catch (e) {
      console.error("エラー:", e);
    }
  }

  attach = (): Promise<void> =>
    new Promise((resolve) => {
      this.hostElement.appendChild(this.message);

      new Promise((resolve) => {
        const fadeIn: void = this.oneLineMessage.classList.add("fade-in");
        this.oneLineMessage.addEventListener(
          "animationend",
          () => {
            this.oneLineMessage.classList.remove("hidden");
            this.oneLineMessage.classList.remove("fade-in");
          },
          { once: true }
        );
        setTimeout(() => resolve(fadeIn), 750);
      }).then(() => {
        const fadeIn: void = this.twoLineMessage.classList.add("fade-in");
        this.twoLineMessage.addEventListener(
          "animationend",
          () => {
            this.twoLineMessage.classList.remove("hidden");
            this.twoLineMessage.classList.remove("fade-in");
          },
          { once: true }
        );
        setTimeout(() => resolve(fadeIn), 750);
      });
    });
}
