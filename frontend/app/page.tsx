import Header from "@/app/components/header";
import ChatandPodcastSection from "./components/chat-section";
import TeamIntroduction from "@/app/components/team-intro";
import ProjectIntroduction from "@/app/components/proj-intro";
import Footer from "@/app/components/footer"
import DashboardSection from "./components/dashboard";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-10 p-20 pb-10 background-gradient">
      <ProjectIntroduction />
      <DashboardSection />
      <ChatandPodcastSection />
      <TeamIntroduction />
      <Footer/>
    </main>
  );
}
