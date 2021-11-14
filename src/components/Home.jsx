import Button from "pickupbiz-button";
import React from "react";
import { Calc } from "./Calc";

export const Home = () => {
  return (
    <React.Fragment>
      <Calc header="PickupBiz" title="Calculator" desc="Quick Calculation" />
      <Button>Get Data</Button>
    </React.Fragment>
  );
};
