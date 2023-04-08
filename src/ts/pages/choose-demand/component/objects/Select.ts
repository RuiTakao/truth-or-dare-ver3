import { Object } from "../../../../interface/object/Object";
import { demand } from "../../../../strage/Demand";
import { truthDare } from "../../../../strage/truthDare";

export class Select implements Object {
  private hostElement: HTMLDivElement;
  private selectBox: HTMLDivElement;
  private select: HTMLUListElement;
  private inputContainer: HTMLDivElement;
  private input: HTMLInputElement[] = [];

  get getSelect(): HTMLUListElement {
    return this.select;
  }

  get getInput(): HTMLInputElement[] {
    return this.input;
  }

  constructor(hostElement: HTMLDivElement) {
    
    this.hostElement = hostElement;

    this.selectBox = document.createElement("div");
    this.selectBox.className = "choose-demand__select-box";

    const selectBoxTitle: HTMLParagraphElement = document.createElement("p");
    selectBoxTitle.className = "choose-demand__select-box-title";

    this.select = document.createElement("ul");
    this.select.className = "choose-demand__select";

    this.inputContainer = document.createElement("div");
    this.inputContainer.className = "choose-demand__input-container";

    for (let i = 0; i < demand.getDemandList.length; i++) {
      const option: HTMLLIElement = document.createElement("li");
      option.className = "choose-demand__option";
      option.innerHTML = `<label for="option${i}">${demand.getDemandList[i]}</label>`;

      this.input[i] = document.createElement("input");
      this.input[i].id = `option${i}`;
      this.input[i].name = `option`;
      this.input[i].type = "radio";
      this.input[i].value = demand.getDemandList[i];

      this.select.appendChild(option);
      this.inputContainer.appendChild(this.input[i]);
    }
    try {
      switch (truthDare.getChooseContent) {
        case "truth":
          this.selectBox.classList.add("truth");
          selectBoxTitle.innerText = "真実";
          break;
        case "dare":
          this.selectBox.classList.add("dare");
          selectBoxTitle.innerText = "挑戦";
          break;
        default:
          throw new Error("無効な値が指定されました");
      }
    } catch (e) {
      console.error("エラー:", e);
    }

    this.selectBox.appendChild(selectBoxTitle);
    this.selectBox.appendChild(this.select);
  }

  attach = (): Promise<void> =>
    new Promise((resolve) => {
      this.hostElement.appendChild(this.selectBox);
      this.hostElement.appendChild(this.inputContainer);
      const fadeIn: void = this.selectBox.classList.add("fade-in");
      resolve(fadeIn);
      this.selectBox.addEventListener(
        "animationend",
        () => {
          this.selectBox.classList.remove("hidden");
          this.selectBox.classList.remove("fade-in");
        },
        {
          once: true,
        }
      );
    });
}
