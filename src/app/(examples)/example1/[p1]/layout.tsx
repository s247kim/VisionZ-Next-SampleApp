import { ReactNode } from "react";

const ExP1Layout = ({
  children,
  params,
}: {
  children: ReactNode;
  params: {
    p1: string;
  };
}) => {
  console.log(params);

  return <div style={{ backgroundColor: "cyan" }}>{children}</div>;
};

export default ExP1Layout;
