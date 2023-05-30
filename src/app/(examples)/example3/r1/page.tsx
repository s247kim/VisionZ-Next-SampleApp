export default async ({ searchParams }: any) => {
  const a = searchParams.dsf;

  const res = await fetch("http://localhost:8443/ex");
  console.log(await res.json());

  return <div>Hi</div>;
};
