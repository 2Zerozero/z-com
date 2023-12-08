import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";
import zLogo from "../../public/zlogo.png";

export default function Home() {
  return (
    <div>
      <div></div>
      <div className={styles.left}>
        <Image src={zLogo} alt="Logo" />
      </div>
      <div className={styles.right}>
        <h1>지금 일어나고 있는 일</h1>
        <h2>지금 가입하세요.</h2>
        <Link href="/i/flow/signup" className={styles.signup}>
          계정 만들기
        </Link>
      </div>
    </div>
  );
}
