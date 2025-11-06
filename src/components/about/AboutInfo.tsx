import type { ReactNode } from "react";

interface Props {
  title: string;
  content: ReactNode;
  additionalClass: string;
}

const AboutInfo = ({ title, content, additionalClass }: Props) => {
  return (
    <>
      <div className={`section-border ${additionalClass}`}>
        <section className="label">{title} <a href="/certifications">LOL</a></section>
        <section className="background-rectangle">{content}</section>
      </div>
    </>
  );
};

export default AboutInfo;
