import ArrowBack from "./icons/ArrowBack";

function BackButton() {
  return (
    <>
      <a href={"/"} className="go-back">
        <ArrowBack />

        <p>Back to Home</p>
      </a>
    </>
  );
}

export default BackButton;
