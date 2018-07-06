import * as React from "react";

interface Props {
  prev: number;
  next: number;
}

function link(page: number, text: string) {
  if (page != null) {
    return (
      <a className="pagination-item active" href="/">
        {text}
      </a>
    );
  } else {
    return (
      <a className="pagination-item">
        {text}
      </a>
    );
  }
}

export const Pagination: React.StatelessComponent<Props> = (props) => {
  return (
    <div className="pagination">
      {link(props.prev, "前へ")}
      {link(props.next, "次へ")}
    </div>
  );
};
