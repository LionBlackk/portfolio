import About from "@/components/About";
import Divider from "@/components/Divider";
import Intro from "@/components/Intro";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <Divider />
      <About />
      <Projects />
    </main>
  );
}
