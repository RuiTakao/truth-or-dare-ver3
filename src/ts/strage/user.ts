export class User {
  private name: string | null = null;
  private chooseCard: HTMLLIElement | null = null;
  private cardNumber: number | null = null;

  get getName(): string | null {
    return this.name;
  }

  get getChooseCard(): HTMLLIElement | null {
    return this.chooseCard;
  }

  get getCardNumber(): number | null {
    return this.cardNumber;
  }

  setName = (name: string): void => {
    this.name = name;
  };

  setChooseCard = (chooseCard: HTMLLIElement): void => {
    this.chooseCard = chooseCard;
  };

  setCardNumber = (cardNumber: number): void => {
    this.cardNumber = cardNumber;
  };
}

export const firstUser: User = new User();

export const secondUser: User = new User();

export const winUser: User = new User();

export const loseUser: User = new User();
