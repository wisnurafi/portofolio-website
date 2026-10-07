export default function JsonLd({ siteUrl }: { siteUrl: string }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Wisnu Rafi",
    url: siteUrl,
    jobTitle: "Security Engineer",
    worksFor: {
      "@type": "Organization",
      name: "BeyondSoft",
      location: "Singapore",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Jakarta",
      addressCountry: "ID",
    },
    sameAs: ["https://github.com/wisnurafi"],
    knowsAbout: [
      "Reverse Engineering",
      "Systems Software",
      "C++",
      "C#",
      "Python",
      "Windows Internals",
      "Red Teaming",
      "Malware Analysis",
      "Digital Forensics",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
