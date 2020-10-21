import React from "react";

function DataBody({ users }){
   
    return (
        <tbody>
            {
                users.map((user) => {
                    return(
                        <tr>
                            <td>{user.picture.large}</td>
                            <td>{user.name.first}</td>
                            <td>{user.name.last}</td>
                            <td>{user.phone}</td>
                            <td>{user.email}</td>
                            <td>{user.date}</td>
                            
                                
                            
    
                        </tr>
                    )
                })
            }
        </tbody>
        
    )
}

export default DataBody;
