import { ReactNode } from "react";
import { delay } from "@/utils/delay.utils";

const Example1Layout = async ({ children }: { children: ReactNode }) => {
  await delay(2000);

  return (
    <div>
      <div style={{ height: 200, backgroundColor: "pink" }}>Hello 1</div>
      {children}
    </div>
  );
};

export default Example1Layout;
