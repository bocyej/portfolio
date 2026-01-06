import "../../index.css";
import "../../css/Body.css";

function ArrowRight() {
  return (
    <>
      <span id="arrow">
        <svg
          fill="var(--color)"
          stroke="var(--color)"
          viewBox="0 -6 24 24"
          width="30"
          height="30"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1"
            d="M 14 9 L 19 12 L 14 15 L 14 13 H 1 C 1 11 1 11 1 11 L 14 11 Z"
          ></path>
        </svg>
      </span>
    </>
  );
}

export default ArrowRight;
