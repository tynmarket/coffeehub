import * as React from 'react';
import { useEffect, useState } from 'react';
import { Coffee } from '../model/coffee';
import { ListItem } from './ListItem';
import { Pagination } from './Pagination';
import { RoastList } from './RoastList';
import { getCoffees } from '../api/cofee_api';
import { roastToText } from '../model/coffee';
import useReactRouter from 'use-react-router';

const PER_PAGE = 10;

export const CoffeeList: React.StatelessComponent<{}> = (): JSX.Element => {
  const { location, match } = useReactRouter<any>(); // eslint-disable-line @typescript-eslint/no-explicit-any
  const [coffees, setCoffees] = useState<Coffee[]>([]);
  const [showSpinner, setShowSpinner] = useState<boolean>(false);
  const [openRoastList, setOpenRoastList] = useState<boolean>(false);
  const list = [];
  const [prev, next] = paginationParams(coffees.length);
  const length = coffees.length > PER_PAGE ? PER_PAGE : coffees.length;
  const roast = match.params.roast;
  const roastText = roastToText(roast);
  const params = new URLSearchParams(location.search);
  const page = params.get('page');
  const query = location.search;

  useEffect((): void => {
    setCoffees([]);
    setShowSpinner(true);
    window.scrollTo(0, 0);

    getCoffees(roast, query).then((coffees): void => {
      setCoffees(coffees);
      setShowSpinner(false);
    });
  }, [roast, page]);

  let month;
  let monthPrev;

  for (let i = 0; i < length; i++) {
    const coffee = coffees[i];
    month = coffee.arrival_month;

    if (i !== 0 && month !== monthPrev) {
      list.push(
        <div className="section-arrival" key={length + 1}>
          <span
            className={`section-arrival-title coffee-color-${roast || 'high'}`}
          >
            {`${month}月入荷のコーヒー`}
          </span>
        </div>
      );
    }

    list.push(<ListItem key={i} coffee={coffee} />);
    monthPrev = month;
  }

  return (
    <section className="main-content">
      <div className="section-title-and-roast-select">
        <h1 className={`section-title coffee-color-${roast || 'high'}`}>
          新着コーヒー豆一覧
          {roastText != null ? (
            <span className="hide-for-mobile">（{roastText}ロースト）</span>
          ) : null}
        </h1>
        <span
          className="roast-select-button"
          onClick={(): void => setOpenRoastList(true)}
        >
          絞り込み
        </span>
        <RoastList open={openRoastList} />
        <div
          className={`roast-select-overlay ${openRoastList ? 'show' : ''}`}
          onClick={(): void => setOpenRoastList(false)}
        />
      </div>
      <div className={showSpinner ? 'spinner show' : ''} />
      <div className={`coffee-list ${list.length > 0 ? 'show' : ''}`}>
        {list}
      </div>
      <Pagination prev={prev} next={next} roast={roast} />
    </section>
  );
};

function paginationParams(length: number): [number | null, number | null] {
  const params = new URLSearchParams(location.search);
  const pageStr = params.get('page');
  const next = length > PER_PAGE;

  if (pageStr !== null && pageStr !== '1') {
    const page = parseInt(pageStr);
    return [page - 1, next ? page + 1 : null];
  } else {
    return [null, next ? 2 : null];
  }
}
