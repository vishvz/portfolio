import { siteConfig, skillGroups } from "@/data/projects";

export default function JsonLd() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://vishvajeet.dev";
  const skills = skillGroups.map((group) => group?.items ?? []).flat();
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    alternateName: ["Vishvajeet", "Vishvajeet Zala", "vishvz", "Vishvajeetsinh"],
    url: siteUrl,
    jobTitle: siteConfig.title,
    description: siteConfig.tagline,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Ahmedabad",
      addressCountry: "India",
    },
    sameAs: [siteConfig.github, siteConfig.linkedin],
    knowsAbout: [
      ...skills,
      "Backend Development",
      "Healthcare Software",
      "IoT Systems",
      "Enterprise Systems",
      "Full-Stack Development",
      "Frontend Development",
      "Backend Development",
      "Database Management",
      "API Development",
      "Web Development",
      "Mobile Development",
      "DevOps",
      "Cloud Computing",
      "Software Development",
      "Software Engineering",
      "Software Architecture",
      "Software Design",
      "Software Development Process",
      "Software Development Lifecycle",
      "Software Development Methodology",
      "Software Development Tools",
      "Software Development Technologies",
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Vishvajeetsinh Zala Portfolio",
    url: siteUrl,
    description:
      "Vishvajeetsinh Zala - Backend-focused software engineer building reliable systems for healthcare, IoT, and enterprise applications.",
    author: {
      "@type": "Person",
      name: siteConfig.name,
    },
  };

  const profilePageSchema = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    mainEntity: personSchema,
    dateCreated: "2024-01-01T00:00:00Z",
    dateModified: new Date().toISOString(),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(profilePageSchema) }}
      />
    </>
  );
}
