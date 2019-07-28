import * as React from 'react';
import { Link } from 'react-router-dom';
import { path } from '../path/coffees_path';

function link(page: number | null, text: string, roast: string): JSX.Element {
  if (page == null) {
    return <a className="pagination-item">{text}</a>;
  } else if (page === 1) {
    return (
      <Link to={path.roastCoffees(roast)} className="pagination-item active">
        {text}
      </Link>
    );
  } else {
    return (
      <Link
        to={{ pathname: path.roastCoffees(roast), search: `?page=${page}` }}
        className="pagination-item active"
      >
        {text}
      </Link>
    );
  }
}

interface Props {
  prev: number | null;
  next: number | null;
  roast: string;
}

export const Pagination: React.StatelessComponent<Props> = ({
  prev,
  next,
  roast,
}): JSX.Element => {
  return (
    <div className="pagination">
      {link(prev, '前へ', roast)}
      {link(next, '次へ', roast)}
    </div>
  );
};
