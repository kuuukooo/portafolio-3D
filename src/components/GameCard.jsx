import { Gamepad2, Star } from "lucide-react"

const StarRating = ({ rating, maxRating = 5 }) => {
  const stars = []
  const fullStars = Math.floor(rating)

  for (let i = 0; i < maxRating; i++) {
    stars.push(
      <Star
        key={i}
        size={14}
        className={`${i < fullStars ? "text-white-50 fill-current" : "text-black-50 opacity-50"
          } transition-colors duration-300`}
      />,
    )
  }

  return (
    <div className="flex items-center gap-1">
      {stars}
      <span className="text-xs text-blue-50 ml-2 font-medium">{rating.toFixed(1)}</span>
    </div>
  )
}

const GameCard = ({ game = {} }) => {
  const {
    title = "Untitled Game",
    description = "No description available",
    rating = 0,
    link = "#",
    image = "/placeholder.svg",
  } = game

  return (
    <div className="card-border rounded-xl overflow-hidden group cursor-pointer transition-all duration-500 hover:scale-[1.02]">
      <div className="relative overflow-hidden">
        <a href={link} onClick={(e) => e.stopPropagation()} target="_blank" rel="noopener noreferrer">
          <img
            src={image || "/placeholder.svg"}
            alt={title}
            className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
          />
        </a>
        <div className="absolute inset-0 bg-gradient-to-t from-black-100 via-transparent to-transparent opacity-60"></div>
      </div>

      <div className="p-6 space-y-4">
        <div>
          <h3 className="text-xl font-semibold text-white-50 leading-tight mb-2 group-hover:text-white transition-colors duration-300">
            {title}
          </h3>
          <p className="text-blue-50 text-sm leading-relaxed">{description}</p>
        </div>

        {/* Rating */}
        <div className="flex items-center justify-between">
          <StarRating rating={rating} />
        </div>
      </div>
    </div>
  )
}

export default GameCard
