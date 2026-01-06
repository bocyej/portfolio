import "../../index.css";
import "../../css/Body.css";

function ArrowBack() {
  return (
    <>
      <svg fill="none" stroke="var(--color)" viewBox="0 0 24 24" width="30" height="30">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1"
          d="M10 19l-7-7m0 0l7-7m-7 7h18"
        ></path>
      </svg>
    </>
  );
}

export default ArrowBack;
