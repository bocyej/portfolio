import "../../index.css";
import "../../css/Body.css";
import CertificationCircle from "./CertificationCircle";

const CertificationTimelineSummary = () => {
  return (
    <>
      <section className="background-rectangle">
        <article className="timeline">
          <ul>
            <CertificationCircle
              certificationName={"Career Essentials in Generative AI"}
              year={"2025"}
              link={
                "https://www.linkedin.com/learning/certificates/a79cf09be27e62a4663a7bd0817bed847954951d3c5901b68c50ad1001d7cd88?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3B3N%2BoTl6SSzqq5nsqgLZGpw%3D%3D"
              }
            />
            <CertificationCircle
              certificationName={"Microsoft Certified: Azure Fundamentals"}
              year={"2024"}
              link={
                "https://www.credly.com/badges/3771544d-338a-4e86-952b-f11446c8536c"
              }
            />
            <CertificationCircle
              certificationName={
                "Absolute Introduction to Object Oriented Programming in Java"
              }
              year={"2024"}
              link={
                "https://www.udemy.com/certificate/UC-f2418b2b-37f7-47e7-a893-51d924f07523/"
              }
            />
            <CertificationCircle
              certificationName={"Intro To PHP For Web Development"}
              year={"2024"}
              link={
                "https://www.udemy.com/certificate/UC-b2129d1b-0548-46d9-8e01-1d0320ff3d68/"
              }
            />
            <CertificationCircle
              certificationName={
                "Introduction to Data Structures & Algorithms in Java"
              }
              year={"2024"}
              link={
                "https://www.udemy.com/certificate/UC-eeb1fddf-0e4d-4238-aebf-d0c4e5d6a2a3/"
              }
            />
            <CertificationCircle
              certificationName={
                "Java 21 Programming Masterclass: Fundamentals for Beginners"
              }
              year={"2024"}
              link={
                "https://www.udemy.com/certificate/UC-687d72ab-d0c7-4933-8459-f64acab2a0d1/"
              }
            />
            <CertificationCircle
              certificationName={"SQL - Introduction to SQL with MySQL"}
              year={"2024"}
              link={
                "https://www.udemy.com/certificate/UC-9a9ff720-0142-4c6c-9004-63a18982debb/"
              }
            />
            <CertificationCircle
              certificationName={"UML and Object-Oriented Design Foundations"}
              year={"2024"}
              link={
                "https://www.udemy.com/certificate/UC-0ba4bdc6-6934-46d2-abfe-fb0ac7732ace/"
              }
            />
            <CertificationCircle
              certificationName={
                "Build your Brand with Digital Marketing Planning"
              }
              year={"2021"}
              link={
                "https://drive.google.com/file/d/1e54JvnOqbX1JpfxykyvlC3uXQAO8C2Yj/view?usp=sharing"
              }
            />
            <CertificationCircle
              certificationName={
                "STEAM: Circuits and IOT with Arduino Intermediate Level"
              }
              year={"2021"}
              link={
                "https://drive.google.com/file/d/1rv5_L6_Q4a5Y04BV-ooAdu0MCpRtmupG/view?usp=sharing"
              }
            />
            <CertificationCircle
              certificationName={
                "Microsoft Office Specialist: Excel Associate (Office 2019)"
              }
              year={"2021"}
              link={
                "https://www.credly.com/badges/4697bcec-80bc-484d-b90c-f883a63c04b6"
              }
            />
            <CertificationCircle
              certificationName={
                "Microsoft Office Specialist: PowerPoint Associate (Office 2019)"
              }
              year={"2021"}
              link={
                "https://www.credly.com/badges/a0c83024-f9b1-4e50-830a-1a9b689355e2"
              }
            />
          </ul>
        </article>
      </section>
    </>
  );
};

export default CertificationTimelineSummary;
