// Sample jewelry products data
export const products = [
  // Rings
  {
    id: 1,
    name: "Classic Diamond Solitaire Ring",
    category: "rings",
    material: "white-gold",
    price: 2499.99,
    description: "Timeless elegance with a brilliant-cut diamond set in 14K white gold. Perfect for engagements or special occasions.",
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&q=80",
    inStock: true,
    rating: 4.9,
    reviews: 127,
    sizes: ["5", "6", "7", "8", "9"],
    details: {
      metal: "14K White Gold",
      stone: "Diamond (1.0 ct)",
      purity: "14K",
      weight: "3.2g"
    }
  },
  {
    id: 2,
    name: "Rose Gold Band with Sapphires",
    category: "rings",
    material: "rose-gold",
    price: 1899.99,
    description: "Elegant rose gold band adorned with deep blue sapphires. A stunning piece for any jewelry collection.",
    image: "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=800&q=80",
    inStock: true,
    rating: 4.8,
    reviews: 89,
    sizes: ["5", "6", "7", "8", "9"],
    details: {
      metal: "18K Rose Gold",
      stone: "Blue Sapphires (0.8 ct total)",
      purity: "18K",
      weight: "4.1g"
    }
  },
  {
    id: 3,
    name: "Vintage Emerald Engagement Ring",
    category: "rings",
    material: "yellow-gold",
    price: 3299.99,
    description: "Breathtaking vintage-inspired ring featuring a stunning emerald surrounded by diamonds.",
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80",
    inStock: true,
    rating: 5.0,
    reviews: 156,
    sizes: ["5", "6", "7", "8"],
    details: {
      metal: "18K Yellow Gold",
      stone: "Emerald (1.5 ct) + Diamonds (0.4 ct)",
      purity: "18K",
      weight: "5.3g"
    }
  },

  // Necklaces
  {
    id: 4,
    name: "Diamond Tennis Necklace",
    category: "necklaces",
    material: "white-gold",
    price: 4599.99,
    description: "Luxurious tennis necklace featuring brilliant-cut diamonds set in white gold. Sparkle with sophistication.",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80",
    inStock: true,
    rating: 4.9,
    reviews: 203,
    details: {
      metal: "18K White Gold",
      stone: "Diamonds (5.0 ct total)",
      length: "16-18 inches adjustable",
      weight: "12.8g"
    }
  },
  {
    id: 5,
    name: "Pearl Pendant Necklace",
    category: "necklaces",
    material: "yellow-gold",
    price: 899.99,
    description: "Classic freshwater pearl pendant on a delicate yellow gold chain. Timeless beauty and elegance.",
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80",
    inStock: true,
    rating: 4.7,
    reviews: 92,
    details: {
      metal: "14K Yellow Gold",
      stone: "Freshwater Pearl (10mm)",
      length: "16-18 inches adjustable",
      weight: "3.5g"
    }
  },
  {
    id: 6,
    name: "Heart Locket with Diamonds",
    category: "necklaces",
    material: "rose-gold",
    price: 1299.99,
    description: "Romantic heart-shaped locket in rose gold with diamond accents. Holds two photos inside.",
    image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80",
    inStock: true,
    rating: 4.8,
    reviews: 145,
    details: {
      metal: "14K Rose Gold",
      stone: "Diamonds (0.15 ct)",
      length: "18 inches",
      weight: "6.2g"
    }
  },

  // Bracelets
  {
    id: 7,
    name: "Diamond Tennis Bracelet",
    category: "bracelets",
    material: "white-gold",
    price: 3899.99,
    description: "Stunning tennis bracelet with perfectly matched diamonds. A statement piece for any occasion.",
    image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80",
    inStock: true,
    rating: 4.9,
    reviews: 178,
    details: {
      metal: "18K White Gold",
      stone: "Diamonds (4.0 ct total)",
      length: "7 inches",
      weight: "10.5g"
    }
  },
  {
    id: 8,
    name: "Gold Bangle Set",
    category: "bracelets",
    material: "yellow-gold",
    price: 1599.99,
    description: "Set of three elegant yellow gold bangles. Can be worn together or separately.",
    image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=800&q=80",
    inStock: true,
    rating: 4.6,
    reviews: 67,
    details: {
      metal: "22K Yellow Gold",
      purity: "22K",
      diameter: "2.5 inches",
      weight: "18.5g (total for set)"
    }
  },
  {
    id: 9,
    name: "Charm Bracelet with Gemstones",
    category: "bracelets",
    material: "silver",
    price: 599.99,
    description: "Delicate sterling silver charm bracelet featuring colorful gemstone charms.",
    image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80",
    inStock: false,
    rating: 4.5,
    reviews: 43,
    details: {
      metal: "925 Sterling Silver",
      stone: "Mixed Gemstones",
      length: "7-8 inches adjustable",
      weight: "8.2g"
    }
  },

  // Earrings
  {
    id: 10,
    name: "Diamond Stud Earrings",
    category: "earrings",
    material: "white-gold",
    price: 1999.99,
    description: "Classic round brilliant diamond studs in white gold. Perfect for everyday elegance.",
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80",
    inStock: true,
    rating: 5.0,
    reviews: 289,
    details: {
      metal: "14K White Gold",
      stone: "Diamonds (1.0 ct total)",
      purity: "14K",
      weight: "1.8g (pair)"
    }
  },
  {
    id: 11,
    name: "Teardrop Pearl Earrings",
    category: "earrings",
    material: "yellow-gold",
    price: 749.99,
    description: "Elegant teardrop-shaped pearl earrings with diamond accents. Perfect for special occasions.",
    image: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=800&q=80",
    inStock: true,
    rating: 4.8,
    reviews: 112,
    details: {
      metal: "18K Yellow Gold",
      stone: "Pearls + Diamonds (0.1 ct)",
      length: "1.5 inches",
      weight: "3.4g (pair)"
    }
  },
  {
    id: 12,
    name: "Ruby Hoop Earrings",
    category: "earrings",
    material: "rose-gold",
    price: 1299.99,
    description: "Bold hoop earrings adorned with vibrant rubies. Make a statement with these beauties.",
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80",
    inStock: true,
    rating: 4.7,
    reviews: 87,
    details: {
      metal: "14K Rose Gold",
      stone: "Rubies (1.2 ct total)",
      diameter: "1 inch",
      weight: "4.9g (pair)"
    }
  },

  // Watches
  {
    id: 13,
    name: "Diamond Bezel Luxury Watch",
    category: "watches",
    material: "white-gold",
    price: 8999.99,
    description: "Exquisite timepiece with diamond-encrusted bezel and white gold case. Swiss movement.",
    image: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=800&q=80",
    inStock: true,
    rating: 4.9,
    reviews: 56,
    details: {
      metal: "18K White Gold",
      stone: "Diamonds (2.0 ct bezel)",
      movement: "Swiss Automatic",
      waterResistant: "50m",
      weight: "145g"
    }
  },
  {
    id: 14,
    name: "Classic Gold Watch",
    category: "watches",
    material: "yellow-gold",
    price: 5499.99,
    description: "Timeless gold watch with elegant design. Perfect for both casual and formal occasions.",
    image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=800&q=80",
    inStock: true,
    rating: 4.8,
    reviews: 73,
    details: {
      metal: "18K Yellow Gold",
      movement: "Quartz",
      waterResistant: "30m",
      weight: "120g"
    }
  },
  {
    id: 15,
    name: "Rose Gold Bracelet Watch",
    category: "watches",
    material: "rose-gold",
    price: 3299.99,
    description: "Elegant bracelet-style watch in rose gold with mother-of-pearl dial.",
    image: "https://images.unsplash.com/photo-1533139502658-0198f920d8e8?w=800&q=80",
    inStock: true,
    rating: 4.7,
    reviews: 91,
    details: {
      metal: "18K Rose Gold",
      dial: "Mother of Pearl",
      movement: "Automatic",
      waterResistant: "30m",
      weight: "95g"
    }
  }
];

// Category definitions
export const categories = [
  { id: "rings", name: "Rings", icon: "💍" },
  { id: "necklaces", name: "Necklaces", icon: "📿" },
  { id: "bracelets", name: "Bracelets", icon: "⚪" },
  { id: "earrings", name: "Earrings", icon: "💎" },
  { id: "watches", name: "Watches", icon: "⌚" }
];

// Material filters
export const materials = [
  { id: "white-gold", name: "White Gold" },
  { id: "yellow-gold", name: "Yellow Gold" },
  { id: "rose-gold", name: "Rose Gold" },
  { id: "silver", name: "Sterling Silver" },
  { id: "platinum", name: "Platinum" }
];

// Price ranges
export const priceRanges = [
  { id: "0-1000", name: "Under $1,000", min: 0, max: 1000 },
  { id: "1000-3000", name: "$1,000 - $3,000", min: 1000, max: 3000 },
  { id: "3000-5000", name: "$3,000 - $5,000", min: 3000, max: 5000 },
  { id: "5000-plus", name: "$5,000+", min: 5000, max: Infinity }
];
