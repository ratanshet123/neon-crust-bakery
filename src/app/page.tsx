import { Hero } from "@/components/home/Hero";
import { Highlights } from "@/components/home/Highlights";
import { BestSellers } from "@/components/home/BestSellers";
import { CustomCakes } from "@/components/home/CustomCakes";
import { Testimonials } from "@/components/home/Testimonials";
import { FAQ } from "@/components/home/FAQ";
import { Newsletter } from "@/components/home/Newsletter";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { GoogleReviews } from "@/components/home/GoogleReviews";
import { InstagramStrip } from "@/components/home/InstagramStrip";
import { siteConfig } from "@/data/site";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Bakery",
    "name": siteConfig.name,
    "image": "https://neoncrust.com/og-image.jpg",
    "description": siteConfig.tagline,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": siteConfig.address,
      "addressLocality": "Bangalore",
      "addressRegion": "KA",
      "postalCode": "560100",
      "addressCountry": "IN"
    },
    "telephone": siteConfig.phone,
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "10:00",
      "closes": "23:00"
    },
    "menu": "https://neoncrust.com/menu",
    "acceptsReservations": "True"
  };

  return (
    <div className="flex flex-col min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <Highlights />
      <WhyChooseUs />
      <BestSellers />
      <CustomCakes />
      <GoogleReviews />
      <Testimonials />
      <FAQ />
      <InstagramStrip />
      <Newsletter />
    </div>
  );
}
