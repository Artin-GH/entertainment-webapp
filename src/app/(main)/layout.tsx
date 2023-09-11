import Logo from "@/components/Logo";
import styles from "./styles/Main.module.css";
import Image from "next/image";
import Navigation from "./Navigation";

const SideBar: React.FC = () => {
  return (
    <div className={styles.sideBar}>
      <div className={styles.sideBarContent}>
        <Logo className={styles.sideBarLogo} />
        <Navigation />
        <div className={styles.avatar}>
          <Image src={`/image-avatar.png`} alt="avatar" fill />
        </div>
      </div>
    </div>
  );
};

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={styles.container}>
      <SideBar />
      <main className={styles.pageContent}>{children}</main>
    </div>
  );
}
