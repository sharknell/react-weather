import { useState } from "react";
import Maindata from "../Components/Maindata";
import Current from "../Components/current/current";
// import Search from "../Components/Search";

function MainIndex() {
  const [location] = useState();
  const [backgroundImageURL, setBackgroundImageURL] = useState("01n");

  const handle = (e) => {
    setBackgroundImageURL(e);
  };

  return (
    <div
      className="mainpage"
      style={{
        backgroundImage: `url("./pics/${backgroundImageURL}.jpg")`,
        backgroundSize: "cover",
      }}
    >
      {/* <Search /> */}
      <Current />
      <Maindata city={location} setBackgroundImageURL={handle} />
    </div>
  );
}

export default MainIndex;
