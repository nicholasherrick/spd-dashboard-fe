import { createFileRoute } from "@tanstack/react-router";

import Dashboard from "../ts/dashboard/components/Dashboard";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return <Dashboard />;
}
