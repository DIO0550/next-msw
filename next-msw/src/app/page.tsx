"use client";
import styles from "./page.module.css";

const fetchUser = () => {
  fetch("http://localhost:3030/user", {
    method: "GET",
  });
};

export default function Home() {
  return (
    <div className={styles.page}>
      <button
        onClick={() => {
          fetchUser();
        }}
      >
        fetch
      </button>
    </div>
  );
}
