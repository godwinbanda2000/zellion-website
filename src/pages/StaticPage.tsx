import Footer from "@/components/Footer";
import NotFound from "./NotFound";
import { useParams } from "react-router-dom";

const allowedSlugs = new Set([
  // Product
  "features",
  "pricing",
  "mobile-app",
  "desktop",
  "api",
  // Company
  "about-us",
  "careers",
  "press",
  "partners",
  "blog",
  // Resources
  "help-center",
  "documentation",
  "tutorials",
  "community",
  "status",
  // Legal (excluding privacy-policy which has a dedicated page)
  "terms-of-service",
  "cookie-policy",
  "gdpr",
  "licensing",
]);

function formatTitleFromSlug(slug: string): string {
  const exceptions: Record<string, string> = {
    api: "API",
    gdpr: "GDPR",
  };
  if (exceptions[slug]) return exceptions[slug];
  return slug
    .split("-")
    .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
    .join(" ");
}

const StaticPage = () => {
  const { pageId } = useParams();
  const slug = (pageId || "").toLowerCase();

  if (!allowedSlugs.has(slug)) {
    return <NotFound />;
  }

  const title = formatTitleFromSlug(slug);

  return (
    <div className="min-h-screen flex flex-col">
      <section className="bg-primary/5 border-b border-primary/10">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
            {title}
          </h1>
          <p className="mt-2 text-primary/70">
            Insights and resources about {title.toLowerCase()} at Zellion.
          </p>
        </div>
      </section>

      <main className="container mx-auto px-4 py-10 flex-1">
        <div className="max-w-3xl">
          <div className="space-y-6">
            <p className="text-primary/90 leading-relaxed">
              Zellion is a modern real estate platform built to help buyers,
              sellers, and agents make smarter decisions. Explore our{" "}
              {title.toLowerCase()} to learn how we deliver value with a focus
              on reliability, performance, and user experience.
            </p>

            <div className="rounded-lg border border-primary/10 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-semibold mb-3">Overview</h2>
              <p className="text-primary/80">
                This page outlines what {title.toLowerCase()} means within the
                Zellion ecosystem and how it fits into our mission to simplify
                property discovery and transactions.
              </p>
            </div>

            <div className="rounded-lg border border-primary/10 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-semibold mb-3">What you’ll find</h2>
              <ul className="list-disc ml-6 text-primary/80 space-y-2">
                <li>Key details about {title.toLowerCase()} at Zellion</li>
                <li>Best practices and helpful tips</li>
                <li>Links to related resources where applicable</li>
              </ul>
            </div>

            <div className="rounded-lg border border-primary/10 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-semibold mb-3">Get started</h2>
              <p className="text-primary/80">
                Have questions about {title.toLowerCase()}? Our team is here to
                help. Reach out anytime at{" "}
                <a
                  className="text-[#0ba1ad]"
                  href="mailto:contact@zellionhomes.com"
                >
                  contact@zellionhomes.com
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default StaticPage;
