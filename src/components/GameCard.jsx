import { Gamepad2, Star } from 'lucide-react';

const GameCard = ({ game }) => (
  <div className="card-border rounded-xl overflow-hidden group cursor-pointer transition-all duration-500 hover:scale-[1.02]">
    <div className="relative overflow-hidden">
      <img
        src={game.image}
        alt={game.title}
        className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black-100 via-transparent to-transparent opacity-60"></div>
    </div>

    <div className="p-6">
      <div className="flex items-start justify-between mb-3">
        <h3 className="text-xl font-semibold text-white-50 leading-tight">{game.title}</h3>
        <Gamepad2 size={20} className="text-blue-50 flex-shrink-0 mt-1" />
      </div>

      <p className="text-blue-50 text-sm mb-4 leading-relaxed">{game.description}</p>

      <div className="flex items-center justify-between mb-4">
        <span className="hero-badge text-xs">
          {game.genre}
        </span>
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={14}
              className={`${i < game.rating ? 'text-white-50 fill-current' : 'text-black-50'} transition-colors duration-300`}
            />
          ))}
        </div>
      </div>

      <p className="text-xs text-blue-50">{game.platform}</p>
    </div>
  </div>
);

export default GameCard;