interface Props {
  label: string;
}

const MoreTechStack = ({ label }: Props) => {
  return (
    <>
      <section className="background-rectangle">{label}</section>
    </>
  );
};

export default MoreTechStack;
