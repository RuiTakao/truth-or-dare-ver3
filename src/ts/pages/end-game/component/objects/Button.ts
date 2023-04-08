import { Object } from "../../../../interface/object/Object";

export class Button implements Object {
  private hostElement: HTMLDivElement;
  private buttonList: HTMLDivElement;
  private returnChooseCardButton: HTMLButtonElement;
  private returnEnterNameButton: HTMLButtonElement;

  get getReturnChooseCardButton(): HTMLButtonElement {
    return this.returnChooseCardButton;
  }

  get getReturnEnterNameButton(): HTMLButtonElement {
    return this.returnEnterNameButton;
  }

  constructor(hostElement: HTMLDivElement) {
    this.hostElement = hostElement;

    this.buttonList = document.createElement("div");
    this.buttonList.className = "end-game__button-list";
    this.buttonList.classList.add("hidden");

    this.returnChooseCardButton = document.createElement("button");
    this.returnChooseCardButton.className =
      "end-game__return-choose-card-button";
    this.returnChooseCardButton.innerText = "もう一度同じプレイヤーで遊ぶ";

    this.returnEnterNameButton = document.createElement("button");
    this.returnEnterNameButton.className = "end-game__return-enter-name-button";
    this.returnEnterNameButton.innerText = "別のプレイヤーと遊ぶ";

    this.buttonList.append(
      this.returnChooseCardButton,
      this.returnEnterNameButton
    );
  }

  attach = (): Promise<void> =>
    new Promise((resolve) => {
      this.hostElement.appendChild(this.buttonList);
      const fadeIn: void = this.buttonList.classList.add("fade-in");
      this.buttonList.addEventListener(
        "animationend",
        () => {
          this.buttonList.classList.remove("hidden");
          this.buttonList.classList.remove("fade-in");
        },
        { once: true }
      );
      setTimeout(() => resolve(fadeIn));
    });
}
