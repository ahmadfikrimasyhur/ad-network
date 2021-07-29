import Form from "../form/Form";

const Home = () => {
  return (
    <section className="hero section is-fullheight is-info">
      <div className="container is-flex is-justify-content-center	is-align-content-center	is-align-items-center	is-flex-direction-column is-fullheight">
        <h1 className="title has-text-centered">Welcome to the Ad Network!</h1>
        <p className="subtitle has-text-centered">Please, login or signup.</p>
        <div className="box">
          <Form />
        </div>
      </div>
    </section>
  );
};

export default Home;
