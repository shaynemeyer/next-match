"use client";

import { usePathname } from "next/navigation";
import Filters from "./Filters";

function FiltersWrapper() {
  const pathname = usePathname();

  if (pathname === "/messages") {
    return <Filters />;
  }
  return null;
}

export default FiltersWrapper;
