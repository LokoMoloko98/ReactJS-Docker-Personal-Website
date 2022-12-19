import React from 'react'
import './About.css'
import Typewriter from 'typewriter-effect'
//import { Link } from 'react-scroll'
import { Fade } from 'react-reveal'
import Section from '../section/Section'
import Skills from '../skills/Skills'

const About = () => {
  return (
    <Section title="About">
      <div className="about-content">
        <Fade duration={1000}>
          <div className="about-text">
            <h2>Who is Moloko? 🤔 </h2>
            <p>
              ⚡ Moloko is the inquisitive, never-fear-to-try spirited chap who is always figuring out how to grow and improve, not just himself but also the organization with which he affiliates with.               
            </p>
            <p>
            ⚡ My curiosity has drawn me closer to technological advancements and the rapid manner in which they disrupt old systems in order to create improved evolutionize humanity. Becoming involved in these advancements is my major career goal, especially within the cloud technology space.
            </p>
            <p>
              👨🏿‍💻 Icurrently fulfil the role of Junior DevOps Engineer at <a href="https://cloud-fundis.co.za/"> Cloud Fundis </a> where I am focusing on learning and eventually practising Infrastructure-as-Code Deployments, Software Containerization and Container Orchestration. 
            </p>

            <p>
              🎓I am a recent graduate at the University of Cape Town, where I specialized in Geoinformatics and Computer Science.
            </p>

            <p>
            📝 I am currently learning AWS Developer Tools, AWS Elastic Container Service (ECS), Docker, Kubernetes, Terraform and Linux tools.   
            </p>
            
            <p>
              🧗🏿 My interests include traveling and road running.                 
            </p>
            </div>
        </Fade>
        <Skills />
      </div>
    </Section>
  )
}

export default About
