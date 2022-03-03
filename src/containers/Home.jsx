import { Navbar } from "../components/navbar/Navbar";
import { Intro } from "../components/intro/Intro";
import { AboutMeSkills } from "../components/about-me-skills/AboutMeSkills";
import { RecentWork } from "../components/my-recent-work/RecentWork";
import { NeedAWebsite } from "../components/need-a-website/NeedAWebsite";
import { Socials } from "../components/socials/Socials";
import { Contact } from "../components/contact/Contact";

export const Home = () => {
  return (
    <main id="home">
      <Navbar />
      <Intro />
      <AboutMeSkills />
      <RecentWork />
      <NeedAWebsite />
      <Socials />
      <Contact />
    </main>
  );
};
