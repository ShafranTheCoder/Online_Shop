import React from "react";

import layout from "../../utils/layout";
import Header from "../Header";
import Footer from "../Footer";

const LayoutDefault = ({ component: Component, ...props }) => {
  return (
    <div className="page-wrapper">
      <Header />
      <Component {...props} />
      <Footer />
    </div>
  );
};

export default layout(LayoutDefault);
