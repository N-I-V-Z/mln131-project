import { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import Card from '../components/ui/Card';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data:', formData);
    alert('Cảm ơn bạn đã gửi tin nhắn! Chúng tôi sẽ liên hệ lại sớm.');
    setFormData({ name: '', email: '', message: '' });
  };

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      title: 'Email',
      content: 'contact@mln131.edu.vn',
      link: 'mailto:contact@mln131.edu.vn'
    },
    {
      icon: <Phone className="h-5 w-5" />,
      title: 'Điện thoại',
      content: '+84 123 456 789',
      link: 'tel:+84123456789'
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      title: 'Địa chỉ',
      content: 'TP. Hồ Chí Minh, Việt Nam',
      link: null
    }
  ];

  return (
    <div className="py-16">
      <div className="container">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Liên hệ với chúng tôi
            </h1>
            <p className="text-xl text-gray-600">
              Có câu hỏi? Chúng tôi luôn sẵn sàng hỗ trợ bạn
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-gray-900">
                Thông tin liên hệ
              </h2>
              
              {contactInfo.map((item, index) => (
                <Card key={index}>
                  <Card.Content className="py-4">
                    <div className="flex items-start">
                      <div className="flex items-center justify-center w-10 h-10 bg-primary-100 text-primary-600 rounded-lg mr-4">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900">{item.title}</h3>
                        {item.link ? (
                          <a
                            href={item.link}
                            className="text-gray-600 hover:text-primary-600"
                          >
                            {item.content}
                          </a>
                        ) : (
                          <p className="text-gray-600">{item.content}</p>
                        )}
                      </div>
                    </div>
                  </Card.Content>
                </Card>
              ))}
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card>
                <Card.Header>
                  <h2 className="text-2xl font-semibold">Gửi tin nhắn</h2>
                </Card.Header>
                <Card.Content>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <Input
                        label="Họ và tên"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Nhập họ và tên của bạn"
                        required
                      />
                      <Input
                        label="Email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Nhập email của bạn"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Tin nhắn
                      </label>
                      <textarea
                        name="message"
                        rows={6}
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Nhập tin nhắn của bạn"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                        required
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full">
                      Gửi tin nhắn
                    </Button>
                  </form>
                </Card.Content>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;