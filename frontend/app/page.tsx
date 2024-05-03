import Header from "@/app/components/header";
import ChatandPodcastSection from "./components/chat-section";
import TeamIntroduction from "@/app/components/team-intro";
import ProjectIntroduction from "@/app/components/proj-intro";
import Footer from "@/app/components/footer"
import DashboardSection from "./components/dashboard";
import FileSelector from '@/app/components/FileSelector';  // Adjust the path as necessary


export default function Home() {
  const backendUrl = "http://localhost:8000";

  return (
    <main className="flex min-h-screen flex-col items-center gap-10 p-20 pb-10 background-gradient">
      <ProjectIntroduction />
      <DashboardSection />
      {/* <FileSelector backendUrl={backendUrl} /> */}
      <ChatandPodcastSection />
      <TeamIntroduction />
      <Footer/>
    </main>
  );
}
