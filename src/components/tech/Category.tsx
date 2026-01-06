import "../../index.css";
import "../../css/Body.css";
import type { ReactNode } from "react";

interface Props {
  label: string;
  cards: ReactNode;
}

const Category = ({ label, cards }: Props) => {
  return (
    <>
      <div>
        <div className="category">{label}</div>
        <div className="tech-cards">{cards}</div>
      </div>
    </>
  );
};

export default Category;
