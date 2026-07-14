"use client";

import { useState } from "react";

interface ShareButtonProps {
  title: string;
  text: string;
}

export default function ShareButton({ title, text }: ShareButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const url = window.location.href;

    if (navigator.share) {
      try {
        await navigator.share({ title, text, url });
      } catch {
        // User cancelled the share sheet — nothing to do.
      }
      return;
    }

    // Fallback for browsers without the Web Share API (most desktops).
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard unavailable — silently ignore.
    }
  };

  return (
    <button
      type="button"
      onClick={handleShare}
      className="text-[#6B6B70] hover:text-[#EDEDED] transition-colors"
    >
      {copied ? "Link copied" : "Share"}
    </button>
  );
}
