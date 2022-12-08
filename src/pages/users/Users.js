import React, { useContext, useState } from "react";
import Body from "../../components/Body";
import { PageContext } from "../../PageContextProvider";

function Users() {
  const { users } = useContext(PageContext);
  const [userData, setUserData] = useState({});

  if (Object.keys(userData).length > 0) {
    localStorage.setItem("user", JSON.stringify(userData));
    window.location.reload(false);
  }

  return (
    <Body pageName="Users">
      <ul className="user-container">
        <p>Select a user to login</p>
        {users.map((user) => (
          <li
            key={user.username}
            onClick={() => {
              setUserData(user);
            }}
          >
            <img src={user.avatar_url} alt={user.name} />
            <div>
              <h3>
                <span>Username:</span> {user.username}
              </h3>
              <h1>
                <span>Name:</span> {user.name}
              </h1>
            </div>
          </li>
        ))}
      </ul>
    </Body>
  );
}

export default Users;
