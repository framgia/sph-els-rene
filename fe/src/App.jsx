import "./index.css";

function App() {
  return (
    <div className="d-flex justify-content-md-center align-items-center vh-100r">
      <div className="p-5 mt-5">
        <div className="d-flex justify-content-center">
          <h1>Welcome to SELS Project</h1>
        </div>
        <div className="card w-50 m-auto">
          <div className="card-body">
            <h5 className="card-title">E Learning Sytem</h5>
            <h6 className="card-subtitle mb-2 text-muted">
              Break the Language Barrier
            </h6>
            <p className="card-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis,
              dolorum qui, aperiam commodi corporis minima pariatur nulla
              reprehenderit laborum recusandae quasi placeat omnis quae dolores,
              mollitia adipisci. Minima, porro officia.
            </p>

            <div className="d-flex justify-content-center mt-5">
              <button type="button" class="btn btn-primary mx-4">
                Sign In
              </button>
              <button type="button" class="btn btn-primary mx-4">
                Create New Account
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
