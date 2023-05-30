import { ReactNode } from "react";

export default async ({ children }: { children: ReactNode }) => {
  const res = await fetch("http://localhost:8443/ex", { cache: "no-store" });
  console.log(await res.json());

  return <div className="example3-layout">{children}</div>;
};
