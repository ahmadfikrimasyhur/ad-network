import Login from "./Login";

const Home = () => {
  return (
    <section className="w-full bg-gradient-to-r from-infleux-400 to-infleux-600">
      <div className="container mx-auto flex justify-center	align-center items-center flex-col h-screen">
        <div className="flex flex-col justify-center space-y-5">
          <Login />
        </div>
      </div>
    </section>
  );
};

export default Home;
