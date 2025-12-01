import React from 'react'

// export edilen veriyi başka dosyalarda kullanabiliriz 
export const users = [{
    username: "ogulcan",
    password: "12345"
},
{
    username: "ali",
    password: "54321"
}
];
function Login() {
    //fragment <></> veya div içerisine sarmalayabiliriz yoksa birden fazla element return edemeyiz
    return (
        <>
            <div>
                <p>Username</p>
                <input type="text" placeholder='username' />
            </div>
            <div>
                <p>Password</p>
                <input type="password" placeholder='password' />
            </div>
            <button>Submit</button>
        </>
    )
}

export default Login