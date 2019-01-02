import Mui from "images/mui.png";
import * as React from "react";

export const Pickup: React.StatelessComponent<{}> = () => {
  return (
    <section className="pickup">
      <a href="http://www.mui-motosumi.co.jp" target="_blank">
        <img className="pickup-image" src={Mui} />
        <span className="pickup-note">
          ピックアップ
        </span>
        <div className="pickup-area">
          <h1 className="pickup-shop">
            Mui
          </h1>
          <p className="pickup-text">
            最高品質のコーヒー豆と確かな焙煎の技術。元住吉の実店舗では美味しいケーキも。
          </p>
        </div>
      </a>
    </section>
  );
};
