"use client";

import { useEffect } from "react";

export default () => {
  useEffect(() => {
    console.log("hello world I am error");
  });
  return <h1>Error</h1>;
};
