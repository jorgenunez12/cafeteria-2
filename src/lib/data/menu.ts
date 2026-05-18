import type { MenuCategory, MenuItem } from "@/types";

export const menuCategories: { id: MenuCategory; label: string; sub: string }[] = [
  { id: "espresso",   label: "Espresso",        sub: "El origen del ritual." },
  { id: "cold-brew",  label: "Cold Brew",       sub: "Infusión lenta, 18 horas." },
  { id: "signature",  label: "Signature",       sub: "Creaciones de autor."     },
  { id: "bakery",     label: "Bakery",          sub: "Horneado del día."        },
  { id: "desserts",   label: "Desserts",        sub: "Postres de cuchara."      },
];

export const menuItems: MenuItem[] = [
  {
    id: "esp-01",
    name: "Geisha Espresso",
    category: "espresso",
    description:
      "Notas florales de jazmín y bergamota. Cuerpo sedoso, acidez brillante.",
    price: "4,80€",
    origin: "Hacienda La Esmeralda · Panamá",
    tag: "Single Origin",
    image:
      "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: "esp-02",
    name: "Cortado Clásico",
    category: "espresso",
    description:
      "Doble ristretto con leche texturizada al 64°. Equilibrio puro.",
    price: "3,20€",
    origin: "Blend de la casa",
    image:
      "https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: "esp-03",
    name: "Flat White Etíope",
    category: "espresso",
    description:
      "Yirgacheffe lavado con leche entera. Final cítrico y delicado.",
    price: "3,80€",
    origin: "Yirgacheffe · Etiopía",
    image:
      "https://images.unsplash.com/photo-1561882468-9110e03e0f78?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: "cb-01",
    name: "Cold Brew Reserva",
    category: "cold-brew",
    description:
      "Extracción en frío durante 18 horas. Notas de cacao y caramelo.",
    price: "4,20€",
    origin: "Sidamo · Etiopía",
    tag: "Slow Brew",
    image:
      "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: "cb-02",
    name: "Nitro Cascara",
    category: "cold-brew",
    description:
      "Infusión de cáscara de café con nitrógeno. Cremoso, afrutado.",
    price: "4,80€",
    origin: "Finca Las Mercedes",
    image:
      "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: "sig-01",
    name: "Café de Olla Moderno",
    category: "signature",
    description:
      "Espresso, infusión de canela ceylán, panela y un toque de naranja.",
    price: "5,20€",
    tag: "Casa",
    image:
      "https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: "sig-02",
    name: "Ámbar Tonic",
    category: "signature",
    description:
      "Espresso, tónica artesanal y aceite esencial de bergamota.",
    price: "5,60€",
    tag: "Signature",
    image:
      "https://images.unsplash.com/photo-1497636577773-f1231844b336?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: "sig-03",
    name: "Matcha Latte de Uji",
    category: "signature",
    description:
      "Matcha ceremonial de Uji, leche de avena barista y miel de azahar.",
    price: "4,60€",
    origin: "Uji · Japón",
    image:
      "https://images.unsplash.com/photo-1536013455118-9a7e8aaf5d65?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: "bak-01",
    name: "Croissant de Mantequilla",
    category: "bakery",
    description:
      "72 horas de fermentación. Hojaldre con mantequilla francesa AOP.",
    price: "3,40€",
    image:
      "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: "bak-02",
    name: "Pan de Masa Madre",
    category: "bakery",
    description:
      "Harina ecológica T80, fermentación lenta. Servido con mantequilla salada.",
    price: "4,80€",
    image:
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: "des-01",
    name: "Tarta de Queso Vasca",
    category: "desserts",
    description:
      "Receta tradicional, horneada hasta caramelizar. Centro cremoso.",
    price: "6,20€",
    image:
      "https://images.unsplash.com/photo-1567171466295-4afa63d45416?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: "des-02",
    name: "Affogato al Espresso",
    category: "desserts",
    description:
      "Helado de vainilla Bourbon bañado en un doble espresso recién extraído.",
    price: "5,80€",
    image:
      "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?auto=format&fit=crop&w=1400&q=80",
  },
];
