// Home.js
import styles from './style.module.scss';
import Project from './project';
import Link from 'next/link'; // Importa el componente Link de Next.js

export default function Home() {
  const projects = [
    {
      title1: "Como La IA esta",
      title2: "transformando empresas",
      src: "logosolo.png",
      link: "/como-la-ia-esta-transformando-empresas" 
    },
    {
      title1: "La eficiencia liderada",
      title2: "por la Tecnología",
      src: "logosolo.png",
      link: "/eficiencia-por-tecnologia"
    },
    {
      title1: "Software: El futuro de",
      title2: "la gestión empresarial",
      src: "logosolo.png",
      link: "/el-futuro-de-la-gestion-empresarial"
    },
    {
      title1: "Posiciona 1ra ",
      title2: "tu empresa en internet",
      src: "logosolo.png",
      link: "/pocisiona-tu-empresa-seo"
    },
    {
      title1: " Aumenta las Búsquedas de tu Empresa",
      src: "logosolo.png",
      link: "/aumenta-el-trafico-de-tu-web-negocio" 
    },
    {
      title1: "SEO y Redes Sociales",
      title2: " Maximizar el Impacto  ",
      src: "logosolo.png",
      link: "/seo-y-redes-sociales-maximizar-crecimiento"
    },
    {
      title1: "Software: el futuro de",
      title2: "la gestión empresarial",
      src: "logosolo.png",
      link: "/el-futuro-de-la-gestion-empresarial"
    }, 
    {
      title1: "Como La IA esta",
      title2: "transformando empresas",
      src: "logosolo.png",
      link: "/como-la-ia-esta-transformando-empresas" 
    },
    {
      title1: "La eficiencia liderada",
      title2: "por la Tecnología",
      src: "logosolo.png",
      link: "/eficiencia-por-tecnologia"
    }
    
  ];

  return (
    <main className={styles.main}>
      <div className={styles.gallery}>
        <p>Lee acerca de las ultimas novedades en Tech</p>
        {projects.map((project, index) => (
          <Link legacyBehavior key={index} href={project.link}>
            <a>
              <Project project={project} />
            </a>
          </Link>
        ))}
      </div>
    </main>
  );
}
