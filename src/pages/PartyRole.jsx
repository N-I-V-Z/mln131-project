import { useState } from 'react';

const PartyRole = () => {
  // State to track active section
  const [activeSection, setActiveSection] = useState(null);

  // Color palette for different sections
  const sectionColors = {
    1: '#e11d48', 2: '#ea580c', 3: '#ca8a04', 4: '#16a34a',
    5: '#0891b2', 6: '#2563eb', 7: '#7c3aed', 8: '#c026d3',
  };

  // Section data with symbols, titles and descriptions
  const sections = [
    {
      id: 1,
      symbol: "🗣️",
      title: "Dân chủ XHCN - Dân vận & Tham gia xã hội",
      description: "Bảo đảm quyền làm chủ, mở kênh tham vấn - giám sát"
    },
    {
      id: 2,
      symbol: "⚖️",
      title: "Tư pháp - Bảo vệ công lý",
      description: "Xây dựng tư pháp liêm chính, chuyên nghiệp, bảo đảm quyền con người"
    },
    {
      id: 3,
      symbol: "📜",
      title: "Lập pháp - Xây dựng pháp luật",
      description: "Bảo đảm hệ thống pháp luật hợp hiến, đồng bộ, khả thi"
    },
    {
      id: 4,
      symbol: "💭",
      title: "Tư tưởng - Lý luận",
      description: "Định hướng giá trị và thống nhất nhận thức xã hội"
    },
    {
      id: 5,
      symbol: "🎯",
      title: "Cương lĩnh - Chiến lược",
      description: "Định hướng mục tiêu và mô hình phát triển"
    },
    {
      id: 6,
      symbol: "⚙️",
      title: "Tổ chức - Cán bộ",
      description: "Xây dựng bộ máy và đội ngũ đủ đức - tài"
    },
    {
      id: 7,
      symbol: "📋",
      title: "Hành pháp - Tổ chức thực thi",
      description: "Biến đường lối thành kế hoạch, ngân sách, dịch vụ công"
    },
    {
      id: 8,
      symbol: "🔍",
      title: "Kiểm tra - Giám sát - Kỷ luật & PCTN",
      description: "Giữ kỷ luật Đảng, liêm chính bộ máy, phòng chống tham nhũng"
    }
  ];

  return (
    <div className="container mx-auto p-8 relative">
      {/* Main title with gradient and animation */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-center mb-2 
          bg-gradient-to-r from-rose-600 via-purple-600 to-blue-600 
          bg-clip-text text-transparent 
          animate-gradient bg-300% tracking-tight">
          Vai trò của Đảng trong Nhà nước Pháp quyền XHCN
        </h1>
        <div className="w-24 h-1 mx-auto rounded-full
          bg-gradient-to-r from-rose-600 via-purple-600 to-blue-600" />
      </div>
      
      <div className="w-[800px] h-[900px] mx-auto relative">
        <svg viewBox="0 0 800 900" className="w-full h-full">
          <g transform="translate(50,50)">
            {/* Main sections of pencil body */}
            {sections.map((section, index) => {
              const sectionHeight = 80;
              const startY = 50 + (index * sectionHeight);
              
              return (
                <g key={section.id}>
                  {/* Pencil section with symbol */}
                  <rect
                    x="50"
                    y={startY}
                    width="100"
                    height={sectionHeight}
                    fill={activeSection === section.id ? sectionColors[section.id] : `${sectionColors[section.id]}80`}
                    stroke="#fff"
                    strokeWidth="1"
                    className="cursor-pointer transition-all duration-300 hover:scale-x-110"
                    style={{ transformOrigin: '100% 50%' }}
                    onMouseEnter={() => setActiveSection(section.id)}
                    onMouseLeave={() => setActiveSection(null)}
                  />
                  
                  {/* Symbol text */}
                  <text
                    x="100"
                    y={startY + (sectionHeight/2)}
                    fontSize="24"
                    textAnchor="middle"
                    dominantBaseline="middle"
                    className="pointer-events-auto cursor-pointer"
                    onMouseEnter={() => setActiveSection(section.id)}
                    onMouseLeave={() => setActiveSection(null)}
                  >
                    {section.symbol}
                  </text>

                  {/* Title and description container */}
                  <foreignObject 
                    x="160" 
                    y={startY - 10} 
                    width="500" 
                    height={sectionHeight + 20}
                  >
                    <div className="relative h-full flex flex-col items-center justify-center overflow-hidden">
                      <div 
                        className={`absolute w-full p-4 border-2 rounded-lg
                          transition-all duration-500 ease-in-out backdrop-blur-sm
                          ${activeSection === section.id 
                            ? 'h-full bg-white shadow-2xl border-current ring-4 ring-current ring-opacity-20' 
                            : 'h-16 bg-white/90 border-gray-200 hover:border-current hover:shadow-xl'}`}
                        style={{
                          backgroundColor: activeSection === section.id 
                            ? 'white'
                            : `${sectionColors[section.id]}20`,
                          borderColor: activeSection === section.id ? sectionColors[section.id] : undefined,
                          boxShadow: activeSection === section.id 
                            ? `0 0 15px ${sectionColors[section.id]}40` 
                            : undefined
                        }}
                      >
                        {/* Title - always visible with animation */}
                        <h3 
                          className={`font-semibold text-center transition-all duration-500 ease-in-out
                            ${activeSection === section.id 
                              ? 'transform -translate-y-2 text-lg text-current mb-3' 
                              : 'text-xl text-gray-800'}`}
                        >
                          {section.title}
                        </h3>
                        
                        {/* Description - animated fade in and slide up */}
                        {activeSection === section.id && (
                          <p className="text-base text-gray-600 text-center opacity-0 animate-fadeIn
                            transform translate-y-2 transition-all duration-500 ease-in-out">
                            {section.description}
                          </p>
                        )}
                      </div>
                    </div>
                  </foreignObject>
                </g>
              );
            })}

            {/* Pencil eraser parts */}
            <rect
              x="50"
              y={50 + (sections.length * 80)}
              width="100"
              height="30"
              fill="#a1a1aa"
              stroke="#71717a"
              strokeWidth="1"
            />
            <rect
              x="50"
              y={80 + (sections.length * 80)}
              width="100"
              height="20"
              fill="#f87171"
              stroke="#ef4444"
              strokeWidth="1"
            />

            {/* Pencil tip parts */}
            <path
              d="M 100,0 L 50,50 L 150,50 Z"
              fill="#854d0e"
              stroke="#78350f"
              strokeWidth="1"
            />
            <path
              d="M 100,0 L 70,33 L 130,33 Z"
              fill="#1c1917"
              stroke="#0c0a09"
              strokeWidth="1"
            />
          </g>
        </svg>
      </div>
    </div>
  );
};

// Animation styles
const styles = {
  '.animate-fadeIn': {
    opacity: 0,
    animation: 'fadeIn 0.5s ease-in-out forwards',
    animationDelay: '0.2s'
  },
  '@keyframes fadeIn': {
    '0%': { 
      opacity: 0,
      transform: 'translateY(10px)'
    },
    '100%': { 
      opacity: 1,
      transform: 'translateY(0)'
    }
  },
  '.animate-gradient': {
    animation: 'gradient 6s linear infinite'
  },
  '.bg-300%': {
    'backgroundSize': '300%'
  },
  '@keyframes gradient': {
    '0%': { 
      backgroundPosition: '0% 50%' 
    },
    '50%': { 
      backgroundPosition: '100% 50%' 
    },
    '100%': { 
      backgroundPosition: '0% 50%' 
    }
  }
};

export default PartyRole;