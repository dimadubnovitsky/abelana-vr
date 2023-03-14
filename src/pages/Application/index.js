import React from "react";
import Banner from "./components/Banner";
import Summary from "./components/Summary";
import Details from "./components/Details";
import Gallery from "./components/Gallery";

const Application = ({ data }) => (
  <>
    <Banner data={data.banner} />
    <Summary data={data.summary} />
    <Details data={data.details} />
    <Gallery data={data.gallery} />
  </>
);

export default Application;
