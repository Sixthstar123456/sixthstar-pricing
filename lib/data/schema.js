export const office365Schema = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "SixthStar Technologies",
    "url": "https://www.sixthstar.in",
    "logo": "https://www.sixthstar.in/logo.png",
    "email": "mailto:sales@sixthstar.in",
    "telephone": "+91 9383996666",
    "founder": {
      "@type": "Person",
      "name": "Nasheer Ahamed"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "1st Floor, No.3 & 4, Siri Towers, Fourrts Ave, Annani Indira Nagar, Thoraipakkam",
      "addressLocality": "Chennai",
      "addressRegion": "Tamil Nadu",
      "postalCode": "600097",
      "addressCountry": "IN"
    },
    "sameAs": [
      "https://www.facebook.com/yourfacebookpage",
      "https://twitter.com/yourtwitterhandle",
      "https://www.linkedin.com/company/yourlinkedinpage"
    ],
    "description": "SixthStar Technologies provides IT services, web hosting, and secure email solutions including Carbonio Email Server."
  }
];

export const office365SchemaCommunity = [{

  "@context": "https://schema.org", 
  "@type": "SoftwareApplication",
  "name": "Carbonio Community Edition",
  "url": "https://sixthstar.in/zextras-Carbonio/carbonio-community-edition", 
  "description": "A free and open-source collaboration platform designed for businesses. Includes email, calendar, document management, team chat, and file sharing – all in one suite.",
  "image": [
    "https://sixthstar.in/images/carbonio-community-edition-screenshot1.jpg", 
    "https://sixthstar.in/images/carbonio-community-edition-screenshot2.jpg" 
  ],
  "applicationCategory": "BusinessApplication",
  "operatingSystem": "Linux, Windows, macOS",
  "featureList": "Email Server, Calendar & Contacts, Team Chat, Document Collaboration, File Storage, Mobile Access, Multi-user Support",
  "license": "GNU Affero General Public License v3.0",
  "softwareVersion": "Latest Stable Version",
  "downloadUrl": "https://www.zextras.com/carbonio-download.html", 
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.6",
    "reviewCount": 35
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://sixthstar.in/zextras-Carbonio/carbonio-community-edition" 
  }

  

},

{
  "@context": "https://schema.org", 
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is Carbonio Community Edition?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Carbonio Community Edition is the open-source version of the Carbonio digital collaboration suite. It includes essential features like email, calendar, file sharing, and chat — all in one platform, free to use."
      }
    },
    {
      "@type": "Question",
      "name": "Is Carbonio Community Edition free to use?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, it’s 100% free. You can download, install, and run Carbonio Community Edition without paying for a license. It’s perfect for individuals, developers, or small teams who want secure communication tools."
      }
    },
    {
      "@type": "Question",
      "name": "What features are included in Carbonio Community Edition?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "It includes core collaboration tools like webmail, calendar, address book, file management, team chat, and mobile sync via ActiveSync. It’s built for productivity and privacy."
      }
    },
    {
      "@type": "Question",
      "name": "How is Carbonio Community Edition different from the paid version?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The Community Edition offers the basics, while the Enterprise Edition includes advanced features like backup, high-availability support, native mobile apps, and professional support services."
      }
    },
    {
      "@type": "Question",
      "name": "Who should use Carbonio Community Edition?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "It’s ideal for IT professionals, small businesses, open-source enthusiasts, or anyone looking for a self-hosted alternative to services like Microsoft 365 or Google Workspace."
      }
    },
    {
      "@type": "Question",
      "name": "Can I use Carbonio Community Edition for my business?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, you can. As long as you’re comfortable managing your own server, Carbonio Community Edition works well for small to mid-sized businesses that want full control over their data."
      }
    },
    {
      "@type": "Question",
      "name": "How do I install Carbonio Community Edition?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You can install it on a Linux server (like Ubuntu) using official installation guides from Zextras. It’s a step-by-step process and mostly suited for users with basic server administration knowledge."
      }
    },
    {
      "@type": "Question",
      "name": "Does Carbonio Community Edition offer mobile access?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. You can sync emails, contacts, and calendars with your mobile device using ActiveSync-compatible apps like Outlook or your phone’s default mail client."
      }
    },
    {
      "@type": "Question",
      "name": "Is Carbonio Community Edition secure?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely. It’s built with strong security features like HTTPS, authentication, and access controls. Since it’s self-hosted, you have full control over your data and privacy settings."
      }
    },
    {
      "@type": "Question",
      "name": "Where can I download Carbonio Community Edition?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You can download it directly from the official Zextras website or contact SixthStar Tech — an Official Authorized Zextras Partner. Just make sure to follow the installation documentation to set it up correctly."
      }
    }
  ]
}

];

export const Office365Telecommunication = [{


  "@context": "https://schema.org", 
  "@type": "Product",
  "name": "Carbonio for Telecommunications",
  "description": "Carbonio Email client from Zextras by SixthStar delivers secure, scalable email and file management tools tailored for telecom operations.",
  "brand": {
    "@type": "Organization",
    "name": "SixthStar"
  },
  "category": "Email & Collaboration Service",
  "url": "https://sixthstar.in/carbonio-telecommunication", 
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://sixthstar.in/carbonio-telecommunication" 
  }


}];
