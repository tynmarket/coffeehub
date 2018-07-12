import * as React from "react";
import { Link } from "react-router-dom";
import { path } from "../path/coffees_path";
import { roastToText } from "../model/coffee";

function link(page: number, text: string, roast: string) {
  if (page == null) {
    return (
      <a className="pagination-item">
        {text}
      </a>
    );
  } else if (page === 1) {
    return (
      <Link to={path.roastCoffees(roast)} className="pagination-item active">
        {text}
      </Link>
    );
  } else {
    return (
      <Link
        to={{pathname: path.roastCoffees(roast), search: `?page=${page}`}}
        className="pagination-item active"
      >
        {text}
      </Link>
    );
  }
}

interface Props {
  prev: number;
  next: number;
  roast: string;
}

export const Pagination: React.StatelessComponent<Props> = ({prev, next, roast}) => {
  return (
    <div className="pagination">
      {link(prev, "前へ", roast)}
      {link(next, "次へ", roast)}
    </div>
  );
};
