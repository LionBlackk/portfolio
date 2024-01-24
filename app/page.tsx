import About from "@/components/About";
import Divider from "@/components/Divider";
import Experiences from "@/components/Experiences";
import Intro from "@/components/Intro";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <Divider />
      <About />
      <Projects />
      <Skills />
      <Experiences />
    </main>
  );
}
