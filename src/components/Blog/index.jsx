// Home.js
import styles from './style.module.scss';
import Project from './project';
import Link from 'next/link'; // Importa el componente Link de Next.js

export default function Home() {
  const projects = [
    {
      title1: "Como La IA esta",
      title2: "transformando empresas",
      src: "jomor_design.jpeg",
      link: "/como-la-ia-esta-transformando-empresas" 
    },
    {
      title1: "La eficiencia liderada",
      title2: "por la Tecnologia",
      src: "la_grange.jpeg",
      link: "/eficiencia-por-tecnologia"
    },
    {
      title1: "El impacto de Reinvencion digital",
      title2: "en el mundo",
      src: "deux_huit_huit.jpeg",
      link: "/impacto-reinvencion"
    },
    {
      title1: "Nothing",
      title2: "Design Studio",
      src: "nothing_design_studio.png",
      link: "/nothing-design-studio"
    },
    {
      title1: "Como La IA esta",
      title2: "transformando empresas",
      src: "jomor_design.jpeg",
      link: "/como-la-ia-esta-transformando-empresas" 
    },
    {
      title1: "La eficiencia liderada",
      title2: "por la Tecnologia",
      src: "la_grange.jpeg",
      link: "/eficiencia-por-tecnologia"
    },
    {
      title1: "El impacto de Reinvencion digital",
      title2: "en el mundo",
      src: "deux_huit_huit.jpeg",
      link: "/impacto-reinvencion"
    }, 
    {
      title1: "Como La IA esta",
      title2: "transformando empresas",
      src: "jomor_design.jpeg",
      link: "/como-la-ia-esta-transformando-empresas" 
    },
    {
      title1: "La eficiencia liderada",
      title2: "por la Tecnologia",
      src: "la_grange.jpeg",
      link: "/eficiencia-por-tecnologia"
    },
    {
      title1: "El impacto de Reinvencion digital",
      title2: "en el mundo",
      src: "deux_huit_huit.jpeg",
      link: "/impacto-reinvencion"
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
