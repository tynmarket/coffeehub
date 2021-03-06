import * as React from 'react';
import { Coffee } from '../model/coffee';

function ribbon(): JSX.Element {
  return (
    <div className="ribbon_area">
      <span className="ribbon">NEW</span>
    </div>
  );
}

interface Props {
  coffee: Coffee;
}

export const ListItem: React.StatelessComponent<Props> = ({
  coffee,
}): JSX.Element => {
  /* tslint:disable:max-line-length */
  return (
    <article>
      <a
        className="card-item"
        href={coffee.url}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="card-item-left">
          <div className="card-item-cup-and-shop">
            <span className="card-item-cup-wrapper">
              <svg className="card-item-cup" viewBox="0 0 24 24">
                <path d="M2,21V19H20V21H2M20,8V5H18V8H20M20,3A2,2 0 0,1 22,5V8A2,2 0 0,1 20,10H18V13A4,4 0 0,1 14,17H8A4,4 0 0,1 4,13V3H20M16,5H6V13A2,2 0 0,0 8,15H14A2,2 0 0,0 16,13V5Z" />
              </svg>
            </span>
            <span className="card-item-shop">{coffee.shop}</span>
          </div>
          <div className="card-item-coffee-bean-and-roast">
            <span className="card-item-coffee-bean-wrapper">
              <svg
                className={`card-item-coffee-bean coffee-bean-${coffee.roast}`}
                viewBox="0 0 326.05 326.05"
              >
                <path d="M14.257,275.602C-17.052,220.391,4.253,133.798,69.023,69.01c73.553-73.543,175.256-91.076,227.182-39.16   c0.061,0.068,0.112,0.145,0.195,0.214c-10.392,30.235-43.486,94.567-142.686,129.348C62.842,191.29,27.788,241.972,14.257,275.602z    M310.81,48.75c-7.871,18.361-21.57,42.356-45.173,65.957c-23.725,23.735-57.445,47.046-105.208,63.8   C63.49,212.5,36.405,268.149,28.848,295.116c0.357,0.36,0.664,0.733,1.011,1.083c51.921,51.918,153.628,34.386,227.176-39.169   C322.479,191.585,343.526,103.869,310.81,48.75z" />
              </svg>
            </span>
            <span className="card-item-roast">{coffee.roast_text}</span>
            <span className="card-item-roast-sufix hide-for-mobile">
              ロースト
            </span>
          </div>
          <div className="card-item-arrival-date hide-for-mobile">
            {coffee.arrival_date}
          </div>
        </div>
        <div className="card-item-right">
          <h2 className="card-item-title">
            <span className="card-item-country">{coffee.country}</span>
            <span className="card-item-area">{coffee.area}</span>
          </h2>
          <div className="card-item-taste">{coffee.taste}</div>
        </div>
        {coffee.new ? ribbon() : null}
      </a>
    </article>
  );
  /* tslint:enable:max-line-length */
};
