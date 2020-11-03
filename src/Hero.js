import React from 'react'

const Hero = (props) => {
    return (
        <section className="hero">
            <nav>
                <h2>Welcome</h2>
                <button onClick={props.handleSignOut}>Logout</button>
            </nav>
        </section>
    )
}

export default Hero
