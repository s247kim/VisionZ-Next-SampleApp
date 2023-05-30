import { ReactNode } from "react";

const ParallelLayout = ({
  children,
  par1,
  par2,
}: {
  children: ReactNode;
  par1: ReactNode;
  par2: ReactNode;
}) => {
  return (
    <div style={{ display: "grid", gridAutoFlow: "column" }}>
      {children}
      {par1}
      {par2}
    </div>
  );
};

export default ParallelLayout;
