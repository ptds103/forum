import react, { useState } from "react";
import "./loginpage.css";
import { Alert, Spinner } from "react-bootstrap";
import { createNewUser } from "../api/authenticationService";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [alertText, setAlertText] = useState("");
  const [alert, setAlert] = useState(null);

  const [values, setValues] = useState({
    userName: "",
    password: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
    createNewUser(values)
      .then((res) => {
        console.log(res);
        setAlert(true);
        setAlertText({ text: "New User Created", color: "success" });
        setTimeout(() => {
          setAlert(null);
        }, 3000);
      })
      .catch(
        (err) => {
          if (err && err.response) {
            setAlert(err);
            switch (err.response.status) {
              case 500:
                console.log("500 status");
                setAlertText({ text: "Username already exist", color: "danger" });
                break;
              default:
                setAlertText({ text: "Try Again Later", color: "danger" });
            }
          } else {
            setAlertText({ text: "Something went wrong", color: "danger" });
          }
        },
        setTimeout(() => {
          setAlert(null);
          navigate("/");
        }, 1500)
      );
  };

  const handleChange = (e) => {
    e.persist();
    setValues((values) => ({
      ...values,
      [e.target.name]: e.target.value,
    }));
  };

  console.log("Loading ", loading);

  return (
    <div className="login-page">
      <section className="h-100">
        <div className="container h-100">
          <div className="row justify-content-md-center h-100">
            <div className="card-wrapper">
              <div className="card fat">
                <div className="card-body">
                  <h4 className="card-title">Register</h4>

                  <form className="my-login-validation" onSubmit={handleSubmit} noValidate={false}>
                    <div className="form-group">
                      <label htmlFor="email">User Name</label>
                      <input
                        id="username"
                        type="text"
                        className="form-control"
                        minLength={5}
                        value={values.userName}
                        onChange={handleChange}
                        name="userName"
                        required
                      />

                      <div className="invalid-feedback">UserId is invalid</div>
                    </div>

                    <div className="form-group">
                      <label>First Name</label>
                      <input
                        id="firstName"
                        type="text"
                        className="form-control"
                        minLength={3}
                        value={values.firstName}
                        onChange={handleChange}
                        name="firstName"
                        required
                      />
                      <div className="invalid-feedback">Name length too short</div>
                    </div>

                    <div className="form-group">
                      <label>Last Name</label>
                      <input
                        id="lastName"
                        type="text"
                        className="form-control"
                        minLength={3}
                        value={values.lastName}
                        onChange={handleChange}
                        name="lastName"
                        required
                      />
                      <div className="invalid-feedback">Name length too short</div>
                    </div>

                    <div className="form-group">
                      <label>email</label>
                      <input id="email" type="email" className="form-control" value={values.email} onChange={handleChange} name="email" required />
                      <div className="invalid-feedback">Invalid Email</div>
                    </div>

                    <div className="form-group">
                      <label>Password</label>
                      <input
                        id="password"
                        type="password"
                        className="form-control"
                        minLength={8}
                        value={values.password}
                        onChange={handleChange}
                        name="password"
                        required
                      />
                      <div className="invalid-feedback">Password is required</div>
                    </div>

                    <div className="form-group">
                      <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">
                          Remember me{" "}
                          <a onClick={() => navigate("/")} className="float-right">
                            Need to Login?
                          </a>
                        </label>
                      </div>
                    </div>

                    <div className="form-group m-0">
                      <button type="submit" className="btn btn-primary">
                        Register
                        {loading && <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" />}
                        {/* <ClipLoader
                                        //css={override}
                                        size={20}
                                        color={"#123abc"}
                                        loading={loading}
                                        /> */}
                      </button>
                    </div>
                  </form>
                  {alert && (
                    <Alert style={{ marginTop: "20px" }} variant={alertText.color}>
                      {alertText.text}
                    </Alert>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RegisterPage;
