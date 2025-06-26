const SpotifyEmbed = ({ embedUrl, title }) => (
  <div className="w-full h-[300] rounded-xl overflow-hidden card-border">
    <iframe
      src={`${embedUrl}?utm_source=generator&view=coverart`}
      width="100%"
      height="400px"
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy"
      title={title}
      className="rounded-xl overflow-hidden"
    ></iframe>
  </div>
)
export default SpotifyEmbed