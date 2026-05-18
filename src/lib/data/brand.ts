export const brand = {
  name: "Ámbar",
  tagline: "Specialty Coffee · Est. 2014",
  city: "Madrid",
  description:
    "A specialty coffee atelier where slow rituals, single-origin beans and quiet design meet daily.",
  address: {
    street: "Calle de la Reina 17",
    city: "28004 Madrid",
    country: "España",
  },
  hours: [
    { day: "Lunes – Viernes", time: "07:30 – 20:00" },
    { day: "Sábados",          time: "08:30 – 21:00" },
    { day: "Domingos",         time: "09:00 – 18:00" },
  ],
  contact: {
    email:    "hola@ambarcafe.es",
    phone:    "+34 91 524 88 17",
    instagram:"@ambar.cafe",
  },
  social: [
    { label: "Instagram", href: "https://instagram.com" },
    { label: "Spotify",   href: "https://spotify.com"   },
    { label: "Journal",   href: "#story"                },
  ],
} as const;

export const navLinks = [
  { label: "Historia", href: "#story"    },
  { label: "Menú",     href: "#menu"     },
  { label: "Ritual",   href: "#process"  },
  { label: "Galería",  href: "#gallery"  },
  { label: "Visítanos",href: "#visit"    },
];
