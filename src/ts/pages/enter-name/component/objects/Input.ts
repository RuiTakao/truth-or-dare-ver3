export class Input {
  private hostElement: HTMLDivElement;
  private input: HTMLInputElement;

  get getInput(): HTMLInputElement {
    return this.input;
  }

  constructor(hostElement: HTMLDivElement) {
    this.hostElement = hostElement;
    this.input = document.createElement("input");
    this.input.className = "enter-name__input";
    this.input.maxLength = 5;
    this.input.classList.add("hidden");
  }

  attach = (): Promise<void> =>
    new Promise((resolve) => {
      this.hostElement.appendChild(this.input);
      this.input.focus();
      const fadeIn: void = this.input.classList.add("fade-in");
      this.input.addEventListener("animationend", () => {
        this.input.classList.remove("hidden");
        this.input.classList.remove("fade-in");
      });
      resolve(fadeIn);
    });

  slideOut = (): Promise<void> =>
    new Promise((resolve) => {
      const slideOut: void = this.input.classList.add("slide-out");
      this.input.addEventListener("animationend", () => {
        this.hostElement.removeChild(this.input);
      });
      resolve(slideOut);
    });

  slideIn = (): Promise<void> =>
    new Promise((resolve) => {
      this.input.disabled = true;
      this.hostElement.appendChild(this.input);
      const slideIn: void = this.input.classList.add("slide-in");
      this.input.addEventListener("animationend", () => {
        this.input.disabled = false;
        this.input.focus();
        this.input.classList.remove("hidden");
        this.input.classList.remove("slide-in");
      });
      resolve(slideIn);
    });

  disable = (): void => {
    this.input.disabled = true;
  };
}
