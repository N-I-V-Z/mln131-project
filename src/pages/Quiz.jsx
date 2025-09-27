import { useState, useEffect } from "react";
import {
  CheckCircle,
  XCircle,
  ArrowRight,
  RotateCcw,
  Trophy,
  Clock,
  BookOpen,
  Brain,
  Lightbulb,
  Target,
  ArrowLeft,
  Home,
} from "lucide-react";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";

const Quiz = () => {
  const questions = [
    {
      id: 1,
      question:
        "Khái niệm nào mô tả đúng nhất về 'Nhà nước xã hội chủ nghĩa (NNXHCN)' trong khung Mác–Lênin?",
      options: [
        "Công cụ quản lý trung lập của mọi giai cấp",
        "Nhà nước kiểu mới trong thời kỳ quá độ lên CNXH do giai cấp công nhân liên minh lao động lãnh đạo",
        "Biến thể của nhà nước tư sản phúc lợi",
        "Tổ chức xã hội dân sự tự quản",
      ],
      correct: 1,
      explanation:
        "NNXHCN là nhà nước kiểu mới trong thời kỳ quá độ lên CNXH, do giai cấp công nhân liên minh với các lực lượng lao động lãnh đạo. Không trung lập giai cấp, không là biến thể tư sản, càng không phải hội tự quản.",
    },
    {
      id: 2,
      question:
        "Theo duy vật lịch sử, sự ra đời của NNXHCN gắn với nhân tố quyết định nào?",
      options: [
        "Tam quyền tuyệt đối độc lập",
        "Phát triển lực lượng sản xuất và điều chỉnh quan hệ sản xuất phù hợp",
        "Trưng cầu ý dân định kỳ",
        "Tư hữu tư liệu sản xuất là chủ đạo",
      ],
      correct: 1,
      explanation:
        "Theo duy vật lịch sử, khi lực lượng sản xuất phát triển, quan hệ sản xuất và hình thức nhà nước phải đổi theo. NNXHCN ra đời do biến đổi kinh tế–xã hội chứ không thuần ý chí hay thủ tục.",
    },
    {
      id: 3,
      question: "“Dân chủ XHCN” trong nhà nước kiểu mới được hiểu là gì?",
      options: [
        "Chỉ là phương tiện quản trị",
        "Vừa là giá trị vừa là phương thức vận hành quyền lực",
        "Chỉ là thủ tục bầu cử",
        "Chỉ là khẩu hiệu",
      ],
      correct: 1,
      explanation:
        "Dân chủ XHCN vừa là giá trị mục tiêu (quyền lực thuộc về nhân dân) vừa là phương thức vận hành (tổ chức quyền lực để dân tham gia, kiểm soát).",
    },
    {
      id: 4,
      question: "Cơ sở xã hội của NNXHCN là liên minh nào?",
      options: [
        "Công – thương – ngân hàng",
        "Công – nông – trí thức",
        "Nông – thương – địa chủ",
        "Trí – thương – tư bản",
      ],
      correct: 1,
      explanation:
        "Cơ sở xã hội của NNXHCN là liên minh công–nông–trí: công nhân giữ vai trò lãnh đạo, nông dân và trí thức là đồng minh quan trọng.",
    },
    {
      id: 5,
      question: "Nguyên tắc cốt lõi của pháp quyền XHCN là gì?",
      options: [
        "Tập quyền tuyệt đối, không kiểm soát",
        "Thượng tôn Hiến pháp, quyền lực thống nhất nhưng có phân công, phối hợp, kiểm soát",
        "Pháp luật nhường chỗ cho đạo đức",
        "Tòa án tối cao quyết định toàn bộ đường lối",
      ],
      correct: 1,
      explanation:
        "Pháp quyền XHCN: Hiến pháp tối thượng, quyền lực thống nhất nhưng có phân công–phối hợp–kiểm soát giữa lập pháp, hành pháp, tư pháp; mọi người bình đẳng trước pháp luật.",
    },
    {
      id: 6,
      question:
        "Vì sao nói NNXHCN có 'bản chất giai cấp công nhân' nhưng đồng thời 'mang tính nhân dân, dân tộc, thời đại'?",
      options: [
        "Chỉ đại diện giai cấp công nhân",
        "Chỉ đại diện toàn dân, không có tính giai cấp",
        "Vừa có nền tảng giai cấp, vừa mở rộng đại diện xã hội–dân tộc, hướng tới giải phóng con người",
        "Không liên quan đến bối cảnh thời đại",
      ],
      correct: 2,
      explanation:
        "NNXHCN có bản chất giai cấp công nhân nhưng đồng thời mang tính nhân dân, dân tộc, thời đại vì đại diện lợi ích đa số, đặt mục tiêu giải phóng con người.",
    },
    {
      id: 7,
      question:
        "Phân biệt chức năng 'đối nội/đối ngoại' của NNXHCN (chọn phương án đúng nhất):",
      options: [
        "Đối nội: quân sự; Đối ngoại: văn hóa",
        "Đối nội: ngoại giao; Đối ngoại: lập pháp",
        "Đối nội: phát triển kinh tế-xã hội, an sinh, pháp chế; Đối ngoại: bảo vệ chủ quyền, hợp tác–hội nhập",
        "Cả hai giống nhau",
      ],
      correct: 2,
      explanation:
        "Đối nội: phát triển kinh tế, văn hóa, an sinh–công bằng, pháp chế. Đối ngoại: bảo vệ chủ quyền, hợp tác–hội nhập vì hòa bình–phát triển.",
    },
    {
      id: 8,
      question:
        "Quan hệ 'cơ sở hạ tầng – kiến trúc thượng tầng' trong hình thành NNXHCN được hiểu thế nào?",
      options: [
        "Kiến trúc thượng tầng quyết định tuyệt đối cơ sở hạ tầng",
        "Cơ sở kinh tế quyết định NNXHCN, đồng thời nhà nước phản hồi tác động trở lại",
        "Hai yếu tố độc lập, không ảnh hưởng nhau",
        "Phụ thuộc hoàn toàn vào ý chí cá nhân lãnh đạo",
      ],
      correct: 1,
      explanation:
        "Trong quan hệ cơ sở hạ tầng – kiến trúc thượng tầng, kinh tế quyết định nhà nước–pháp luật, đồng thời nhà nước tác động trở lại để tổ chức, điều chỉnh phát triển.",
    },
    {
      id: 9,
      question:
        "Vì sao kết hợp cơ chế thị trường không phủ nhận vai trò chủ đạo của sở hữu công cộng?",
      options: [
        "Vì thị trường thay thế mọi cơ chế kế hoạch",
        "Vì sở hữu công cộng chỉ còn hình thức",
        "Vì thị trường là công cụ phân bổ nguồn lực trong khuôn khổ định hướng XHCN",
        "Vì pháp luật không điều chỉnh kinh tế",
      ],
      correct: 2,
      explanation:
        "Cơ chế thị trường là công cụ phân bổ nguồn lực hiệu quả trong khuôn khổ định hướng XHCN, không phủ nhận vai trò chủ đạo của sở hữu công cộng ở lĩnh vực then chốt.",
    },
    {
      id: 10,
      question: "'Tập trung dân chủ' được hiểu đúng là gì?",
      options: [
        "Dân chủ thuần túy, không cần kỷ luật",
        "Kết hợp lãnh đạo tập trung với phát huy dân chủ, bảo đảm kỷ luật–trách nhiệm",
        "Chỉ tập trung, không dân chủ",
        "Toàn quyền cho cấp cơ sở",
      ],
      correct: 1,
      explanation:
        "Tập trung dân chủ = vừa lãnh đạo tập trung, vừa phát huy dân chủ, kèm kỷ luật–trách nhiệm. Tránh cực đoan 'chỉ tập trung' hay 'dân chủ vô kỷ luật'.",
    },
    {
      id: 11,
      question:
        "Để triển khai nhanh một chính sách an sinh toàn quốc, bộ công cụ phù hợp nhất là:",
      options: [
        "Vận động quần chúng đơn thuần",
        "Chỉ dùng biện pháp hành chính",
        "Pháp luật + tài chính-ngân sách + truyền thông/giáo dục",
        "Tự quản cộng đồng không có khung pháp lý",
      ],
      correct: 2,
      explanation:
        "Triển khai an sinh toàn quốc cần ba chân kiềng: pháp luật (quyền, đối tượng, thủ tục), tài chính–ngân sách (nguồn lực), và truyền thông/giáo dục (đồng thuận, tiếp cận).",
    },
    {
      id: 12,
      question:
        "Tiêu chí đánh giá minh bạch và trách nhiệm giải trình của cơ quan công quyền là gì?",
      options: [
        "Báo cáo nội bộ kín, không công khai",
        "Quy trình phức tạp, khó tiếp cận",
        "Công khai thông tin, chuẩn hóa quy trình, cơ chế giải trình & dữ liệu mở",
        "Tăng biên chế",
      ],
      correct: 2,
      explanation:
        "Minh bạch & giải trình thể hiện ở: công khai thông tin, chuẩn hóa quy trình, dữ liệu mở và giám sát xã hội. Không phải 'báo cáo kín' hay 'tăng biên chế'.",
    },
    {
      id: 13,
      question:
        "Luật mới mở rộng tham gia của người dân (trưng cầu ý dân/tiếp công dân) mang lại điều gì?",
      options: [
        "Tăng tính chính danh & phản biện; thách thức về an ninh dữ liệu & chênh lệch số",
        "Giảm minh bạch",
        "Loại bỏ trách nhiệm giải trình",
        "Không ảnh hưởng hiệu quả quản trị",
      ],
      correct: 0,
      explanation:
        "Mở rộng kênh tham gia tăng tính chính danh và phản biện, nhưng kèm thách thức về an ninh dữ liệu và chênh lệch số.",
    },
    {
      id: 14,
      question:
        "Cách NNXHCN kiểm soát quyền lực trong thống nhất được hiểu thế nào?",
      options: [
        "Tách rời ba quyền tuyệt đối, không phối hợp",
        "Quyền lực nhà nước thống nhất nhưng có phân công lập pháp–hành pháp–tư pháp, cơ chế phối hợp–kiểm soát",
        "Tập trung vào một nhánh",
        "Giao cho thị trường kiểm soát nhà nước",
      ],
      correct: 1,
      explanation:
        "Mô hình thống nhất quyền lực nhưng có phân công–phối hợp–kiểm soát giữa lập pháp–hành pháp–tư pháp, tránh cực đoan.",
    },
    {
      id: 15,
      question:
        "Để gắn tăng trưởng với công bằng ở địa phương, lựa chọn phù hợp nhất là:",
      options: [
        "Miễn thuế toàn diện",
        "Thắt chặt chi tiêu công",
        "Tăng thu phí dịch vụ công",
        "Thuế–phí lũy tiến hợp lý, mở rộng dịch vụ công cơ bản, chương trình an sinh chủ động",
      ],
      correct: 3,
      explanation:
        "Giải pháp: thuế–phí lũy tiến hợp lý, dịch vụ công cơ bản, chương trình an sinh chủ động. Không phải miễn thuế toàn diện hay tăng phí.",
    },
    {
      id: 16,
      question:
        "Khác biệt bản chất giữa nhà nước tư sản và NNXHCN KHÔNG bao gồm nội dung nào?",
      options: [
        "Nền tảng sở hữu (tư hữu chủ đạo vs công cộng chủ đạo)",
        "Chủ thể quyền lực (tư sản vs nhân dân do giai cấp công nhân lãnh đạo)",
        "Mục tiêu tối hậu (tối đa hóa lợi nhuận tư vs công bằng–giải phóng con người)",
        "Không khác biệt về mục tiêu tối hậu",
      ],
      correct: 3,
      explanation:
        "Phương án D sai: mục tiêu tối hậu của nhà nước tư sản là lợi nhuận tư, NNXHCN là công bằng–giải phóng con người.",
    },
    {
      id: 17,
      question:
        "Dấu mốc chuyển đổi quan trọng của thời kỳ Đổi mới ở Việt Nam là gì?",
      options: [
        "Tái lập chế độ thuộc địa",
        "Cải cách ruộng đất 1953–1956",
        "Chuyển sang kinh tế thị trường định hướng XHCN (từ 1986)",
        "Tổng động viên toàn quốc 1946",
      ],
      correct: 2,
      explanation:
        "Đổi mới 1986: chuyển sang kinh tế thị trường định hướng XHCN, hiện đại hóa quản trị nhà nước.",
    },
    {
      id: 18,
      question:
        "Điểm liên tục xuyên suốt 1945–nay trong xây dựng nhà nước kiểu mới là gì?",
      options: [
        "Vai trò lãnh đạo của Đảng bảo đảm định hướng XHCN",
        "Tư hữu là chủ đạo",
        "Bỏ Hiến pháp",
        "Không hội nhập quốc tế",
      ],
      correct: 0,
      explanation:
        "Xuyên suốt 1945–nay, Đảng lãnh đạo bảo đảm định hướng XHCN trong toàn bộ hệ thống chính trị.",
    },
    {
      id: 19,
      question:
        "Luận đề 'đối kháng giai cấp mất đi → nhà nước thu hẹp chức năng' phản ánh đúng khi nào?",
      options: [
        "Mâu thuẫn xã hội tăng cao",
        "Nền tảng kinh tế–xã hội phát triển, phúc lợi mở rộng, pháp quyền vững và tham gia xã hội sâu rộng",
        "Xung đột lợi ích gay gắt hơn",
        "Bất bình đẳng tăng",
      ],
      correct: 1,
      explanation:
        "Khi đối kháng giai cấp thu hẹp nhờ phát triển kinh tế–xã hội, phúc lợi mở rộng, pháp quyền vững, dân chủ tham gia sâu, thì chức năng cưỡng chế của nhà nước thu hẹp dần.",
    },
    {
      id: 20,
      question:
        "Khung cải cách để hiện đại hóa nhà nước pháp quyền XHCN phù hợp KTTT định hướng XHCN nên ưu tiên điều gì?",
      options: [
        "Giảm kiểm soát quyền lực",
        "Hoàn thiện pháp luật chuẩn tắc–khả thi; số hóa quản trị; tăng minh bạch–giải trình; kiểm soát quyền lực hiệu quả; bảo đảm quyền con người & an sinh bền vững",
        "Chỉ đẩy mạnh tăng trưởng",
        "Tập trung vào hình thức",
      ],
      correct: 1,
      explanation:
        "Khung cải cách gồm: pháp luật chuẩn tắc–khả thi, chuyển đổi số quản trị, minh bạch–giải trình, kiểm soát quyền lực, bảo đảm quyền con người & an sinh bền vững.",
    },
  ];

  const [mode, setMode] = useState(null); // 'test' or 'practice'
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [timeLeft, setTimeLeft] = useState(10 * 60); // Giảm thời gian xuống 10 phút cho 10 câu hỏi
  const [showExplanation, setShowExplanation] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [testQuestions, setTestQuestions] = useState([]); // Danh sách câu hỏi cho chế độ test

  // Timer effect - only for test mode
  useEffect(() => {
    if (mode === "test" && timeLeft > 0 && !showResults) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (mode === "test" && timeLeft === 0) {
      handleFinish();
    }
  }, [timeLeft, showResults, mode]);

  // Hàm chọn ngẫu nhiên 10 câu hỏi từ 20 câu gốc
  const selectRandomQuestions = () => {
    const shuffled = [...questions].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 10);
  };

  const handleModeSelect = (selectedMode) => {
    setMode(selectedMode);
    if (selectedMode === "test") {
      setTestQuestions(selectRandomQuestions());
    }
    resetQuiz();
  };

  const handleAnswerSelect = (questionId, answerIndex) => {
    if (mode === "practice") {
      setSelectedAnswer(answerIndex);
      setShowExplanation(true);
    } else {
      setSelectedAnswers((prev) => ({
        ...prev,
        [questionId]: answerIndex,
      }));
    }
  };

  const handleNext = () => {
    if (mode === "practice") {
      setShowExplanation(false);
      setSelectedAnswer(null);
    }

    const currentQuestions = mode === "test" ? testQuestions : questions;
    if (currentQuestion < currentQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else if (mode === "test") {
      handleFinish();
    } else {
      // Practice mode - can restart
      setCurrentQuestion(0);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      if (mode === "practice") {
        setShowExplanation(false);
        setSelectedAnswer(null);
      }
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleFinish = () => {
    setShowResults(true);
  };

  const calculateScore = () => {
    let correct = 0;
    const currentQuestions = mode === "test" ? testQuestions : questions;
    currentQuestions.forEach((question) => {
      if (selectedAnswers[question.id] === question.correct) {
        correct++;
      }
    });
    return correct;
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswers({});
    setShowResults(false);
    setTimeLeft(10 * 60); // Giảm thời gian xuống 10 phút cho 10 câu hỏi
    setShowExplanation(false);
    setSelectedAnswer(null);
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
  };

  const getScoreColor = (score, total) => {
    const percentage = (score / total) * 100;
    if (percentage >= 80) return "text-green-600";
    if (percentage >= 60) return "text-yellow-600";
    return "text-red-600";
  };

  const getScoreMessage = (score, total) => {
    const percentage = (score / total) * 100;
    if (percentage >= 90)
      return "Xuất sắc! Bạn nắm vững lý luận Mác–Lênin và kiến thức về Nhà nước XHCN. 🏅";
    if (percentage >= 80)
      return "Rất tốt! Hiểu biết vững vàng về nội dung chính trị - pháp luật và quản trị công. 👍";
    if (percentage >= 70)
      return "Khá; bạn có nền tảng tốt nhưng nên ôn thêm các khía cạnh lý luận và áp dụng. 📘";
    if (percentage >= 60)
      return "Trung bình. Cần củng cố thêm kiến thức về nhà nước, pháp quyền và cơ chế quản trị. 📝";
    return "Cần cố gắng hơn — hãy ôn lại các khái niệm cơ bản và thực hành trả lời câu hỏi. 💪";
  };

  // Mode Selection Screen
  if (!mode) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-900 via-red-800 to-yellow-800 py-16">
        <div className="container max-w-6xl mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-3xl mb-6 shadow-2xl border-4 border-red-500/30">
              <Brain className="h-10 w-10 text-red-800" />
            </div>
            <h1 className="text-5xl md:text-7xl font-black bg-gradient-to-r from-yellow-200 via-red-200 to-yellow-200 bg-clip-text text-transparent mb-6">
              Quiz Ôn Tập
            </h1>
            <p className="text-xl text-red-100/80 max-w-2xl mx-auto leading-relaxed">
              Kiểm tra và nâng cao kiến thức về Chủ nghĩa xã hội khoa học
              Mác-Lênin
            </p>
          </div>

          {/* Mode Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Test Mode */}
            <Card
              className="group p-8 bg-gradient-to-br from-red-500/10 to-pink-500/10 border-red-500/20 hover:border-red-500/40 transition-all duration-300 cursor-pointer hover:scale-105 hover:shadow-2xl backdrop-blur-sm"
              onClick={() => handleModeSelect("test")}
            >
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-red-500 to-pink-500 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-red-400 transition-colors">
                  Chế độ Kiểm tra
                </h3>
                <div className="space-y-3 text-red-400 mb-6">
                  <div className="flex items-center justify-center gap-2">
                    <Clock className="h-4 w-4 text-red-400" />
                    <span>Thời gian: 10 phút</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <Trophy className="h-4 w-4 text-red-400" />
                    <span>10 câu hỏi</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <Lightbulb className="h-4 w-4 text-red-400" />
                    <span>Giải thích chi tiết cuối bài</span>
                  </div>
                </div>
                <div className="bg-red-500/20 rounded-lg p-4 mb-6">
                  <p className="text-sm text-pink-600">
                    Kiểm tra kiến thức một cách nghiêm túc với giới hạn thời
                    gian và kết quả chi tiết
                  </p>
                </div>
                <Button className="w-full bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white font-semibold py-3 shadow-lg hover:shadow-xl transition-all duration-300">
                  Bắt đầu Kiểm tra
                </Button>
              </div>
            </Card>

            {/* Practice Mode */}
            <Card
              className="group p-8 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 border-emerald-500/20 hover:border-emerald-500/40 transition-all duration-300 cursor-pointer hover:scale-105 hover:shadow-2xl backdrop-blur-sm"
              onClick={() => handleModeSelect("practice")}
            >
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  <BookOpen className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-emerald-400 transition-colors">
                  Chế độ Ôn tập
                </h3>
                <div className="space-y-3 text-emerald-400 mb-6">
                  <div className="flex items-center justify-center gap-2">
                    <Clock className="h-4 w-4 text-emerald-400" />
                    <span>Không giới hạn thời gian</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <CheckCircle className="h-4 w-4 text-emerald-400" />
                    <span>Phản hồi tức thì</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <Lightbulb className="h-4 w-4 text-emerald-400" />
                    <span>Giải thích mỗi câu hỏi</span>
                  </div>
                </div>
                <div className="bg-emerald-500/20 rounded-lg p-4 mb-6">
                  <p className="text-sm text-green-600">
                    Học và ôn tập với giải thích chi tiết cho từng câu hỏi ngay
                    lập tức
                  </p>
                </div>
                <Button className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-semibold py-3 shadow-lg hover:shadow-xl transition-all duration-300">
                  Bắt đầu Ôn tập
                </Button>
              </div>
            </Card>
          </div>

          {/* Stats */}
          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-8 text-gray-400">
              <div className="flex items-center gap-2">
                <Brain className="h-5 w-5" />
                <span>20 câu hỏi chất lượng cao</span>
              </div>
              <div className="flex items-center gap-2">
                <Target className="h-5 w-5" />
                <span>Từ cơ bản đến nâng cao</span>
              </div>
              <div className="flex items-center gap-2">
                <Trophy className="h-5 w-5" />
                <span>Kết quả chi tiết</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Results Screen (only for test mode)
  if (showResults && mode === "test") {
    const score = calculateScore();
    const total = testQuestions.length;

    return (
      <div className="min-h-screen bg-gradient-to-br from-red-900 via-red-800 to-yellow-800 py-8">
        <div className="container max-w-4xl mx-auto px-4">
          <Card className="p-8 text-center bg-white/10 backdrop-blur-lg border-white/20">
            <div className="mb-8">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full mb-6 animate-pulse">
                <Trophy className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-4xl font-bold text-white mb-4">
                🎉 Hoàn thành Quiz! 🎉
              </h1>
              <p className="text-gray-300 text-lg">
                Kết quả của bạn đã sẵn sàng
              </p>
            </div>

            <div className="mb-8">
              <div
                className={`text-7xl font-bold mb-4 ${getScoreColor(
                  score,
                  total
                )} bg-white/10 rounded-2xl py-6 backdrop-blur-sm`}
              >
                {score}/{total}
              </div>
              <div className="text-3xl text-white mb-4">
                {((score / total) * 100).toFixed(1)}%
              </div>
              <p className="text-xl text-gray-200 bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                {getScoreMessage(score, total)}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 p-6 rounded-2xl backdrop-blur-sm border border-green-500/30">
                <CheckCircle className="h-10 w-10 text-green-400 mx-auto mb-3" />
                <div className="text-3xl font-bold text-green-400">{score}</div>
                <div className="text-green-300 font-medium">Câu đúng</div>
              </div>
              <div className="bg-gradient-to-r from-red-500/20 to-pink-500/20 p-6 rounded-2xl backdrop-blur-sm border border-red-500/30">
                <XCircle className="h-10 w-10 text-red-400 mx-auto mb-3" />
                <div className="text-3xl font-bold text-red-400">
                  {total - score}
                </div>
                <div className="text-red-300 font-medium">Câu sai</div>
              </div>
            </div>

            <div className="space-y-4 mb-8">
              <h3 className="text-2xl font-semibold text-white mb-6 flex items-center justify-center gap-2">
                <Lightbulb className="h-6 w-6 text-yellow-400" />
                Chi tiết đáp án
              </h3>
              <div className="max-h-96 overflow-y-auto space-y-4 bg-white/5 rounded-2xl p-4 backdrop-blur-sm">
                {testQuestions.map((question, index) => {
                  const userAnswer = selectedAnswers[question.id];
                  const isCorrect = userAnswer === question.correct;

                  return (
                    <div
                      key={question.id}
                      className="text-left p-6 border rounded-2xl bg-white/10 backdrop-blur-sm border-white/20"
                    >
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 mt-1">
                          {isCorrect ? (
                            <CheckCircle className="h-6 w-6 text-green-400" />
                          ) : (
                            <XCircle className="h-6 w-6 text-red-400" />
                          )}
                        </div>
                        <div className="flex-1">
                          <p className="font-semibold text-white mb-3 text-lg">
                            {index + 1}. {question.question}
                          </p>
                          <p className="text-green-300 mb-2 bg-green-500/20 rounded-lg p-3 border border-green-500/30">
                            ✓ <strong>Đáp án đúng:</strong>{" "}
                            {question.options[question.correct]}
                          </p>
                          {!isCorrect && userAnswer !== undefined && (
                            <p className="text-red-300 mb-2 bg-red-500/20 rounded-lg p-3 border border-red-500/30">
                              ✗ <strong>Bạn chọn:</strong>{" "}
                              {question.options[userAnswer]}
                            </p>
                          )}
                          {userAnswer === undefined && (
                            <p className="text-orange-300 mb-2 bg-orange-500/20 rounded-lg p-3 border border-orange-500/30">
                              ⚠ <strong>Chưa trả lời</strong>
                            </p>
                          )}
                          <div className="bg-blue-500/20 rounded-lg p-3 border border-blue-500/30 mt-3">
                            <p className="text-blue-200">
                              <strong>Giải thích:</strong>{" "}
                              {question.explanation}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={resetQuiz}
                className="flex items-center bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-6 py-3 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <RotateCcw className="mr-2 h-5 w-5" />
                Làm lại Quiz
              </Button>
              <Button
                onClick={() => setMode(null)}
                variant="outline"
                className="flex items-center border-white/30 text-white hover:bg-white/10 px-6 py-3 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Home className="mr-2 h-5 w-5" />
                Về trang chủ
              </Button>
            </div>
          </Card>
        </div>
      </div>
    );
  }

  // Main Quiz Interface
  const currentQuestions = mode === "test" ? testQuestions : questions;
  const question = currentQuestions[currentQuestion];
  const progress = ((currentQuestion + 1) / currentQuestions.length) * 100;
  const isLastQuestion = currentQuestion === currentQuestions.length - 1;

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-900 via-blue-900 to-indigo-900 py-8">
      <div className="container max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-4">
              <Button
                onClick={() => setMode(null)}
                variant="outline"
                className="flex items-center gap-2 border-white/30 text-white hover:bg-white/10"
              >
                <ArrowLeft className="h-4 w-4" />
                Quay lại
              </Button>
              <div className="flex items-center gap-3">
                {mode === "test" ? (
                  <div className="flex items-center gap-2 bg-red-500/20 px-4 py-2 rounded-full border border-red-500/30">
                    <Target className="h-5 w-5 text-red-400" />
                    <span className="text-red-300 font-medium">
                      Chế độ Kiểm tra
                    </span>
                  </div>
                ) : (
                  <div className="flex items-center gap-2 bg-emerald-500/20 px-4 py-2 rounded-full border border-emerald-500/30">
                    <BookOpen className="h-5 w-5 text-emerald-400" />
                    <span className="text-emerald-300 font-medium">
                      Chế độ Ôn tập
                    </span>
                  </div>
                )}
              </div>
            </div>
            {mode === "test" && (
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm border border-white/20">
                <Clock className="h-5 w-5 text-blue-400" />
                <span className="text-white font-mono text-lg">
                  {formatTime(timeLeft)}
                </span>
              </div>
            )}
          </div>

          {/* Progress Bar */}
          <div className="relative">
            <div className="w-full bg-white/20 rounded-full h-4 backdrop-blur-sm border border-white/30">
              <div
                className="bg-gradient-to-r from-blue-500 to-purple-600 h-4 rounded-full transition-all duration-500 shadow-lg"
                style={{ width: `${progress}%` }}
              >
                <div className="h-full w-full bg-white/30 rounded-full animate-pulse"></div>
              </div>
            </div>
            <div className="flex justify-between items-center mt-3">
              <span className="text-white font-medium">
                Câu {currentQuestion + 1} / {currentQuestions.length}
              </span>
              <span className="text-gray-300">
                {Math.round(progress)}% hoàn thành
              </span>
            </div>
          </div>
        </div>

        {/* Question Card */}
        <Card className="p-8 mb-8 bg-white/10 backdrop-blur-lg border-white/20 shadow-2xl">
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                {currentQuestion + 1}
              </div>
              <h2 className="text-2xl font-bold text-white">
                {question.question}
              </h2>
            </div>
          </div>

          <div className="space-y-4">
            {question.options.map((option, index) => {
              const isSelected =
                mode === "practice"
                  ? selectedAnswer === index
                  : selectedAnswers[question.id] === index;

              let buttonStyle =
                "w-full p-6 text-left border-2 rounded-2xl transition-all duration-300 transform hover:scale-[1.02] backdrop-blur-sm";

              if (mode === "practice" && showExplanation) {
                if (index === question.correct) {
                  buttonStyle +=
                    " border-green-500 bg-green-500/20 text-green-300 shadow-green-500/25 shadow-lg";
                } else if (
                  selectedAnswer === index &&
                  index !== question.correct
                ) {
                  buttonStyle +=
                    " border-red-500 bg-red-500/20 text-red-300 shadow-red-500/25 shadow-lg";
                } else {
                  buttonStyle += " border-white/20 bg-white/5 text-gray-300";
                }
              } else if (isSelected) {
                buttonStyle +=
                  " border-blue-500 bg-blue-500/20 text-blue-300 shadow-blue-500/25 shadow-lg";
              } else {
                buttonStyle +=
                  " border-white/20 bg-white/5 text-white hover:border-white/40 hover:bg-white/10";
              }

              return (
                <button
                  key={index}
                  onClick={() => handleAnswerSelect(question.id, index)}
                  disabled={mode === "practice" && showExplanation}
                  className={buttonStyle}
                >
                  <div className="flex items-center">
                    <div
                      className={`w-8 h-8 rounded-full border-2 mr-4 flex items-center justify-center font-bold text-sm ${
                        mode === "practice" && showExplanation
                          ? index === question.correct
                            ? "border-green-500 bg-green-500 text-white"
                            : selectedAnswer === index &&
                              index !== question.correct
                            ? "border-red-500 bg-red-500 text-white"
                            : "border-gray-400 bg-gray-400/20 text-gray-300"
                          : isSelected
                          ? "border-blue-500 bg-blue-500 text-white"
                          : "border-white/40 text-white"
                      }`}
                    >
                      {String.fromCharCode(65 + index)}
                    </div>
                    <span className="text-lg font-medium">{option}</span>
                    {mode === "practice" && showExplanation && (
                      <div className="ml-auto">
                        {index === question.correct ? (
                          <CheckCircle className="h-6 w-6 text-green-400" />
                        ) : selectedAnswer === index &&
                          index !== question.correct ? (
                          <XCircle className="h-6 w-6 text-red-400" />
                        ) : null}
                      </div>
                    )}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Explanation for practice mode */}
          {mode === "practice" && showExplanation && (
            <div className="mt-8 p-6 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl border border-blue-500/30 backdrop-blur-sm">
              <div className="flex items-start gap-3">
                <Lightbulb className="h-6 w-6 text-yellow-400 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-yellow-300 mb-2">
                    Giải thích:
                  </h4>
                  <p className="text-gray-200 leading-relaxed">
                    {question.explanation}
                  </p>
                </div>
              </div>
            </div>
          )}
        </Card>

        {/* Navigation */}
        <div className="flex justify-between items-center mb-8">
          <Button
            variant="outline"
            onClick={handlePrevious}
            disabled={currentQuestion === 0}
            className="flex items-center gap-2 border-white/30 text-white hover:bg-white/10 disabled:opacity-50 disabled:cursor-not-allowed px-6 py-3"
          >
            <ArrowLeft className="h-4 w-4" />
            Câu trước
          </Button>

          <div className="text-center">
            {mode === "test" && (
              <div className="text-white bg-white/10 rounded-lg px-4 py-2 backdrop-blur-sm border border-white/20">
                Đã trả lời: {Object.keys(selectedAnswers).length}/
                {testQuestions.length}
              </div>
            )}
          </div>

          {mode === "practice" && showExplanation ? (
            <Button
              onClick={handleNext}
              className="flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 px-6 py-3"
            >
              {isLastQuestion ? "Bắt đầu lại" : "Câu tiếp theo"}
              <ArrowRight className="h-4 w-4" />
            </Button>
          ) : mode === "test" && isLastQuestion ? (
            <Button
              onClick={handleFinish}
              className="flex items-center gap-2 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 px-6 py-3"
            >
              <Trophy className="h-4 w-4" />
              Hoàn thành Quiz
            </Button>
          ) : (
            <Button
              onClick={handleNext}
              disabled={mode === "practice" && !showExplanation}
              className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed px-6 py-3"
            >
              Câu tiếp theo
              <ArrowRight className="h-4 w-4" />
            </Button>
          )}
        </div>

        {/* Question Overview for Test Mode */}
        {mode === "test" && (
          <Card className="p-6 bg-white/10 backdrop-blur-lg border-white/20">
            <h3 className="text-xl font-semibold mb-6 text-white flex items-center gap-2">
              <Brain className="h-5 w-5" />
              Tổng quan câu hỏi
            </h3>
            <div className="grid grid-cols-10 gap-3 mb-6">
              {testQuestions.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentQuestion(index)}
                  className={`w-12 h-12 rounded-xl border-2 text-sm font-bold transition-all duration-300 hover:scale-110 ${
                    index === currentQuestion
                      ? "border-blue-500 bg-blue-500 text-white shadow-lg shadow-blue-500/50"
                      : selectedAnswers[testQuestions[index].id] !== undefined
                      ? "border-green-500 bg-green-500 text-white shadow-lg shadow-green-500/25"
                      : "border-white/30 text-white hover:border-white/50 hover:bg-white/10"
                  }`}
                >
                  {index + 1}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-8 text-sm text-gray-300">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-blue-500 rounded shadow-lg shadow-blue-500/50"></div>
                <span>Câu hiện tại</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-green-500 rounded shadow-lg shadow-green-500/25"></div>
                <span>Đã trả lời</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 border-2 border-white/30 rounded"></div>
                <span>Chưa trả lời</span>
              </div>
            </div>
          </Card>
        )}
      </div>
    </div>
  );
};

export default Quiz;
