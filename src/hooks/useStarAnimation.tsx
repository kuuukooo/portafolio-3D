import { useEffect, useState } from "react";

interface StarConfig {
  id: string;
  src: string;
  size: number;
  position: {
    top?: string;
    bottom?: string;
    left?: string;
    right?: string;
  };
  animationDelay: number;
  animationDuration: number;
  animationType: "shimmer" | "pulse" | "float";
}

interface SpiralConfig {
  id: string;
  src: string;
  size: number;
  position: {
    top?: string;
    bottom?: string;
    left?: string;
    right?: string;
  };
  animationDelay: number;
  animationDuration: number;
}

export const useStarAnimation = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const defaultStarConfigs: StarConfig[] = [
    {
      id: "star-1",
      src: "/images/aboutme/star.webp",
      size: 100,
      position: { top: "10%", left: "8%" },
      animationDelay: 0,
      animationDuration: 3000,
      animationType: "shimmer",
    },
    {
      id: "star-2",
      src: "/images/aboutme/star.webp",
      size: 100,
      position: { top: "10%", left: "90%" },
      animationDelay: 500,
      animationDuration: 2500,
      animationType: "pulse",
    },
    {
      id: "star-3",
      src: "/images/aboutme/star.webp",
      size: 100,
      position: { top: "40%", left: "10%" },
      animationDelay: 1000,
      animationDuration: 3500,
      animationType: "float",
    },
    {
      id: "star-4",
      src: "/images/aboutme/star.webp",
      size: 120,
      position: { top: "45%", left: "84%" },
      animationDelay: 300,
      animationDuration: 2800,
      animationType: "shimmer",
    },
    {
      id: "star-5",
      src: "/images/aboutme/star.webp",
      size: 100,
      position: { bottom: "2%", left: "17%" },
      animationDelay: 800,
      animationDuration: 3200,
      animationType: "pulse",
    },
    {
      id: "star-6",
      src: "/images/aboutme/star.webp",
      size: 90,
      position: { bottom: "10%", right: "8%" },
      animationDelay: 1200,
      animationDuration: 2700,
      animationType: "float",
    },
    {
      id: "star-7",
      src: "/images/aboutme/snoopy.webp",
      size: 90,
      position: { bottom: "10%", right: "50%" },
      animationDelay: 1200,
      animationDuration: 2700,
      animationType: "float",
    },
    {
      id: "star-8",
      src: "/images/aboutme/clancy.webp",
      size: 90,
      position: { bottom: "5%", right: "20%" },
      animationDelay: 1200,
      animationDuration: 2700,
      animationType: "float",
    },
    {
      id: "star-9",
      src: "/images/aboutme/onepiece.webp",
      size: 90,
      position: { bottom: "2%", right: "37%" },
      animationDelay: 1200,
      animationDuration: 2700,
      animationType: "shimmer",
    },
  ];

  const defaultSpiralConfigs: SpiralConfig[] = [
    {
      id: "spiral-1",
      src: "/images/aboutme/spiral.webp",
      size: 90,
      position: { top: "22%", left: "80%" },
      animationDelay: 0,
      animationDuration: 8000,
    },
    {
      id: "spiral-2",
      src: "/images/aboutme/spiral.webp",
      size: 95,
      position: { bottom: "25%", left: "15%" },
      animationDelay: 2000,
      animationDuration: 6000,
    },
    {
      id: "spiral-3",
      src: "/images/aboutme/spiral.webp",
      size: 100,
      position: { top: "60%", right: "4%" },
      animationDelay: 4000,
      animationDuration: 10000,
    },
    {
      id: "spiral-4",
      src: "/images/aboutme/spiral.webp",
      size: 100,
      position: { top: "7%", left: "30%" },
      animationDelay: 4000,
      animationDuration: 10000,
    },
  ];

  return {
    mounted,
    defaultStarConfigs,
    defaultSpiralConfigs,
  };
};
