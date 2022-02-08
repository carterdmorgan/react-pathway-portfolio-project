import { Col, Container, Row } from 'react-bootstrap';
import './Portfolio.css'
import Project from "./Project/Project";

const Portfolio = () => {
  const projects = [
    {
      title: 'Mallow',
      image: 'mallow.jpeg',
      appLink: 'https://homestarrunner.com/',
      repoLink: 'https://www.nintendo.com/'
    },
    {
      title: 'Geno',
      image: 'geno.png',
      appLink: 'https://homestarrunner.com/',
      repoLink: 'https://www.nintendo.com/'
    },
    {
      title: 'Mario',
      image: 'mario.jpeg',
      appLink: 'https://homestarrunner.com/',
      repoLink: 'https://www.nintendo.com/'
    },
    {
      title: 'Bowser',
      image: 'bowser.jpeg',
      appLink: 'https://homestarrunner.com/',
      repoLink: 'https://www.nintendo.com/'
    },
    {
      title: 'Peach',
      image: 'peach.jpeg',
      appLink: 'https://homestarrunner.com/',
      repoLink: 'https://www.nintendo.com/'
    },
    {
      title: 'Smithy',
      image: 'smithy.jpeg',
      appLink: 'https://homestarrunner.com/',
      repoLink: 'https://www.nintendo.com/'
    }
  ]

  return (
    <section className="portfolio content center">
      {projects.map(project => (
        <Project
          project={project}
          key={project.title}>
        </Project>
      ))}
    </section>
  )
}

export default Portfolio;