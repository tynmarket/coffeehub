import * as React from "react";
import { getCoffees } from "../api/cofee_api";
import { Coffee } from "../model/coffee";
import { ListItem } from "./ListItem";
import { Pagination } from "./Pagination";
import { RoastList } from "./RoastList";

const PER_PAGE = 10;

interface State {
  coffees: Coffee[];
  openRoastList: boolean;
}

export class CoffeeList extends React.Component<any, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      coffees: [],
      openRoastList: false,
    };

    this.fetchCoffees = this.fetchCoffees.bind(this);
    this.openRoastList = this.openRoastList.bind(this);
    this.closeRoastList = this.closeRoastList.bind(this);
    this.paginationParams = this.paginationParams.bind(this);
  }

  public componentWillReceiveProps(nextProps) {
    const roast = nextProps.match.params.roast;
    const query = location.search;
    this.fetchCoffees(roast, query);
    this.setState({openRoastList: false, coffees: []});
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

    for (let i = 0; i < length; i++) {
      list.push(<ListItem key={i} coffee={coffees[i]} />);

      if (i === 5) {
        list.push(
          <div className="section-arrival" key={length + 1} >
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
        <div className={`coffee-list ${list.length > 0 ? "show" : null}`}>
          {list}
        </div>
        <Pagination prev={prev} next={next} />
      </section>
    );
  }

  private fetchCoffees(roast: string, query: string) {
    getCoffees(roast, query).then((coffees) => {
      this.setState({coffees});
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
