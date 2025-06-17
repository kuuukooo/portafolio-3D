import { gsap } from 'gsap'
import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { expCardsStatic } from '../constants'
import { useTranslation } from 'react-i18next'
import TitleHeader from '../components/TitleHeader'
import GlowCard from '../components/GlowCard'

gsap.registerPlugin(ScrollTrigger);

const ExperienceSection = () => {
  const { t } = useTranslation()
  const sectionRef = useRef(null)
  const projectRefs = useRef([])

  const exp = t('experience', { returnObjects: true })
  const cards = expCardsStatic.map(({ key, imgPath, logoPath }) => ({
    key,
    imgPath,
    logoPath,
    ...exp.cards[key]
  }))

  useGSAP(() => {
    gsap.utils.toArray('.timeline-card').forEach((card) => {
      gsap.from(card, {
        xPercent: -100,
        opacity: 0,
        transformOrigin: 'left left',
        duration: 1,
        ease: 'power2.inOut',
        scrollTrigger: {
          trigger: card,
          start: 'top 80%',
        },
      })
    })

    gsap.to('.timeline', {
      transformOrigin: 'bottom bottom',
      ease: 'power1.inOut',
      scrollTrigger: {
        trigger: '.timeline',
        start: 'top center',
        end: '70% center',
        onUpdate: (self) => {
          gsap.to('.timeline', {
            scaleY: 1 - self.progress,
          })
        },
      },
    })

    gsap.utils.toArray('.expText').forEach((text) => {
      gsap.from(text, {
        opacity: 0,
        xPercent: 0,
        duration: 1,
        ease: 'power2.inOut',
        scrollTrigger: {
          trigger: text,
          start: 'top 60%',
        },
      })
    }, '<')
  }, [])

  return (
    <section
      id='experience'
      className='flex-center md:mt-40 mt-20 section-padding xl:px-0'
      ref={sectionRef}
    >
      <div className='w-full h-full md:px-20 px-5'>
        <TitleHeader
          title={exp.title}
          sub={exp.sub}
        />
        <div className='mt-32 relative'>
          <div className='relative z-50 xl:space-y-32 space-y-10'>
            {cards.map((card, idx) => (
              <div key={card.key} className='exp-card-wrapper' ref={el => projectRefs.current[idx] = el}>
                <div className='xl:w-2/6'>
                  <GlowCard card={card}>
                    <div>
                      <img src={card.imgPath} alt='exp-img' />
                    </div>
                  </GlowCard>
                </div>
                <div className='xl:w-4/6'>
                  <div className='flex items-start'>
                    <div className='timeline-wrapper'>
                      <div className='timeline' />
                      <div className='gradient-line w-1 h-full' />
                    </div>
                    <div className='expText flex xl:gap-20 md:gap-10 gap-5 relative z-20'>
                      <div className='timeline-logo'>
                        <img src={card.logoPath} alt='logo' />
                      </div>
                      <div>
                        <h1 className='font-semibold text-3xl'>{card.title}</h1>
                        <p className='my-5 text-white-50'>🏛️&nbsp;{card.company}</p>
                        <p className='my-5 text-white-50'>🗓️&nbsp;{card.date}</p>
                        <p className='text-[#839CB5] italic'>{card.respon}</p>
                        <ul className='list-disc ms-5 mt-5 flex flex-col gap-5 text-white-50'>
                          {card.responsibilities.map((res, i) => (
                            <li key={i} className='text-lg'>{res}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ExperienceSection;