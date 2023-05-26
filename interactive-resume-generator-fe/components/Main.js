import { useAuth } from "@/contexts/auth";
import useResource from "@/hooks/useResources";
import Nav from "./Nav";
import Portfolio from "./Portfolio";
import Hero from "./Hero";
import Footer from "./Footer";
import ResumeForm from "@/pages/ResumeForm";

export default function Main() {
  const { user, login } = useAuth();
  const { resources, loading, createResource } = useResource();

  console.log(user);

  //   function handleLogin(e) {
  //     login(e.target.username.value, e.target.password.value);
  //   }

  return (
    <>
      <Hero />
      <Portfolio />
    </>
  );
}
