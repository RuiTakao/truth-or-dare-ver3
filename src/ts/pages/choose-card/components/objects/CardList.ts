import { firstUser, secondUser } from "../../../../strage/user";

export class CardList implements Object {
  private hostElement: HTMLDivElement;
  private cardList: HTMLUListElement;

  get getCardList(): HTMLUListElement {
    return this.cardList;
  }

  constructor(hostElement: HTMLDivElement) {
    this.hostElement = hostElement;
    this.cardList = document.createElement("ul");
    this.cardList.className = "choose-card__card-list";

    for (let i = 1; i <= 13; i++) {
      const card: HTMLLIElement = document.createElement("li");
      card.id = `card${i}`;
      card.className = "choose-card__card";

      this.cardList.appendChild(card);
    }
  }

  attach = (): Promise<void> => {
    const target: NodeListOf<HTMLLIElement> =
      this.cardList.querySelectorAll("li");

    const slideIn: (
      target: HTMLLIElement,
      className: string
    ) => Promise<void> = (target: HTMLLIElement, className: string) =>
      new Promise((resolve) => {
        const slide: void = target.classList.add(className);

        target.addEventListener(
          "animationend",
          () => {
            target.classList.remove("hidden");
            target.classList.remove(className);
          },
          { once: true }
        );
        setTimeout(() => resolve(slide), 200);
      });

    target.forEach((target) => {
      target.classList.add("disable");
      target.classList.add("hidden");
    });

    return new Promise((resolve) => {
      this.hostElement.appendChild(this.cardList);
      const slideAll: Promise<void> = slideIn(target[3], "slide-in__fourth-row")
        .then(() => slideIn(target[7], "slide-in__fourth-row"))
        .then(() => slideIn(target[11], "slide-in__fourth-row"))
        .then(() => slideIn(target[12], "slide-in__fourth-row"))
        .then(() => slideIn(target[2], "slide-in__third-row"))
        .then(() => slideIn(target[6], "slide-in__third-row"))
        .then(() => slideIn(target[10], "slide-in__third-row"))
        .then(() => slideIn(target[1], "slide-in__second-row"))
        .then(() => slideIn(target[5], "slide-in__second-row"))
        .then(() => slideIn(target[9], "slide-in__second-row"))
        .then(() => slideIn(target[0], "slide-in__first-row"))
        .then(() => slideIn(target[4], "slide-in__first-row"))
        .then(() => slideIn(target[8], "slide-in__first-row"));
      setTimeout(() => resolve(slideAll), 2000);
    });
  };

  disable = (): void =>
    this.cardList
      .querySelectorAll("li")
      .forEach((target) => target.classList.add("disable"));

  enable = (): void =>
    this.cardList
      .querySelectorAll("li")
      .forEach((target) => target.classList.remove("disable"));

  removeMark = (): void =>
    this.cardList.querySelectorAll("li").forEach((target) => {
      if (target.classList.contains("mark")) target.classList.remove("mark");
    });

  addMark = (target: HTMLLIElement): void => {
    this.cardList.querySelectorAll("li").forEach((target) => {
      if (target.classList.contains("mark")) target.classList.remove("mark");
    });
    target.classList.add("mark");
  };

  addCheck = (target: HTMLLIElement, name: string): void => {
    target.classList.add("check");

    const checkMark: HTMLDivElement = document.createElement("div");
    checkMark.className = "check-mark";

    const nameFrontSide: HTMLParagraphElement = document.createElement("p");
    nameFrontSide.className = "name-front-side";
    nameFrontSide.innerText = name;

    const nameBackSide: HTMLParagraphElement = document.createElement("p");
    nameBackSide.className = "name-back-side";
    nameBackSide.innerText = name;

    target.append(checkMark, nameFrontSide, nameBackSide);

    target.classList.remove("mark");
  };

  turn = (): Promise<void> => {
    try {
      if (
        firstUser.getChooseCard !== null &&
        secondUser.getChooseCard !== null
      ) {
        const firstUserChooseCard: HTMLLIElement = firstUser.getChooseCard;
        const secondUserChooseCard: HTMLLIElement = secondUser.getChooseCard;

        const turnCard = (selectCard: HTMLLIElement): Promise<void> =>
          new Promise((resolve) => {
            const turnCard: void = selectCard.classList.add("turn");

            selectCard.addEventListener("animationend", () => {
              selectCard.classList.add("open");
              selectCard.classList.remove("check");
              selectCard.classList.remove("turn");
            });

            setTimeout(() => resolve(turnCard), 500);
          });

        return new Promise((resolve) =>
          resolve(
            turnCard(firstUserChooseCard).then(() =>
              turnCard(secondUserChooseCard)
            )
          )
        );
      } else throw new Error("カードが選択されていません");
    } catch (e) {
      return new Promise(() => console.error("エラー：", e));
    }
  };
}
