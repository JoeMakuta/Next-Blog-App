import Link from "next/link";
import styles from "./singleblog.module.css";

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      {children}
      <Link href="/">Home</Link>
    </div>
  );
};

export default Layout;
