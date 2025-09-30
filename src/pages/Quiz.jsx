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
      question: "Trong khung Mác–Lênin, NNXHCN được hiểu đúng nhất là:",
      options: [
        "Thiết chế quyền lực trung lập, vận hành phi giai cấp, duy trì trật tự xã hội hiện có.",
        "Nhà nước kiểu cũ của CNTB, tiếp tục tồn tại, điều tiết mâu thuẫn, không đổi bản chất.",
        "Nhà nước kiểu mới thời quá độ, do giai cấp công nhân lãnh đạo trong liên minh lao động.",
        "Tổ chức xã hội dân sự tự quản, thay thế nhà nước, hoạt động dựa thuần cơ chế tự nguyện.",
      ],
      correct: 2,
      explanation:
        "NNXHCN là nhà nước kiểu mới thời kỳ quá độ lên CNXH, do giai cấp công nhân lãnh đạo trong liên minh công–nông–trí; không trung lập giai cấp, không phải dạng nhà nước tư sản hay hội tự quản.",
    },
    {
      id: 2,
      question: "Cơ sở tất yếu làm nảy sinh NNXHCN gắn với:",
      options: [
        "Biến động dân số đô thị, buộc tập quyền mạnh, không đổi hình thái sở hữu.",
        "Thay đổi thuần ý chí chính trị, không phụ thuộc cơ sở kinh tế–xã hội.",
        "Phát triển lực lượng sản xuất, đòi điều chỉnh quan hệ sản xuất và thượng tầng tương thích.",
        "Suy giảm văn hoá truyền thống, cần xây bộ máy cưỡng chế văn hoá mới.",
      ],
      correct: 2,
      explanation:
        "Theo phép biện chứng cơ sở–thượng tầng: khi lực lượng sản xuất phát triển, cần điều chỉnh quan hệ sản xuất và thể chế tương ứng.",
    },
    {
      id: 3,
      question: "“Chức năng kép” của nhà nước kiểu mới thể hiện ở:",
      options: [
        "Trợ giá đại trà; miễn thuế phổ quát; ưu tiên kinh tế hơn pháp luật.",
        "Trấn áp chống phá cách mạng; tổ chức xây dựng đời sống mới kinh tế–văn hoá–xã hội.",
        "Khép kín thị trường nội địa; kiểm soát luồng vốn; hạn chế hợp tác quốc tế.",
        "Giảm tối đa pháp luật; mở rộng uỷ quyền ngoài nhà nước theo lệ làng.",
      ],
      correct: 1,
      explanation:
        "NNXHCN vừa thực hiện chức năng chính trị (bảo vệ cách mạng), vừa kiến tạo xã hội–kinh tế mới cho quần chúng.",
    },
    {
      id: 4,
      question: "Dân chủ XHCN trong nhà nước kiểu mới được hiểu là:",
      options: [
        "Chỉ là mục tiêu cuối kỳ; không phải phương thức quản trị trong vận hành.",
        "Thủ tục bầu cử định kỳ; không gắn cơ chế pháp chế và trách nhiệm.",
        "Vừa giá trị mục tiêu, vừa phương thức mở rộng quyền lực nhân dân có kỷ cương.",
        "Thay thế hoàn toàn pháp luật; ưu tiên tham vấn xã hội hơn mọi ràng buộc.",
      ],
      correct: 2,
      explanation:
        "Dân chủ XHCN vừa là mục tiêu vừa là phương thức quản trị: mở rộng quyền dân chủ trong khuôn khổ pháp chế và kỷ cương.",
    },
    {
      id: 5,
      question: "Pháp quyền XHCN nhấn mạnh cấu trúc quyền lực theo hướng:",
      options: [
        "Tam quyền cắt rời tuyệt đối; phủ định thống nhất quyền lực và kiểm soát nội bộ.",
        "Tối thượng Hiến pháp–pháp luật; thống nhất quyền lực, có phân công–phối hợp–kiểm soát.",
        "Tập trung hành pháp tuyệt đối; lập pháp–tư pháp mang tính hình thức bổ trợ.",
        "Đạo đức xã hội thay pháp luật; chuẩn tắc pháp lý chỉ còn vai trò tham khảo.",
      ],
      correct: 1,
      explanation:
        "Pháp quyền XHCN đặt Hiến pháp–pháp luật tối thượng; quyền lực thống nhất nhưng có phân công, phối hợp và cơ chế kiểm soát nội bộ.",
    },
    {
      id: 6,
      question: "Về vai trò Đảng Cộng sản trong NNXHCN, nhận định đúng là:",
      options: [
        "Đảng đứng ngoài nhà nước; không hoạch định, chỉ giám sát tinh thần.",
        "Đảng lãnh đạo hệ thống chính trị: đường lối, thể chế hoá, tổ chức thực thi, kiểm tra.",
        "Đảng chỉ phụ trách tư tưởng; không can dự thể chế và chính sách.",
        "Đảng chuyển giao quyền cho thị trường; giảm vai trò trong pháp luật.",
      ],
      correct: 1,
      explanation:
        "Đảng lãnh đạo hệ thống chính trị qua hoạch định chủ trương, thể chế hoá, tổ chức thực thi và giám sát, đảm bảo định hướng XHCN.",
    },
    {
      id: 7,
      question: "Cơ sở kinh tế phù hợp định hướng XHCN bao gồm:",
      options: [
        "Sở hữu tư nhân tuyệt đối; nhà nước tối thiểu; pháp luật thuần bảo vệ thị trường.",
        "Sở hữu công cộng chủ đạo; vận dụng cơ chế thị trường trong khuôn khổ định hướng.",
        "Xoá mọi hình thức sở hữu khác; kế hoạch hoá cứng; khép kín phân bổ nguồn lực.",
        "Thả nổi sở hữu, miễn điều tiết; ưu tiên lợi ích cục bộ vượt lợi ích chung.",
      ],
      correct: 1,
      explanation:
        "Mô hình: sở hữu công cộng chủ đạo đối với tư liệu sản xuất chủ yếu, kết hợp vận dụng cơ chế thị trường theo định hướng XHCN.",
    },
    {
      id: 8,
      question: "Nền tảng xã hội–giai cấp của quyền lực nhà nước kiểu mới là:",
      options: [
        "Liên minh tư sản–địa chủ.",
        "Liên minh công–nông–trí.",
        "Liên minh thương nhân–địa phương.",
        "Liên minh tôn giáo–dòng họ.",
      ],
      correct: 1,
      explanation:
        "Liên minh công–nông–trí là nền tảng xã hội–giai cấp rộng cho NNXHCN, vừa giữ bản chất công nhân vừa có tính nhân dân–dân tộc.",
    },
    {
      id: 9,
      question:
        "Luận đề về “thu hẹp chức năng cưỡng chế” được hiểu chính xác là:",
      options: [
        "Xoá bỏ ngay bộ máy nhà nước sau thắng lợi cách mạng chính trị.",
        "Chỉ xảy ra khi tăng trưởng thấp; cưỡng chế giảm để kích thích tiêu dùng.",
        "Khi đối kháng giai cấp phai nhạt, nhà nước dần thiên về quản trị xã hội tự giác.",
        "Khi hội nhập sâu, pháp luật quốc gia mất vai trò điều chỉnh chủ đạo.",
      ],
      correct: 2,
      explanation:
        "Ý nghĩa lịch sử: khi đối kháng giai cấp giảm, chức năng cưỡng chế thu hẹp, tăng quản trị bằng pháp chế và tự quản xã hội.",
    },
    {
      id: 10,
      question: "Trong các mục tiêu đối nội, nội dung không phù hợp NNXHCN là:",
      options: [
        "Tổ chức phát triển kinh tế–văn hoá; nâng cao chất lượng đời sống nhân dân.",
        "Bảo đảm an sinh, công bằng, bình đẳng; chống tham nhũng, lợi ích nhóm.",
        "Hạn chế quyền công dân tuỳ tiện; đặt ngoại lệ ngoài khung pháp luật.",
        "Hoàn thiện pháp luật; củng cố pháp chế; bảo vệ trật tự an toàn xã hội.",
      ],
      correct: 2,
      explanation:
        "Hạn chế quyền công dân tuỳ tiện và ngoại lệ ngoài pháp luật mâu thuẫn với tinh thần pháp quyền XHCN.",
    },
    {
      id: 11,
      question: "Về chức năng đối ngoại, phương án phù hợp là:",
      options: [
        "Bế quan toả cảng; loại bỏ chuẩn mực pháp lý quốc tế đã thừa nhận.",
        "Bảo vệ độc lập–chủ quyền; hợp tác–hội nhập; đóng góp hoà bình–phát triển.",
        "Uỷ quyền toàn bộ chính sách ngoại giao cho tổ chức phi nhà nước.",
        "Ưu tiên lợi ích nhóm; coi nhẹ trách nhiệm quốc tế và lợi ích dân tộc.",
      ],
      correct: 1,
      explanation:
        "NNXHCN kết hợp bảo vệ chủ quyền với hợp tác và hội nhập nhằm hoà bình và phát triển quốc gia.",
    },
    {
      id: 12,
      question: "“Tập trung dân chủ” trong tổ chức–vận hành được hiểu là:",
      options: [
        "Dân chủ hoàn toàn; không cần kỷ luật, không cần thống nhất quyết định.",
        "Thảo luận có dân chủ; quyết định tập trung; thực thi thống nhất, có trách nhiệm.",
        "Chỉ tập trung; loại bỏ thảo luận; ưu tiên mệnh lệnh hành chính tuyệt đối.",
        "Phân tán quyết định; mỗi đơn vị tự chủ; thiếu cơ chế phối hợp ràng buộc.",
      ],
      correct: 1,
      explanation:
        "Nguyên tắc: thảo luận dân chủ khi bàn, quyết định tập trung khi ra quyết sách, thực hiện thống nhất và có kỷ luật trách nhiệm.",
    },
    {
      id: 13,
      question:
        "Quan hệ cơ sở–thượng tầng gợi mở điều chỉnh chính sách theo hướng:",
      options: [
        "Giữ nguyên thể chế, trì hoãn cải cách để tránh xáo trộn dài hạn.",
        "Hoàn thiện pháp quyền; điều chỉnh quan hệ sản xuất và thiết chế cho tương thích.",
        "Đưa hoạt động ngoài phạm vi pháp luật; ưu tiên linh hoạt phi chính quy.",
        "Tạm ngưng đổi mới; chờ ổn định mới cải cách thể chế, pháp luật, nhà nước.",
      ],
      correct: 1,
      explanation:
        "Khi lực lượng sản xuất thay đổi, cần hoàn thiện pháp quyền và điều chỉnh QHSX, thiết chế để tương thích và phát triển.",
    },
    {
      id: 14,
      question:
        "Trình tự các giai đoạn lịch sử Việt Nam phù hợp logic phát triển là:",
      options: [
        "1976–1986 → 1945–1954 → 1954–1975 → 1986–nay",
        "1945–1954 → 1954–1975 → 1976–1986 → 1986–nay",
        "1954–1975 → 1945–1954 → 1986–nay → 1976–1986",
        "1986–nay → 1976–1986 → 1954–1975 → 1945–1954",
      ],
      correct: 1,
      explanation:
        "Trình tự lịch sử logic là: 1945–1954, 1954–1975, 1976–1986, 1986–nay (nối tiếp tiền đề đến Đổi mới).",
    },
    {
      id: 15,
      question:
        "Đặc trưng chính sách nổi bật thời kỳ Đổi mới đối với nhà nước là:",
      options: [
        "Pháp luật nhường chỗ tập quán; giảm yêu cầu minh bạch–giải trình hệ thống.",
        "Kế hoạch hoá tuyệt đối; xoá cơ chế thị trường; khép kín giao thương.",
        "Kinh tế thị trường định hướng XHCN; pháp quyền; cải cách hành chính–tư pháp.",
        "Toàn cầu hoá triệt để; không cần chuẩn mực pháp lý ràng buộc nội bộ.",
      ],
      correct: 2,
      explanation:
        "Đổi mới gắn với mô hình kinh tế thị trường định hướng XHCN, hiện đại hoá pháp quyền và cải cách bộ máy nhà nước.",
    },
    {
      id: 16,
      question: "Bộ giải pháp quản trị phù hợp bối cảnh hiện nay gồm:",
      options: [
        "Tối mật hoá thông tin; thu hẹp giám sát xã hội; giảm trách nhiệm giải trình.",
        "Minh bạch–giải trình; chuyển đổi số; kiểm soát quyền lực; phòng, chống tham nhũng.",
        "Xã hội hoá toàn bộ dịch vụ công; loại bỏ vai trò bảo đảm của nhà nước.",
        "Nới lỏng pháp luật; dựa thiện chí; giảm chế tài; tăng tuỳ nghi hành chính.",
      ],
      correct: 1,
      explanation:
        "Giải pháp phù hợp là minh bạch và giải trình, chuyển đổi số, kiểm soát quyền lực và chống tham nhũng để nâng hiệu quả quản trị.",
    },
    {
      id: 17,
      question:
        "Bảo đảm quyền con người/quyền công dân trong pháp quyền XHCN đòi hỏi:",
      options: [
        "Tuyên truyền chung; thiếu cơ chế pháp lý, thiếu thiết chế bảo vệ hiệu quả.",
        "Hệ thống luật minh bạch, có thể dự đoán; cơ chế bảo vệ–thi hành hữu hiệu.",
        "Chuyển giao toàn bộ sang toà án quốc tế; giảm vai trò toà án quốc gia.",
        "Đặt ngoại lệ tuỳ tiện; ưu tiên áp dụng linh hoạt theo từng vụ việc riêng.",
      ],
      correct: 1,
      explanation:
        "Quyền được bảo đảm khi được hiến định, luật định và có thiết chế thi hành, bảo vệ hiệu quả trong nước.",
    },
    {
      id: 18,
      question: "Quy định nào mâu thuẫn với nguyên tắc pháp quyền XHCN:",
      options: [
        "Mọi chủ thể bình đẳng trước pháp luật; thủ tục công bằng, minh bạch, có kiểm soát.",
        "Thiết kế phối hợp–kiểm soát giữa các nhánh quyền lực trong một thể thống nhất.",
        "Quy trình lập pháp minh bạch; tham vấn xã hội; trách nhiệm giải trình rõ ràng.",
        "Miễn trừ pháp luật vĩnh viễn cho một nhóm lợi ích, vượt ngoài cơ chế kiểm soát.",
      ],
      correct: 3,
      explanation:
        "Miễn trừ pháp luật vĩnh viễn cho một nhóm lợi ích phá vỡ nguyên tắc bình đẳng và kiểm soát quyền lực.",
    },
    {
      id: 19,
      question:
        "Quan hệ giữa dân chủ và pháp luật trong NNXHCN được diễn đạt đúng là:",
      options: [
        "Dân chủ thay thế pháp luật; cơ chế cưỡng hành trở nên không cần thiết.",
        "Pháp luật thay thế dân chủ; giảm yêu cầu tham gia và phản biện xã hội.",
        "Dân chủ là mục tiêu–phương thức; pháp luật là công cụ chuẩn tắc để hiện thực.",
        "Dân chủ chỉ là khẩu hiệu; cốt lõi là hiệu quả hành chính thuần tuý.",
      ],
      correct: 2,
      explanation:
        "Dân chủ là mục tiêu và phương thức, pháp luật là công cụ chuẩn tắc để bảo đảm kỷ cương và hiệu lực cho dân chủ.",
    },
    {
      id: 20,
      question:
        "“Tiệm cận tàn lụi” của nhà nước trong triển vọng CNXH hàm ý rằng:",
      options: [
        "Xoá ngay nhà nước sau cách mạng; chuyển toàn quyền cho cộng đồng tự quản.",
        "Khi đối kháng giai cấp mất dần, nhà nước thu hẹp cưỡng chế, tăng tự quản xã hội.",
        "Chuyển toàn bộ quyền lực cho thị trường; giảm vai trò pháp luật và thể chế.",
        "Nhà nước hoá toàn diện mọi lĩnh vực; duy trì cưỡng chế để bảo đảm đồng nhất.",
      ],
      correct: 1,
      explanation:
        "Luận đề lịch sử: khi đối kháng giai cấp tiêu tan dần, chức năng cưỡng chế của nhà nước thu hẹp, tự quản xã hội và pháp chế trưởng thành.",
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
            <h1 className="text-3xl font-black bg-gradient-to-r from-yellow-200 via-red-200 to-yellow-200 bg-clip-text text-transparent mb-3">
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
                <h3 className="text-2xl font-bold text-red-300 mb-4 group-hover:text-red-400 transition-colors">
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
                <h3 className="text-2xl font-bold text-emerald-300 mb-4 group-hover:text-emerald-400 transition-colors">
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
