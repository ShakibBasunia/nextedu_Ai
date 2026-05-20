import { createFileRoute, Outlet } from "@tanstack/react-router";
import { AppShell } from "../components/AppShell";

// Pathless layout wrapper for all top-level routes
export const Route = createFileRoute("")({
  // not used; see _layout below
});
