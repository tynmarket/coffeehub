import * as React from 'react';
import Mui from 'images/mui.png';

export const Pickup: React.StatelessComponent<{}> = (): JSX.Element => {
  return (
    <section className="pickup">
      <a
        href="http://www.mui-motosumi.co.jp"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img className="pickup-image" src={Mui} />
        <span className="pickup-note">ピックアップ</span>
        <div className="pickup-area">
          <h1 className="pickup-shop">Mui</h1>
          <p className="pickup-text">
            最高品質のコーヒー豆と確かな焙煎の技術。元住吉の実店舗では美味しいケーキも。
          </p>
        </div>
      </a>
    </section>
  );
};
