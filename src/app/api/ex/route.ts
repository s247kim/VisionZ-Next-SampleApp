import { NextResponse } from "next/server";

const waitFor = (second: number): Promise<void> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, second * 1000);
  });
};

export const GET = async (request: Request): Promise<NextResponse> => {
  console.log("hi");
  await waitFor(1);

  return NextResponse.json({ hello: "world" });
  // return new Promise<NextResponse>((resolve) => {
  //   setTimeout(() => {
  //     resolve(NextResponse.json({ hello: "world" }));
  //   }, 3000);
  // });
};
