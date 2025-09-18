import Card from '../components/ui/Card';

const About = () => {
  return (
    <div className="py-16">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Giới thiệu về dự án
            </h1>
            <p className="text-xl text-gray-600">
              Tìm hiểu về MLN131 Project và công nghệ được sử dụng
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <Card>
              <Card.Header>
                <h2 className="text-2xl font-semibold">Về dự án</h2>
              </Card.Header>
              <Card.Content>
                <p className="text-gray-600 mb-4">
                  MLN131 Project là một template React hoàn chỉnh được xây dựng 
                  với các công nghệ hiện đại nhất.
                </p>
                <p className="text-gray-600">
                  Dự án này được thiết kế để làm nền tảng cho việc phát triển 
                  các ứng dụng web chuyên nghiệp.
                </p>
              </Card.Content>
            </Card>

            <Card>
              <Card.Header>
                <h2 className="text-2xl font-semibold">Công nghệ</h2>
              </Card.Header>
              <Card.Content>
                <ul className="space-y-2 text-gray-600">
                  <li>• React 18 - Library frontend phổ biến nhất</li>
                  <li>• Vite - Build tool siêu nhanh</li>
                  <li>• TailwindCSS - Utility-first CSS framework</li>
                  <li>• React Router - Client-side routing</li>
                  <li>• Lucide React - Beautiful icons</li>
                </ul>
              </Card.Content>
            </Card>
          </div>

          <Card>
            <Card.Header>
              <h2 className="text-2xl font-semibold">Tính năng chính</h2>
            </Card.Header>
            <Card.Content>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    🎨 UI/UX hiện đại
                  </h3>
                  <p className="text-gray-600">
                    Giao diện được thiết kế theo xu hướng hiện đại với TailwindCSS
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    📱 Responsive Design
                  </h3>
                  <p className="text-gray-600">
                    Tương thích hoàn hảo trên mọi thiết bị và kích thước màn hình
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    ⚡ Performance cao
                  </h3>
                  <p className="text-gray-600">
                    Tối ưu hóa hiệu suất với Vite và lazy loading
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    🔧 Developer Experience
                  </h3>
                  <p className="text-gray-600">
                    Cấu trúc code rõ ràng, dễ maintain và scale
                  </p>
                </div>
              </div>
            </Card.Content>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default About;