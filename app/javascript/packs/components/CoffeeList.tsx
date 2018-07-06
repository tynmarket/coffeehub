import * as React from "react";
import { Pagination } from "./Pagination";
import { RoastList } from "./RoastList";

export class CoffeeList extends React.Component<any, object> {
  constructor(props: any) {
    super(props);
  }

  public render() {
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
        <Pagination prev={null} next={2} />
      </section>
    );
  }
}
