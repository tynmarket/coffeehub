import * as React from "react";
import { ListItem } from "./ListItem";
import { Pagination } from "./Pagination";
import { RoastList } from "./RoastList";

interface State {
  openRoastList: boolean;
}

export class CoffeeList extends React.Component<any, State> {
  constructor(props: any) {
    super(props);
    this.state = { openRoastList: false };
    this.openRoastList = this.openRoastList.bind(this);
    this.closeRoastList = this.closeRoastList.bind(this);
  }

  public openRoastList() {
    this.setState({openRoastList: true});
  }

  public closeRoastList() {
    this.setState({openRoastList: false});
  }

  public render() {
    const list = [];
    const shops = ["ROKUMEI COFFEE CO.", "Mui", "春木屋 月滴庵 Gettekian"];

    for (let i = 0; i < 10; i++) {
      const num = Math.floor(Math.random() * Math.floor(3));
      const shop = shops[num];
      list.push(<ListItem key={i} shop={shop} new={i < 2} />);

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
          <span className="roast-select-button" onClick={this.openRoastList}>
            絞り込み
          </span>
          <RoastList open={this.state.openRoastList} />
          <div
            className={`roast-select-overlay ${this.state.openRoastList ? "show" : null}`}
            onClick={this.closeRoastList}
          />
        </div>
        {list}
        <Pagination prev={null} next={2} />
      </section>
    );
  }
}
