import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-md text-center">
        {/* 404 */}
        <h1 className="text-8xl font-bold text-[#C7B9A6] mb-4">404</h1>

        {/* Satirical message */}
        <h2 className="text-2xl font-semibold text-[#EDEDED] mb-4">
          Well, this is awkward.
        </h2>

        <div className="space-y-4 text-[#A1A1A6] mb-8">
          <p>
            You've found a page that doesn't exist.
            Impressive, really.
          </p>
          <p className="text-sm text-[#6B6B70]">
            I build backend systems that handle millions of requests,
            but apparently I couldn't handle this one URL.
          </p>
          <p className="text-sm text-[#6B6B70]">
            The irony is not lost on me.
          </p>
        </div>

        {/* Fake error log */}
        <div className="bg-[#12141A] border border-[#2A2D35] p-4 mb-8 text-left font-mono text-xs">
          <p className="text-[#6B6B70]">// Error log:</p>
          <p className="text-red-400">Error: PAGE_NOT_FOUND</p>
          <p className="text-[#A1A1A6]">at YourBrowser.navigate()</p>
          <p className="text-[#A1A1A6]">at User.clickedSomething()</p>
          <p className="text-[#6B6B70]">// Have you tried turning it off and on again?</p>
        </div>

        {/* Back home */}
        <Link
          href="/"
          className="inline-block px-6 py-3 bg-[#C7B9A6] text-[#0B0D10] font-medium hover:bg-[#B5A795] transition-colors"
        >
          Take me home
        </Link>

        <p className="mt-4 text-xs text-[#6B6B70]">
          (Before I embarrass myself further)
        </p>
      </div>
    </div>
  );
}
