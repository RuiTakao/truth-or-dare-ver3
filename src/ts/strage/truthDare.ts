class TruthDare {
  private chooseContent: "truth" | "dare" | null = null;

  get getChooseContent(): "truth" | "dare" | null {
    return this.chooseContent;
  }

  setChooseContent = (chooseContent: "truth" | "dare"): void => {
    this.chooseContent = chooseContent;
  };
}

export const truthDare: TruthDare = new TruthDare();
