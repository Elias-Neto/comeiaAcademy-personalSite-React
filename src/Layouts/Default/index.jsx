import NavigationItem from "../../components/NavigationItem"

import "./style.css"
import avatar from "../../assets/profile-pic.png"

export default function Default({ currentPage, children }) {
  return (
    <>
      <header className="flex">
        <div className="profile-wrapper flex">
          <img src={avatar} alt="Foto de Elias Neto" />
          <div className="text-wrapper flex">
            <h1>Elias Neto</h1>
            <p>
              <em>Desenvolvedor de Software</em>
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
        Developed with &#10084; by <u>Elias Neto</u>.
      </footer>
    </>
  )
}
