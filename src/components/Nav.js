import React from 'react';





function Nav({ handleSearch }) {
   
    return (
        <nav>
           <div>
               <div>
                   <form>
                       <input
                            type="search"
                            onChange={e => handleSearch(e)}
                       />
                   </form>
               </div>
           </div>
        </nav>
    );
}

export default Nav;


