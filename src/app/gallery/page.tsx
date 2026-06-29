import { LoadingImage } from "@/components/LoadingImage";
import { PageHero } from "@/components/PageHero";
import { facebook, gallery } from "@/data/site";

export const metadata = {
  title: "Gallery",
  description: "Photo gallery for Fountain Bridge programs and community work.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="Photos that reflect care, education, and community action."
        text="A visual overview of the health, education, empowerment, and community inclusion work Fountain Bridge represents."
      />
      <section className="py-16">
        <div className="section-shell grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {gallery.map((item) => (
            <figure key={item.title} className="overflow-hidden rounded-lg bg-white shadow-soft">
              <div className="relative h-72">
                <LoadingImage src={item.image} alt={item.title} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover transition duration-500 hover:scale-105" />
              </div>
              <figcaption className="p-5">
                <p className="font-serif text-xl font-black text-teal-900">{item.title}</p>
                <p className="mt-2 text-sm leading-6 text-muted">{item.caption}</p>
              </figcaption>
            </figure>
          ))}
        </div>
        <div className="section-shell mt-10 rounded-lg bg-teal-900 p-7 text-white">
          <h2 className="font-serif text-3xl font-black">Real field photos</h2>
          <p className="mt-3 max-w-3xl leading-7 text-white/75">
            Visit the public Facebook page for field photos, outreach albums, videos, and day-to-day program activity from Fountain Bridge.
          </p>
          <a href={facebook.pageUrl} target="_blank" rel="noreferrer" className="focus-ring mt-5 inline-flex rounded-md bg-white px-4 py-2 text-sm font-bold text-teal-900">
            View Facebook photos
          </a>
        </div>
      </section>
    </>
  );
}
