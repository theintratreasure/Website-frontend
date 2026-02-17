"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Download, Smartphone, X } from "lucide-react";
import { useEffect, useState } from "react";

const popupImage =
  "https://images.unsplash.com/photo-1590650516494-0c8e4a4dd67e?auto=format&fit=crop&w=1400&q=80";

type DeviceType = "android" | "ios" | "other";
type Platform = "android" | "ios";

function detectDevice(): DeviceType {
  if (typeof window === "undefined") return "other";

  const ua = navigator.userAgent || navigator.vendor;
  const isAndroid = /android/i.test(ua);
  const isIOS =
    /iPad|iPhone|iPod/.test(ua) ||
    (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);

  if (isAndroid) return "android";
  if (isIOS) return "ios";
  return "other";
}

export default function AppDownloadPopup() {
  const [open, setOpen] = useState(false);
  const [deviceType, setDeviceType] = useState<DeviceType>("other");
  const [selectedPlatform, setSelectedPlatform] = useState<Platform>("android");
  const [feedback, setFeedback] = useState("");

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      const runtimeDevice = detectDevice();
      setDeviceType(runtimeDevice);
      if (runtimeDevice === "ios") {
        setSelectedPlatform("ios");
      }
      if (runtimeDevice === "android") {
        setSelectedPlatform("android");
      }
    });
    const timer = window.setTimeout(() => setOpen(true), 11000);
    return () => {
      window.cancelAnimationFrame(frame);
      window.clearTimeout(timer);
    };
  }, []);

  const close = () => {
    setOpen(false);
  };

  const startAndroidDownload = async () => {
    try {
      const response = await fetch("/ALS%20Trades.apk");
      if (!response.ok) {
        throw new Error("APK file is not reachable");
      }

      const blob = await response.blob();
      const objectUrl = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = objectUrl;
      link.download = "ALS Trades.apk";
      document.body.appendChild(link);
      link.click();
      link.remove();
      URL.revokeObjectURL(objectUrl);
      setFeedback("Android APK download started.");
    } catch {
      const fallback = document.createElement("a");
      fallback.href = "/ALS%20Trades.apk";
      fallback.download = "ALS Trades.apk";
      document.body.appendChild(fallback);
      fallback.click();
      fallback.remove();
      setFeedback("Trying APK download. If blocked, allow downloads in browser.");
    }
  };

  const handleDownload = async () => {
    if (deviceType === "android") {
      await startAndroidDownload();
      return;
    }

    if (deviceType === "ios") {
      setFeedback("iOS app download will be available soon.");
      return;
    }

    if (selectedPlatform === "android") {
      await startAndroidDownload();
      return;
    }

    setFeedback("iOS app download is coming soon.");
  };

  return (
    <>
      <motion.button
        type="button"
        onClick={() => setOpen(true)}
        className="fixed bottom-5 right-5 z-[100] inline-flex h-14 w-14 items-center justify-center rounded-full bg-[linear-gradient(135deg,var(--secondary),var(--primary))] text-[var(--card-bg)] shadow-[0_18px_40px_-16px_var(--glow)]"
        whileHover={{ scale: 1.07 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Open app download popup"
      >
        <span className="absolute inset-0 animate-ping rounded-full bg-[var(--primary)]/35" />
        <Download size={22} className="relative z-10" />
      </motion.button>

      <AnimatePresence>
        {open ? (
          <motion.div
            className="fixed inset-0 z-[101] flex items-end justify-center p-4 sm:items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button
              type="button"
              aria-label="Close popup"
              onClick={close}
              className="absolute inset-0 bg-black/60"
            />

            <motion.div
              role="dialog"
              aria-modal="true"
              className="relative w-full max-w-2xl overflow-hidden rounded-[28px] border border-[var(--card-border)] bg-[var(--card-bg)] shadow-[0_34px_80px_-48px_rgba(0,0,0,0.7)]"
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 18, scale: 0.98 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
            >
              <div className="relative h-40 sm:h-48">
                <Image src={popupImage} alt="" fill sizes="100vw" className="object-cover" priority />
                <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(0,0,0,0.55)_0%,rgba(0,0,0,0.25)_55%,rgba(0,0,0,0.5)_100%)]" />
              </div>

              <button
                type="button"
                onClick={close}
                aria-label="Dismiss"
                className="absolute right-3 top-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-black/50 text-white/90 backdrop-blur hover:bg-black/65"
              >
                <X size={16} />
              </button>

              <div className="p-5 sm:p-7">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--secondary)]">
                  Download App
                </p>
                <h3 className="mt-2 text-2xl font-black text-[var(--foreground)] sm:text-3xl">
                  Get ALS Trades on your device
                </h3>
                <p className="mt-3 text-sm text-[var(--text-muted)] sm:text-base">
                  Android users can download APK instantly. iOS app is coming soon.
                </p>

                {deviceType === "other" ? (
                  <div className="mt-5 inline-flex rounded-xl border border-[var(--card-border)] bg-[var(--hover-bg)] p-1">
                    <button
                      type="button"
                      onClick={() => setSelectedPlatform("android")}
                      className={[
                        "rounded-lg px-4 py-2 text-sm font-semibold transition-colors",
                        selectedPlatform === "android"
                          ? "bg-[var(--card-bg)] text-[var(--foreground)]"
                          : "text-[var(--text-muted)]",
                      ].join(" ")}
                    >
                      <span className="inline-flex items-center gap-2">
                        <Smartphone size={14} />
                        Android
                      </span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setSelectedPlatform("ios")}
                      className={[
                        "rounded-lg px-4 py-2 text-sm font-semibold transition-colors",
                        selectedPlatform === "ios"
                          ? "bg-[var(--card-bg)] text-[var(--foreground)]"
                          : "text-[var(--text-muted)]",
                      ].join(" ")}
                    >
                      <span className="inline-flex items-center gap-2">
                        <Smartphone size={14} />
                        iOS
                      </span>
                    </button>
                  </div>
                ) : null}

                <div className="mt-6 flex flex-wrap gap-3">
                  <button
                    type="button"
                    onClick={handleDownload}
                    className="rounded-xl bg-[linear-gradient(90deg,var(--secondary),var(--primary))] px-6 py-3 text-sm font-semibold text-[var(--card-bg)]"
                  >
                    {deviceType === "android"
                      ? "Download for Android"
                      : deviceType === "ios"
                        ? "Download for iOS"
                        : selectedPlatform === "android"
                          ? "Download for Android"
                          : "Download for iOS"}
                  </button>
                  <button
                    type="button"
                    onClick={close}
                    className="rounded-xl border border-[var(--card-border)] px-6 py-3 text-sm font-semibold text-[var(--foreground)] hover:bg-[var(--hover-bg)]"
                  >
                    Close
                  </button>
                </div>

                {feedback ? <p className="mt-3 text-sm text-[var(--text-muted)]">{feedback}</p> : null}
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
