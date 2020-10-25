import React from "react";

function DataBody({ users }) {

  return (
    <tbody>
      {users[0] !== undefined && users[0].name !== undefined ? (
          users.map((user) => {
              return(
                    <tr>
                        <td>
                            <img src={user.picture.large} alt="emp photo" />
                        </td>
                        <td>{user.name.first} {user.name.last}</td>
                        <td>{user.phone}</td>
                        <td>{user.email}</td>
                        <td>{user.age}</td>
                    </tr>
              )
          })
      ) : (
          <></>
      )
      }
    </tbody>
      
  )
}

export default DataBody;
