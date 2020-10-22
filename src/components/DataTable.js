import React, { useImperativeHandle } from "react";
import DataBody from "./DataBody";

//youll create tables header here
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
                                style={{width: "10%"}}
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
