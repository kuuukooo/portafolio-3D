// src/sections/PersonalInterests.jsx
import React, { useState, useEffect } from "react"
import { useTranslation } from "react-i18next"
import "../animations.css"

import GameCard from "../components/GameCard"
import HobbyCard from "../components/HobbyCard"
import MusicCard from "../components/MusicCard"
import TitleHeader from "../components/TitleHeader"
import StarAnimationOverlay from "../components/StarAnimationOverlay"

const PersonalInterests = () => {
  const { t } = useTranslation()

  // === 1) Datos para renderizar (arrays) ===
  const hobbies = t("aboutme.hobbies", { returnObjects: true })
  const favoriteGames = t("aboutme.favoriteGames", { returnObjects: true })
  const spotifyContent = t("aboutme.spotifyContent", { returnObjects: true })
  const statsList = t("aboutme.statsList", { returnObjects: true })

  // === 2) Textos y formatos ===
  const labels = {
    headerTitle: t("aboutme.header.title"),
    headerSub: t("aboutme.header.sub"),
    empty: (section) => t("aboutme.empty", { section }),
    emptyHint: t("aboutme.emptyHint"),
    sectionName: (sec) => t(`aboutme.sections.${sec}`),
    sectionDesc: (sec) => t(`aboutme.descriptions.${sec}`),
    statText: (sec, count) => t(`aboutme.statsText.${sec}`, { count }),
  }

  // === 3) Estado de pestaña activa, con persistencia ===
  const [activeSection, setActiveSection] = useState(() => {
    return localStorage.getItem("activeSection") || "hobbies"
  })
  useEffect(() => {
    localStorage.setItem("activeSection", activeSection)
  }, [activeSection])

  // === 4) Selección de datos según pestaña ===
  const getCurrentData = () => {
    switch (activeSection) {
      case "hobbies":
        return hobbies
      case "games":
        return favoriteGames
      case "music":
        return spotifyContent
      default:
        return hobbies
    }
  }

  // === 5) Renderizado de las tarjetas ===
  const renderCards = () => {
    const data = getCurrentData()
    if (!Array.isArray(data) || data.length === 0) {
      return (
        <div className="flex-center p-12 text-center">
          <div className="text-blue-50">
            <p className="text-lg mb-2">{labels.empty(activeSection)}</p>
            <p className="text-sm opacity-70">{labels.emptyHint}</p>
          </div>
        </div>
      )
    }
    return (
      <div className="grid-2-cols">
        {data.map((item, idx) => {
          if (activeSection === "hobbies")
            return <HobbyCard key={item.id || idx} hobby={item} />
          if (activeSection === "games")
            return <GameCard key={item.id || idx} game={item} />
          return <MusicCard key={item.id || idx} music={item} />
        })}
      </div>
    )
  }

  // === 6) JSX principal ===
  return (
    <section className="section-padding" id="aboutme">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <TitleHeader title={labels.headerTitle} sub={labels.headerSub} />
        </div>

        {/* Layout: imagen + contenido - Responsive */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 xl:gap-10">
          {/* Imagen personal - Responsive height */}
          <div className="xl:col-span-5 order-2 xl:order-1">
            <div className="relative group">
              <div className="card-border rounded-xl overflow-hidden transition-all duration-700 group-hover:scale-105 h-[1000px] md:h-[800px] xl:h-[700px]">
                <div className="relative w-full h-full bg-gradient-to-br from-black-200 to-black-100 flex-center">
                  <img src="/images/yo.jpeg" alt={t("aboutme.imageAlt")} className="w-full h-full object-cover" />
                  <StarAnimationOverlay />
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-white-50/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Contenido dinámico - Responsive */}
          <div className="xl:col-span-7 order-1 xl:order-2">
            <div className="h-auto xl:h-[700px] flex flex-col justify-self-center">
              {/* Stats / Tabs - Horizontal on mobile */}
              <div className="mb-6 md:mb-8">
                <div className="flex justify-center-safe gap-2 md:gap-3 pb-2 px-4 md:px-0">
                  {statsList.map(({ section }) => (
                    <button
                      key={section}
                      onClick={() => setActiveSection(section)}
                      className={`
                        card-border rounded-xl px-4 py-3 md:px-6 md:py-4 text-center whitespace-nowrap flex-shrink-0
                        transition-all duration-300 hover:scale-105
                        ${activeSection === section ? "bg-white text-black shadow-lg scale-105" : "hover:bg-black-200"}
                      `}
                    >
                      <div
                        className={`
                          text-sm md:text-lg lg:text-xl xl:text-2xl font-bold
                          ${activeSection === section ? "text-black" : "text-white-50"}
                        `}
                      >
                        {labels.sectionName(section)}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Detalle de sección */}
              <div className="flex-1 flex flex-col min-h-0">
                <div className="mb-6 flex-shrink-0">
                  <h3 className="text-xl md:text-2xl xl:text-3xl font-semibold text-white-50 mb-3 text-center capitalize">
                    {labels.sectionName(activeSection)}
                  </h3>
                  <p className="text-blue-50 text-sm md:text-base text-center leading-relaxed">
                    {labels.sectionDesc(activeSection)}
                  </p>
                </div>
                <div className="flex-1 xl:overflow-y-auto xl:pr-2 transition-all duration-500">{renderCards()}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PersonalInterests
