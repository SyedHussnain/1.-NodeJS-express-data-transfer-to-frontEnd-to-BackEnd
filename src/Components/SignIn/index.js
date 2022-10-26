import axios from "axios";
// import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import { NotificationManager } from "react-notifications";
// import { useDispatch } from "react-redux";

function SignIn() {
  let userName = useRef();
  let userPassword = useRef();
  let userCompany = useRef();

  // let dispatch = useDispatch();
  // let navigate = useNavigate();

  const loginUser = async (evt) => {
    evt.preventDefault();

    let nyaStudent = {
      name: userName.current.value,
      password: userPassword.current.value,
      company: userCompany.current.value,
    };

    let userMila = await axios.post("/abc", nyaStudent);

    if (userMila.data) {
      NotificationManager.success("User Found");
    } else {
      NotificationManager.error("User not Found");
    }
    evt.form.reset();
  };

  return (
    <>
      <form onSubmit={loginUser}>
        <div>
          <h1 style={{ textAlign: "center" }}>SignIn</h1>
          <input
            ref={userName}
            name="name"
            type="text"
            // onChange={updateData}
            placeholder="Enter Name"
          />
          <input
            ref={userPassword}
            name="password"
            type="password"
            // onChange={updateData}
            placeholder="Enter Password"
          />
          <input
            ref={userCompany}
            name="company"
            type="text"
            // onChange={updateData}
            placeholder="Enter Company"
          />
          <button type="submit">Sign In</button>
        </div>
      </form>
    </>
  );
}

export default SignIn;
