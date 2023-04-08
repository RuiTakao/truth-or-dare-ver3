import { Frame } from "../objects/Frame";

export abstract class ClickButton {
    target: HTMLButtonElement;
    private frame: Frame;
    constructor(target: HTMLButtonElement, frame: Frame) {
      this.target = target;
      this.frame = frame;
    }
  
    onClick = (): void =>
      this.target.addEventListener("click", this.clickHandler.bind(this), {
        once: true,
      });
  
    clickHandler = (): void => {
      this.frame.destroy();
      this.returnPage();
    }
  
    abstract returnPage(): void 
}