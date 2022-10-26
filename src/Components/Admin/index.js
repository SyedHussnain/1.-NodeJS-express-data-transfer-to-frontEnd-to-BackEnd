import axios from "axios";
import { useState, useEffect } from "react";
function Admin() {
  let [users, setUsers] = useState([]);

  useEffect(() => {
    async function hello() {
      let resp = await axios.get("/all-users");
      setUsers(resp.data);
    }
    hello();
  }, []);

  return (
    <>
      <table>
        <tr>
          <th>Name</th>
          <th>Password</th>
          <th>Company</th>
          <th>Delete</th>
          <th>Edit</th>
        </tr>
        {users.map((user, myIndex) => {
          return (
            <tr>
              <td>{user.name}</td>
              <td>{user.password}</td>
              <td>{user.company}</td>
              <td>
                <button
                  onClick={async () => {
                    let resp = await axios.delete("/user-delete?id" + user.id);
                    if (resp.data.success) {
                      users.splice(myIndex, 1);
                      setUsers([...users]);
                    }
                  }}
                >
                  Delete
                </button>
              </td>
              <td>
                <button>Edit</button>
              </td>
            </tr>
          );
        })}
      </table>
    </>
  );
}

export default Admin;
