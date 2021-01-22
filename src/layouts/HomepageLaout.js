import React from "react";
import Header from "./../components/header/index";
import Footer from "./../components/Footer/index";
const HomepageLayout = (props) => {
  return (
    <div className="fullHeight">
      <Header />
      <div className="main">{props.children}</div>
      <Footer />
    </div>
  );
};

export default HomepageLayout;
