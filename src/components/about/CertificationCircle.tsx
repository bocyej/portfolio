import "../../index.css";
import "../../css/Body.css";

interface Props {
  certificationName: string;
  year: string;
  link: string;
}

const CertificationCircle = ({ certificationName, year, link }: Props) => {
  return (
    <>
      <li className="timeline-circle">
        <div className="timeline-information">
          <div className="title-and-year">
            <h2>{certificationName}</h2>
            <h4>{year}</h4>
          </div>
          <h4 className="view-button">
            <a
              href={link}
              target="_blank"
              className="light-mode"
            >
              View Certification
            </a>
          </h4>
        </div>
      </li>
    </>
  );
};

export default CertificationCircle;
