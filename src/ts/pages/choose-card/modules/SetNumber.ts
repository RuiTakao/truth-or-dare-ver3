export class SetNumber {
  private target: NodeListOf<HTMLLIElement>;
  private numbers: number[];
  constructor(targetList: HTMLUListElement) {
    this.target = targetList.querySelectorAll("li");
    this.numbers = this.createNumber();
    this.setNumber();
  }

  private setNumber() {
    this.target.forEach((target, index) => {
      const num = document.createElement("p");
      num.className = "num";
      num.innerText = this.numbers[index].toString();

      target.appendChild(num);
      target.value = this.numbers[index];
    });
  }

  private createNumber() {
    const numbers: number[] = [];
    for (let i = 1; i <= this.target.length; i++) {
      numbers.push(i);
    }
    numbers.sort(() => 0.5 - Math.random());
    return numbers;
  }
}
