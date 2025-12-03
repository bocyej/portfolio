import Category from "./Category";
import TechStackCard from "./TechStackCard";

const TechStackSummary = () => {
  return (
    <>
      <div id="techstack">
        <Category
          label={"Frontend"}
          cards={
            <>
              <TechStackCard label={"JavaScript"} />
              <TechStackCard label={"TypeScript"} />
              <TechStackCard label={"React"} />
              <TechStackCard label={"Angular"} />
            </>
          }
        />
        <Category
          label={"Backend"}
          cards={
            <>
              <TechStackCard label={"Node.js"} />
              <TechStackCard label={"PHP"} />
              <TechStackCard label={"Firebase"} />
              <TechStackCard label={"Supabase"} />
              <TechStackCard label={"Python"} />
            </>
          }
        />
        <Category
          label={"DevOps & Cloud"}
          cards={
            <>
              <TechStackCard label={"Docker"} />
              <TechStackCard label={"GitHub Actions"} />
              <TechStackCard label={"Google Cloud"} />
            </>
          }
        />
        <Category
          label={"Tools"}
          cards={
            <>
              <TechStackCard label={"Git"} />
              <TechStackCard label={"GitHub"} />
              <TechStackCard label={"VS Code"} />
              <TechStackCard label={"Docker"} />
              <TechStackCard label={"Postman"} />
            </>
          }
        />
      </div>
    </>
  );
};

export default TechStackSummary;
