import { useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { useTranslation } from 'react-i18next'
import TitleHeader from '../components/TitleHeader'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { FiExternalLink } from 'react-icons/fi'
import { projectData } from '../constants'

gsap.registerPlugin(ScrollTrigger)

const ShowcaseSection = () => {
  const { t } = useTranslation()
  const sectionRef = useRef(null)
  const projectRefs = useRef([])

  // obtenemos todo el bloque de traducciones de showcase
  const showcase = t('showcase', { returnObjects: true })

  useGSAP(() => {
    projectRefs.current.forEach((card, index) => {
      gsap.fromTo(
        card,
        { y: 50, opacity: 0 },
        {
          y: 0, opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: { trigger: card, start: 'top bottom-=100' }
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
        <TitleHeader title={showcase.title} sub={showcase.sub} />
        <div className='showcaselayout mt-8 grid md:grid-cols-2'>
          {projectData.map((proj, idx) => {
            const tr = showcase.projects[idx]
            return (
              <div
                key={proj.id}
                ref={el => (projectRefs.current[idx] = el)}
                className='project-card flex flex-col rounded-4xl shadow-lg overflow-hidden'
              >
                <div className='image-wrapper'>
                  <img
                    src={proj.img}
                    alt={tr.alt}
                    className='w-full object-cover rounded-2xl'
                  />
                </div>
                <div className='p-4 flex-1 flex flex-col'>
                  <div className='mb-2 flex space-x-4 text-gray-400'>
                    <a
                      href={proj.links.repo}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='flex items-center space-x-1 text-3xl md:text-xl hover:text-white transition'
                    >
                      <FaGithub />
                      <span className='text-sm md:text-xs'>
                        {t('showcase.projectRepo')}
                      </span>
                    </a>
                    <a
                      href={proj.links.post}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='flex items-center space-x-1 text-3xl md:text-xl hover:text-white transition'
                    >
                      <FaLinkedin />
                      <span className='text-sm md:text-xs'>
                        {t('showcase.projectPost')}
                      </span>
                    </a>
                    <a
                      href={proj.links.live}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='flex items-center space-x-1 text-3xl md:text-xl hover:text-white transition'
                    >
                      <FiExternalLink />
                      <span className='text-sm md:text-xs'>
                        {t('showcase.projectLive')}
                      </span>
                    </a>
                  </div>
                  <h2 className='text-xl font-semibold mb-2'>{tr.title}</h2>
                  <p className='text-white-50 md:text-lg flex-1'>
                    {tr.desc}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default ShowcaseSection
