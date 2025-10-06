interface Props {
    company: string;
    role: string;
    duration: string;
}

const ExperienceCircle = ({company, role, duration}: Props) => {
  return (
    <>
      <li className="timeline-circle">
        <div className="timeline-information">
          <div className="title-and-year">
            <h2>{company}</h2>
          </div>
          <h4 className="role">{role}</h4>
          <p>{duration}</p>
        </div>
      </li>
    </>
  );
};

export default ExperienceCircle;
