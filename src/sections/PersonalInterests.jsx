import { useState } from 'react';
import { Music, Gamepad2, BookOpen, MapPin, PenTool } from 'lucide-react';
import GameCard from '../components/GameCard';
import HobbyCard from '../components/HobbyCard';
import TitleHeader from '../components/TitleHeader';
import MusicCard from '../components/MusicCard';
import { hobbies, favoriteGames, spotifyContent, stats } from '../constants';

const PersonalInterests = () => {
  const [activeSection, setActiveSection] = useState('hobbies');

  const getCurrentData = () => {
    switch (activeSection) {
      case 'hobbies': return hobbies;
      case 'games': return favoriteGames;
      case 'music': return spotifyContent;
      default: return hobbies;
    }
  };

  const renderCards = () => {
    const data = getCurrentData();

    if (activeSection === 'hobbies') {
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {data.map((item) => <HobbyCard key={item.id} hobby={item} />)}
        </div>
      );
    } else if (activeSection === 'games') {
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {data.map((item) => <GameCard key={item.id} game={item} />)}
        </div>
      );
    } else {
      return (
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {data.map((item) => <MusicCard key={item.id} music={item} />)}
        </div>
      );
    }
  };

  return (
    <section className="section-padding" id='aboutme'>
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <TitleHeader
            title="Personal Interests"
            sub="About Me 🤓"
          />
        </div>

        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-10 items-stretch">

          {/* Personal Image - 40% on desktop */}
          <div className="xl:col-span-5">
            <div className="relative group perspective-1000">
              <div className="card-border rounded-2xl overflow-hidden transition-all duration-700 group-hover:transform group-hover:rotate-y-12 group-hover:rotate-x-6 group-hover:scale-105"
                style={{
                  transformStyle: 'preserve-3d',
                  transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg)'
                }}>

                {/* Replace this placeholder with your actual image */}
                <div className="relative w-full h-[500px] md:h-[600px] xl:h-[700px] bg-gradient-to-br from-black-200 to-black-100 flex-center">
                  <img
                    src="/images/yo.jpeg"
                    alt="José Ramírez"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Hover overlay effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white-50/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
              </div>

              {/* 3D shadow effect */}
              <div className="absolute inset-0 bg-black-200 rounded-2xl -z-10 transition-all duration-700 group-hover:translate-x-4 group-hover:translate-y-4 group-hover:opacity-20"></div>
            </div>
          </div>

          {/* Content Area - 60% on desktop */}
          <div className="xl:col-span-7">

            {/* Stats Section */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              {stats.map((stat) => (
                <button
                  key={stat.section}
                  onClick={() => setActiveSection(stat.section)}
                  className={`card-border rounded-xl p-6 text-center transition-all duration-300 ${activeSection === stat.section
                    ? 'bg-white text-black'
                    : 'hover:bg-black-200'
                    }`}
                >
                  <div className={`text-2xl md:text-3xl font-bold mb-2 ${activeSection === stat.section ? 'text-black' : 'text-white-50'
                    }`}>
                    {stat.section}
                  </div>
                  <div className={`text-sm font-medium ${activeSection === stat.section ? 'text-black' : 'text-blue-50'
                    }`}>
                    {stat.label}
                  </div>
                </button>
              ))}
            </div>

            {/* Dynamic Content */}
            <div className="transition-all duration-500">
              <div className="mb-6">
                <h3 className="text-2xl md:text-3xl font-semibold text-white-50 mb-2 capitalize">
                  {activeSection === 'games' ? 'Video Games' : activeSection}
                </h3>
                <p className="text-blue-50">
                  {activeSection === 'hobbies' && "Activities that inspire creativity and personal growth"}
                  {activeSection === 'games' && "Games that have shaped my problem-solving skills"}
                  {activeSection === 'music' && "Playlists that keep me in the zone while coding"}
                </p>
              </div>

              {renderCards()}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PersonalInterests;