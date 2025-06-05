import React, { useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger)

const ShowcaseSection = () => {
  const sectionRef = useRef(null)
  const project1Ref = useRef(null)
  const project2Ref = useRef(null)
  const project3Ref = useRef(null)



  useGSAP(() => {
    const projects = [project1Ref.current, project2Ref.current, project3Ref.current]

    projects.forEach((card, index) => {
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
        <div className='showcaselayout'>
          {/* Parte de la izquierda */}
          <div className='first-project-wrapper' ref={project1Ref}>
            <div className='image-wrapper'>
              <img src='/images/tienda-mern.png' alt='' />
            </div>
            <div className='text-content'>
              <h2>Tienda con Stack MERN</h2>
              <p className='text-white-50 md:text-xl'>
                Una tienda online construida con MongoDB, Express, React y Node.js. Es un prototipo de una tienda que permite a los usuarios navegar por productos, agregarlos al carrito y realizar pedidos.
              </p>
            </div>
          </div>

          {/* Parte de la derecha */}
          <div className='project-list-wrapper overflow-hidden'>
            <div className='project' ref={project2Ref}>
              <div className='image-wrapper bg-[#ffefdb]'>
                <img src='/images/kukocraft.png' alt='Clon de Minecraft' />
              </div>
              <h2>Clon de Minecraft con React y Three.js</h2>
            </div>

            <div className='project' ref={project3Ref}>
              <div className='image-wrapper bg-[#ffefdb]'>
                <img src='/images/project3.png' alt='YC Directory' />
              </div>
              <h2>YC Directory - Startup Showcase app</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ShowcaseSection