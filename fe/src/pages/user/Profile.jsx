import React, { Fragment } from "react";
import Header from "../../components/Header";

function Profile() {
  return (
    <Fragment>
      <Header />
      <div className="container card p-2">
        <div className="row gx-2">
          <div className="col-lg-4 col-md-4 mb-2">
            <div className="p-3 card bg-light">
              <div className="card">
                <img
                  className="mx-auto"
                  style={{ width: 200, height: 200 }}
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgPUt70Z-9sTvmykuEnvR0kUJci3CgZ9F_Li3ihOdhRw&s"
                  alt="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgPUt70Z-9sTvmykuEnvR0kUJci3CgZ9F_Li3ihOdhRw&s"
                />
              </div>
            </div>
            <div className="mt-2 d-flex">
              <button className="btn btn-outline-secondary w-75 mx-auto">
                Edit
              </button>
            </div>
          </div>
          <div className="col mb-2">
            <div className="p-3 card bg-light">
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  First Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="email"
                  aria-describedby="emailHelp"
                  name="email"
                  data-name="email"
                  //   onChange={handleInput}
                  //   value={data.title}
                  value="email"
                  disabled
                />
              </div>

              <div className="mb-3">
                <label htmlFor="first_name" className="form-label">
                  First Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="first_name"
                  aria-describedby="first_nameHelp"
                  name="first_name"
                  data-name="first_name"
                  //   onChange={handleInput}
                  //   value={data.title}
                  value="first_name"
                  disabled
                />
              </div>

              <div className="mb-3">
                <label htmlFor="middle_name" className="form-label">
                  First Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="middle_name"
                  aria-describedby="middle_nameHelp"
                  name="middle_name"
                  data-name="middle_name"
                  //   onChange={handleInput}
                  //   value={data.title}
                  value="middle_name"
                  disabled
                />
              </div>

              <div className="mb-3">
                <label htmlFor="last_name" className="form-label">
                  First Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="last_name"
                  aria-describedby="last_nameHelp"
                  name="last_name"
                  data-name="last_name"
                  //   onChange={handleInput}
                  //   value={data.title}
                  value="last_name"
                  disabled
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Profile;
