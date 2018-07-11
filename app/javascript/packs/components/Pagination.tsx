import * as React from "react";
import { Link } from "react-router-dom";
import { path } from "../path/coffees_path";

function link(page: number, text: string) {
  if (page == null) {
    return (
      <a className="pagination-item">
        {text}
      </a>
    );
  } else if (page == 1) {
    return (
      <Link to="/" className="pagination-item active">
        {text}
      </Link>
    );
  } else {
    return (
      <Link
        to={{pathname: "/", search: `?page=${page}`}}
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
}

export const Pagination: React.StatelessComponent<Props> = (props) => {
  return (
    <div className="pagination">
      {link(props.prev, "前へ")}
      {link(props.next, "次へ")}
    </div>
  );
};
