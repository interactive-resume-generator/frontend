import PortfolioSection from "./PortfolioSection";
import { useAuth } from "@/contexts/auth";
import useResource from "@/hooks/useResources";

export default function Portfolio() {
  const { user } = useAuth();
  const { resources, loading } = useResource();

  // console.log(user);

  const testData = [
    {
      education: [
        { degree: "BS in CompSci", university: "UCLA", year: "2021" },
      ],
    },
    {
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
    },
    {
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
    },
  ];

  // const response = fetch("http://localhost:8000/api/v1/resumes");

  // console.log(response.data);

  console.log(resources);

  return (
    <>
      {user ? (
        <PortfolioSection
          resources={resources || []}
          loading={loading}
        ></PortfolioSection>
      ) : (
        <PortfolioSection
          resources={testData}
          loading={loading}
        ></PortfolioSection>
      )}
    </>
  );
}
