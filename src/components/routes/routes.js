
import { lazy } from "react";

const Home = lazy(() => import("../home"));
const BidderProfile = lazy(() => import("../BidderProfile"));

const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
	path: "/:username/:userId",
	element: <BidderProfile />,	
  }
];

export default routes;