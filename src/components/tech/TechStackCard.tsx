interface Props {
  label: string;
}

const TechStackCard = ({ label }: Props) => {
  return (
    <>
      <section className="techstack-rectangle">{label}</section>
    </>
  );
};

export default TechStackCard;
