import React from 'react'

const Login = (props) => {

const {email,password , setEmail ,setPassword,handleLogin,handleSignUp,hasAccount,setHasAccount,emailErrors,passwordError} = props;

    return (
        <section className="login">
            <div className="loginContainer">
            <label>Username</label>
                <input type="text" autoFocus required value={email} onChange={(e) => setEmail(e.target.value)} />
                <p className="errorMsg">{emailErrors}</p>
            <label>Password</label>
                <input type="text" autoFocus required value={password} onChange={(e) => setPassword(e.target.value)} />
                <p className="errorMsg">{passwordError}</p>
                <div className="btnContainer">
                    {hasAccount?(
                        <>
                        <button onClick={handleLogin}>Sign In</button>
                        <p>Don't have an Account ? <span onClick={() => setHasAccount(!hasAccount)}>Sign Up</span></p>
                        </>
                    ):(
                        <>
                        <button onClick={handleSignUp}>Sign Up</button>
                        <p>Have an Account ? <span onClick={() => setHasAccount(!hasAccount)}>Sign In</span></p>
                        </>
                    )}
                </div>
            </div>
                
        </section>
    )
}

export default Login
