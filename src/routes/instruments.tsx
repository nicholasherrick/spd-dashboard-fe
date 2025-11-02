import { createFileRoute } from "@tanstack/react-router";

import Instruments from "../ts/instruments/components/Instruments";

export const Route = createFileRoute("/instruments")({
  component: RouteComponent,
});

function RouteComponent() {
  return <Instruments />;
}
