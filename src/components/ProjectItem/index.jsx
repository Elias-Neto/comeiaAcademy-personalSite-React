import githubIcon from "../../assets/github.svg"
import clickIcon from "../../assets/click.svg"
import "./style.css"

export default function ProjectItem({
  title,
  imgSrc,
  githubHref,
  deployHref,
  ...rest
}) {
  return (
    <div className="card flex" {...rest}>
      <h3>{title}</h3>

      <div className="wrapper flex">
        <img src={imgSrc} alt="Demonstração do projeto" />

        <div className="buttons flex">
          <button>
            <a href={githubHref} className="flex">
              <img src={githubIcon} alt="Logo do Github" />
              Github
            </a>
          </button>
          <button>
            <a href={deployHref} className="flex">
              <img src={clickIcon} alt="Ícone de uma seta do mouse clicando" />
              Deploy
            </a>
          </button>
        </div>
      </div>
    </div>
  )
}
