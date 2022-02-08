import './Project.css'

const Project = ({ project }) => {
  const {
    title,
    image,
    appLink,
    repoLink
  } = project;

  return (
    <div className="project-content">
      <h3>{title}</h3>
      <img className="project-img" src={require(`../../../assets/images/${image}`)}></img>
      <div className="link-container">
        <a href={appLink} target="_blank">Application</a>
        <a href={repoLink} target="_blank">Repository</a>
      </div>
    </div>
  )
}

export default Project;