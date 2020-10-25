import React, { useHandle } from "react";
import DataBody from "./DataBody";

function DataTable({ users }){

    var headings = [{name: "Image"}, {name: "Name"}, {name:"Phone"}, {name: "Email"} ]
    return(
        <>
        <table>
            <thead>
                <tr>
                    {
                      headings.map(({ name }) =>{
                          console.log("obj", name)
                          return (
                              <th
                              key={name}
                                style={{width: "25%", alignItems: "center", }}
                              >
                                  <span>{name}</span>
                              </th>
                          )
                      })  
                    }
                </tr>
            </thead>
            <DataBody users={users} />
        </table>
      
        </>
    )
}

export default DataTable
