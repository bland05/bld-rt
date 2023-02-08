import React from 'react'
import './about.css'
import ME from '../../assets/me.png'
import {TbAward} from 'react-icons/tb'
import {AiOutlineUser} from 'react-icons/ai'
import {VscFolderLibrary} from 'react-icons/vsc'


const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About IMG" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">

            <article className='about__card'>
              <TbAward className='about__icon'/>
              <h5>Experience</h5>
              <small>+2 Years Working</small>
            </article>

            <article className='about__card'>
              <AiOutlineUser className='about__icon'/>
              <h5>Clients</h5>
              <small>16+ Worldwide</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Project</h5>
              <small>4+ Completed</small>
            </article>
          </div>

          <p> 
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae quas possimus esse quasi numquam quidem fuga. Inventore, cum quasi, tempore animi sequi consequatur dolor, vel reiciendis alias pariatur veniam nisi?
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div> 
      </section>
  )
}

export default About