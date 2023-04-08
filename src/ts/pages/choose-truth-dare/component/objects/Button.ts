import { Object } from "../../../../interface/object/Object";

export class Button implements Object {
  private hostElement: HTMLDivElement;
  private buttonList: HTMLDivElement;
  private truthButton: HTMLButtonElement;
  private dareButton: HTMLButtonElement;

  get getTruthButton(): HTMLButtonElement {
    return this.truthButton;
  }

  get getDarebutton(): HTMLButtonElement {
    return this.dareButton;
  }

  constructor(hostElement: HTMLDivElement) {
    this.hostElement = hostElement;

    this.buttonList = document.createElement("div");
    this.buttonList.className = "choose-truth-dare__button-list";
    this.buttonList.classList.add("hidden");

    this.truthButton = document.createElement("button");
    this.truthButton.className = "choose-truth-dare__button-truth";
    this.truthButton.innerText = "真実";
    this.truthButton.classList.add("disable");

    this.dareButton = document.createElement("button");
    this.dareButton.className = "choose-truth-dare__button-dare";
    this.dareButton.innerText = "挑戦";
    this.dareButton.classList.add("disable");

    this.buttonList.appendChild(this.truthButton);
    this.buttonList.appendChild(this.dareButton);
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
      setTimeout(() => {
        this.truthButton.classList.remove("disable");
        this.dareButton.classList.remove("disable");
        resolve(fadeIn);
      }, 1000);
    });
}
