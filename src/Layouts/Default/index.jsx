import NavigationItem from "../../components/NavigationItem"

import "./style.css"
import avatar from "../../assets/profile-pic.png"

import useInformation from "../../hooks/useInformation"

export default function Default({ currentPage, children }) {
  const { information, error, isLoading } = useInformation()

  if (isLoading) {
    return <p>Carregando...</p>
  }

  if (error) {
    return <p>Ocorreu um erro ao buscar as informações.</p>
  }

  if (!information) {
    return null
  }

  return (
    <>
      <header className="flex">
        <div className="profile-wrapper flex">
          <img src={information.profilePic} alt="Foto de Elias Neto" />
          <div className="text-wrapper flex">
            <h1>{information.name}</h1>
            <p>
              <em>{information.office}</em>
            </p>
          </div>
        </div>

        <nav>
          <ul className="flex">
            <NavigationItem
              path="/"
              isActive={currentPage === "about"}
              text="Sobre"
            />
            <NavigationItem
              path="/projetos"
              isActive={currentPage === "projects"}
              text="Projetos"
            />
            <NavigationItem
              path="/contato"
              isActive={currentPage === "contact"}
              text="Contato"
            />
          </ul>
        </nav>
      </header>

      <main className="flex">{children}</main>

      <footer>
        Developed with ❤ by <u>{information.name}</u>.
      </footer>
    </>
  )
}
