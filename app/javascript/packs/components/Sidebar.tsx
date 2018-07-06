import * as React from "react";

export const Sidebar: React.StatelessComponent<{}> = () => {
  return (
    <aside className="sidebar">
      <section className="sidebar-content">
        <h3 className="section-roast-title">
          ロースト度合いから選ぶ
        </h3>
        <ul>
          <li className="sidebar-item">
            <a className="roast-cinnamon" href="/">
              シナモンロースト
            </a>
          </li>
          <li className="sidebar-item">
            <a className="roast-medium" href="/">
              ミディアムロースト
            </a>
          </li>
          <li className="sidebar-item">
            <a className="roast-high" href="/">
              ハイロースト
            </a>
          </li>
          <li className="sidebar-item">
            <a className="roast-city" href="/">
              シティロースト
            </a>
          </li>
          <li className="sidebar-item">
            <a className="roast-fullcity" href="/">
              フルシティロースト
            </a>
          </li>
          <li className="sidebar-item">
            <a className="roast-french" href="/">
              フレンチロースト
            </a>
          </li>
        </ul>
      </section>
    </aside>
  );
};
