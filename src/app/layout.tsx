import "./globals.css";
import "./ditto-chrome.css";
import "./preview.css";
import PreviewGuard from "./PreviewGuard";
import type { ReactNode } from "react";
export const metadata = { title: "Photography & Film — Layout Preview", description: "Five-page photography and film layout with replaceable media.", robots: {index:false, follow:false}, icons: {icon:"/placeholder.svg"} };
export default function RootLayout({children}:{children:ReactNode}) { return <html lang="en"><body className="cn0">{children}<PreviewGuard /></body></html>; }
