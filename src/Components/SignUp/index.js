import { useState } from "react";
import axios from "axios";
import { v4 } from "uuid";

function SignUp() {
  let [user, setUser] = useState({});
  const updateData = (evt) => {
    setUser({
      ...user,
      [evt.target.name]: evt.target.value,
    });
  };
  const saveUser = async () => {
    user.id = v4();
    console.log(user);
    await axios.post("/signup", user);
  };

  return (
    <>
      <div>
        <h1 style={{ textAlign: "center" }}>SignUp</h1>
        <input
          name="name"
          type="text"
          onChange={updateData}
          placeholder="Enter Name"
        />
        <input
          name="password"
          type="password"
          onChange={updateData}
          placeholder="Enter Password"
        />
        <input
          name="company"
          type="text"
          onChange={updateData}
          placeholder="Enter Company"
        />
        <button onClick={saveUser}>SignUp</button>
      </div>
    </>
  );
}

export default SignUp;
