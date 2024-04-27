import Header from "@/app/components/header";
import ChatSection from "./components/chat-section";
import TeamIntroduction from "@/app/components/team-intro";
import ProjectIntroduction from "@/app/components/proj-intro";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-10 p-24 background-gradient">
      <Header />
      <ProjectIntroduction />
      <ChatSection />
      <TeamIntroduction />
    </main>
  );
}
