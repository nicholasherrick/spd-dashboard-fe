import * as React from "react";
import { Outlet, createRootRoute } from "@tanstack/react-router";

import Navbar from "../ts/layout/components/Navbar";
import "../scss/App.scss";

import { library } from "@fortawesome/fontawesome-svg-core";

/* import all the icons in Free Solid, Free Regular, and Brands styles */
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fas, far, fab);

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <React.Fragment>
      <Navbar />
      <div className="container">
        <Outlet />
      </div>
    </React.Fragment>
  );
}
