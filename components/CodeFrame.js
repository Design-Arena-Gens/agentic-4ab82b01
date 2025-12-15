"use client";

import { useMemo } from "react";
import styles from "./CodeFrame.module.css";

export default function CodeFrame({ code, language = "markup" }) {
  const content = useMemo(() => code.trim(), [code]);

  return (
    <div className={styles.codeFrame}>
      <div className={styles.bar}>
        <span />
        <span />
        <span />
        <p>{language}</p>
      </div>
      <pre className={styles.pre}>
        <code>{content}</code>
      </pre>
    </div>
  );
}
