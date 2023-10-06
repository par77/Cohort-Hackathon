import React from 'react'
import '../App.css'

const Main = () => {
  return (
    <div>
        <section>
            <img src="images/img1.png" alt="" id='img1' />
            <h2 id='text'>AstroCode Quest</h2>
        </section>
        <div className="sec">
            <h2>Prepare for Liftoff: Where Code Meets the Cosmos!</h2>
            <p>Are you ready to embark on a cosmic journey that will redefine the future of space exploration? Do you have a 
                passion for coding and a fascination with the mysteries of the universe? Welcome to AstroCode Quest, the 
                hackathon that's all about coding, innovation, and pushing the boundaries of astronautics and space 
                technology.
            </p><br />
            <h3>About AstroCode Quest</h3>
            <p>
            AstroCode Quest is not your ordinary hackathon; it's your launchpad to the stars. Whether you're a coding genius, an aspiring astronautical engineer, or just a space enthusiast with dreams of the cosmos, this event is your opportunity to collaborate, innovate, and pioneer the next frontier in space tech.
            </p><br />
            <h3>Event Details</h3>
            <p>Date: Sep 20, 2023 <br />
                Location: Madhapur, Hyderabad <br />
                Registration:  Register <a href="/register"> here</a>
            </p><br />
            <h3>Get Ready to Launch Your Dreams into Orbit</h3>
            <p>AstroCode Quest is your opportunity to be a part of the future of space exploration. Whether you're a coding virtuoso, an aspiring astronaut, or a space enthusiast, this hackathon is your chance to code your way into the cosmos.</p>
            <p>Gather your team, register today, and prepare to launch your coding skills into the great unknown. Together, we'll pioneer the next frontier in astronautics and explore the uncharted territories of space!
            </p>
        </div>
    </div>
  )
}

export default Main