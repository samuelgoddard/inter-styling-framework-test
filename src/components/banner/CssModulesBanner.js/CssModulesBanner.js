import Image from "next/image";
import CssModulesButton from "@/src/components/button/CssModulesButton/CssModulesButton";
import styles from "./CssModulesBanner.module.css"

export default function CssModulesBanner({ heading }) {
  return (
    <div className={styles.banner}>
      <Image
        src={`https://images.ctfassets.net/xny2w179f4ki/3Q3Oe6wapZAsuMHmNxdzdY/087e942f34705a664a9db4e3a0721f1e/landing-banner-background-2.webp?fm=webp`}
        fill
        className={styles.banner__img}
        alt="background"
      />
      
      <div className={styles.banner__content}>
        <h2 className={styles.banner__heading}>{heading}</h2>

        <CssModulesButton intent="primary">Start a free trial</CssModulesButton>
      </div>
    </div>
  )
}