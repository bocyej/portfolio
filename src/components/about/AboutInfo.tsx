import "../../index.css";
import "../../css/Body.css";
import type { ReactNode } from "react";
import { Link } from "react-router-dom";

interface Props {
  title: string;
  content: ReactNode;
  additionalClass: string;
}

const AboutInfo = ({ title, content, additionalClass }: Props) => {
  return (
    <>
      <div className={`section-border ${additionalClass}`}>
        <section className="label">
          {title}
          <Link
            className="see-more"
            to={
              title == "Certifications"
                ? "/certifications"
                : title == "Work Experience"
                ? "/experiences"
                : title == "Recent Projects"
                ? "/projects"
                : "/tech-stack"
            }
          >
            See more
          </Link>
        </section>
        <section className="background-rectangle">{content}</section>
      </div>
    </>
  );
};

export default AboutInfo;
