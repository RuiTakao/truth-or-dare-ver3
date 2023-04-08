import { firstUser, secondUser, User } from "../../../strage/user";

export class ShuffleUser {
  constructor() {
    try {
      if (firstUser.getName !== null && secondUser.getName !== null) {
        const firstUserName: string = firstUser.getName;
        const secondUserName: string = secondUser.getName;
        const array: string[] = [firstUserName, secondUserName];
        array.sort(() => 0.5 - Math.random());
        firstUser.setName(array[0]);
        secondUser.setName(array[1]);
      } else throw new Error("名前が設定されていません");
    } catch (e) {
      console.error("エラー：", e);
    }
  }
}
