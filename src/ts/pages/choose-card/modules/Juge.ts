import { firstUser, loseUser, secondUser, winUser } from "../../../strage/user";

export class Juge {
  constructor() {
    const setWinUserProperty = (
      name: string,
      chooseCard: HTMLLIElement,
      getNumber: number
    ): void => {
      winUser.setName(name);
      winUser.setChooseCard(chooseCard);
      winUser.setCardNumber(getNumber);
    };

    const setLoseUserProperty = (
      name: string,
      chooseCard: HTMLLIElement,
      getNumber: number
    ): void => {
      loseUser.setName(name);
      loseUser.setChooseCard(chooseCard);
      loseUser.setCardNumber(getNumber);
    };

    const juge = (
      firstUserName: string,
      firstUserChooseCard: HTMLLIElement,
      firstUserGetNumber: number,
      secondUserName: string,
      secondUserChooseCard: HTMLLIElement,
      secondUserGetNumber: number
    ): void => {
      if (firstUserGetNumber > secondUserGetNumber) {
        setWinUserProperty(
          firstUserName,
          firstUserChooseCard,
          firstUserGetNumber
        );
        setLoseUserProperty(
          secondUserName,
          secondUserChooseCard,
          secondUserGetNumber
        );
      } else {
        setWinUserProperty(
          secondUserName,
          secondUserChooseCard,
          secondUserGetNumber
        );
        setLoseUserProperty(
          firstUserName,
          firstUserChooseCard,
          firstUserGetNumber
        );
      }
    };

    try {
      if (
        firstUser.getChooseCard !== null &&
        secondUser.getChooseCard !== null
      ) {
        if (
          firstUser.getName !== null &&
          firstUser.getChooseCard.value !== null &&
          secondUser.getName !== null &&
          secondUser.getChooseCard.value !== null
        ) {
          firstUser.setCardNumber(firstUser.getChooseCard.value);
          secondUser.setCardNumber(secondUser.getChooseCard.value);
          juge(
            firstUser.getName,
            firstUser.getChooseCard,
            firstUser.getChooseCard.value,
            secondUser.getName,
            secondUser.getChooseCard,
            secondUser.getChooseCard.value
          );
        } else
          throw new Error("名前、カードまたはカードの番号が選択されていません");
      } else throw new Error("カードが選択されていません");
    } catch (e) {
      console.error("エラー：", e);
    }
  }
}
