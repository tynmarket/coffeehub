import * as React from "react";
import { getCoffees } from "../api/cofee_api";
import { roastToText } from "../model/coffee";
import { Coffee } from "../model/coffee";
import { ListItem } from "./ListItem";
import { Pagination } from "./Pagination";
import { RoastList } from "./RoastList";

const PER_PAGE = 10;

interface State {
  coffees: Coffee[];
  openRoastList: boolean;
  showSpinner: boolean;
}

export class CoffeeList extends React.Component<any, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      coffees: [],
      openRoastList: false,
      showSpinner: true,
    };

    this.fetchCoffees = this.fetchCoffees.bind(this);
    this.openRoastList = this.openRoastList.bind(this);
    this.closeRoastList = this.closeRoastList.bind(this);
    this.paginationParams = this.paginationParams.bind(this);
  }

  public componentWillReceiveProps(nextProps) {
    window.scrollTo(0, 0);
    const roast = nextProps.match.params.roast;
    const query = location.search;
    this.fetchCoffees(roast, query);
    this.setState({coffees: [], openRoastList: false, showSpinner: true});
  }

  public componentDidMount() {
    const roast = this.props.match.params.roast;
    const query = location.search;
    this.fetchCoffees(roast, query);
  }

  public render() {
    const list = [];
    const coffees = this.state.coffees;
    const [prev, next] = this.paginationParams(coffees.length);
    const length = coffees.length > PER_PAGE ? PER_PAGE : coffees.length;
    const roast = this.props.match.params.roast;
    const roastText = roastToText(roast);
    let month;
    let monthPrev;

    for (let i = 0; i < length; i++) {
      const coffee = coffees[i];
      month = coffee.arrival_month;

      if (i !== 0 && month !== monthPrev) {
        list.push(
          <div className="section-arrival" key={length + 1} >
            <span className={`section-arrival-title coffee-color-${roast || "high"}`}>
              {`${month}月入荷のコーヒー`}
            </span>
          </div>,
        );
      }

      list.push(<ListItem key={i} coffee={coffee} />);
      monthPrev = month;
    }

    return (
      <section className="main-content">
        <div className="section-title-and-roast-select">
          <h1 className={`section-title coffee-color-${roast || "high"}`}>
            新着コーヒー豆一覧
            {roastText != null ? <span className="hide-for-mobile">（{roastText}ロースト）</span> : null}
          </h1>
          <span className="roast-select-button" onClick={this.openRoastList}>
            絞り込み
          </span>
          <RoastList open={this.state.openRoastList} />
          <div
            className={`roast-select-overlay ${this.state.openRoastList ? "show" : ""}`}
            onClick={this.closeRoastList}
          />
        </div>
        <div className={this.state.showSpinner ? "spinner show" : ""} />
        <div className={`coffee-list ${list.length > 0 ? "show" : ""}`}>
          {list}
        </div>
        <Pagination prev={prev} next={next} />
      </section>
    );
  }

  private fetchCoffees(roast: string, query: string) {
    getCoffees(roast, query).then((coffees) => {
      this.setState({coffees, showSpinner: false});
    });
  }

  private openRoastList() {
    this.setState({openRoastList: true});
  }

  private closeRoastList() {
    this.setState({openRoastList: false});
  }

  private paginationParams(length: number): number[] {
    const params = new URLSearchParams(location.search);
    const pageStr = params.get("page");
    const next = length > PER_PAGE;

    if (pageStr !== null && pageStr !== "1") {
      const page = parseInt(pageStr);
      return [page - 1, (next ? page + 1 : null)];
    } else {
      return [null, (next ? 2 : null)];
    }
  }
}
