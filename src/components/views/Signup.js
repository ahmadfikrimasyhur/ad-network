import SignupForm from "../Forms/Signup/SignupForm";

const Signup = () => {
  return (
    <section className="w-full  bg-gradient-to-r from-infleux-400 to-infleux-600">
      <div className="container mx-auto flex justify-center	align-center items-center flex-col h-screen">
        <div className="flex flex-col justify-center space-y-5">
          <h1 className="text-2xl md:text-3xl text-center font-bold text-white drop-shadow-sm	">
            Create a new account
          </h1>
          <p className="text-xl text-center text-white">
            We would love to have you here!
          </p>
          <SignupForm />
        </div>
      </div>
    </section>
  );
};

export default Signup;
