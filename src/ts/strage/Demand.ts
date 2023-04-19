import { truthDare } from "./truthDare";

class Demand {
  private demand: string = "";

  get getDemand(): string {
    return this.demand;
  }

  get getDemandList(): string[] {
    switch (truthDare.getChooseContent) {
      case "truth":
        return [
          "黒歴史",
          "昨日した失敗",
          "お金ない理由",
          "直近の恥ずかしい体験",
          "3サイズ",
        ];
      case "dare":
        return [
          "モノマネする",
          "変顔する",
          "10秒以内にオリジナルの歌を歌う",
          "1分間、瞬き禁止",
          "30秒以内に山手線の駅名全部書く",
        ];
      default: return [];
    }
  }

  setDemand = (demand: string): void => {
    this.demand = demand;
  };
}

export const demand: Demand = new Demand();
