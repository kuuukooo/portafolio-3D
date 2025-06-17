import React from 'react'
import { useTranslation } from 'react-i18next'
import { abilities } from '../constants'
import TitleHeader from '../components/TitleHeader'

const FeatureCards = () => {
  const { t } = useTranslation()

  // Obtenemos el bloque de featureCards
  const fc = t('featureCards', { returnObjects: true })

  return (
    <div id='cualities' className='w-full padding-x-lg mb-70'>
      <TitleHeader
        title={fc.title}
        sub={fc.sub}
      />
      <div className='mx-auto grid-3-cols mt-30'>
        {abilities.map(({ key, imgPath }) => {
          const item = fc.abilities[key]
          return (
            <div
              key={key}
              className='card-border rounded-xl p-8 flex flex-col gap-4'
            >
              <div className='size-14 flex items-center justify-center rounded-full'>
                <img src={imgPath} alt={item.title} />
              </div>
              <h3 className='text-white text-2xl font-semibold'>
                {item.title}
              </h3>
              <p className='text-white-50 text-lg'>
                {item.desc}
              </p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default FeatureCards
