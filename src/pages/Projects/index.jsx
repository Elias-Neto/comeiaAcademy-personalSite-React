import DefaultLayout from "../../Layouts/Default"
import ProjectItem from "../../components/ProjectItem"

import "./style.css"
import projects from "./projects.json"
import img1 from "../../assets/find-a-friend.gif"
import img2 from "../../assets/rocketnotes.gif"

export default function Projects() {
  const images = [img1, img2]

  return (
    <DefaultLayout currentPage="projects">
      {projects.map((project, index) => (
        <ProjectItem
          key={index}
          title={project.title}
          imgSrc={images[index]}
          githubHref={project.githubHref}
          deployHref={project.deployHref}
        />
      ))}
    </DefaultLayout>
  )
}
