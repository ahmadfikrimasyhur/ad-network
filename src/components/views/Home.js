import Login from "./Login";

const Home = () => {
  return (
    <section className="w-screen bg-gradient-to-r from-infleux-400 to-infleux-600">
      <div className="container mx-auto flex justify-center	align-center items-center flex-col h-screen p-5">
        <div className="flex flex-col justify-center items-center space-y-5">
          <img alt="Ad network logo" src="/logo.png" className="w-32 h-32" />
          <Login />
        </div>
      </div>
    </section>
  );
};

export default Home;
