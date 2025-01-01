import Image from "next/image";
import styles from "./page.module.css";
import HeroSection from "@/components/home/HeroSection";
import WhySection from "@/components/home/WhySection";
import ForSection from "@/components/home/ForSection";
import CostSection from "@/components/home/CostSection";
import MeetUs from "@/components/home/MeetUs";
import '@/styles/home.css'

export default function Home() {
  return (
    <div className={styles.page}>
        <HeroSection/>
        <WhySection/>
        <ForSection/>
        <CostSection/>
        <MeetUs/>
    </div>
  );
}
