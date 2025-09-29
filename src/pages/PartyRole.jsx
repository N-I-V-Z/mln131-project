import { useState } from "react";
import CoDang from "../assets/co-dang.jpg";

const PartyRole = () => {
  const [activeSection, setActiveSection] = useState(null);

  const sectionColors = {
    1: {
      main: "#e11d48",
      light: "#fecdd3",
      gradient: "from-rose-500 to-pink-600",
    },
    2: {
      main: "#ea580c",
      light: "#fed7aa",
      gradient: "from-orange-500 to-amber-600",
    },
    3: {
      main: "#ca8a04",
      light: "#fef3c7",
      gradient: "from-yellow-500 to-orange-500",
    },
    4: {
      main: "#16a34a",
      light: "#bbf7d0",
      gradient: "from-green-500 to-emerald-600",
    },
    5: {
      main: "#0891b2",
      light: "#a5f3fc",
      gradient: "from-cyan-500 to-blue-500",
    },
    6: {
      main: "#2563eb",
      light: "#bfdbfe",
      gradient: "from-blue-500 to-indigo-600",
    },
    7: {
      main: "#7c3aed",
      light: "#ddd6fe",
      gradient: "from-violet-500 to-purple-600",
    },
    8: {
      main: "#c026d3",
      light: "#f5d0fe",
      gradient: "from-fuchsia-500 to-pink-600",
    },
  };

  const sections = [
    {
      id: 1,
      symbol: "🗣️",
      title: "Dân chủ XHCN",
      subtitle: "Dân vận & Tham gia xã hội",
      description: "Bảo đảm quyền làm chủ, mở kênh tham vấn - giám sát",
    },
    {
      id: 2,
      symbol: "⚖️",
      title: "Tư pháp",
      subtitle: "Bảo vệ công lý",
      description:
        "Xây dựng tư pháp liêm chính, chuyên nghiệp, bảo đảm quyền con người",
    },
    {
      id: 3,
      symbol: "📜",
      title: "Lập pháp",
      subtitle: "Xây dựng pháp luật",
      description: "Bảo đảm hệ thống pháp luật hợp hiến, đồng bộ, khả thi",
    },
    {
      id: 4,
      symbol: "💭",
      title: "Tư tưởng",
      subtitle: "Lý luận",
      description: "Định hướng giá trị và thống nhất nhận thức xã hội",
    },
    {
      id: 5,
      symbol: "🎯",
      title: "Cương lĩnh",
      subtitle: "Chiến lược",
      description: "Định hướng mục tiêu và mô hình phát triển",
    },
    {
      id: 6,
      symbol: "⚙️",
      title: "Tổ chức",
      subtitle: "Cán bộ",
      description: "Xây dựng bộ máy và đội ngũ đủ đức - tài",
    },
    {
      id: 7,
      symbol: "📋",
      title: "Hành pháp",
      subtitle: "Tổ chức thực thi",
      description: "Biến đường lối thành kế hoạch, ngân sách, dịch vụ công",
    },
    {
      id: 8,
      symbol: "🔍",
      title: "Kiểm tra - Giám sát",
      subtitle: "Kỷ luật & PCTN",
      description:
        "Giữ kỷ luật Đảng, liêm chính bộ máy, phòng chống tham nhũng",
    },
  ];

  const getCirclePosition = (index, total, radius = 280) => {
    const angle = (index * 2 * Math.PI) / total - Math.PI / 2;
    const x = 400 + radius * Math.cos(angle);
    const y = 400 + radius * Math.sin(angle);
    return { x, y, angle };
  };

  const getCardPosition = (index, total) => {
    const angle = (index * 2 * Math.PI) / total - Math.PI / 2;
    const cardRadius = 420;
    const cardX = 400 + cardRadius * Math.cos(angle);
    const cardY = 400 + cardRadius * Math.sin(angle);

    let alignX = "middle";
    let alignY = "middle";
    if (cardX < 350) alignX = "end";
    else if (cardX > 450) alignX = "start";
    if (cardY < 350) alignY = "end";
    else if (cardY > 450) alignY = "start";

    return { x: cardX, y: cardY, alignX, alignY };
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-red-700 to-red-900 text-white p-4 md:p-8">

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-5xl font-black mb-4 leading-tight">
            <span className="bg-gradient-to-r from-rose-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
              Vai trò của Đảng
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 font-medium">
            trong Nhà nước Pháp quyền XHCN
          </p>
        </div>

        <div className="flex justify-center">
          <div className="relative w-full max-w-5xl aspect-square">
            <svg
              viewBox="0 0 800 800"
              className="w-full h-full"
              style={{ overflow: "visible" }}
            >
              <defs>
                {/* glow + soft shadow */}
                <filter id="centerGlow">
                  <feGaussianBlur stdDeviation="8" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>

                <filter
                  id="softShadow"
                  x="-50%"
                  y="-50%"
                  width="200%"
                  height="200%"
                >
                  <feDropShadow
                    dx="0"
                    dy="8"
                    stdDeviation="12"
                    floodOpacity="0.18"
                  />
                </filter>

                <radialGradient id="bgRadial" cx="50%" cy="40%">
                  <stop offset="0%" stopColor="#fff" stopOpacity="0.03" />
                  <stop offset="40%" stopColor="#93c5fd" stopOpacity="0.02" />
                  <stop offset="100%" stopColor="#a78bfa" stopOpacity="0.0" />
                </radialGradient>

                {/* mask circle for the center image to make it perfectly round */}
                <mask id="circleMask">
                  <rect x="0" y="0" width="800" height="800" fill="black" />
                  <circle cx="400" cy="400" r="54" fill="white" />
                </mask>
              </defs>

              {/* subtle background radial */}
              <rect
                x="0"
                y="0"
                width="800"
                height="800"
                fill="url(#bgRadial)"
              />

              <circle
                cx="400"
                cy="400"
                r="320"
                fill="none"
                stroke="#7f1d1d"
                strokeWidth="1"
                strokeDasharray="5,5"
              />
              <circle
                cx="400"
                cy="400"
                r="280"
                fill="none"
                stroke="#991b1b"
                strokeWidth="2"
                strokeDasharray="10,5"
              />

              {/* small animated connectors + sections */}
              {sections.map((section, index) => {
                const pos = getCirclePosition(index, sections.length);
                const cardPos = getCardPosition(index, sections.length);
                const isActive = activeSection === section.id;
                const colors = sectionColors[section.id];

                return (
                  <g
                    key={section.id}
                    onMouseEnter={() => setActiveSection(section.id)}
                    onMouseLeave={() => setActiveSection(null)}
                    style={{ cursor: "pointer" }}
                  >
                    <line
                      x1="400"
                      y1="400"
                      x2={pos.x}
                      y2={pos.y}
                      stroke={isActive ? colors.main : "#cbd5e1"}
                      strokeWidth={isActive ? "3" : "1.5"}
                      strokeDasharray={isActive ? "0" : "5,5"}
                      opacity={isActive ? "0.95" : "0.28"}
                      className="transition-all duration-300"
                    />

                    {isActive && (
                      <circle
                        cx={pos.x}
                        cy={pos.y}
                        r="64"
                        fill="none"
                        stroke={colors.main}
                        strokeWidth="3"
                        opacity="0.20"
                        className="animate-pulse"
                      />
                    )}

                    <circle
                      cx={pos.x}
                      cy={pos.y}
                      r="50"
                      fill={isActive ? colors.main : colors.light}
                      stroke={colors.main}
                      strokeWidth={isActive ? "4" : "2"}
                      filter={isActive ? "url(#centerGlow)" : ""}
                      style={{
                        transform: isActive ? "scale(1.12)" : "scale(1)",
                        transformOrigin: `${pos.x}px ${pos.y}px`,
                        transition: "transform 0.25s",
                      }}
                    />

                    <text
                      x={pos.x}
                      y={pos.y}
                      fontSize="32"
                      textAnchor="middle"
                      dominantBaseline="middle"
                      className="pointer-events-none select-none"
                      style={{
                        transform: isActive ? "scale(1.18)" : "scale(1)",
                        transformOrigin: `${pos.x}px ${pos.y}px`,
                        transition: "transform 0.25s",
                      }}
                    >
                      {section.symbol}
                    </text>

                    {isActive && (
                      <foreignObject
                        x={cardPos.x - 140}
                        y={cardPos.y - 70}
                        width="280"
                        height="140"
                        className="pointer-events-auto"
                      >
                        <div className="w-full h-full flex items-center justify-center p-2">
                          <div
                            className="rounded-2xl p-4 w-full"
                            style={{
                              backdropFilter: "blur(6px)",
                              background:
                                "linear-gradient(180deg, rgba(255,255,255,0.85), rgba(255,255,255,0.78))",
                              borderLeft: `4px solid ${colors.main}`,
                              boxShadow: `0 12px 30px rgba(0,0,0,0.12)`,
                              animation: "cardIn .22s ease-out",
                            }}
                          >
                            <div className="flex items-start gap-3 mb-2">
                              <div
                                className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center text-xl"
                                style={{ backgroundColor: colors.light }}
                              >
                                {section.symbol}
                              </div>
                              <div className="flex-1 min-w-0">
                                <h3
                                  className="font-bold text-sm mb-1"
                                  style={{ color: colors.main }}
                                >
                                  {section.title}
                                </h3>
                                <p className="text-xs text-gray-500">
                                  {section.subtitle}
                                </p>
                              </div>
                            </div>
                            <p className="text-xs text-gray-600 leading-relaxed">
                              {section.description}
                            </p>
                          </div>
                        </div>
                      </foreignObject>
                    )}
                  </g>
                );
              })}

              {/* center circle + animated ring */}
              <g
                style={{
                  transformOrigin: "400px 400px",
                  animation: "floatSlow 6s ease-in-out infinite",
                }}
              >
                {/* subtle rotating ring */}
                <circle
                  cx="400"
                  cy="400"
                  r="86"
                  fill="none"
                  stroke="#fbbf24"
                  strokeOpacity="0.09"
                  strokeWidth="12"
                />

                {/* main red disc */}
                <circle
                  cx="400"
                  cy="400"
                  r="80"
                  fill="#7f1d1d"
                  stroke="#"
                  strokeWidth="4"
                  filter="url(#softShadow)"
                />

                {/* inner decorative ring that pulses on hover of center (when any section active we pulse) */}
                <circle
                  cx="400"
                  cy="400"
                  r="62"
                  fill="none"
                  stroke="#b91c1c"
                  strokeWidth="6"
                  opacity={activeSection ? 0.95 : 0.18}
                  style={{ transition: "opacity 0.25s, transform 0.3s" }}
                />

                {/* masked center image (perfect circle) */}
                <g mask="url(#circleMask)">
                  <image
                    href={CoDang}
                    x="346"
                    y="346"
                    width="108"
                    height="108"
                    preserveAspectRatio="xMidYMid slice"
                    style={{
                      transformOrigin: "400px 400px",
                      transition: "transform 0.45s ease",
                      transform: activeSection
                        ? "scale(1.02) rotate(-6deg)"
                        : "scale(1) rotate(0deg)",
                      filter: "saturate(1.05) contrast(1.02)",
                    }}
                  />
                </g>
              </g>
            </svg>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500 italic">
            Di chuột qua các vòng tròn để xem chi tiết
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.92);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        @keyframes cardIn {
          from {
            opacity: 0;
            transform: translateY(6px) scale(0.98);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        @keyframes floatSlow {
          0% {
            transform: translateY(0) rotate(-1deg);
          }
          50% {
            transform: translateY(-6px) rotate(1deg);
          }
          100% {
            transform: translateY(0) rotate(-1deg);
          }
        }
        .animate-pulse {
          animation: pulseRing 1.6s infinite;
        }
        @keyframes pulseRing {
          0% {
            transform: scale(1);
            opacity: 0.28;
          }
          50% {
            transform: scale(1.06);
            opacity: 0.12;
          }
          100% {
            transform: scale(1);
            opacity: 0.28;
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.28s ease-out;
        }
      `}</style>
    </div>
  );
};

export default PartyRole;
