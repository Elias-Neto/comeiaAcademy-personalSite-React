import "../../styles/global.css"
import "../../styles/theme.css"

import DefaultLayout from "../../Layouts/Default"
import Section from "../../components/Section"

export default function About() {
  return (
    <DefaultLayout currentPage="about">
      <Section title="Opa, me chamo Elias! &#128075;" className="flex">
        <div className="description flex">
          <p>
            Tenho 18 anos e moro no Agreste de Pernambuco &#128153;&#127774;.
          </p>
          <p>
            &#128064; Estuou em busca da minha
            <span>
              <strong>primeira oportunidade</strong>
            </span>{" "}
            para poder atuar no área de Desenvolvimento de Software.
          </p>
          <p>
            &#128205; Meu propósito é poder
            <span>
              <strong>ajudar as pessoas</strong>
            </span>{" "}
            a resolver problemas. Através da tecnologia, busco agregar valor
            desenvolvendo soluções funcionais que mitiguem dores reais.
          </p>
          <p>
            &#127919; Atualmente, meu foco é o
            <span>
              <strong>Desenvolvimento Web Full stack</strong>
            </span>{" "}
            e estou construindo minha base sólida na tríade desse ambiente
            (HTML, CSS e JavaScript). Viso me aprofundar na Stack: React JS,
            React Native e Node JS.
          </p>
          <p>
            🙋‍♂️ Minhas principais{" "}
            <span>
              <strong>Soft Skills</strong>
            </span>{" "}
            são: organização, comunicação, curiosidade, empatia, liderança e
            responsabilidade.
          </p>
          <p>
            &#128640; Eu amo aprender coisas novas e acredito fortemente no
            aprendizado contínuo, o próximo nível nunca será o último
            <span>
              <strong> #NeverStopLearning</strong>
            </span>
            .
          </p>
        </div>
      </Section>
      <Section title="EDUCAÇÃO" className="education flex">
        <ul className="flex">
          <li>
            &#128204; Algoritmos e Lógica de Programação (Curso em Vídeo);
          </li>
          <li>&#128204; JavaScript Iniciante (Curso em Vídeo);</li>
          <li>
            &#128204; Desenvolvimento Web Full Stack (Explorer - Rocketseat);
          </li>
          <li>
            &#128204; Análise e Desenvolvimento de Sistemas (Faculdade Nova
            Roma);
          </li>
          <li>&#128204; Desenvolvimento de Software (Comeia Academy);</li>
          <li>&#128204; General English (Inglês para Devs);</li>
        </ul>
      </Section>
    </DefaultLayout>
  )
}
