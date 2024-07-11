import { Outlet } from "react-router-dom";

import { Menu } from "@/components/widgets/Menu";

export function DefaultLayout() {
  return (
    <div className="h-screen bg-zinc-100">
      <header>
        <Menu />
      </header>
      <main className="container mx-auto mt-8 px-5">
        <Outlet />
      </main>
    </div>
  );
}
