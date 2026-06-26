import dynamic from "next/dynamic";

export const FacebookFeed = dynamic(() => import("@/components/FacebookEmbed").then((mod) => mod.FacebookEmbed), {
  ssr: false,
  loading: () => (
    <div className="rounded-lg border border-teal-900/10 bg-white p-6 shadow-soft">
      <p className="font-bold text-teal-900">Stay connected</p>
      <p className="mt-2 text-sm text-muted">Loading the Facebook feed...</p>
    </div>
  ),
});
