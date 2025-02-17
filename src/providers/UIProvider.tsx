'use client'
import { NextUIProvider } from "@nextui-org/react";

export default function UIProvider({ children }: any) {
  return <NextUIProvider>{children}</NextUIProvider>;
}
