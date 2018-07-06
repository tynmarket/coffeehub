import * as React from "react";
import { ListItem } from "./ListItem";
import { Pagination } from "./Pagination";
import { RoastList } from "./RoastList";

export class CoffeeList extends React.Component<any, object> {
  constructor(props: any) {
    super(props);
  }

  public render() {
    const list = [];
    const stores = ["ROKUMEI COFFEE CO.", "Mui", "春木屋 月滴庵 Gettekian"];

    for (let i = 0; i < 10; i++) {
      const num = Math.floor(Math.random() * Math.floor(3));
      const store = stores[num];
      list.push(<ListItem key={i} store={store} new={i < 2} />);

      if (i === 5) {
        list.push(
          <div className="section-arrival" key={11} >
            <span className="section-arrival-title">
              6月入荷のコーヒー
            </span>
          </div>,
        );
      }
    }

    return (
      <section className="main-content">
        <div className="section-title-and-roast-select">
          <h1 className="section-title">
            新着コーヒー豆一覧
          </h1>
          <span className="roast-select-button">
            絞り込み
          </span>
          <RoastList />
          <div className="roast-select-overlay" />
        </div>
        {list}
        <Pagination prev={null} next={2} />
      </section>
    );
  }
}
