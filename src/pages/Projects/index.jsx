import DefaultLayout from "../../Layouts/Default"
import ProjectItem from "../../components/ProjectItem"

import "./style.css"
import projects from "./projects.json"
import img1 from "../../assets/find-a-friend.gif"
import img2 from "../../assets/rocketnotes.gif"

import usePortfolio from "../../hooks/usePortfolio"

export default function Projects() {
  const { portfolio, error, isLoading } = usePortfolio()

  if (isLoading) {
    return <p>Carregando...</p>
  }

  if (error) {
    return <p>Ocorreu um erro ao buscar as informações.</p>
  }

  if (!portfolio) {
    return null
  }

  const images = [img1, img2]

  return (
    <DefaultLayout currentPage="projects">
      {portfolio.map((project, index) => (
        <ProjectItem
          key={index}
          title={project.title}
          description={project.description}
          imgSrc={project.demonstration}
          githubHref={project.github}
          deployHref={project.deploy}
        />
      ))}
    </DefaultLayout>
  )
}
