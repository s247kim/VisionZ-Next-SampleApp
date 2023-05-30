import ClientComp from "./test.component";
import ServerComp from "./testServer.component";

export default () => {
  return (
    <>
      <h1>ex2</h1>
      <ClientComp>
        <ServerComp />
      </ClientComp>
    </>
  );
};
