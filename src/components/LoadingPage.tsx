import { useEffect } from "react";
import { gsap } from "gsap";

const LoadingPage = () => {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    const timeline = gsap.timeline({
      defaults: { ease: "power1.out" },
    });

    timeline.fromTo(
      ".logo-name",
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        delay: 0.5,
      }
    );

    timeline.fromTo(
      ".loading-page",
      { opacity: 1 },
      {
        opacity: 0,
        duration: 1.5,
        delay: 1.5,
        onComplete: () => {
          const page = document.querySelector(".loading-page") as HTMLElement;
          if (page) page.style.display = "none";

          document.body.style.overflow = "auto";
        },
      }
    );

    return () => {
      timeline.kill();
    };
  }, []);

  return (
    <>
      <div className="loading-page">
        <svg
          id="svg"
          xmlns="http://www.w3.org/2000/svg"
          version="1.0"
          width="96.000000pt"
          height="96.000000pt"
          viewBox="0 0 96.000000 96.000000"
          preserveAspectRatio="xMidYMid meet"
        >
          <g transform="translate(0.000000,96.000000) scale(0.100000,-0.100000)">
            <path d="M76 667 c-14 -10 -20 -30 -24 -73 -3 -36 -12 -68 -24 -83 -18 -24 -18 -25 2 -46 13 -14 20 -35 20 -62 0 -60 14 -89 49 -101 39 -14 50 10 15 32 -20 14 -24 25 -24 64 0 27 -7 57 -16 70 -13 19 -14 25 -2 39 7 9 15 41 18 72 4 46 9 58 28 66 12 5 21 14 19 20 -6 16 -40 17 -61 2z" />
            <path d="M825 669 c-4 -6 -5 -11 -4 -12 41 -21 44 -26 49 -79 3 -30 11 -62 18 -71 12 -14 11 -20 -2 -39 -9 -13 -16 -43 -16 -69 0 -40 -4 -50 -27 -67 -35 -25 -24 -45 18 -30 35 12 49 41 49 102 0 27 6 48 15 56 19 16 19 44 1 59 -8 7 -16 38 -18 73 -3 44 -10 64 -23 74 -22 17 -51 18 -60 3z" />
            <path d="M406 639 c-57 -45 -22 -121 63 -134 50 -9 80 -25 87 -48 15 -48 -85 -78 -126 -37 -11 11 -20 25 -20 30 0 13 -37 13 -46 -1 -10 -17 46 -68 87 -79 53 -15 109 7 133 52 19 35 19 35 -2 65 -19 27 -53 43 -124 58 -40 8 -54 39 -28 65 31 31 110 19 110 -18 0 -12 26 -23 34 -15 14 14 4 43 -20 62 -19 15 -41 21 -74 21 -33 0 -55 -6 -74 -21z" />
            <path d="M256 583 c-3 -4 -6 -35 -6 -70 0 -63 0 -64 -30 -69 -30 -6 -40 -27 -19 -40 13 -7 58 14 76 36 18 22 17 136 -1 143 -8 3 -17 3 -20 0z" />
            <path d="M696 583 c-3 -4 -6 -43 -6 -89 l0 -82 46 -4 c45 -3 74 5 74 22 0 5 -19 10 -42 12 l-43 3 1 67 c2 47 -2 68 -11 72 -7 2 -16 2 -19 -1z" />
          </g>
        </svg>

        <div className="name-container">
          <div className="logo-name">bocyej</div>
        </div>
      </div>
    </>
  );
};

export default LoadingPage;
