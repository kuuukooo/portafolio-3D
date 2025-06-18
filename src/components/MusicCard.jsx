import { Music, ExternalLink } from 'lucide-react'
import SpotifyEmbed from './SpotifyEmbed'

const MusicCard = ({ music }) => (
  <div className="card-border rounded-xl overflow-hidden transition-all duration-500 hover:scale-[1.01]">
    <div className="p-6">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-xl font-semibold text-white-50 mb-1">{music.title}</h3>
          <p className="text-blue-50 text-sm">{music.description}</p>
        </div>
        <div className="flex items-center gap-2">
          <Music size={18} className="text-white-50" />
          <span className="hero-badge text-xs capitalize">
            {music.type}
          </span>
        </div>
      </div>

      <SpotifyEmbed embedUrl={music.embedUrl} title={music.title} />

      <a
        href={music.spotifyUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-flex items-center gap-2 text-white-50 hover:text-white transition-colors duration-300 text-sm"
      >
        <ExternalLink size={14} />
        <span>Open in Spotify</span>
      </a>
    </div>
  </div>
);

export default MusicCard;