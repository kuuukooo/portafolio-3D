// src/sections/PersonalInterests.jsx
import React, { useState, useEffect } from "react"
import { useTranslation } from "react-i18next"

import GameCard from "../components/GameCard"
import HobbyCard from "../components/HobbyCard"
import MusicCard from "../components/MusicCard"
import TitleHeader from "../components/TitleHeader"

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
        <div className="text-center mb-16">
          <TitleHeader
            title={labels.headerTitle}
            sub={labels.headerSub}
          />
        </div>

        {/* Layout: imagen + contenido */}
        <div className="grid-12-cols items-start">
          {/* Imagen personal */}
          <div className="xl:col-span-5">
            <div className="relative group">
              <div className="card-border rounded-xl overflow-hidden transition-all duration-700 group-hover:scale-105 h-[700px]">
                <div className="relative w-full h-full bg-gradient-to-br from-black-200 to-black-100 flex-center">
                  <img
                    src="/images/yo.jpeg"
                    alt={t("aboutme.imageAlt")}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-white-50/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Contenido dinámico */}
          <div className="xl:col-span-7">
            <div className="h-[700px] flex flex-col">
              {/* Stats / Tabs */}
              <div className="grid-3-cols-md-tight mb-8 flex-shrink-0">
                {statsList.map(({ section, count }) => (
                  <button
                    key={section}
                    onClick={() => setActiveSection(section)}
                    className={`
                      card-border rounded-xl p-6 text-center
                      transition-all duration-300 hover:scale-105
                      ${activeSection === section
                        ? "bg-white text-black shadow-lg scale-105"
                        : "hover:bg-black-200"
                      }
                    `}
                  >
                    <div
                      className={`
                        text-2xl md:text-3xl font-bold mb-2
                        ${activeSection === section
                          ? "text-black"
                          : "text-white-50"
                        }
                      `}
                    >
                      {labels.sectionName(section)}
                    </div>
                    <div
                      className={`
                        text-sm font-medium
                        ${activeSection === section
                          ? "text-black"
                          : "text-blue-50"
                        }
                      `}
                    >
                      {labels.statText(section, count)}
                    </div>
                  </button>
                ))}
              </div>

              {/* Detalle de sección */}
              <div className="flex-1 flex flex-col min-h-0">
                <div className="mb-6 flex-shrink-0">
                  <h3 className="text-2xl text-center md:text-3xl font-semibold text-white-50 mb-3 capitalize">
                    {labels.sectionName(activeSection)}
                  </h3>
                  <p className="text-blue-50 text-center text-base leading-relaxed">
                    {labels.sectionDesc(activeSection)}
                  </p>
                </div>
                <div className="flex-1 overflow-y-auto pr-2 transition-all duration-500">
                  {renderCards()}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PersonalInterests
