import { useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import TitleHeader from '../components/TitleHeader'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { FiExternalLink } from 'react-icons/fi'
import { projectData } from '../constants/index'

gsap.registerPlugin(ScrollTrigger)

const ShowcaseSection = () => {
  const sectionRef = useRef(null)
  const projectRefs = useRef([])

  useGSAP(() => {
    projectRefs.current.forEach((card, index) => {
      gsap.fromTo(
        card,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: 'top bottom-=100'
          }
        }
      )
    })
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    )
  }, [])

  return (
    <section ref={sectionRef} id='work' className='app-showcase'>
      <div className='w-full'>
        <TitleHeader title='Trabajos' sub='Algunos de mis trabajos más destacados 🤓' />
        <div className='showcaselayout mt-8 grid md:grid-cols-2'>
          {projectData.map((project, idx) => (
            <div
              key={project.id}
              ref={el => (projectRefs.current[idx] = el)}
              className='project-card flex flex-col rounded-4xl shadow-lg overflow-hidden'
            >
              <div className='image-wrapper'>
                <img src={project.img} alt={project.alt} className='w-full object-cover rounded-2xl' />
              </div>
              <div className='p-4 flex-1 flex flex-col'>
                <div className='mb-2 flex space-x-4 text-gray-400'>
                  <a href={project.links.repo} target='_blank' rel='noopener noreferrer' className='flex items-center space-x-1 text-3xl md:text-xl hover:text-white transition'>
                    <FaGithub />
                    <span className='text-sm md:text-xs'>Repositorio</span>
                  </a>
                  <a href={project.links.post} target='_blank' rel='noopener noreferrer' className='flex items-center space-x-1 text-3xl md:text-xl hover:text-white transition'>
                    <FaLinkedin />
                    <span className='text-sm md:text-xs'>Post de LinkedIn</span>
                  </a>
                  <a href={project.links.live} target='_blank' rel='noopener noreferrer' className='flex items-center space-x-1 text-3xl md:text-xl hover:text-white transition'>
                    <FiExternalLink />
                    <span className='text-sm md:text-xs'>Ver proyecto</span>
                  </a>
                </div>
                <h2 className='text-xl font-semibold mb-2'>{project.title}</h2>
                {project.desc && <p className='text-white-50 md:text-lg flex-1'>{project.desc}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ShowcaseSection
