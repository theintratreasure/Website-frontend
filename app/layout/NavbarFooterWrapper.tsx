'use client';

import { usePathname } from "next/navigation";
import Navbar from "./Navbar";
import Footer from "./Footer";
import LeadPopup from "../components/marketing/LeadPopup";
import AppDownloadPopup from "../components/marketing/AppDownloadPopup";

export default function NavbarFooterWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isUserRoute = pathname.startsWith("/user");
  const showPopup = !isUserRoute && pathname === "/";

  return (
    <>
      {!isUserRoute && <Navbar />}
      {children}
      {!isUserRoute && <Footer />}
      {showPopup ? <LeadPopup /> : null}
      {showPopup ? <AppDownloadPopup /> : null}
    </>
  );
}
