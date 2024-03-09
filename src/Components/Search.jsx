import React, { useEffect, useState } from "react";

import "../Componentstyle/search.css";
export default function Search({ handleLocationChange }) {
  const [city, setCity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLocationChange(city);
    setCity(""); // 검색 후 입력값 초기화
  };

  return (
    <div className="main">
      <nav className="istclass">
        <form className="form" onSubmit={handleSubmit}>
          <div className="search">
            <input
              value={city}
              placeholder="Search your City or Location"
              className="searchbox"
              onChange={(e) => setCity(e.target.value)}
            />

            <button className="nd" type="submit">
              <i className="fa fa-search" aria-hidden="true"></i>
            </button>
          </div>
        </form>
      </nav>
    </div>
  );
}
