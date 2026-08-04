export interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
  price: string;
  priceValue: number; // For sorting
  rating: number;
  timeframe: string;
  category: "Dry Cleaning" | "Laundry" | "Specialty";
  location?: string;
}

export const servicesData: Service[] = [
  {
    id: "regular-laundry",
    title: "Regular Laundry",
    description: "Everyday laundry for socks, towels, sheets, and casual wear. Washed, dried, and perfectly folded.",
    image: "https://images.unsplash.com/photo-1545173168-9f1947eebb7f?q=80&w=2071&auto=format&fit=crop",
    price: "$2.45 per pound",
    priceValue: 2.45,
    rating: 4.8,
    timeframe: "Same day available",
    category: "Laundry"
  },
  {
    id: "shirts",
    title: "Shirts",
    description: "Professional cleaning and crisp, wrinkle-free pressing for dress shirts and blouses.",
    image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=1972&auto=format&fit=crop",
    price: "$6.95 per shirt",
    priceValue: 6.95,
    rating: 4.9,
    timeframe: "Next day",
    category: "Dry Cleaning"
  },
  {
    id: "pants",
    title: "Pants",
    description: "Expert cleaning and pressing for trousers, slacks, and jeans, ensuring a perfect crease.",
    image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=1974&auto=format&fit=crop",
    price: "$8.95 per pair",
    priceValue: 8.95,
    rating: 4.8,
    timeframe: "Next day",
    category: "Dry Cleaning"
  },
  {
    id: "jackets",
    title: "Jackets",
    description: "Specialized care for blazers, sport coats, and casual jackets to maintain shape and fabric integrity.",
    image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=1936&auto=format&fit=crop",
    price: "$14.95 per jacket",
    priceValue: 14.95,
    rating: 4.7,
    timeframe: "2-3 days",
    category: "Dry Cleaning"
  },
  {
    id: "suits",
    title: "Suits",
    description: "Premium dry cleaning for your complete professional suits. We use eco-friendly solvents that are gentle on clothes.",
    image: "https://images.unsplash.com/photo-1594938298596-10fe6d01e1d2?q=80&w=2080&auto=format&fit=crop",
    price: "$22.00 per suit",
    priceValue: 22.00,
    rating: 4.9,
    timeframe: "2-3 days",
    category: "Dry Cleaning"
  },
  {
    id: "dresses",
    title: "Dresses",
    description: "Delicate care for day dresses, evening wear, and gowns to ensure they remain in pristine condition.",
    image: "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?q=80&w=1974&auto=format&fit=crop",
    price: "$17.00 per dress",
    priceValue: 17.00,
    rating: 5.0,
    timeframe: "3 days",
    category: "Dry Cleaning"
  }
];
