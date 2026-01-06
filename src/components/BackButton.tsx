import ArrowBack from "./icons/ArrowBack";
import "../index.css";
import "../css/Body.css";
import { Link } from "react-router-dom";

interface Props {
  title: string;
}

function BackButton({ title }: Props) {
  return (
    <>
      <div className="center-horizontally title-spacing">
        <Link to={"/"} className="go-back">
          <ArrowBack />

          <p>Back to Home</p>
        </Link>
        <p className="sub-page-title">{title}</p>
        <div className="right-box"></div>
      </div>
    </>
  );
}

export default BackButton;
