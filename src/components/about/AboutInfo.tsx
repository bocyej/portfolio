import type { ReactNode } from "react";

interface Props {
  title: string;
  content: ReactNode;
}

const AboutInfo = ({ title, content }: Props) => {
  return (
    <>
      <div className="limited-width">
        <div className="half-screen">
          <section className="label">{title}</section>
          <section className="background-rectangle">{content}</section>
        </div>
      </div>
    </>
  );
};

export default AboutInfo;
