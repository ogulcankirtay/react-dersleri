import React from 'react'

function Container({ children }) {
    console.log(children);
    return (
        <div><>Container</>
            {children}
        </div>
    )
}



export default Container