
const HobbyCard = ({ hobby }) => {
  return (
    <div className="card-border rounded-xl overflow-hidden group cursor-pointer transition-all duration-500 hover:scale-[1.02]">
      <div className="relative overflow-hidden">
        <img
          src={hobby.image}
          alt={hobby.title}
          className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black-100 via-transparent to-transparent opacity-60"></div>
      </div>

      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-semibold text-white-50 leading-tight">{hobby.title}</h3>
        </div>

        <p className="text-blue-50 text-sm mb-4 leading-relaxed">{hobby.description}</p>

        <span className="hero-badge text-xs">
          {hobby.category}
        </span>
      </div>
    </div>
  );
};

export default HobbyCard;