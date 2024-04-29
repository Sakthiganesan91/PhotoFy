import { UserButton } from "@clerk/nextjs";
const Home = () => {
  return (
    <>
      <h1>Home</h1>
      <UserButton afterSignOutUrl="/" />
    </>
  );
};

export default Home;
