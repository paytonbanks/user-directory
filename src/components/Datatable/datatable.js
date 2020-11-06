import React, { useHandle } from "react";
import DataBody from "../Databody/databody";

function DataTable({ users }){

    var headings = [{name: "Name"}, {name:"Phone"}, {name: "Email"} ]
    return(
        <>
        <table>
            <thead className="Tablerow">
                <tr>
                    {
                      headings.map(({ name }) =>{
                          console.log("obj", name)
                          return (
                              <th
                              key={name}
                                style={{width: "30%", alignItems: "center", }}
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
