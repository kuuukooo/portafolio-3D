import { Music } from "lucide-react"
import SpotifyEmbed from "./SpotifyEmbed"

const MusicCard = ({ music = {} }) => {
  const {
    title = "Untitled",
    description = "No description available",
    type = "playlist",
    embedUrl = "",
  } = music

  return (
    <div className="card-border rounded-xl overflow-hidden transition-all duration-500 hover:scale-[1.01] mb-6">
      <div className="p-4 md:p-6 space-y-4">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <h3 className="text-lg md:text-xl font-semibold text-white-50 mb-2 group-hover:text-white transition-colors duration-300">
              {title}
            </h3>
            <p className="text-blue-50 text-sm leading-relaxed">{description}</p>
          </div>
          <div className="flex items-center gap-2 md:gap-3 ml-4">
            <div className="bg-black-200 rounded-full p-1.5 md:p-2">
              <Music size={16} className="text-white-50 md:w-[18px] md:h-[18px]" />
            </div>
            <span className="hero-badge text-xs capitalize">{type}</span>
          </div>
        </div>

        {embedUrl ? (
          <SpotifyEmbed embedUrl={embedUrl} title={title} />
        ) : (
          <div className="w-full h-40 md:h-48 rounded-xl card-border flex-center">
            <div className="text-center text-blue-50">
              <Music size={32} className="mx-auto mb-4 opacity-50 md:w-12 md:h-12" />
              <p className="text-sm">No Spotify embed available</p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default MusicCard
