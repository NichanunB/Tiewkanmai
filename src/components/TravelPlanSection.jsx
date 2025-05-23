import Card from "./ui/Card";

function TravelPlanSection() {
    return (
      <div className="mt-12 mx-auto max-w-[1320px] m-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">แผนเที่ยว</h2>
          <button className="flex items-center bg-gray-100 px-4 py-2 rounded-md">
            <span className="mr-2">+</span>
            <span>เพิ่มแผนเที่ยว</span>
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Individual cards will go here */}
          <Card 
            image="/path-to-image/bangkok.jpg"
            title="ONE DAY TRIP เจริญกรุง - บางรัก"
            category="กรุงเทพ - บางรัก"
          />
          <Card 
            image="/path-to-image/temple.jpg"
            title="ไหว้พระ 9 วัด รับปีใหม่"
            category=""
          />
          <Card 
            image="/path-to-image/boat.jpg"
            title="DIY ใกล้ลุง"
            category=""
          />
        </div>
      </div>
    );
  }
  export default TravelPlanSection;