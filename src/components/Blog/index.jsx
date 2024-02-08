import styles from './style.module.scss'
import Project from './project';

export default function Home() {

  const projects = [
    {
      title1: "Como La IA esta",
      title2: "transformando empresas",
      src: "jomor_design.jpeg"
    },
    {
      title1: "La eficiencia liderada",
      title2: "por la Tecnologia",
      src: "la_grange.jpeg"
    },
    {
      title1: "El impacto de Reinvencion digital",
      title2: "en el mundo",
      src: "deux_huit_huit.jpeg"
    },
    {
      title1: "Nothing",
      title2: "Design Studio",
      src: "nothing_design_studio.png"
    }
  ]

  return (
    <main className={styles.main}>
      <div className={styles.gallery}>
        <p>Lee acerca de las ultimas novedades en Tech</p>
          {
            projects.map( project => {
              return <Project project={project}/>
            })
          }
      </div>
    </main>
  )
}