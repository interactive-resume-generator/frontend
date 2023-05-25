import PortfolioSection from "./PortfolioSection";
import { useAuth } from "@/contexts/auth";
import useResource from "@/hooks/useResources";

export default function Portfolio() {
  const { user } = useAuth();
  const { resources, loading } = useResource();

  const testData = [
    {
      education: [
        { degree: "testdeg", university: "testuni", year: "testyear" },
      ],
    },
    {
      experience: [
        { company: "testcomp", position: "testpos", duration: "testduration" },
      ],
    },
    { skills: ["testskill", "testskill"] },
  ];

  const response = fetch("http://localhost:8000/api/v1/resumes");

  console.log(response.data);

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
