const HobbyCard = ({ hobby = {} }) => {
  const {
    title = "Untitled Hobby",
    description = "No description available",
    image = "/placeholder.svg",
  } = hobby

  return (
    <div className="card-border rounded-xl overflow-hidden group cursor-pointer transition-all duration-500 hover:scale-[1.02]">
      <div className="relative overflow-hidden">
        <img
          src={image || "/placeholder.svg"}
          alt={title}
          className="w-full h-40 md:h-48 object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black-100 via-transparent to-transparent opacity-60"></div>
      </div>

      <div className="p-4 md:p-6 space-y-3 md:space-y-4">
        <div>
          <h3 className="text-lg md:text-xl font-semibold text-white-50 leading-tight mb-2 group-hover:text-white transition-colors duration-300">
            {title}
          </h3>
          <p className="text-blue-50 text-sm leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  )
}

export default HobbyCard
