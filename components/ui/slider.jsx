import { useState, useEffect, useRef, useCallback } from "react";
import { FaPlay, FaPause } from "react-icons/fa";



const InfiniteCarousel = () => {
  const [isPaused, setIsPaused] = useState(false);
  const [speed, setSpeed] = useState(1);
  const [direction, setDirection] = useState("left");
  const containerRef = useRef(null);

  const images = [
    {
      id: 1,
      src: "https://res.cloudinary.com/dwyn5jgh3/image/upload/v1725603902/voltech_enginner_d5wb5u.webp",
      alt: "Landscape Mountain"
    },
    {
      id: 2,
      src: "https://res.cloudinary.com/dwyn5jgh3/image/upload/v1725603902/velammal_anzfkq.webp",
      alt: "Mountain Lake"
    },
    {
      id: 3,
      src: "https://res.cloudinary.com/dwyn5jgh3/image/upload/v1725603901/vcerp_iz8ka7.webp",
      alt: "Forest Path"
    },
    {
      id: 4,
      src: "https://res.cloudinary.com/dwyn5jgh3/image/upload/v1725603901/vecura_uuxnb4.webp",
      alt: "Mountain Range"
    },
    {
      id: 5,
      src: "https://res.cloudinary.com/dwyn5jgh3/image/upload/v1725603901/vcare-logo_nlya0m.webp",
      alt: "Sunset Valley"
    },
    {
        id: 6,
        src: "https://res.cloudinary.com/dwyn5jgh3/image/upload/v1725603901/tvs_qfc2sc.webp",
        alt: "Sunset Valley"
      },
      {
        id: 7,
        src: "https://res.cloudinary.com/dwyn5jgh3/image/upload/v1725603901/trlpl_vbwnq1.webp",
        alt: "Sunset Valley"
      },
      {
        id: 8,
        src: "https://res.cloudinary.com/dwyn5jgh3/image/upload/v1725603901/techindia_c4xpx8.webp",
        alt: "Sunset Valley"
      },
      {
        id: 9,
        src: "https://res.cloudinary.com/dwyn5jgh3/image/upload/v1725603901/spl_infra_rxefmx.webp",
        alt: "Sunset Valley"
      },
      {
        id: 10,
        src: "https://res.cloudinary.com/dwyn5jgh3/image/upload/v1725603899/mega-global_q0fscr.webp",
        alt: "Sunset Valley"
      },
      {
        id: 11,
        src: "https://res.cloudinary.com/dwyn5jgh3/image/upload/v1725603899/rock_worth_yvvgu6.webp",
        alt: "Sunset Valley"
      },
      {
        id: 12,
        src: "https://res.cloudinary.com/dwyn5jgh3/image/upload/v1725603899/sahara_courier_dtznwq.webp",
        alt: "Sunset Valley"
      },
      {
        id: 13,
        src: "https://res.cloudinary.com/dwyn5jgh3/image/upload/v1725603898/ifluids_dmmvaf.webp",
        alt: "Sunset Valley"
      },
      {
        id: 15,
        src: "https://res.cloudinary.com/dwyn5jgh3/image/upload/v1725603898/panimallar_oooj2x.webp",
        alt: "Sunset Valley"
      },
      {
        id: 16,
        src: "https://res.cloudinary.com/dwyn5jgh3/image/upload/v1725603898/nccr_zw3ouz.webp",
        alt: "Sunset Valley"
      },
      {
        id: 17,
        src: "https://res.cloudinary.com/dwyn5jgh3/image/upload/v1725603898/kingfa_edsqaq.webp",
        alt: "Sunset Valley"
      },
      {
        id: 18,
        src: "https://res.cloudinary.com/dwyn5jgh3/image/upload/v1725603897/hhf_logo_fmga1o.webp",
        alt: "Sunset Valley"
      },
      {
        id: 19,
        src: "https://res.cloudinary.com/dwyn5jgh3/image/upload/v1725603897/marg_kg1hjk.webp",
        alt: "Sunset Valley"
      },
      {
        id: 20,
        src: "https://res.cloudinary.com/dwyn5jgh3/image/upload/v1725603897/letsgro_tusjbf.webp",
        alt: "Sunset Valley"
      },
      {
        id: 21,
        src: "https://res.cloudinary.com/dwyn5jgh3/image/upload/v1725603897/hlflogo_ft4fca.webp",
        alt: "Sunset Valley"
      },
      {
        id: 22,
        src: "https://res.cloudinary.com/dwyn5jgh3/image/upload/v1725603897/chetinad_health_city_sdjjef.webp",
        alt: "Sunset Valley"
      },
      {
        id: 23,
        src: "https://res.cloudinary.com/dwyn5jgh3/image/upload/v1721985274/client24.webp",
        alt: "Sunset Valley"
      },
      {
        id: 24,
        src: "https://res.cloudinary.com/dwyn5jgh3/image/upload/v1721985272/client23.webp",
        alt: "Sunset Valley"
      },
      {
        id: 25,
        src: "https://res.cloudinary.com/dwyn5jgh3/image/upload/v1721985269/client25.webp",
        alt: "Sunset Valley"
      },
      {
        id: 26,
        src: "https://res.cloudinary.com/dwyn5jgh3/image/upload/v1721985266/client26.webp",
        alt: "Sunset Valley"
      },
      {
        id: 28,
        src: "https://res.cloudinary.com/dwyn5jgh3/image/upload/v1721985134/client10.webp",
        alt: "Sunset Valley"
      },
      {
        id: 29,
        src: "https://res.cloudinary.com/dwyn5jgh3/image/upload/v1721985132/client9.webp",
        alt: "Sunset Valley"
      },
      {
        id: 30,
        src: "https://res.cloudinary.com/dwyn5jgh3/image/upload/v1721985127/client8.webp",
        alt: "Sunset Valley"
      },
      {
        id: 31,
        src: "https://res.cloudinary.com/dwyn5jgh3/image/upload/v1721985125/client7.webp",
        alt: "Sunset Valley"
      },
      {
        id: 32,
        src: "https://res.cloudinary.com/dwyn5jgh3/image/upload/v1721985123/client6.webp",
        alt: "Sunset Valley"
      },
      {
        id: 33,
        src: "https://res.cloudinary.com/dwyn5jgh3/image/upload/v1721985121/client5.webp",
        alt: "Sunset Valley"
      },
      {
        id: 34,
        src: "https://res.cloudinary.com/dwyn5jgh3/image/upload/v1721985118/client4.webp",
        alt: "Sunset Valley"
      },
      {
        id: 35,
        src: "https://res.cloudinary.com/dwyn5jgh3/image/upload/v1721985116/client3.webp",
        alt: "Sunset Valley"
      },
      {
        id: 36,
        src: "https://res.cloudinary.com/dwyn5jgh3/image/upload/v1721985114/client2.webp",
        alt: "Sunset Valley"
      },
      {
        id: 37,
        src: "https://res.cloudinary.com/dwyn5jgh3/image/upload/v1721985112/client1.webp",
        alt: "Sunset Valley"
      },
      {
        id: 38,
        src: "https://res.cloudinary.com/dwyn5jgh3/image/upload/v1721985110/client22.webp",
        alt: "Sunset Valley"
      },
      {
        id: 39,
        src: "https://res.cloudinary.com/dwyn5jgh3/image/upload/v1721985107/client21.webp",
        alt: "Sunset Valley"
      },
      {
        id: 40,
        src: "https://res.cloudinary.com/dwyn5jgh3/image/upload/v1721985105/client20.webp",
        alt: "Sunset Valley"
      },
      {
        id: 41,
        src: "https://res.cloudinary.com/dwyn5jgh3/image/upload/v1721985089/client14.webp",
        alt: "Sunset Valley"
      },
      {
        id: 42,
        src: "https://res.cloudinary.com/dwyn5jgh3/image/upload/v1721985086/client13.webp",
        alt: "Sunset Valley"
      },
      {
        id: 43,
        src: "https://res.cloudinary.com/dwyn5jgh3/image/upload/v1721985084/client12.webp",
        alt: "Sunset Valley"
      },
      {
        id: 44,
        src: "https://res.cloudinary.com/dwyn5jgh3/image/upload/v1721985083/client11.webp",
        alt: "Sunset Valley"
      }

  ];

  const duplicatedImages = [...images, ...images];

  const handleSpeedChange = (newSpeed) => {
    setSpeed(newSpeed);
  };

  const toggleDirection = () => {
    setDirection(prev => prev === "left" ? "right" : "left");
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container || isPaused) return;

    const animationDuration = 10000 / speed;
    container.style.animationDuration = `${animationDuration}ms`;
    container.style.animationDirection = direction === "left" ? "normal" : "reverse";
  }, [speed, isPaused, direction]);

  return (
    <div className=" overflow-hidden bg-white via-transparent to-gray-100 p-8">
      <div className="flex justify-center gap-4 mb-6">
      

       

       
      </div>

      <div
        ref={containerRef}
        className={`flex gap-4 ${!isPaused ? "animate-carousel" : ""}`}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        style={{
          animation: `scroll ${30000 / speed}ms linear infinite ${direction === "right" ? "reverse" : "normal"}`
        }}
      >
        {duplicatedImages.map((image, index) => (
          <div
            key={`${image.id}-${index}`}
            className="relative flex-shrink-0 group"
          >
            <img
              src={image.src}
              alt={image.alt}
              loading="lazy"
              className="h-28 w-56 object-cover  transition-transform duration-300 group-hover:scale-105"
              onError={(e) => {
                e.target.src = "https://images.unsplash.com/photo-1610337673044-720471f83677";
                e.target.alt = "Fallback Image";
              }}
            />
            <div className="absolute inset-0  bg-opacity-0 group-hover:bg-opacity-10 transition-opacity duration-300 rounded-lg" />
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
};

export default InfiniteCarousel;