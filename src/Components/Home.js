import React from 'react'
import hieee from '../Assets/hieee.gif'

const Home = () => {
  return (
    <>
        <section className='container home-container' id='home'>
                <div className='sign-container'><h1 className="sign">Results Speak Louder than Words</h1></div>
            <div className='home-component'>
                <img className='img' src={hieee} alt='...'/>
                <div className='quotation'>
                  Hello all,<br/> My name is AGNES LILY. I love building websites with cool features and feasible user interfaces. Iam more into solving problems with different kinds of approaches. An energetic fresher interested in<ul>
                    <li>&#128214;Learning</li>
                    <li>&#128203;Experimenting</li>
                    <li>&#128270;Analyzing</li>
                    <li>&#128161;Understanding</li>
                  </ul>
                </div>
            </div>
        </section>
    </>
  )
}

export default Home