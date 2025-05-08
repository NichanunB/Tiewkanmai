import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Filters from '../components/Filters';
import ResultCard from '../components/ResultCard';
import ResultTabs from '../components/ResultTabs';
import Pagination from '../components/Pagination';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function AttractionsPage() {
  const [activeTab, setActiveTab] = useState('กำลังมาแรง');
  const [favorites, setFavorites] = useState({});

  const attractions = [{
    id: 1,
    title: "เยาวราช",
    description: "ย่านจีนอัน อาหารแซบ และบรรยากาศคึกคัก",
    image: "https://via.placeholder.com/300x200",
    category: "ที่เที่ยวแล้ว",
  },
  {
    id: 2,
    title: "วัดเล่งเน่ยยี่",
    description:
      "ni ai wo, wo ai ni, mixue bingcheng tian mimi. ni ai wo, wo ai ni, mixue bingcheng tian mimi. ni ai wo ya, wo ai ni, ni ai wo, wo ai ni, mixue bingcheng tian mimi",
    image: "https://via.placeholder.com/300x200",
    category: "ที่เที่ยวแล้ว",
    isFavorite: true,
  },
  {
    id: 3,
    title: "ถนนข้าวสาร",
    description:
      "Body text for whatever you'd like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story.",
    image: "https://via.placeholder.com/300x200",
    category: "ร้านอาหาร",
  },
  {
    id: 4,
    title: "วัดพระแก้ว",
    description:
      "Body text for whatever you'd like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story.",
    image: "https://via.placeholder.com/300x200",
    category: "แผนเที่ยว",
  },
  {
    id: 5,
    title: "ตลาดน้ำอัมพวา",
    description:
      "Body text for whatever you'd like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story.",
    image: "https://via.placeholder.com/300x200",
    category: "ร้านอาหาร",
  },
  {
    id: 6,
    title: "คลองบางหลวง",
    description:
      "Body text for whatever you'd like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story.",
    image: "https://via.placeholder.com/300x200",
    category: "แผนเที่ยว",
  }
];
  const filters = [{ id: "ปักหมุด", label: "ปักหมุด" },
    { id: "ป้าย", label: "ป้าย" },
    { id: "จีน", label: "จีน" },
    { id: "ร้านอาหาร", label: "ร้านอาหาร" },
    { id: "คาเฟ่", label: "คาเฟ่" },
    { id: "วัดวาอาราม", label: "วัดวาอาราม" },
    { id: "ช้อปปิ้ง", label: "ช้อปปิ้ง" },
    { id: "ป่าเขา", label: "ป่าเขา" },
    { id: "จีน", label: "จีน" },
    { id: "ร้านอาหาร", label: "ร้านอาหาร" },
    { id: "คาเฟ่", label: "คาเฟ่" },
    { id: "วัดวาอาราม", label: "วัดวาอาราม" },
  ];
  const tabs = ['ที่ท่องเที่ยว', 'ร้านอาหาร', 'แผนเที่ยว'];
  const selectedFilters = ['ปักหมุด', 'ป๊อปปูล่า', 'ร้านอาหาร', 'คาเฟ่', 'ช้อปปิ้ง'];

  const toggleFavorite = (id) => {
    setFavorites(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const query = useQuery();
    const searchQuery = query.get('query') || 'กรุงเทพมหานคร'; // Default fallback

  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }

  return (
    <div className="bg-[#E7F9FF]">
      <Navbar />
      <div className="container mx-auto">
        <div className="p-4">
          <h1 className="text-lg text-black">แสดงผลการค้นหา {searchQuery}</h1>
        </div>

        <div className="flex">
          <Filters selectedFilters={selectedFilters} filters={filters} />
          
          <div className="flex-1 ml-4">
            <ResultTabs tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />

            <div className="mt-4">
              {attractions.map(attraction => (
                <ResultCard
                  key={attraction.id}
                  attraction={attraction}
                  isFavorite={favorites[attraction.id]}
                  onToggleFavorite={toggleFavorite}
                />
              ))}
            </div>

            <Pagination />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
