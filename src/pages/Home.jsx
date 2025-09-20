import { ArrowRight, Star, Users, Zap } from "lucide-react";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";

const Home = () => {
  const features = [
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Nhanh chóng",
      description: "Ứng dụng được tối ưu hóa để có hiệu suất cao nhất.",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Thân thiện",
      description: "Giao diện người dùng trực quan và dễ sử dụng.",
    },
    {
      icon: <Star className="h-6 w-6" />,
      title: "Chất lượng",
      description: "Code chất lượng cao, tuân thủ best practices.",
    },
  ];

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-indigo-100 py-16">
        <div className="container">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Chào mừng đến với{" "}
              <span className="text-primary-600">MLN131 Project</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Dự án được xây dựng với React, Vite và TailwindCSS. Một template
              hoàn chỉnh cho việc phát triển ứng dụng web hiện đại.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="flex items-center">
                Bắt đầu ngay
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg">
                Tìm hiểu thêm
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Tính năng nổi bật
            </h2>
            <p className="text-lg text-gray-600">
              Những điểm mạnh của template này
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center p-6">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-100 text-primary-600 rounded-lg mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-600 py-16">
        <div className="container text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Sẵn sàng bắt đầu?
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Khám phá tất cả tính năng và bắt đầu xây dựng ứng dụng của bạn.
          </p>
          <Button variant="secondary" size="lg">
            Khởi tạo dự án
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
