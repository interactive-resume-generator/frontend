import PortfolioSection from "./PortfolioSection";
import { useAuth } from "@/contexts/auth";
import useResource from "@/hooks/useResources";

export default function Portfolio() {
  const { user } = useAuth();
  const { resources, loading } = useResource();

  // console.log(user);

  const testData = {
    education: [{ degree: "BS in CompSci", university: "UCLA", year: "2021" }],
    experience: [
      {
        company: "Amazon",
        position: "Intern, Software Engineer",
        duration: "Jan 2021 - Dec 2021",
      },
      {
        company: "TEKsystems",
        position: "Help Desk Analyst",
        duration: "Jan 2020-Dec 2020",
      },
      {
        company: "Best Buy",
        position: "Geek Squad Consultant",
        duration: "Jan 2016 - Dec 2019",
      },
    ],

    skills: [
      "HTML",
      "CSS",
      "Javascript",
      "React.js",
      "Express",
      "Node.js",
      "MongoDB",
      "VSCode",
      "REST Frameworks",
      "ReactStrap",
      "Next.js",
      "Python",
      "Django",
      "C#",
      "PostgreSQL",
      "API",
    ],
  };

  console.log(resources);

  return (
    <>
      {user && !loading && resources.length > 1 ? (
        <PortfolioSection
          resource={resources[0].data || []}
          loading={loading}
        ></PortfolioSection>
      ) : (
        <PortfolioSection resources={null} loading={loading}></PortfolioSection>
      )}
    </>
  );
}
