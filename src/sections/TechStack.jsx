import { useEffect } from 'react'
import { gsap } from 'gsap'
import { useTranslation } from 'react-i18next'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import TitleHeader from '../components/TitleHeader'
import { techStackImgs } from '../constants'

gsap.registerPlugin(ScrollTrigger)

const TechStack = () => {
  const { t } = useTranslation()
  const tech = t('techstack', { returnObjects: true })

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.batch('.tech-card', {
        interval: 0.2,
        batchMax: 6,
        start: 'top 80%',
        onEnter: batch => {
          gsap.to(batch, {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: 'power2.inOut',
            stagger: 0.1
          })
        }
      })
    })

    return () => ctx.revert()
  }, [])

  return (
    <div
      id="skills"
      className="flex-center section-padding"
    >
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title={tech.title}
          sub={tech.sub}
        />

        <div className="tech-grid">
          {techStackImgs.map(({ imgPath, name, link }, i) => (
            <div
              key={i}
              className="card-border tech-card overflow-hidden group xl:rounded-full rounded-lg"
              style={{ transform: 'translateY(50px)', opacity: 0 }}
            >
              <div className="tech-card-animated-bg" />
              <div className="tech-card-content">
                <div className="tech-icon-wrapper">
                  <img
                    src={imgPath}
                    alt={name}
                    loading="lazy"
                    decoding="async"
                    onClick={() => window.open(link, '_blank')}
                  />
                </div>
                <div className="padding-x w-full">
                  <p>{name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TechStack
