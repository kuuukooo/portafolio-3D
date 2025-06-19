import { Music, ExternalLink, Play } from "lucide-react"
import SpotifyEmbed from "./SpotifyEmbed"

const MusicCard = ({ music = {} }) => {
  const {
    title = "Untitled",
    description = "No description available",
    type = "playlist",
    embedUrl = "",
    spotifyUrl = "#",
  } = music

  return (
    <div className="card-border rounded-xl overflow-hidden transition-all duration-500 hover:scale-[1.01] mb-6">
      <div className="p-6 space-y-4">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <h3 className="text-xl font-semibold text-white-50 mb-2 group-hover:text-white transition-colors duration-300">
              {title}
            </h3>
            <p className="text-blue-50 text-sm leading-relaxed">{description}</p>
          </div>
          <div className="flex items-center gap-3 ml-4">
            <div className="bg-black-200 rounded-full p-2">
              <Music size={18} className="text-white-50" />
            </div>
            <span className="hero-badge capitalize">{type}</span>
          </div>
        </div>

        {embedUrl ? (
          <SpotifyEmbed embedUrl={embedUrl} title={title} />
        ) : (
          <div className="w-full h-48 rounded-xl card-border flex-center">
            <div className="text-center text-blue-50">
              <Music size={48} className="mx-auto mb-4 opacity-50" />
              <p className="text-sm">No Spotify embed available</p>
            </div>
          </div>
        )}

        {spotifyUrl && spotifyUrl !== "#" ? (
          <div className="cta-wrapper group">
            <a href={spotifyUrl} target="_blank" rel="noopener noreferrer" className="cta-button w-full">
              <div className="bg-circle"></div>
              <div className="flex items-center justify-center gap-2 relative z-10">
                <Play size={16} className="text transition-colors duration-500" />
                <span className="text text-sm">Open in Spotify</span>
                <ExternalLink size={12} className="text transition-colors duration-500 opacity-70" />
              </div>
            </a>
          </div>
        ) : (
          <div className="px-4 py-4 rounded-lg bg-black-50 text-blue-50 text-center text-sm opacity-50">
            Spotify link unavailable
          </div>
        )}
      </div>
    </div>
  )
}

export default MusicCard
