import { Link, useNavigate, useParams } from "react-router";

export const Home = () => (
  <div className="p-4 bg-light rounded-3 shadow-sm border">
    <h1 className="display-5 fw-bold text-primary">Home Page</h1>
    <p className="lead">Welcome to the React Router Demo!</p>
    <hr className="my-4" />
    <p>
      React Router allows you to handle navigation in a single-page application
      (SPA) without reloading the page.
    </p>
  </div>
);

export const About = () => (
  <div className="p-4 bg-white border rounded shadow-sm">
    <h1 className="h2 text-primary">About Page</h1>
    <p className="text-muted">
      This is where you'd describe your application using JavaScript and
      Bootstrap.
    </p>
  </div>
);

export const Contact = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission and then navigate to the Home page

    alert("Message sent! Redirecting...");
    navigate("/");
  };

  return (
    <div className="p-4 bg-white border rounded shadow-sm">
      <h1 className="h2 text-success mb-4">Contact Us</h1>
      <form onSubmit={handleSubmit} style={{ maxWidth: "400px" }}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Your Name
          </label>
          <input
            className="form-control"
            id="name"
            type="text"
            placeholder="Enter your name"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="form-label">
            Your Message
          </label>
          <textarea
            className="form-control"
            id="message"
            rows="3"
            placeholder="How can we help?"
          ></textarea>
        </div>
        <button className="btn btn-primary w-100" type="submit">
          Send Message
        </button>
      </form>
    </div>
  );
};

export const UserProfile = () => {
  const { userId } = useParams();

  return (
    <div className="p-4 bg-white border rounded shadow-sm">
      <h1 className="h2 text-info mb-3">User Profile</h1>
      <div className="alert alert-secondary">
        Viewing profile for User ID:{" "}
        <code className="bg-warning-subtle px-2 py-1 rounded">{userId}</code>
      </div>
      <p className="small text-muted fst-italic mt-3">
        Params are extracted from the URL using the <code>useParams</code> hook.
      </p>
    </div>
  );
};

export const NotFound = () => (
  <div className="p-5 text-center bg-light border rounded shadow-sm mt-5">
    <h1 className="display-1 fw-bold text-danger">404</h1>
    <p className="h3">Page Not Found</p>
    <p className="text-secondary mt-3">
      The page you are looking for doesn't exist.
    </p>

    <Link to="/" className="btn btn-outline-primary mt-3">
      Back to home
    </Link>
  </div>
);
