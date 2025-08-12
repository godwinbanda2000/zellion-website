import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <section className="bg-primary/5 border-b border-primary/10">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
            Privacy Policy
          </h1>
          <p className="mt-2 text-primary/70">Last updated: May 2025</p>
        </div>
      </section>

      <main className="container mx-auto px-4 py-10 flex-1">
        <div className="grid gap-10 md:grid-cols-12">
          {/* TOC */}
          <aside className="md:col-span-3">
            <div className="sticky top-6 rounded-lg border border-primary/10 bg-white p-4 shadow-sm">
              <h3 className="text-sm font-semibold mb-3 text-primary/70">
                On this page
              </h3>
              <nav className="space-y-2 text-sm">
                <a className="block hover:text-[#0ba1ad]" href="#intro">
                  Introduction
                </a>
                <a className="block hover:text-[#0ba1ad]" href="#collect">
                  Information We Collect
                </a>
                <a className="block hover:text-[#0ba1ad]" href="#use">
                  How We Use Information
                </a>
                <a className="block hover:text-[#0ba1ad]" href="#cookies">
                  Cookies and Tracking
                </a>
                <a className="block hover:text-[#0ba1ad]" href="#sharing">
                  Data Sharing
                </a>
                <a className="block hover:text-[#0ba1ad]" href="#security">
                  Data Security
                </a>
                <a className="block hover:text-[#0ba1ad]" href="#rights">
                  Your Rights
                </a>
                <a className="block hover:text-[#0ba1ad]" href="#contact">
                  Contact
                </a>
              </nav>
            </div>
          </aside>

          {/* Content */}
          <section className="md:col-span-9 space-y-6">
            <div
              id="intro"
              className="rounded-lg border border-primary/10 bg-white p-6 shadow-sm scroll-mt-24"
            >
              <h2 className="text-xl font-semibold mb-3">Introduction</h2>
              <p className="text-primary/80 leading-relaxed">
                At Zellion, we respect your privacy and are committed to
                protecting your personal information. This policy explains what
                data we collect, how we use it, and your rights regarding your
                data when you use our website and services.
              </p>
            </div>

            <div
              id="collect"
              className="rounded-lg border border-primary/10 bg-white p-6 shadow-sm scroll-mt-24"
            >
              <h2 className="text-xl font-semibold mb-3">
                Information We Collect
              </h2>
              <ul className="list-disc ml-6 space-y-2 text-primary/80">
                <li>
                  <span className="font-medium">Contact Information</span>:
                  name, email address, and phone number when you reach out to us
                  or request more information.
                </li>
                <li>
                  <span className="font-medium">Usage Data</span>: pages
                  visited, interactions, and device/browser information
                  collected via analytics and cookies.
                </li>
              </ul>
            </div>

            <div
              id="use"
              className="rounded-lg border border-primary/10 bg-white p-6 shadow-sm scroll-mt-24"
            >
              <h2 className="text-xl font-semibold mb-3">
                How We Use Information
              </h2>
              <ul className="list-disc ml-6 space-y-2 text-primary/80">
                <li>Respond to inquiries and provide customer support.</li>
                <li>Improve our website, products, and services.</li>
                <li>
                  Communicate important updates, offers, and news (you can opt
                  out anytime).
                </li>
              </ul>
            </div>

            <div
              id="cookies"
              className="rounded-lg border border-primary/10 bg-white p-6 shadow-sm scroll-mt-24"
            >
              <h2 className="text-xl font-semibold mb-3">
                Cookies and Tracking
              </h2>
              <ul className="list-disc ml-6 space-y-2 text-primary/80">
                <li>
                  We use cookies to remember your preferences and analyze site
                  performance.
                </li>
                <li>You can control cookies through your browser settings.</li>
                <li>Disabling cookies may affect site functionality.</li>
              </ul>
            </div>

            <div
              id="sharing"
              className="rounded-lg border border-primary/10 bg-white p-6 shadow-sm scroll-mt-24"
            >
              <h2 className="text-xl font-semibold mb-3">Data Sharing</h2>
              <p className="text-primary/80">
                We do not sell your personal information. We may share data with
                trusted service providers who assist in operating our website
                and services, under confidentiality agreements, or when required
                by law.
              </p>
            </div>

            <div
              id="security"
              className="rounded-lg border border-primary/10 bg-white p-6 shadow-sm scroll-mt-24"
            >
              <h2 className="text-xl font-semibold mb-3">Data Security</h2>
              <p className="text-primary/80">
                We implement technical and organizational measures to protect
                your data. However, no method of transmission over the Internet
                or electronic storage is 100% secure.
              </p>
            </div>

            <div
              id="rights"
              className="rounded-lg border border-primary/10 bg-white p-6 shadow-sm scroll-mt-24"
            >
              <h2 className="text-xl font-semibold mb-3">Your Rights</h2>
              <ul className="list-disc ml-6 space-y-2 text-primary/80">
                <li>Request access to the personal data we hold about you.</li>
                <li>Request correction or deletion of your personal data.</li>
                <li>
                  Contact us to exercise these rights at{" "}
                  <a
                    className="text-[#0ba1ad]"
                    href="mailto:contact@zellionhomes.com"
                  >
                    contact@zellionhomes.com
                  </a>
                  .
                </li>
              </ul>
            </div>

            <div
              id="contact"
              className="rounded-lg border border-primary/10 bg-white p-6 shadow-sm scroll-mt-24"
            >
              <h2 className="text-xl font-semibold mb-3">Contact</h2>
              <p className="text-primary/80">
                Questions about this policy? Email us at{" "}
                <a
                  className="text-[#0ba1ad]"
                  href="mailto:contact@zellionhomes.com"
                >
                  contact@zellionhomes.com
                </a>{" "}
                or call{" "}
                <a className="text-[#0ba1ad]" href="tel:+260972841363">
                  +260 972 841 363
                </a>
                . For general inquiries, visit our{" "}
                <Link to="/contact" className="text-[#0ba1ad] underline">
                  Contact page
                </Link>
                .
              </p>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
