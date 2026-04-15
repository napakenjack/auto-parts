import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Truck, Clock, Wrench, Search, ArrowRight, Settings, Disc, Filter, Lightbulb, Battery, Activity, Droplet } from 'lucide-react';
import { ProductCard } from '../components/ProductCard';
import { products, categories } from '../data/products';

export const Home: React.FC = () => {
  const featuredProducts = products.slice(0, 4);

  const getCategoryIcon = (name: string) => {
    switch (name) {
      case 'Engine': return '⚙️';
      case 'Brakes': return '🛑';
      case 'Lighting': return '💡';
      case 'Suspension': return '🔄';
      case 'Batteries': return '🔋';
      case 'Electrical': return '🔋';
      case 'Fluids': return '🛢️';
      case 'Filters': return '🌪️';
      default: return '⚙️';
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="bg-slate-800 text-white p-6 flex flex-col md:flex-row items-center justify-between md:h-[130px] gap-6">
        <div className="hero-content">
          <h1 className="text-[24px] font-bold mb-1">Автозапчасти профессионального уровня</h1>
          <p className="text-[14px] opacity-80">Найдите подходящие детали для вашего автомобиля за секунды.</p>
        </div>
        
        <div className="flex flex-wrap md:flex-nowrap gap-2.5 bg-white/10 p-4 rounded-lg border border-white/20">
          <select className="bg-white text-slate-800 py-2 px-3 rounded text-[12px] min-w-[110px] outline-none">
            <option>Год выпуска</option>
            <option>2024</option>
            <option>2023</option>
            <option>2022</option>
          </select>
          <select className="bg-white text-slate-800 py-2 px-3 rounded text-[12px] min-w-[110px] outline-none">
            <option>Марка</option>
            <option>BMW</option>
            <option>Audi</option>
            <option>Toyota</option>
          </select>
          <select className="bg-white text-slate-800 py-2 px-3 rounded text-[12px] min-w-[110px] outline-none">
            <option>Модель</option>
            <option>3 Series</option>
            <option>A4</option>
          </select>
          <button className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-5 rounded font-bold text-[12px] uppercase transition-colors">
            Найти запчасти
          </button>
        </div>
      </section>

      {/* Main Content */}
      <main className="p-5 md:p-6 flex-grow max-w-7xl mx-auto w-full">
        
        {/* Catalog Categories */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-[16px] font-bold border-l-4 border-orange-500 pl-3 text-slate-900">Категории</h2>
          <Link to="/catalog" className="text-[12px] font-semibold text-orange-500 hover:text-orange-600 transition-colors">
            Все категории →
          </Link>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-6">
          {categories.map((cat) => (
            <Link 
              key={cat.id} 
              to={`/catalog?category=${cat.name}`}
              className="bg-white border border-slate-200 rounded-lg p-3 text-center transition-transform hover:border-orange-500 group"
            >
              <div className="h-10 w-10 bg-slate-100 rounded-full mx-auto mb-2 flex items-center justify-center text-[18px]">
                {getCategoryIcon(cat.name)}
              </div>
              <div className="text-[12px] font-semibold text-slate-900">{cat.name}</div>
            </Link>
          ))}
        </div>

        {/* Featured Deals */}
        <div className="flex justify-between items-center mb-4 mt-8">
          <h2 className="text-[16px] font-bold border-l-4 border-orange-500 pl-3 text-slate-900">Лучшие предложения</h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {featuredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

      </main>
    </div>
  );
};
