import { ReactNode } from "react";

const Example2Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <div style={{ height: 200, backgroundColor: "yellow" }}>Hello 2</div>
      {children}
    </div>
  );
};

export default Example2Layout;
