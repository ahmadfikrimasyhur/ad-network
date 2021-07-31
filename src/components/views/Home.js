import Form from "../form/Form";

const Home = () => {
  return (
    <section className="w-full bg-blue-500">
      <div className="container mx-auto flex justify-center	align-center items-center flex-col h-screen">
        <div className="flex flex-col justify-center space-y-5">
          <h1 className="text-3xl font-bold text-white drop-shadow-sm	">
            Welcome to the Ad Network!
          </h1>
          <p className="text-xl text-white text-center">
            Please, login or signup.
          </p>
          <Form />
        </div>
      </div>
    </section>
  );
};

export default Home;
