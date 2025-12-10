import "../../index.css";
import "../../css/Body.css";

interface Props {
  toolsOrLanguage: string;
}

const ToolsOrLanguage = ({ toolsOrLanguage }: Props) => {
  return (
    <>
      <li className="tools-or-languages card-text">{toolsOrLanguage}</li>
    </>
  );
};

export default ToolsOrLanguage;
