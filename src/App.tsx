/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Menu, X, Leaf, Snowflake, Palette, Truck, 
  Star, Send, Instagram, Facebook, MessageCircle, 
  MapPin, Phone, Mail, ArrowRight, Play
} from 'lucide-react';

// --- Types ---
interface Flavor {
  id: number;
  name: string;
  desc: string;
  price: string;
  emoji: string;
  color: string;
  isPopular?: boolean;
}

const FLAVORS: Flavor[] = [
  { id: 1, name: "Lavender Dream", desc: "Infused with organic lavender & wild honey.", price: "Rs. 350", emoji: "🪻", color: "bg-lavender/30" },
  { id: 2, name: "Strawberry Cloud", desc: "Fresh local strawberry swirl in sweet cream.", price: "Rs. 350", emoji: "🍓", color: "bg-baby-pink/30", isPopular: true },
  { id: 3, name: "Mango Haze", desc: "Sun-ripened tropical mango velvet sorbet.", price: "Rs. 350", emoji: "🥭", color: "bg-orange-100" },
  { id: 4, name: "Midnight Blueberry", desc: "Wild blueberries mixed with classic cream.", price: "Rs. 350", emoji: "🫐", color: "bg-indigo-100" },
  { id: 5, name: "Pistachio Mist", desc: "Roasted pistachio bits in nutty cream.", price: "Rs. 350", emoji: "🥜", color: "bg-mint/30" },
  { id: 6, name: "Cotton Candy Sky", desc: "The whimsical taste of pink & blue clouds.", price: "Rs. 350", emoji: "🍭", color: "bg-sky-blue/30" },
];

const REVIEWS = [
  { id: 1, name: "Zainab Malik", city: "Islamabad", text: "Literally the lightest ice cream I've ever had. It really does feel like a cloud!" },
  { id: 2, name: "Ayaan Ahmed", city: "Lahore", text: "Lavender Dream is a must-try. The aesthetic and flavor are both 10/10." },
  { id: 3, name: "Sara Khan", city: "Islamabad", text: "Ordered a box for my party and everyone loved them. The packaging is dreamy!" },
];

// --- Sub-Components ---

const SectionTitle = ({ children, light = false }: { children: React.ReactNode, light?: boolean }) => (
  <motion.h2 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className={`text-4xl md:text-5xl font-serif font-bold text-center mb-12 ${light ? 'text-white' : 'text-navy'}`}
  >
    {children}
  </motion.h2>
);

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="font-sans text-navy bg-cream selection:bg-lavender selection:text-white">
      <AnimatePresence>
        {loading && (
          <motion.div 
            key="splash"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-cream flex flex-col items-center justify-center"
          >
            <motion.div 
              animate={{ 
                scale: [1, 1.1, 1],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="text-8xl mb-4"
            >
              ☁️
            </motion.div>
            <h1 className="text-4xl font-serif font-bold tracking-tight">Cloud Pops</h1>
            <p className="text-lavender font-medium mt-2">Floating to your screen...</p>
          </motion.div>
        )}
      </AnimatePresence>

      {!loading && (
        <>
          {/* Urgent Banner */}
          <div className="promo-bar">
            🎉 Free Delivery This Week Only — Order Before Sunday!
          </div>

          {/* Navbar */}
          <nav className="sticky top-0 z-50 glass py-3 px-8 flex items-center justify-between">
            <a href="#" className="font-serif text-2xl font-black tracking-tight flex items-center gap-2">
              <span className="text-3xl">☁️</span> Cloud Pops
            </a>
            
            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-6 text-sm font-medium">
              <a href="#" className="hover:text-lavender transition-colors">Home</a>
              <a href="#flavors" className="hover:text-lavender transition-colors">Flavors</a>
              <a href="#story" className="hover:text-lavender transition-colors">Story</a>
              <a href="#reviews" className="hover:text-lavender transition-colors">Reviews</a>
              <a href="https://wa.me/923001234567" target="_blank" className="text-purple-600 font-bold">Order Now</a>
            </div>

            {/* Mobile Toggle */}
            <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </nav>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="md:hidden glass border-b border-white/20 fixed top-[84px] left-0 w-full z-40 overflow-hidden"
              >
                <div className="flex flex-col p-6 gap-4 font-medium text-center">
                  <a href="#" onClick={() => setIsMenuOpen(false)}>Home</a>
                  <a href="#flavors" onClick={() => setIsMenuOpen(false)}>Flavors</a>
                  <a href="#story" onClick={() => setIsMenuOpen(false)}>Story</a>
                  <a href="#reviews" onClick={() => setIsMenuOpen(false)}>Reviews</a>
                  <a href="https://wa.me/923001234567" className="text-purple-600 font-bold py-3">Order Now</a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Hero Section */}
          <section className="relative min-h-[90vh] flex flex-col md:flex-row items-center overflow-hidden bg-cream">
            {/* Left Content Area (Inspired by design split) */}
            <div className="w-full md:w-[45%] hero-gradient p-12 md:p-24 flex flex-col justify-center text-white min-h-[500px] md:min-h-[90vh] relative overflow-hidden">
               {/* Decorative elements from design */}
               <div className="absolute top-10 left-10 text-6xl opacity-20 pointer-events-none">☁️</div>
               <div className="absolute bottom-20 right-5 text-8xl opacity-10 pointer-events-none">🍦</div>
               
               <motion.div 
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="relative z-10"
               >
                <h1 className="text-6xl md:text-8xl font-serif font-black leading-[0.9] mb-4">
                  Taste the<br/><span className="italic">Clouds</span>
                </h1>
                <p className="text-lg md:text-xl opacity-90 mb-8 max-w-xs">
                  Handcrafted ice cream pops so light, they float. Experience magic in every bite.
                </p>
                <div className="flex gap-4">
                  <a href="#flavors" className="btn-gradient px-8 py-4 rounded-full font-bold shadow-lg text-sm hover:translate-y-[-2px] transition-transform flex items-center gap-2">
                    Explore Flavors
                  </a>
                  <a href="#story" className="border-2 border-white px-8 py-4 rounded-full font-bold text-sm hover:bg-white hover:text-navy transition-all">
                    Watch Story
                  </a>
                </div>

                <div className="mt-16 grid grid-cols-2 gap-4 opacity-90 max-w-xs">
                  <div className="bg-white/20 p-4 rounded-2xl backdrop-blur-sm">
                    <div className="text-xl mb-1 text-mint"><Leaf size={24} fill="currentColor"/></div>
                    <div className="text-[10px] font-bold uppercase tracking-widest text-white/80">All Natural</div>
                  </div>
                  <div className="bg-white/20 p-4 rounded-2xl backdrop-blur-sm">
                    <div className="text-xl mb-1 text-sky-blue"><Snowflake size={24} fill="currentColor"/></div>
                    <div className="text-[10px] font-bold uppercase tracking-widest text-white/80">Daily Fresh</div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right Display Area */}
            <div className="flex-1 p-12 md:p-24 bg-white/30 backdrop-blur-sm min-h-[500px] flex items-center justify-center relative">
               <motion.div 
                animate={{ y: [-20, 20, -20] }}
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                className="relative"
               >
                  <div className="text-[180px] drop-shadow-2xl">🍦</div>
                  <div className="absolute -top-10 -right-10 text-6xl">☁️</div>
               </motion.div>
               <div className="absolute bottom-10 left-10 space-y-4">
                  {[
                    { val: "10k+", label: "Lovers" },
                    { val: "12", label: "Flavors" },
                    { val: "4.9★", label: "Rating" }
                  ].map((stat, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <div className="w-1.5 h-1.5 bg-lavender rounded-full" />
                      <div>
                        <span className="font-serif font-black text-2xl text-navy">{stat.val}</span>
                        <span className="text-[10px] uppercase tracking-widest font-bold text-navy/40 ml-2">{stat.label}</span>
                      </div>
                    </div>
                  ))}
               </div>
            </div>
          </section>

          {/* Flavors Section */}
          <section id="flavors" className="py-24 px-8 bg-white/50">
            <div className="max-w-7xl mx-auto">
              <div className="flex justify-between items-end mb-12 border-b border-navy/10 pb-6">
                <h2 className="text-4xl md:text-5xl font-serif italic text-navy">Our Cloud Collection</h2>
                <span className="text-xs font-bold text-navy/40 tracking-[2px] uppercase">6 Featured Flavors</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {FLAVORS.map((flavor, i) => (
                  <motion.div 
                    key={flavor.id}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className={`flavor-card ${flavor.color} p-6 rounded-3xl flex gap-5 relative group overflow-hidden`}
                  >
                    {flavor.isPopular && (
                      <div className="absolute top-3 right-3 bg-pink-500 text-white text-[8px] px-2 py-0.5 rounded-full font-bold z-10 shadow-sm">
                        BEST SELLER
                      </div>
                    )}
                    <div className="text-5xl group-hover:scale-110 transition-transform duration-300">{flavor.emoji}</div>
                    <div className="flex-1">
                      <h3 className="font-bold text-base text-navy mb-1">{flavor.name}</h3>
                      <p className="text-[11px] opacity-70 mb-4 h-8 leading-tight">
                        {flavor.id === 2 ? "Fresh Berry Swirl" : flavor.desc.split(' ').slice(0, 3).join(' ')}
                      </p>
                      <div className="flex justify-between items-center">
                        <span className="font-black text-sm">{flavor.price}</span>
                        <button className="bg-white px-4 py-1.5 rounded-full text-[10px] shadow-sm font-bold hover:bg-navy hover:text-white transition-colors">
                          Add
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Story & CTA Grid */}
          <section id="story" className="py-24 px-8 bg-cream">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white p-10 md:p-14 rounded-[3rem] shadow-sm border border-black/5 flex flex-col justify-center"
              >
                <h3 className="text-4xl font-serif italic mb-6">Born from a Dream</h3>
                <p className="text-lg leading-relaxed opacity-80 mb-6 font-medium">
                  Every pop is a little piece of cloud — light, dreamy, and crafted in the heart of Islamabad since 2023. Our small-batch process ensures the magic stays in every bite.
                </p>
                <p className="text-sm opacity-60">
                  We partner with local organic farms to bring you the purest flavors of the season. No shortcuts, just clouds.
                </p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-navy text-white p-10 md:p-14 rounded-[3rem] flex flex-col justify-between relative overflow-hidden"
              >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[200px] opacity-[0.03] pointer-events-none">☁️</div>
                <div className="relative z-10">
                  <h3 className="text-4xl font-serif font-black mb-4">Ready to Float?</h3>
                  <p className="text-lg opacity-80 mb-8">Get free delivery on your first box! Order now via WhatsApp and taste the magic.</p>
                  <a href="https://wa.me/923001234567" target="_blank" className="bg-white text-navy w-full py-5 rounded-2xl font-bold text-center flex items-center justify-center gap-3 hover:bg-lavender hover:text-white transition-all shadow-xl">
                    Order on WhatsApp <MessageCircle size={20} fill="currentColor" className="text-green-500" />
                  </a>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Horizontal Testimonials */}
          <section id="reviews" className="py-24 px-8 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl font-serif italic mb-10 text-center">Cloud Lovers’ Stories</h2>
              <div className="flex gap-6 overflow-x-auto pb-8 scroll-section scroll-smooth snap-x">
                {REVIEWS.map((review, i) => (
                  <motion.div 
                    key={review.id}
                    className="min-w-[300px] md:min-w-[400px] bg-cream/50 p-8 rounded-3xl border border-white snap-center hover:shadow-lg transition-shadow"
                  >
                    <div className="text-yellow-400 text-xs mb-4 flex gap-0.5">
                      {[...Array(5)].map((_, j) => <Star key={j} size={14} fill="currentColor" />)}
                    </div>
                    <p className="text-lg italic text-navy/80 mb-6 leading-relaxed">"{review.text}"</p>
                    <div className="flex items-center justify-between">
                      <div className="font-bold text-sm">{review.name}</div>
                      <div className="text-[10px] font-bold text-navy/30 uppercase tracking-widest">{review.city}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Compact Contact Footer */}
          <footer className="bg-navy text-white/60 text-[11px] pt-24 pb-8 px-8">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 mb-20">
               <div>
                  <h2 className="text-2xl font-serif font-black text-white mb-4">☁️ Cloud Pops</h2>
                  <p className="text-xs leading-relaxed max-w-xs transition-opacity hover:opacity-100 italic">
                    Float into flavor with Islamabad's finest handcrafted ice cream pops.
                  </p>
               </div>
               <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <MapPin size={14} className="text-lavender" />
                    <span className="hover:text-white transition-colors cursor-pointer">F-7 Markaz, Islamabad</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <Phone size={14} className="text-sky-blue" />
                    <span className="hover:text-white transition-colors cursor-pointer">+92 300 1234567</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <Mail size={14} className="text-baby-pink" />
                    <span className="hover:text-white transition-colors cursor-pointer">hello@cloudpops.pk</span>
                  </div>
               </div>
               <div className="flex gap-8 justify-md-end">
                  <a href="#" className="hover:text-white font-bold tracking-widest uppercase text-[10px]">Instagram</a>
                  <a href="#" className="hover:text-white font-bold tracking-widest uppercase text-[10px]">Facebook</a>
                  <a href="#" className="hover:text-white font-bold tracking-widest uppercase text-[10px]">TikTok</a>
               </div>
            </div>

            <div className="max-w-7xl mx-auto border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
              <p>© 2025 Cloud Pops. Handcrafted in Islamabad, PK.</p>
              <div className="font-black text-white uppercase tracking-[2px] bg-white/5 px-6 py-2 rounded-full border border-white/10 hover:bg-white/10 transition-colors cursor-default">
                Crafted with <span className="text-pink-400">❤️</span> by <span className="text-sky-blue">Syed Ausajah Ali</span>
              </div>
            </div>
          </footer>

          {/* Sticky WhatsApp - डिजाइन के अनुसार */}
          <motion.a 
            href="https://wa.me/923001234567"
            target="_blank"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            whileHover={{ scale: 1.1 }}
            className="fixed bottom-[60px] right-[20px] z-[100] bg-[#25D366] text-white w-[45px] h-[45px] rounded-full shadow-lg flex items-center justify-center"
          >
            <MessageCircle size={20} fill="currentColor" />
          </motion.a>
        </>
      )}
    </div>
  );
}
