import { NextUIProvider } from "@nextui-org/react";
import React, { ReactNode } from "react";

function Providers({ children }: { children: ReactNode }) {
  return <NextUIProvider>{children}</NextUIProvider>;
}

export default Providers;
