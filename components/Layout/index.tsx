import type { PropsWithChildren } from "react";

import Navbar from "@/components/Navbar";

import styles from "./Layout.module.css";

export default function Layout({ children }: PropsWithChildren<{}>) {
	return (
		<>
			<Navbar />
			<main className={styles.main}>{children}</main>
		</>
	);
}
