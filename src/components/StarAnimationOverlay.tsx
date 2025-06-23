import { useStarAnimation } from "../hooks/useStarAnimation";

interface StarAnimationOverlayProps {
  starConfigs?: any[];
  spiralConfigs?: any[];
  className?: string;
}

const StarAnimationOverlay = ({
  starConfigs,
  spiralConfigs,
  className = "",
}: StarAnimationOverlayProps) => {
  const { mounted, defaultStarConfigs, defaultSpiralConfigs } =
    useStarAnimation();

  if (!mounted) return null;

  const activeStarConfigs = starConfigs || defaultStarConfigs;
  const activeSpiralConfigs = spiralConfigs || defaultSpiralConfigs;

  return (
    <>
      {/* Animated Stars Container */}
      <div
        className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}
      >
        {activeStarConfigs.map((star) => (
          <div
            key={star.id}
            className={`absolute star-animation-${star.animationType}`}
            style={{
              ...star.position,
              animationDelay: `${star.animationDelay}ms`,
              animationDuration: `${star.animationDuration}ms`,
              transform: "translate(-50%, -50%)",
            }}
          >
            <img
              src={star.src || "/placeholder.svg"}
              alt="Decorative star"
              width={star.size}
              height={star.size}
              className="drop-shadow-lg filter brightness-110"
              style={{
                filter: "drop-shadow(0 0 8px rgba(255, 215, 0, 0.6))",
              }}
            />
          </div>
        ))}

        {/* Animated Spirals */}
        {activeSpiralConfigs.map((spiral) => (
          <div
            key={spiral.id}
            className="absolute spiral-animation"
            style={{
              ...spiral.position,
              animationDelay: `${spiral.animationDelay}ms`,
              animationDuration: `${spiral.animationDuration}ms`,
              transform: "translate(-50%, -50%)",
            }}
          >
            <img
              src={spiral.src || "/placeholder.svg"}
              alt="Decorative spiral"
              width={spiral.size}
              height={spiral.size}
              className="opacity-70"
            />
          </div>
        ))}
      </div>

      <style>{`
        @keyframes star-shimmer {
          0%, 100% {
            transform: translate(-50%, -50%) translateX(0) translateY(0) scale(1);
            opacity: 0.8;
          }
          25% {
            transform: translate(-50%, -50%) translateX(3px) translateY(-2px) scale(1.1);
            opacity: 1;
          }
          50% {
            transform: translate(-50%, -50%) translateX(-2px) translateY(1px) scale(0.9);
            opacity: 0.9;
          }
          75% {
            transform: translate(-50%, -50%) translateX(1px) translateY(-1px) scale(1.05);
            opacity: 1;
          }
        }

        @keyframes star-pulse {
          0%, 100% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 0.7;
          }
          50% {
            transform: translate(-50%, -50%) scale(1.2);
            opacity: 1;
          }
        }

        @keyframes star-float {
          0%, 100% {
            transform: translate(-50%, -50%) translateY(0) rotate(0deg);
            opacity: 0.8;
          }
          33% {
            transform: translate(-50%, -50%) translateY(-3px) rotate(2deg);
            opacity: 1;
          }
          66% {
            transform: translate(-50%, -50%) translateY(2px) rotate(-2deg);
            opacity: 0.9;
          }
        }

        @keyframes spiral-rotate {
          0%, 100% {
            transform: translate(-50%, -50%) rotate(0deg) scale(1);
            opacity: 0.7;
          }
          50% {
            transform: translate(-50%, -50%) rotate(180deg) scale(1.1);
            opacity: 0.9;
          }
        }

        .star-animation-shimmer {
          animation: star-shimmer 3s ease-in-out infinite;
        }

        .star-animation-pulse {
          animation: star-pulse 2.5s ease-in-out infinite;
        }

        .star-animation-float {
          animation: star-float 3.5s ease-in-out infinite;
        }

        .spiral-animation {
          animation: spiral-rotate 8s linear infinite;
        }
      `}</style>
    </>
  );
};

export default StarAnimationOverlay;
