import React, { useState, useEffect } from 'react';
import {
  Search,
  ShoppingCart,
  Star,
  ShieldCheck,
  Truck,
  RotateCcw,
  Clock,
  Heart,
  ChevronRight,
  Filter,
  Check,
  X,
  CreditCard,
  Phone,
  MapPin,
  Flame,
  Award,
  ChevronDown,
  AlertCircle,
  ExternalLink,
  Smartphone,
  CheckCircle2,
  Lock,
  RefreshCw,
  SlidersHorizontal,
  Tag,
  Zap,
  ShoppingBag,
  Package,
  Download
} from 'lucide-react';

interface ShoeProduct {
  id: string;
  title: string;
  brand: string;
  category: 'Sneakers' | 'Running & Sports' | 'Formal Leather' | 'Boots & High-Top' | 'Loafers & Casual';
  price: number;
  originalPrice: number;
  discountPercent: number;
  rating: number;
  reviewsCount: number;
  soldCount: number;
  image: string;
  isMall: boolean;
  freeDelivery: boolean;
  colors: string[];
  sizes: number[];
  specs: string[];
}

const SHOES_COLLECTION: ShoeProduct[] = [
  {
    id: 'goldstar-g10-runner',
    title: 'Goldstar G-10 Ultralight Mesh Running Shoes for Men - Red & Black edition',
    brand: 'Goldstar',
    category: 'Running & Sports',
    price: 1350,
    originalPrice: 1950,
    discountPercent: 31,
    rating: 4.8,
    reviewsCount: 342,
    soldCount: 890,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80',
    isMall: true,
    freeDelivery: true,
    colors: ['Red/Black', 'Navy Blue', 'Triple Black'],
    sizes: [39, 40, 41, 42, 43, 44],
    specs: ['Breathable air mesh', 'Anti-slip rubber sole', 'Proudly Made in Nepal']
  },
  {
    id: 'caliber-white-court',
    title: 'Caliber Men Premium White Nappa Leather Casual Street Sneakers',
    brand: 'Caliber Shoes',
    category: 'Sneakers',
    price: 2499,
    originalPrice: 3800,
    discountPercent: 34,
    rating: 4.9,
    reviewsCount: 215,
    soldCount: 520,
    image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=600&q=80',
    isMall: true,
    freeDelivery: true,
    colors: ['All White', 'White/Green', 'White/Navy'],
    sizes: [40, 41, 42, 43, 44],
    specs: ['Genuine leather finish', 'Comfort padded insole', 'Stitched cupsole']
  },
  {
    id: 'retro-chicago-high',
    title: 'High-Top Ankle Padded Retro Basketball Sneakers - Chicago Red & Black Edition',
    brand: 'StreetHeat',
    category: 'Sneakers',
    price: 3250,
    originalPrice: 5500,
    discountPercent: 41,
    rating: 4.9,
    reviewsCount: 189,
    soldCount: 412,
    image: 'https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=600&q=80',
    isMall: false,
    freeDelivery: true,
    colors: ['Chicago Red/White', 'Shadow Grey', 'Royal Blue'],
    sizes: [40, 41, 42, 43, 44],
    specs: ['High ankle support', 'Air cushioned sole', 'Synthetic leather upper']
  },
  {
    id: 'formal-oxford-brown',
    title: "Men's Handcrafted Genuine Burnished Leather Oxford Formal Shoes for Office & Wedding",
    brand: 'Bata',
    category: 'Formal Leather',
    price: 3890,
    originalPrice: 6200,
    discountPercent: 37,
    rating: 4.8,
    reviewsCount: 128,
    soldCount: 275,
    image: 'https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?auto=format&fit=crop&w=600&q=80',
    isMall: true,
    freeDelivery: true,
    colors: ['Burnished Tan Brown', 'Jet Black'],
    sizes: [39, 40, 41, 42, 43],
    specs: ['100% Genuine leather', 'Goodyear stitched sole', 'Cushioned heel counter']
  },
  {
    id: 'suede-chelsea-boots',
    title: 'Suede Ankle Length Chelsea Boots with Elastic Gusset for Men & Women',
    brand: 'Woodland',
    category: 'Boots & High-Top',
    price: 3100,
    originalPrice: 4800,
    discountPercent: 35,
    rating: 4.7,
    reviewsCount: 94,
    soldCount: 198,
    image: 'https://images.unsplash.com/photo-1638247025967-b4e38f787b76?auto=format&fit=crop&w=600&q=80',
    isMall: false,
    freeDelivery: false,
    colors: ['Tan Suede', 'Dark Brown', 'Black Suede'],
    sizes: [40, 41, 42, 43],
    specs: ['Water-resistant suede', 'Crepe rubber sole', 'Easy slip-on pull tab']
  },
  {
    id: 'athletic-mesh-joggers',
    title: 'Erke Pro Foam Cushion Jogging & Fitness Training Gym Shoes',
    brand: 'Erke',
    category: 'Running & Sports',
    price: 2650,
    originalPrice: 4200,
    discountPercent: 37,
    rating: 4.8,
    reviewsCount: 156,
    soldCount: 380,
    image: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=600&q=80',
    isMall: true,
    freeDelivery: true,
    colors: ['Charcoal Grey', 'All Black', 'Volt Green'],
    sizes: [39, 40, 41, 42, 43, 44],
    specs: ['Shock absorption foam', 'Breathable knit fabric', 'Lightweight 210g']
  },
  {
    id: 'leather-penny-loafers',
    title: 'Hand-Stitched Classic Penny Loafers Slip-on Driving Shoes for Men',
    brand: 'Caliber Shoes',
    category: 'Loafers & Casual',
    price: 2850,
    originalPrice: 4500,
    discountPercent: 37,
    rating: 4.9,
    reviewsCount: 88,
    soldCount: 165,
    image: 'https://images.unsplash.com/photo-1533867617858-e7b97e060509?auto=format&fit=crop&w=600&q=80',
    isMall: true,
    freeDelivery: true,
    colors: ['Dark Coffee', 'Black Gloss', 'Burgundy'],
    sizes: [40, 41, 42, 43],
    specs: ['Soft genuine leather', 'Slip-on convenience', 'Flexible rubber driver sole']
  },
  {
    id: 'waterproof-mountain-hikers',
    title: 'Himalayan Trail Waterproof High-Traction Outdoor Hiking Trekking Boots',
    brand: 'Woodland',
    category: 'Boots & High-Top',
    price: 4450,
    originalPrice: 7200,
    discountPercent: 38,
    rating: 5.0,
    reviewsCount: 142,
    soldCount: 310,
    image: 'https://images.unsplash.com/photo-1520639888713-7851133b1ed0?auto=format&fit=crop&w=600&q=80',
    isMall: true,
    freeDelivery: true,
    colors: ['Olive Green', 'Earth Brown', 'Tactical Black'],
    sizes: [40, 41, 42, 43, 44, 45],
    specs: ['Deep lug grip for rocks', 'Water-sealed inner lining', 'Steel eyelets']
  },
  {
    id: 'canvas-skater-classic',
    title: 'Classic Low-Top Canvas Casual Skater Walking Shoes - Black & White',
    brand: 'Power',
    category: 'Sneakers',
    price: 1199,
    originalPrice: 1800,
    discountPercent: 33,
    rating: 4.7,
    reviewsCount: 210,
    soldCount: 750,
    image: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=600&q=80',
    isMall: false,
    freeDelivery: false,
    colors: ['Black/White', 'All White', 'Navy Blue'],
    sizes: [38, 39, 40, 41, 42, 43],
    specs: ['Durable canvas cloth', 'Vulcanized rubber sole', 'Comfortable daily wear']
  },
  {
    id: 'y2k-cyber-chunky',
    title: 'Chunky Cyberpunk Mesh Sole Platform Streetwear Sneakers for Youth',
    brand: 'StreetHeat',
    category: 'Sneakers',
    price: 2950,
    originalPrice: 4800,
    discountPercent: 39,
    rating: 4.8,
    reviewsCount: 112,
    soldCount: 240,
    image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=600&q=80',
    isMall: false,
    freeDelivery: true,
    colors: ['Silver/Lime', 'Shadow Black', 'Cream Beige'],
    sizes: [40, 41, 42, 43],
    specs: ['Thick platform cushion', 'Reflective panels', 'Streetwear trend']
  },
  {
    id: 'pastel-pink-trainer',
    title: "Women's Lightweight Air Cushion Pastel Jogging & Walking Trainers",
    brand: 'Goldstar',
    category: 'Running & Sports',
    price: 1599,
    originalPrice: 2400,
    discountPercent: 33,
    rating: 4.9,
    reviewsCount: 175,
    soldCount: 490,
    image: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&w=600&q=80',
    isMall: true,
    freeDelivery: true,
    colors: ['Blush Pink', 'Lilac Purple', 'White/Mint'],
    sizes: [36, 37, 38, 39, 40],
    specs: ['Air bubble heel', 'Memory foam insole', 'Lightweight for ladies']
  },
  {
    id: 'slipon-canvas-comfort',
    title: 'Easy Slip-On Breathable Loafers for Daily Work & College Walk',
    brand: 'Power',
    category: 'Loafers & Casual',
    price: 1450,
    originalPrice: 2200,
    discountPercent: 34,
    rating: 4.6,
    reviewsCount: 95,
    soldCount: 310,
    image: 'https://images.unsplash.com/photo-1575537302964-96cd47c06b1b?auto=format&fit=crop&w=600&q=80',
    isMall: false,
    freeDelivery: false,
    colors: ['Khaki Beige', 'Charcoal', 'Navy'],
    sizes: [39, 40, 41, 42, 43],
    specs: ['Elastic stretch tongue', 'Washable fabric', 'Orthopedic flat sole']
  }
];

export default function App() {
  const [searchKeyword, setSearchKeyword] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedBrand, setSelectedBrand] = useState<string>('All');
  const [onlyMall, setOnlyMall] = useState<boolean>(false);
  const [onlyFreeDelivery, setOnlyFreeDelivery] = useState<boolean>(false);
  const [sortOption, setSortOption] = useState<string>('popular');
  const [cartCount, setCartCount] = useState<number>(2);

  // Quick View Product state
  const [viewProduct, setViewProduct] = useState<ShoeProduct | null>(null);
  const [chosenSize, setChosenSize] = useState<number>(41);
  const [chosenColor, setChosenColor] = useState<string>('');
  const [quantity, setQuantity] = useState<number>(1);

  // eSewa Buying / Checkout Modal State
  const [isCheckoutOpen, setIsCheckoutOpen] = useState<boolean>(false);
  const [checkoutProduct, setCheckoutProduct] = useState<ShoeProduct | null>(null);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<'esewa' | 'khalti' | 'cod'>('esewa');
  const [deliveryLocation, setDeliveryLocation] = useState<string>('Kathmandu Metro - Inside Ring Road');
  const [customerPhone, setCustomerPhone] = useState<string>('9841892341');

  // Exact Requested State: "the users esewa is in progress"
  const [isEsewaInProgress, setIsEsewaInProgress] = useState<boolean>(false);
  const [esewaProgressStep, setEsewaProgressStep] = useState<number>(1);
  const [esewaTxnId, setEsewaTxnId] = useState<string>('');

  // Flash Sale Countdown Timer
  const [timeLeft, setTimeLeft] = useState<{ hours: number; minutes: number; seconds: number }>({
    hours: 8,
    minutes: 42,
    seconds: 19
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return { hours: 12, minutes: 0, seconds: 0 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Filter products
  const filteredProducts = SHOES_COLLECTION.filter((p) => {
    const matchesCategory = selectedCategory === 'All' || p.category === selectedCategory;
    const matchesBrand = selectedBrand === 'All' || p.brand === selectedBrand;
    const matchesMall = !onlyMall || p.isMall;
    const matchesFreeDel = !onlyFreeDelivery || p.freeDelivery;
    const matchesSearch =
      p.title.toLowerCase().includes(searchKeyword.toLowerCase()) ||
      p.brand.toLowerCase().includes(searchKeyword.toLowerCase()) ||
      p.category.toLowerCase().includes(searchKeyword.toLowerCase());

    return matchesCategory && matchesBrand && matchesMall && matchesFreeDel && matchesSearch;
  }).sort((a, b) => {
    if (sortOption === 'price-low') return a.price - b.price;
    if (sortOption === 'price-high') return b.price - a.price;
    if (sortOption === 'rating') return b.rating - a.rating;
    return b.soldCount - a.soldCount; // popular default
  });

  const handleOpenBuyNow = (product: ShoeProduct) => {
    setCheckoutProduct(product);
    setChosenSize(product.sizes[1] || product.sizes[0]);
    setChosenColor(product.colors[0]);
    setQuantity(1);
    setSelectedPaymentMethod('esewa'); // default to eSewa as requested!
    setIsEsewaInProgress(false);
    setIsCheckoutOpen(true);
  };

  const handleInitiateEsewaPayment = () => {
    // Generate simulated eSewa Txn
    const randomTxn = 'ESW-' + Math.floor(10000000 + Math.random() * 90000000);
    setEsewaTxnId(randomTxn);
    setIsEsewaInProgress(true);
    setEsewaProgressStep(1);

    // Progress through steps
    setTimeout(() => {
      setEsewaProgressStep(2);
    }, 1800);
  };

  const brandsList = ['All', 'Goldstar', 'Caliber Shoes', 'Bata', 'Woodland', 'Erke', 'Power', 'StreetHeat'];
  const categoriesList = ['All', 'Sneakers', 'Running & Sports', 'Formal Leather', 'Boots & High-Top', 'Loafers & Casual'];

  return (
    <div className="min-h-screen bg-[#f5f5f5] text-[#212121] flex flex-col font-sans">
      {/* 1. GipGup Top Utility Bar */}
      <div className="bg-[#f85606] text-white text-[11px] font-medium py-1 px-4 sm:px-8">
        <div className="max-w-[1200px] mx-auto flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span className="hover:underline cursor-pointer">Become a Seller on GipGup</span>
            <span className="hidden sm:inline hover:underline cursor-pointer">GipGup Affiliate Program</span>
            <span className="hidden sm:inline hover:underline cursor-pointer">Help & Support</span>
            <a
              href="/gipgup-shoes.zip"
              download="gipgup-shoes.zip"
              className="bg-white text-[#f85606] px-2 py-0.5 rounded font-black hover:bg-neutral-100 flex items-center gap-1 transition"
              title="Download Ready-to-Deploy ZIP file for Netlify"
            >
              <Download className="w-3 h-3" /> Download ZIP (For Netlify)
            </a>
          </div>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <Smartphone className="w-3.5 h-3.5" /> Save More on GipGup App
            </span>
            <span className="hover:underline cursor-pointer">Login</span>
            <span>|</span>
            <span className="hover:underline cursor-pointer">Sign Up</span>
            <span className="bg-white/20 px-2 py-0.5 rounded text-[10px] font-bold">नेपाली</span>
          </div>
        </div>
      </div>

      {/* 2. GipGup Main Brand Header with Search Bar */}
      <header className="bg-white border-b border-neutral-200 sticky top-0 z-30 shadow-sm">
        <div className="max-w-[1200px] mx-auto px-4 py-3 flex items-center justify-between gap-4 sm:gap-8">
          {/* GipGup Shoes Logo */}
          <a href="#" className="flex items-center gap-1.5 shrink-0 group">
            <div className="bg-[#f85606] text-white font-black text-2xl tracking-tighter px-2.5 py-0.5 rounded-sm">
              gipgup
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] font-bold text-[#f85606] tracking-widest uppercase -mb-1">SHOES</span>
              <span className="text-[9px] text-neutral-400 font-semibold uppercase">NEPAL</span>
            </div>
          </a>

          {/* Search Bar - Iconic Marketplace Shape */}
          <div className="flex-1 max-w-[680px] relative">
            <div className="flex items-center bg-[#f5f5f5] rounded-sm overflow-hidden border border-neutral-300 focus-within:border-[#f85606] transition">
              <input
                type="text"
                value={searchKeyword}
                onChange={(e) => setSearchKeyword(e.target.value)}
                placeholder="Search in GipGup Shoes (e.g. Goldstar, Caliber, Running, Boots...)"
                className="w-full bg-transparent px-4 py-2 text-xs sm:text-sm text-neutral-800 placeholder:text-neutral-400 focus:outline-none"
              />
              <button
                type="button"
                className="bg-[#f85606] hover:bg-[#d94800] text-white px-5 py-2.5 flex items-center justify-center transition"
              >
                <Search className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Cart Icon & eSewa Promo Pill */}
          <div className="flex items-center gap-4 shrink-0">
            <div
              onClick={() => {
                if (SHOES_COLLECTION[0]) handleOpenBuyNow(SHOES_COLLECTION[0]);
              }}
              className="relative p-2 text-neutral-700 hover:text-[#f85606] cursor-pointer"
              title="View Cart"
            >
              <ShoppingCart className="w-6 h-6" />
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 bg-[#f85606] text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </div>

            <div className="hidden lg:flex items-center gap-1.5 bg-[#eaf8ea] border border-[#60bb46]/40 px-2.5 py-1 rounded text-xs text-[#2b7518] font-bold">
              <span className="w-2 h-2 rounded-full bg-[#60bb46] animate-pulse"></span>
              <span>eSewa 10% Cashback Active</span>
            </div>
          </div>
        </div>
      </header>

      {/* 3. GipGup Promo Banner */}
      <section className="bg-gradient-to-r from-[#ffe5d9] via-[#fff0ea] to-[#fff6f0] border-b border-orange-200/80 py-4 px-4">
        <div className="max-w-[1200px] mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <span className="bg-[#f85606] text-white text-xs font-black px-2 py-1 rounded uppercase tracking-wider">
              GIPGUP SALE
            </span>
            <div>
              <h1 className="text-sm sm:text-base font-bold text-neutral-900">
                GipGup Shoes Grand Festival — Authentic Shoes With eSewa Instant Pay
              </h1>
              <p className="text-xs text-neutral-600">
                Over 1,200+ original Goldstar, Caliber, Bata, and Woodland shoes at factory rates inside Nepal.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs font-bold text-[#f85606] bg-white px-3 py-1.5 rounded border border-orange-200 shadow-sm shrink-0">
            <ShieldCheck className="w-4 h-4 text-[#60bb46]" />
            <span>100% Genuine Shoes Guaranteed</span>
          </div>
        </div>
      </section>

      {/* 4. GipGup Flash Sale Section with Countdown Timer */}
      <section className="max-w-[1200px] mx-auto w-full px-4 pt-6 pb-2">
        <div className="bg-white rounded p-4 border border-neutral-200 shadow-sm mb-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center pb-3 border-b border-neutral-200 gap-3">
            <div className="flex items-center gap-4">
              <span className="text-[#f85606] font-extrabold text-lg sm:text-xl tracking-tight flex items-center gap-1.5">
                <Flame className="w-5 h-5 fill-[#f85606] text-[#f85606]" />
                FLASH SALE
              </span>
              <div className="flex items-center gap-1.5 text-xs font-bold text-neutral-600">
                <span className="text-neutral-400 font-normal">Ending in:</span>
                <span className="bg-[#d32f2f] text-white px-1.5 py-0.5 rounded font-mono text-xs">
                  {String(timeLeft.hours).padStart(2, '0')}
                </span>
                <span>:</span>
                <span className="bg-[#d32f2f] text-white px-1.5 py-0.5 rounded font-mono text-xs">
                  {String(timeLeft.minutes).padStart(2, '0')}
                </span>
                <span>:</span>
                <span className="bg-[#d32f2f] text-white px-1.5 py-0.5 rounded font-mono text-xs">
                  {String(timeLeft.seconds).padStart(2, '0')}
                </span>
              </div>
            </div>

            <button
              onClick={() => setSelectedCategory('All')}
              className="text-xs font-bold text-[#f85606] border border-[#f85606] hover:bg-[#fff5f0] px-3 py-1 rounded transition"
            >
              SHOP MORE DEALS
            </button>
          </div>

          {/* Flash Sale Horizontal Scroll */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 pt-4">
            {SHOES_COLLECTION.slice(0, 6).map((shoe) => (
              <div
                key={shoe.id}
                onClick={() => handleOpenBuyNow(shoe)}
                className="group cursor-pointer hover:shadow-md transition p-2 rounded border border-neutral-100 bg-white"
              >
                <div className="relative aspect-square overflow-hidden bg-neutral-100 rounded-sm mb-2">
                  <img
                    src={shoe.image}
                    alt={shoe.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <span className="absolute top-1 left-1 bg-[#f85606] text-white text-[10px] font-black px-1 rounded">
                    -{shoe.discountPercent}%
                  </span>
                </div>
                <h4 className="text-xs font-normal text-neutral-800 line-clamp-1 group-hover:text-[#f85606] transition">
                  {shoe.title}
                </h4>
                <div className="text-sm font-bold text-[#f85606] mt-0.5">
                  Rs. {shoe.price.toLocaleString()}
                </div>
                <div className="text-[10px] text-neutral-400 line-through">
                  Rs. {shoe.originalPrice.toLocaleString()}
                </div>
                <div className="mt-1 text-[10px] text-neutral-500 font-medium">
                  {shoe.soldCount} sold
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Main Shoes Marketplace Grid with GipGup Filters */}
      <main className="max-w-[1200px] mx-auto w-full px-4 pb-16 flex-1">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Left Sidebar Filter */}
          <aside className="md:col-span-3 space-y-4">
            <div className="bg-white p-4 rounded border border-neutral-200 shadow-sm space-y-5">
              <div className="flex items-center justify-between pb-2 border-b border-neutral-100">
                <span className="text-xs font-bold uppercase tracking-wider text-neutral-700 flex items-center gap-1.5">
                  <SlidersHorizontal className="w-3.5 h-3.5 text-[#f85606]" /> Filters
                </span>
                <button
                  onClick={() => {
                    setSelectedCategory('All');
                    setSelectedBrand('All');
                    setOnlyMall(false);
                    setOnlyFreeDelivery(false);
                  }}
                  className="text-[11px] text-[#f85606] hover:underline"
                >
                  Clear All
                </button>
              </div>

              {/* Category Filter */}
              <div>
                <h3 className="text-xs font-bold text-neutral-800 mb-2">Shoe Categories</h3>
                <div className="space-y-1.5 text-xs">
                  {categoriesList.map((cat) => (
                    <label
                      key={cat}
                      className="flex items-center gap-2 cursor-pointer text-neutral-600 hover:text-[#f85606]"
                    >
                      <input
                        type="radio"
                        name="shoeCategory"
                        checked={selectedCategory === cat}
                        onChange={() => setSelectedCategory(cat)}
                        className="accent-[#f85606]"
                      />
                      <span>{cat}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Brand Filter */}
              <div>
                <h3 className="text-xs font-bold text-neutral-800 mb-2">Brands in Nepal</h3>
                <div className="space-y-1.5 text-xs max-h-40 overflow-y-auto pr-1">
                  {brandsList.map((b) => (
                    <label
                      key={b}
                      className="flex items-center gap-2 cursor-pointer text-neutral-600 hover:text-[#f85606]"
                    >
                      <input
                        type="radio"
                        name="shoeBrand"
                        checked={selectedBrand === b}
                        onChange={() => setSelectedBrand(b)}
                        className="accent-[#f85606]"
                      />
                      <span>{b}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Service & Promotion */}
              <div className="pt-2 border-t border-neutral-100 space-y-2">
                <h3 className="text-xs font-bold text-neutral-800 mb-2">Service & Promotion</h3>
                <label className="flex items-center gap-2 cursor-pointer text-xs text-neutral-600">
                  <input
                    type="checkbox"
                    checked={onlyMall}
                    onChange={(e) => setOnlyMall(e.target.checked)}
                    className="accent-[#f85606]"
                  />
                  <span className="flex items-center gap-1">
                    <span className="bg-[#d32f2f] text-white text-[9px] font-black px-1 rounded">Mall</span>
                    GipGup Mall Only
                  </span>
                </label>

                <label className="flex items-center gap-2 cursor-pointer text-xs text-neutral-600">
                  <input
                    type="checkbox"
                    checked={onlyFreeDelivery}
                    onChange={(e) => setOnlyFreeDelivery(e.target.checked)}
                    className="accent-[#f85606]"
                  />
                  <span>Free Delivery Inside Valley</span>
                </label>
              </div>

              {/* eSewa Info Box */}
              <div className="bg-[#f0faf0] border border-[#60bb46]/30 p-3 rounded text-[11px] text-[#206015] space-y-1">
                <div className="font-bold flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#60bb46]" /> eSewa Instant Checkout
                </div>
                <p className="text-[10px] leading-relaxed text-neutral-600">
                  Click 'Buy Now' on any shoe to launch direct eSewa wallet verification & pay instantly in NPR!
                </p>
              </div>
            </div>
          </aside>

          {/* Right Product Grid */}
          <div className="md:col-span-9 space-y-4">
            {/* Sort & Result Bar */}
            <div className="bg-white p-3 rounded border border-neutral-200 shadow-sm flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 text-xs">
              <div className="text-neutral-500">
                Found <span className="font-bold text-neutral-900">{filteredProducts.length}</span> shoes in GipGup
              </div>

              <div className="flex items-center gap-2">
                <span className="text-neutral-500">Sort By:</span>
                <select
                  value={sortOption}
                  onChange={(e) => setSortOption(e.target.value)}
                  className="bg-neutral-50 border border-neutral-300 rounded px-2.5 py-1 text-xs text-neutral-800 focus:outline-none focus:border-[#f85606]"
                >
                  <option value="popular">Best Match / Popular</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Customer Rating</option>
                </select>
              </div>
            </div>

            {/* The Shoe Products Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
              {filteredProducts.map((shoe) => (
                <div
                  key={shoe.id}
                  className="bg-white rounded border border-neutral-200 overflow-hidden hover:shadow-lg transition-all duration-200 flex flex-col justify-between group"
                >
                  {/* Shoe Image */}
                  <div
                    onClick={() => setViewProduct(shoe)}
                    className="relative aspect-square overflow-hidden bg-neutral-100 cursor-pointer"
                  >
                    <img
                      src={shoe.image}
                      alt={shoe.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />

                    {/* Mall or Free Delivery Badges */}
                    <div className="absolute top-1.5 left-1.5 flex flex-col gap-1 items-start">
                      {shoe.isMall && (
                        <span className="bg-[#d32f2f] text-white text-[9px] font-black px-1.5 py-0.5 rounded shadow">
                          Mall
                        </span>
                      )}
                      {shoe.freeDelivery && (
                        <span className="bg-[#108ee9] text-white text-[9px] font-bold px-1.5 py-0.5 rounded shadow">
                          Free Delivery
                        </span>
                      )}
                    </div>

                    <span className="absolute bottom-1.5 right-1.5 bg-black/60 text-white text-[10px] font-bold px-1.5 py-0.5 rounded">
                      {shoe.brand}
                    </span>
                  </div>

                  {/* Shoe Information */}
                  <div className="p-3 flex-1 flex flex-col justify-between space-y-2">
                    <div>
                      <h3
                        onClick={() => setViewProduct(shoe)}
                        className="text-xs sm:text-[13px] font-normal text-neutral-800 line-clamp-2 group-hover:text-[#f85606] cursor-pointer transition leading-snug"
                        title={shoe.title}
                      >
                        {shoe.title}
                      </h3>

                      {/* Pricing Section (Classic GipGup format) */}
                      <div className="mt-2">
                        <div className="text-base sm:text-lg font-bold text-[#f85606] leading-none">
                          Rs. {shoe.price.toLocaleString()}
                        </div>
                        <div className="flex items-center gap-1.5 mt-0.5 text-xs text-neutral-400">
                          <span className="line-through">Rs. {shoe.originalPrice.toLocaleString()}</span>
                          <span className="text-neutral-700 font-semibold">-{shoe.discountPercent}%</span>
                        </div>
                      </div>

                      {/* Ratings and Sold Count */}
                      <div className="flex items-center gap-1 text-[11px] text-neutral-500 mt-1.5">
                        <div className="flex items-center text-[#ffc107]">
                          <Star className="w-3 h-3 fill-[#ffc107]" />
                          <span className="ml-0.5 font-bold text-neutral-700">{shoe.rating}</span>
                        </div>
                        <span>({shoe.reviewsCount})</span>
                        <span className="text-neutral-300">•</span>
                        <span>{shoe.soldCount} sold</span>
                      </div>
                    </div>

                    {/* Buy Now with eSewa Button */}
                    <div className="pt-2 flex gap-1.5">
                      <button
                        onClick={() => handleOpenBuyNow(shoe)}
                        className="w-full py-2 bg-[#f85606] hover:bg-[#d94800] text-white font-bold text-xs rounded transition flex items-center justify-center gap-1 shadow-sm active:scale-95"
                      >
                        <span>Buy Now</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="bg-white p-12 text-center rounded border border-neutral-200">
                <AlertCircle className="w-10 h-10 text-neutral-400 mx-auto mb-2" />
                <h3 className="font-bold text-neutral-700">No Shoes Found in GipGup</h3>
                <p className="text-xs text-neutral-500 mt-1">Try resetting the brand or category filters.</p>
              </div>
            )}
          </div>
        </div>
      </main>

      {/* 6. GipGup Footer */}
      <footer className="bg-[#2e2e54] text-white text-xs pt-10 pb-6 border-t border-neutral-300">
        <div className="max-w-[1200px] mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 pb-8 border-b border-white/10">
          <div>
            <h4 className="font-bold text-sm mb-3 text-white">Customer Care</h4>
            <ul className="space-y-1.5 text-neutral-300 text-[11px]">
              <li className="hover:underline cursor-pointer">GipGup Help Center & FAQ</li>
              <li className="hover:underline cursor-pointer">How to Buy with eSewa</li>
              <li className="hover:underline cursor-pointer">Returns & Shoe Size Refunds</li>
              <li className="hover:underline cursor-pointer">Contact GipGup Nepal</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-sm mb-3 text-white">GipGup Nepal</h4>
            <ul className="space-y-1.5 text-neutral-300 text-[11px]">
              <li className="hover:underline cursor-pointer">About GipGup Shoes</li>
              <li className="hover:underline cursor-pointer">GipGup Mall Authenticity</li>
              <li className="hover:underline cursor-pointer">Terms & Conditions</li>
              <li className="hover:underline cursor-pointer">Privacy Policy</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-sm mb-3 text-white">Payment Methods in Nepal</h4>
            <div className="flex flex-wrap gap-2 pt-1">
              <span className="bg-[#60bb46] text-white px-2 py-1 rounded font-bold text-[11px]">
                eSewa Wallet
              </span>
              <span className="bg-[#5c2d91] text-white px-2 py-1 rounded font-bold text-[11px]">
                Khalti
              </span>
              <span className="bg-white text-neutral-900 px-2 py-1 rounded font-bold text-[11px]">
                Cash on Delivery
              </span>
              <span className="bg-neutral-800 text-white px-2 py-1 rounded font-bold text-[11px]">
                Fonepay QR
              </span>
            </div>
            <p className="text-[10px] text-neutral-400 mt-2">
              Secure 256-bit SSL encrypted digital wallet gateways.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-sm mb-3 text-white">Delivery Across Nepal</h4>
            <p className="text-[11px] text-neutral-300 leading-relaxed">
              Fast delivery to Kathmandu, Lalitpur, Bhaktapur, Pokhara, Chitwan, Butwal, Biratnagar, and Dharan.
            </p>
            <div className="mt-3 text-xs text-orange-400 font-bold">
              GipGup Express Footwear Logistics
            </div>
          </div>
        </div>

        <div className="max-w-[1200px] mx-auto px-4 pt-4 flex flex-col sm:flex-row justify-between items-center text-[11px] text-neutral-400 gap-2">
          <span>&copy; {new Date().getFullYear()} GipGup Shoes Nepal Marketplace. All Rights Reserved.</span>
          <span>Official eSewa Gateway Partner</span>
        </div>
      </footer>

      {/* 7. QUICK PRODUCT DETAIL MODAL */}
      {viewProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-white rounded-sm max-w-xl w-full overflow-hidden shadow-2xl relative animate-in fade-in zoom-in-95 duration-150">
            <button
              onClick={() => setViewProduct(null)}
              className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-600 flex items-center justify-center transition"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="grid grid-cols-1 sm:grid-cols-2">
              <div className="aspect-square bg-neutral-100 p-4">
                <img
                  src={viewProduct.image}
                  alt={viewProduct.title}
                  className="w-full h-full object-cover rounded"
                />
              </div>

              <div className="p-5 flex flex-col justify-between space-y-3">
                <div>
                  <div className="flex items-center gap-1.5 mb-1">
                    {viewProduct.isMall && (
                      <span className="bg-[#d32f2f] text-white text-[9px] font-black px-1.5 py-0.5 rounded">
                        Mall
                      </span>
                    )}
                    <span className="text-xs font-bold text-neutral-500">{viewProduct.brand}</span>
                  </div>
                  <h3 className="text-sm font-bold text-neutral-800 leading-snug">{viewProduct.title}</h3>

                  <div className="mt-3">
                    <span className="text-xl font-bold text-[#f85606]">
                      Rs. {viewProduct.price.toLocaleString()}
                    </span>
                    <span className="text-xs text-neutral-400 line-through ml-2">
                      Rs. {viewProduct.originalPrice.toLocaleString()}
                    </span>
                    <span className="text-xs font-bold text-[#f85606] ml-1">
                      -{viewProduct.discountPercent}%
                    </span>
                  </div>

                  <ul className="text-[11px] text-neutral-600 space-y-1 mt-3">
                    {viewProduct.specs.map((s, idx) => (
                      <li key={idx} className="flex items-center gap-1.5">
                        <Check className="w-3 h-3 text-[#60bb46]" /> {s}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-2 pt-2">
                  <button
                    onClick={() => {
                      const p = viewProduct;
                      setViewProduct(null);
                      handleOpenBuyNow(p);
                    }}
                    className="w-full py-2.5 bg-[#f85606] hover:bg-[#d94800] text-white font-bold text-xs uppercase tracking-wider rounded transition"
                  >
                    Buy Now with eSewa
                  </button>
                  <button
                    onClick={() => setViewProduct(null)}
                    className="w-full py-2 bg-neutral-100 hover:bg-neutral-200 text-neutral-700 font-bold text-xs rounded transition"
                  >
                    Continue Browsing
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 8. GIPGUP CHECKOUT & "USER'S ESEWA IS IN PROGRESS" MODAL */}
      {isCheckoutOpen && checkoutProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
          <div className="bg-white rounded-md max-w-lg w-full overflow-hidden shadow-2xl relative animate-in fade-in zoom-in-95 duration-200 border border-neutral-300">
            {/* Modal Header */}
            <div className="bg-[#f85606] text-white px-4 py-3 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <span className="font-black text-base">gipgup</span>
                <span className="text-xs border-l border-white/40 pl-2">Secure Checkout</span>
              </div>
              <button
                onClick={() => setIsCheckoutOpen(false)}
                className="text-white hover:text-neutral-200"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-5">
              {!isEsewaInProgress ? (
                /* Step 1: Checkout Form before clicking eSewa */
                <div className="space-y-4">
                  {/* Selected Shoe Summary Card */}
                  <div className="flex gap-3 bg-neutral-50 p-3 rounded border border-neutral-200">
                    <img
                      src={checkoutProduct.image}
                      alt={checkoutProduct.title}
                      className="w-16 h-16 object-cover rounded"
                    />
                    <div className="flex-1 text-xs">
                      <h4 className="font-bold text-neutral-800 line-clamp-1">{checkoutProduct.title}</h4>
                      <div className="text-[#f85606] font-bold mt-0.5">
                        Rs. {checkoutProduct.price.toLocaleString()}
                      </div>
                      <div className="text-[11px] text-neutral-500">
                        Brand: {checkoutProduct.brand} • Free Delivery in Nepal
                      </div>
                    </div>
                  </div>

                  {/* Size & Color Choice */}
                  <div className="grid grid-cols-2 gap-3 text-xs">
                    <div>
                      <label className="font-bold text-neutral-700 block mb-1">Select Size:</label>
                      <select
                        value={chosenSize}
                        onChange={(e) => setChosenSize(Number(e.target.value))}
                        className="w-full bg-white border border-neutral-300 rounded p-2 text-xs focus:border-[#f85606] focus:outline-none"
                      >
                        {checkoutProduct.sizes.map((s) => (
                          <option key={s} value={s}>
                            Size {s} (EU / Nepal)
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="font-bold text-neutral-700 block mb-1">Quantity:</label>
                      <select
                        value={quantity}
                        onChange={(e) => setQuantity(Number(e.target.value))}
                        className="w-full bg-white border border-neutral-300 rounded p-2 text-xs focus:border-[#f85606] focus:outline-none"
                      >
                        <option value={1}>1 Pair</option>
                        <option value={2}>2 Pairs</option>
                        <option value={3}>3 Pairs</option>
                      </select>
                    </div>
                  </div>

                  {/* Delivery Location */}
                  <div className="text-xs">
                    <label className="font-bold text-neutral-700 block mb-1">Delivery Address:</label>
                    <input
                      type="text"
                      value={deliveryLocation}
                      onChange={(e) => setDeliveryLocation(e.target.value)}
                      className="w-full border border-neutral-300 rounded p-2 text-xs focus:border-[#f85606] focus:outline-none"
                      placeholder="e.g. Boudhanath, Kathmandu / Pokhara"
                    />
                  </div>

                  {/* Payment Method Selector */}
                  <div>
                    <label className="font-bold text-neutral-700 text-xs block mb-2">
                      Select Payment Method:
                    </label>
                    <div className="space-y-2">
                      {/* eSewa Option (Highlighted) */}
                      <div
                        onClick={() => setSelectedPaymentMethod('esewa')}
                        className={`p-3 rounded border cursor-pointer flex items-center justify-between transition ${
                          selectedPaymentMethod === 'esewa'
                            ? 'border-[#60bb46] bg-[#f0faf0] ring-1 ring-[#60bb46]'
                            : 'border-neutral-200 hover:border-neutral-300 bg-white'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded bg-[#60bb46] text-white font-black flex items-center justify-center text-xs tracking-tighter shadow-sm">
                            e
                          </div>
                          <div>
                            <div className="font-bold text-xs text-neutral-900 flex items-center gap-1.5">
                              <span>eSewa Mobile Wallet</span>
                              <span className="bg-[#60bb46] text-white text-[9px] font-bold px-1.5 py-0.2 rounded">
                                Recommended
                              </span>
                            </div>
                            <div className="text-[11px] text-neutral-500">
                              Instant payment with eSewa ID & biometric / OTP
                            </div>
                          </div>
                        </div>
                        <input
                          type="radio"
                          name="payMethod"
                          checked={selectedPaymentMethod === 'esewa'}
                          onChange={() => setSelectedPaymentMethod('esewa')}
                          className="accent-[#60bb46] w-4 h-4"
                        />
                      </div>

                      {/* Khalti Option */}
                      <div
                        onClick={() => setSelectedPaymentMethod('khalti')}
                        className={`p-3 rounded border cursor-pointer flex items-center justify-between transition ${
                          selectedPaymentMethod === 'khalti'
                            ? 'border-[#5c2d91] bg-purple-50 ring-1 ring-[#5c2d91]'
                            : 'border-neutral-200 hover:border-neutral-300 bg-white'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded bg-[#5c2d91] text-white font-bold flex items-center justify-center text-xs">
                            K
                          </div>
                          <div>
                            <div className="font-bold text-xs text-neutral-900">Khalti Digital Wallet</div>
                            <div className="text-[11px] text-neutral-500">Pay via Khalti credentials</div>
                          </div>
                        </div>
                        <input
                          type="radio"
                          name="payMethod"
                          checked={selectedPaymentMethod === 'khalti'}
                          onChange={() => setSelectedPaymentMethod('khalti')}
                          className="accent-[#5c2d91] w-4 h-4"
                        />
                      </div>

                      {/* Cash on Delivery */}
                      <div
                        onClick={() => setSelectedPaymentMethod('cod')}
                        className={`p-3 rounded border cursor-pointer flex items-center justify-between transition ${
                          selectedPaymentMethod === 'cod'
                            ? 'border-[#f85606] bg-orange-50 ring-1 ring-[#f85606]'
                            : 'border-neutral-200 hover:border-neutral-300 bg-white'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <Truck className="w-6 h-6 text-neutral-600 ml-1" />
                          <div>
                            <div className="font-bold text-xs text-neutral-900">Cash on Delivery (COD)</div>
                            <div className="text-[11px] text-neutral-500">Pay cash upon shoe delivery</div>
                          </div>
                        </div>
                        <input
                          type="radio"
                          name="payMethod"
                          checked={selectedPaymentMethod === 'cod'}
                          onChange={() => setSelectedPaymentMethod('cod')}
                          className="accent-[#f85606] w-4 h-4"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Order Total */}
                  <div className="pt-2 border-t border-neutral-200 flex justify-between items-center text-xs">
                    <div>
                      <span className="text-neutral-500">Total Payable Amount:</span>
                      <div className="text-base font-extrabold text-[#f85606]">
                        Rs. {(checkoutProduct.price * quantity).toLocaleString()}
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={handleInitiateEsewaPayment}
                      className="px-6 py-2.5 bg-[#60bb46] hover:bg-[#52a13b] text-white font-bold text-xs uppercase tracking-wider rounded shadow transition flex items-center gap-1.5 active:scale-95"
                    >
                      <span>Pay With eSewa</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ) : (
                /* EXACT REQUESTED FEATURE: "the users esewa is in progress" */
                <div className="text-center py-4 space-y-5 animate-in fade-in duration-200">
                  {/* eSewa Branded Banner */}
                  <div className="flex items-center justify-center gap-2 bg-[#60bb46] text-white py-2 px-4 rounded shadow-sm">
                    <span className="font-black text-lg tracking-tight">eSewa</span>
                    <span className="text-xs font-semibold bg-white/20 px-2 py-0.5 rounded">
                      Secure Payment Portal
                    </span>
                  </div>

                  {/* In Progress Spinner & Status Message */}
                  <div className="py-4">
                    <div className="relative w-20 h-20 mx-auto mb-4">
                      {/* Outer Ring Pulse */}
                      <div className="absolute inset-0 rounded-full border-4 border-[#60bb46]/20 animate-ping"></div>
                      {/* Spinning Border */}
                      <div className="w-full h-full rounded-full border-4 border-[#60bb46] border-t-transparent animate-spin"></div>
                      {/* Center Icon */}
                      <div className="absolute inset-0 flex items-center justify-center text-[#60bb46] font-black text-xl">
                        e
                      </div>
                    </div>

                    {/* Exact Requested Notification String */}
                    <div className="inline-block bg-[#f0faf0] border-2 border-[#60bb46] text-[#2b7518] px-4 py-2 rounded-full font-bold text-sm sm:text-base shadow-sm">
                      The user's eSewa is in progress...
                    </div>

                    <p className="text-xs text-neutral-600 mt-2 max-w-sm mx-auto">
                      Connecting to eSewa secure payment gateway for transaction verification. Please do not close or
                      refresh this window.
                    </p>
                  </div>

                  {/* Transaction Details Box */}
                  <div className="bg-neutral-50 rounded border border-neutral-200 p-4 text-left text-xs space-y-2.5">
                    <div className="flex justify-between pb-1.5 border-b border-neutral-200">
                      <span className="text-neutral-500">Merchant:</span>
                      <span className="font-bold text-neutral-800">GipGup Shoes Nepal (PVT) Ltd.</span>
                    </div>

                    <div className="flex justify-between pb-1.5 border-b border-neutral-200">
                      <span className="text-neutral-500">eSewa ID:</span>
                      <span className="font-bold text-[#2b7518]">9841****** (User's Linked Wallet)</span>
                    </div>

                    <div className="flex justify-between pb-1.5 border-b border-neutral-200">
                      <span className="text-neutral-500">Transaction Ref:</span>
                      <span className="font-mono font-bold text-neutral-700">{esewaTxnId}</span>
                    </div>

                    <div className="flex justify-between pb-1.5 border-b border-neutral-200">
                      <span className="text-neutral-500">Shoe Item:</span>
                      <span className="font-semibold text-neutral-800 truncate max-w-[200px]">
                        {checkoutProduct.title} (Size {chosenSize})
                      </span>
                    </div>

                    <div className="flex justify-between pt-0.5">
                      <span className="text-neutral-500">Total Deduction:</span>
                      <span className="font-black text-sm text-[#f85606]">
                        Rs. {(checkoutProduct.price * quantity).toLocaleString()}
                      </span>
                    </div>
                  </div>

                  {/* Simulated Status Steps */}
                  <div className="text-left bg-white p-3 rounded border border-neutral-200 text-[11px] space-y-1.5 text-neutral-600">
                    <div className="flex items-center gap-2 text-[#2b7518] font-bold">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#60bb46]" />
                      <span>eSewa Gateway Connected</span>
                    </div>
                    <div className="flex items-center gap-2 text-neutral-700 font-semibold animate-pulse">
                      <RefreshCw className="w-3.5 h-3.5 text-[#60bb46] animate-spin" />
                      <span>Waiting for user authentication / eSewa app approval...</span>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-2 pt-2">
                    <button
                      onClick={() => setIsEsewaInProgress(false)}
                      className="flex-1 py-2.5 bg-neutral-100 hover:bg-neutral-200 text-neutral-700 font-bold text-xs rounded transition"
                    >
                      Back to Payment Options
                    </button>
                    <button
                      onClick={() => setIsCheckoutOpen(false)}
                      className="flex-1 py-2.5 bg-[#60bb46] hover:bg-[#52a13b] text-white font-bold text-xs rounded transition shadow"
                    >
                      Close Window
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
