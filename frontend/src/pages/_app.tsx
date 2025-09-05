// frontend/src/pages/_app.tsx
import type { AppProps } from "next/app";
import "../styles/globals.css"; // ← import Tailwind/global CSS once here

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
