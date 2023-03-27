import { loseUser } from "../src/ts/strage/user";

try {
  if (loseUser.getName !== null) {
  } else {
    throw new Error("名前が設定されていません");
  }
} catch (e) {
  console.error("エラー：", e);
}
