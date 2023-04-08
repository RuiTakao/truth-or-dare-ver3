class Demand {
  private demand: string = "";
  private demandList: string[] = [
    "今日の出来事",
    "黒歴史",
    "昨日した失敗",
    "3サイズ",
    "恥ずかしいこという",
    "なんで昨日遅刻した？",
  ];

  get getDemand(): string {
    return this.demand;
  }

  get getDemandList(): string[] {
    return this.demandList;
  }

  setDemand = (demand: string): void => {
    this.demand = demand;
  };

  setDemandList() {}
}

export const demand: Demand = new Demand();
