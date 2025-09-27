import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  BookOpen,
  Users,
  Globe,
  Lightbulb,
  ArrowRight,
  Play,
  ChevronDown,
  Star,
  Award,
  Target,
  Heart,
} from "lucide-react";

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % 4);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      icon: <BookOpen className="h-8 w-8" />,
      title: "Lý thuyết cơ bản",
      description:
        "Nắm vững nền tảng lý luận Mác-Lênin về nhà nước xã hội chủ nghĩa",
      color: "from-red-500 to-red-600",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Thực tiễn xã hội",
      description:
        "Ứng dụng lý thuyết vào thực tiễn xây dựng và phát triển đất nước",
      color: "from-yellow-500 to-yellow-600",
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Tầm nhìn toàn cầu",
      description:
        "So sánh và phân tích các mô hình nhà nước XHCN trên thế giới",
      color: "from-red-600 to-yellow-500",
    },
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: "Tư duy sáng tạo",
      description:
        "Phát triển tư duy phản biện và khả năng phân tích lý thuyết",
      color: "from-yellow-600 to-red-500",
    },
  ];

  const achievements = [
    {
      icon: <Award className="h-6 w-6" />,
      text: "Nội dung được biên soạn bởi các chuyên gia hàng đầu",
    },
    {
      icon: <Target className="h-6 w-6" />,
      text: "Phương pháp giảng dạy hiện đại, dễ hiểu",
    },
    {
      icon: <Heart className="h-6 w-6" />,
      text: "Góp phần xây dựng thế hệ trẻ yêu nước",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-900 via-red-800 to-yellow-800 overflow-hidden">
      {/* Animated Background with Communist Theme */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-32 w-96 h-96 bg-gradient-to-r from-red-400 to-yellow-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-32 w-96 h-96 bg-gradient-to-r from-yellow-400 to-red-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -top-40 left-1/2 w-96 h-96 bg-gradient-to-r from-red-500 to-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>

        {/* Socialist symbols pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 text-6xl">⚒</div>
          <div className="absolute top-40 right-32 text-4xl">☭</div>
          <div className="absolute bottom-32 left-40 text-5xl">⭐</div>
          <div className="absolute bottom-20 right-20 text-4xl">⚒</div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4">
        <div className="text-center max-w-6xl mx-auto">
          <div
            className={`transform transition-all duration-1000 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <div className="inline-flex items-center px-6 py-3 bg-red-600/20 backdrop-blur-md border border-red-400/30 rounded-full mb-8">
              <Star className="w-5 h-5 text-yellow-400 mr-2" />
              <span className="text-yellow-100 text-sm font-medium">
                🚩 Học tập để phục vụ Tổ quốc
              </span>
            </div>

            <h1 className="py-8 text-5xl md:text-7xl lg:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-200 via-yellow-200 to-red-200 mb-6 leading-tight">
              Nhà nước
              <br />
              Xã Hội CHủ Nghĩa
            </h1>

            <div className="text-2xl md:text-3xl text-yellow-200 mb-6 font-bold">
              Mác - Lênin
            </div>

            <h2 className="text-3xl md:text-5xl font-bold text-red-100 mb-8 leading-tight">
              Nền tảng{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-red-300">
                lý thuyết
              </span>{" "}
              cho tương lai
            </h2>

            <p className="text-lg md:text-xl text-red-100/80 mb-12 max-w-4xl mx-auto font-light leading-relaxed">
              Khám phá và nắm vững những nguyên lý cơ bản của Chủ nghĩa xã hội
              khoa học, tìm hiểu về bản chất, vai trò và chức năng của nhà nước
              xã hội chủ nghĩa trong việc xây dựng và phát triển xã hội công
              bằng, văn minh.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <Link
                to="/maclenin-concept"
                className="group relative px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 rounded-2xl font-bold text-white text-lg shadow-2xl hover:shadow-red-500/25 transition-all duration-300 hover:scale-105"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-red-600 rounded-2xl blur opacity-30 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative flex items-center">
                  Bắt đầu học tập
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-red-200/50" />
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-red-100 mb-6">
              Nội dung{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-red-300">
                học tập
              </span>
            </h2>
            <p className="text-xl text-red-200/70 max-w-3xl mx-auto">
              Hệ thống kiến thức toàn diện về nhà nước xã hội chủ nghĩa
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`relative p-6 bg-red-800/30 backdrop-blur-md border border-red-600/20 rounded-3xl hover:bg-red-800/40 transition-all duration-500 hover:scale-105 group cursor-pointer ${
                  activeFeature === index ? "ring-2 ring-yellow-400" : ""
                }`}
                onMouseEnter={() => setActiveFeature(index)}
              >
                <div
                  className={`inline-flex items-center justify-center w-14 h-14 bg-gradient-to-r ${feature.color} rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <div className="text-white">{feature.icon}</div>
                </div>
                <h3 className="text-xl font-bold text-red-100 mb-3">
                  {feature.title}
                </h3>
                <p className="text-red-200/70 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievement Section */}
      <section className="relative py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-red-700/30 to-yellow-700/30 backdrop-blur-md border border-red-500/20 rounded-3xl p-8">
            <h3 className="text-3xl font-bold text-red-100 mb-8 text-center">
              Cam kết chất lượng giáo dục
            </h3>
            <div className="space-y-6">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-center text-red-100/90">
                  <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-yellow-500 to-red-500 rounded-full flex items-center justify-center mr-4">
                    {achievement.icon}
                  </div>
                  <span className="text-lg">{achievement.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-red-600/20 to-yellow-600/20 backdrop-blur-md border border-red-400/20 rounded-3xl p-12">
            <h2 className="text-4xl md:text-5xl font-black text-red-100 mb-6">
              Góp phần xây dựng{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-red-300">
                tổ quốc
              </span>
            </h2>
            <p className="text-xl text-red-200/70 mb-8 max-w-3xl mx-auto">
              Học tập để nắm vững lý thuyết, ứng dụng vào thực tiễn, góp phần
              xây dựng đất nước Việt Nam xã hội chủ nghĩa ngày càng giàu mạnh
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <button className="group relative px-8 py-4 bg-gradient-to-r from-yellow-500 to-red-500 rounded-2xl font-bold text-white text-lg shadow-2xl hover:shadow-yellow-500/25 transition-all duration-300 hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-red-400 rounded-2xl blur opacity-30 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative">Học ngay</span>
              </button>
            </div>

            <div className="text-red-200/60 text-sm">
              "Không có cách mạng nào thành công nếu thiếu lý thuyết cách mạng"
              - V.I. Lenin
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
};

export default Home;
