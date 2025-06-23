const SpotifyEmbed = ({ embedUrl, title }) => (
  <div className="w-full h-40 md:h-48 rounded-xl overflow-hidden card-border">
    <iframe
      src={embedUrl}
      width="100%"
      height="100%"
      allowfullscreen=""
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy"
      title={title}
      className="rounded-xl"
    ></iframe>
  </div>
)

export default SpotifyEmbed
