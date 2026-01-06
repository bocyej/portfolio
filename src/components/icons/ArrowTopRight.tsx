import "../../index.css";
import "../../css/Body.css";

function ArrowTopRight() {
  return (
    <>
      <svg fill="none" stroke="var(--color)" viewBox="0 0 24 24" width="30" height="30">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1"
          d="M7 6C7 5.44772 7.44772 5 8 5H18C18.5523 5 19 5.44772 19 6V16C19 16.5523 18.5523 17 18 17C17.4477 17 17 16.5523 17 16V8.41421L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L15.5858 7H8C7.44772 7 7 6.55228 7 6Z"
        ></path>
      </svg>
    </>
  );
}

export default ArrowTopRight;
