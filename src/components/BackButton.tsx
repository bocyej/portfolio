import ArrowBack from "./icons/ArrowBack";
import "../index.css";
import "../css/Body.css";

interface Props {
  title: string;
}

function BackButton({ title }: Props) {
  return (
    <>
      <div className="center-horizontally title-spacing">
        <a href={"/"} className="go-back">
          <ArrowBack />

          <p>Back to Home</p>
        </a>
        <p className="sub-page-title">{title}</p>
        <div className="right-box"></div>
      </div>
    </>
  );
}

export default BackButton;
