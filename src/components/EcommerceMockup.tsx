import React, { useState } from 'react';
import {
  ShoppingBag,
  Search,
  ShoppingCart,
  Plus,
  Check,
  Shield,
  Server,
  Database,
  ArrowRight,
  Sparkles,
} from 'lucide-react';

interface MockProduct {
  id: number;
  name: string;
  category: string;
  price: number;
  stock: number;
  rating: number;
}

const initialProducts: MockProduct[] = [
  { id: 1, name: 'Precision Mechanical Keyboard', category: 'Hardware', price: 129, stock: 14, rating: 4.9 },
  { id: 2, name: 'Studio Noise-Canceling ANC Headset', category: 'Audio', price: 249, stock: 4, rating: 4.8 },
  { id: 3, name: 'Ultra-Wide 4K IPS Developer Monitor', category: 'Displays', price: 499, stock: 2, rating: 5.0 },
  { id: 4, name: 'Ergonomic Vertical Wireless Mouse', category: 'Hardware', price: 79, stock: 22, rating: 4.7 },
];

export const EcommerceMockup: React.FC = () => {
  const [cart, setCart] = useState<{ [id: number]: number }>({ 1: 1 });
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [recentlyAdded, setRecentlyAdded] = useState<number | null>(null);

  const categories = ['All', 'Hardware', 'Audio', 'Displays'];

  const filtered = initialProducts.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCat = selectedCategory === 'All' || product.category === selectedCategory;
    return matchesSearch && matchesCat;
  });

  const cartCount = Object.values(cart).reduce((a, b) => a + b, 0);
  const cartSubtotal = Object.entries(cart).reduce((sum, [id, qty]) => {
    const p = initialProducts.find((item) => item.id === Number(id));
    return sum + (p ? p.price * qty : 0);
  }, 0);

  const handleAddToCart = (id: number) => {
    setCart((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) + 1,
    }));
    setRecentlyAdded(id);
    setTimeout(() => setRecentlyAdded(null), 1500);
  };

  return (
    <div className="rounded-2xl bg-[#090A0E] border border-white/10 shadow-2xl overflow-hidden">
      {/* Mock Browser Title Bar */}
      <div className="px-4 py-3 bg-[#0C0E14] border-b border-white/[0.08] flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
          <span className="ml-2 font-mono text-[11px] text-neutral-400">
            https://ecommerce-store.internal/catalog
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            REST API: 200 OK
          </span>
        </div>
      </div>

      {/* Mock Store Header */}
      <div className="p-4 sm:p-5 border-b border-white/[0.06] bg-surface/80 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
            <ShoppingBag className="w-4 h-4" />
          </div>
          <div>
            <h5 className="text-xs sm:text-sm font-bold text-white tracking-tight">NexusCommerce</h5>
            <span className="text-[10px] font-mono text-neutral-400">Full-Stack Inventory & Checkout</span>
          </div>
        </div>

        {/* Search & Cart summary */}
        <div className="flex items-center gap-3">
          <div className="relative">
            <Search className="w-3.5 h-3.5 text-neutral-400 absolute left-2.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-8 pr-3 py-1.5 rounded-lg bg-black/40 border border-white/10 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-emerald-500/50 w-36 sm:w-48"
            />
          </div>

          <div className="relative p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 flex items-center gap-1.5 text-xs font-mono">
            <ShoppingCart className="w-4 h-4" />
            <span className="font-bold">{cartCount}</span>
            <span className="text-neutral-400 hidden sm:inline">(${cartSubtotal})</span>
          </div>
        </div>
      </div>

      {/* Category Tabs */}
      <div className="px-4 py-2 bg-[#0A0C12] border-b border-white/[0.04] flex items-center gap-1.5 overflow-x-auto text-[11px] font-mono">
        <span className="text-neutral-500 mr-1 text-[10px] uppercase">Filter:</span>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-2.5 py-1 rounded-md transition-colors ${
              selectedCategory === cat
                ? 'bg-emerald-500/20 text-emerald-300 font-semibold'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Product List Grid */}
      <div className="p-4 sm:p-5 grid grid-cols-1 sm:grid-cols-2 gap-3.5 bg-[#090A0E]">
        {filtered.map((product) => {
          const isAdded = recentlyAdded === product.id;
          return (
            <div
              key={product.id}
              className="p-3.5 rounded-xl bg-surface/90 border border-white/[0.06] hover:border-white/20 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-[10px] font-mono text-neutral-400 mb-1.5">
                  <span className="px-1.5 py-0.5 rounded bg-white/[0.04]">{product.category}</span>
                  <span className="text-emerald-400 font-semibold">{product.stock} in stock</span>
                </div>
                <h6 className="text-xs font-semibold text-white leading-tight mb-2">
                  {product.name}
                </h6>
              </div>

              <div className="flex items-center justify-between pt-2 border-t border-white/[0.04]">
                <span className="font-mono text-sm font-bold text-white">${product.price}</span>
                <button
                  onClick={() => handleAddToCart(product.id)}
                  className={`px-2.5 py-1 rounded-lg text-xs font-mono font-medium flex items-center gap-1 transition-all ${
                    isAdded
                      ? 'bg-emerald-500 text-black font-semibold'
                      : 'bg-white/[0.06] hover:bg-emerald-500/20 text-neutral-200 hover:text-emerald-300 border border-white/10'
                  }`}
                >
                  {isAdded ? (
                    <>
                      <Check className="w-3 h-3" /> Added
                    </>
                  ) : (
                    <>
                      <Plus className="w-3 h-3" /> Add to Cart
                    </>
                  )}
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Backend & DB Architecture footer */}
      <div className="p-3.5 bg-[#07080B] border-t border-white/[0.06] grid grid-cols-1 sm:grid-cols-3 gap-2 text-[11px] font-mono text-neutral-400">
        <div className="flex items-center gap-1.5">
          <Shield className="w-3.5 h-3.5 text-emerald-400" />
          <span>Auth: JWT + BCrypt</span>
        </div>
        <div className="flex items-center gap-1.5">
          <Database className="w-3.5 h-3.5 text-cyan-400" />
          <span>Schema: Users, Orders, Stock</span>
        </div>
        <div className="flex items-center gap-1.5">
          <Server className="w-3.5 h-3.5 text-amber-400" />
          <span>Atomic Stock Decrement</span>
        </div>
      </div>
    </div>
  );
};
