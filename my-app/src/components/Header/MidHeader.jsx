import { useState } from "react";
import { FaBars } from "react-icons/fa";
import TopMenu from "../basic/TopMenu";

export default function MidHeader({ handler }) {
  const [isScroll] = useState(false);
  const [icons] = useState(true);

  return (
    <div className={`header-mid ${!isScroll && "toggle"}`}>
      {isScroll && (
        <div className="toggle">
          <button onClick={handler} className="toggle-btn">
            <FaBars />
          </button>
        </div>
      )}

      <div className="brand">
        <a href="/">
          <img
            src="https://cdn.shopify.com/s/files/1/0459/4728/9756/files/forbes_store_logo_sp_200x.png?v=1622816135"
            alt=""
          />
        </a>
      </div>

      {isScroll && <TopMenu icons={icons} />}
    </div>
  );
}
