import { useState } from 'react';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Container, Typography, Box, Card, CardContent, Divider, Zoom, LinearProgress, Fade } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';

const sections = [
  {
    title: "I. Giới thiệu",
    icon: null,
    content: (
      <div className="space-y-4">
        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded">
          <span className="font-semibold text-blue-700">“Nền tảng lý luận về Nhà nước xã hội chủ nghĩa và các đặc trưng cốt lõi”</span> là chủ đề làm rõ hệ thống tri thức về <span className="font-bold text-blue-600">Nhà nước xã hội chủ nghĩa</span> trong khung Mác-Lênin, nhận diện các đặc trưng cốt lõi và quỹ đạo vận dụng/phát triển ở Việt Nam.
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex items-start">
            <span className="text-blue-400 font-bold mr-2">•</span>
            <span>
              <span className="font-semibold">Tiếp cận theo logic lịch sử:</span> từ nguồn gốc nhà nước, qua thời kỳ quá độ, đến nhà nước kiểu mới.
            </span>
          </div>
          <div className="flex items-start">
            <span className="text-blue-400 font-bold mr-2">•</span>
            <span>
              <span className="font-semibold">Kết hợp phân tích khái niệm:</span> bản chất, chức năng, đặc trưng.
            </span>
          </div>
          <div className="flex items-start">
            <span className="text-blue-400 font-bold mr-2">•</span>
            <span>
              Chủ đề giúp nhìn sâu sắc hơn về <span className="font-bold text-blue-600">biến đổi cơ cấu kinh tế-xã hội</span> và <span className="font-bold text-blue-600">công cụ tổ chức xã hội mới</span>.
            </span>
          </div>
        </div>
        <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-700">
          Nhấn mạnh hiện thực hoá các giá trị <span className="font-bold text-blue-600">dân chủ, công bằng, giải phóng con người</span> và vận dụng lịch sử-đương đại trong bối cảnh Việt Nam (Nhà nước pháp quyền xã hội chủ nghĩa, dân chủ xã hội chủ nghĩa, vai trò Đảng, cải cách nhà nước).
        </blockquote>
      </div>
    )
  },
  {
    title: "II. Khái niệm Nhà nước xã hội chủ nghĩa",
    icon: null,
    content: (
      <div className="space-y-4">
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
          <span className="font-bold text-yellow-700">Nhà nước xã hội chủ nghĩa</span> là <span className="font-semibold text-yellow-600">nhà nước kiểu mới</span> nảy sinh trong thời kỳ quá độ từ <span className="font-bold">Chủ nghĩa tư bản</span> lên <span className="font-bold">Chủ nghĩa xã hội</span>, do <span className="font-bold text-yellow-700">giai cấp công nhân liên minh với các tầng lớp lao động</span> nắm giữ quyền lãnh đạo, nhằm thủ tiêu cơ sở thống trị cũ, xây dựng quan hệ sản xuất và thiết chế xã hội phù hợp với Chủ nghĩa xã hội.
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex items-start">
            <span className="text-yellow-400 font-bold mr-2">•</span>
            <span>
              <span className="font-semibold">Chính trị-giai cấp:</span> trấn áp các lực lượng chống phá, bảo vệ thành quả cách mạng.
            </span>
          </div>
          <div className="flex items-start">
            <span className="text-yellow-400 font-bold mr-2">•</span>
            <span>
              <span className="font-semibold">Xã hội-tổ chức:</span> tổ chức xây dựng đời sống mới, phát triển kinh tế-văn hoá-pháp luật.
            </span>
          </div>
          <div className="flex items-start">
            <span className="text-yellow-400 font-bold mr-2">•</span>
            <span>
              <span className="font-bold text-yellow-700">Dân chủ xã hội chủ nghĩa</span> là bản chất và phương thức vận hành nhà nước kiểu mới: mở rộng quyền lực nhân dân, nâng cao quyền con người/quyền công dân, song song với kỷ cương, pháp chế.
            </span>
          </div>
        </div>
        <blockquote className="border-l-4 border-yellow-300 pl-4 italic text-gray-700">
          Khi các đối kháng giai cấp mất đi, nhà nước với tư cách bộ máy cưỡng chế sẽ thu hẹp chức năng; đây là luận đề mang tính lịch sử và triển vọng của mô hình được phân tích thích hợp là lịch sử-logic, bắt đầu từ nguồn gốc nhà nước trong xã hội có giai cấp, qua đòi hỏi khách quan của thời kỳ quá độ, đến việc hình thành nhà nước kiểu mới. Đồng thời cần đặt nhà nước trong quan hệ biện chứng cơ sở-kiến trúc thượng tầng.
        </blockquote>
        <div className="bg-yellow-100 rounded p-3 text-sm text-gray-800">
          <span className="font-semibold text-yellow-700">Biện chứng giữa cơ sở kinh tế và kiến trúc thượng tầng:</span> Sự phát triển của lực lượng sản xuất và những thay đổi trong quan hệ sản xuất đòi hỏi kiến trúc thượng tầng (nhà nước, pháp luật, hệ tư tưởng...) phải điều chỉnh phù hợp để thúc đẩy sự phát triển xã hội.
        </div>
      </div>
    )
  },
  {
    title: "III. Cơ sở hình thành: yếu tố, thành phần, nền tảng",
    icon: null,
    content: (
      <div className="space-y-6">
        <div className="bg-purple-50 border-l-4 border-purple-400 p-4 rounded shadow-sm">
          <span className="font-bold text-purple-700">Cơ sở kinh tế:</span> Trong mô hình xã hội chủ nghĩa, <span className="font-semibold">sở hữu công cộng</span> (toàn dân hoặc tập thể) giữ vai trò chủ đạo đối với tư liệu sản xuất chủ yếu. Điều này được hiện thực hoá thông qua các hình thức tổ chức sản xuất phù hợp từng giai đoạn, cùng với <span className="font-semibold">cơ chế kế hoạch hoá</span> hoặc <span className="font-semibold">điều tiết vĩ mô</span> nhằm định hướng phát triển vì lợi ích chung. Việc kết hợp <span className="font-semibold">cơ chế thị trường</span> trong một số bối cảnh không phủ nhận vai trò chủ đạo của sở hữu công cộng, mà nhằm phát huy hiệu quả phân bổ nguồn lực trong khuôn khổ định hướng xã hội chủ nghĩa.
        </div>
        <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded shadow-sm">
          <span className="font-bold text-green-700">Cơ sở xã hội – giai cấp:</span> <span className="font-semibold">Liên minh công nhân – nông dân – trí thức</span> là nền tảng xã hội của quyền lực nhà nước kiểu mới. Trên nền tảng đó, nhà nước mang tính nhân dân và tính dân tộc sâu sắc, hướng tới việc mở rộng tham gia xã hội, nâng cao mức sống và năng lực của đa số.
        </div>
        <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded shadow-sm">
          <span className="font-bold text-red-700">Cơ sở chính trị:</span> <span className="font-semibold">Vai trò lãnh đạo của Đảng Cộng sản</span> bảo đảm định hướng xã hội chủ nghĩa cho toàn bộ hệ thống chính trị. Sự lãnh đạo này thể hiện ở khả năng hoạch định đường lối, xây dựng thể chế, tổ chức thực thi và kiểm tra, giám sát quá trình vận hành hệ thống quyền lực, thống nhất chiến lược phát triển phù hợp với thể chế nhà nước.
        </div>
        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded shadow-sm">
          <span className="font-bold text-blue-700">Cơ sở pháp lý – thể chế:</span> <span className="font-semibold">Nhà nước pháp quyền xã hội chủ nghĩa</span> khẳng định vị trí tối thượng của Hiến pháp và pháp luật; quyền lực nhà nước là thống nhất nhưng có phân công, phối hợp, kiểm soát giữa các nhánh quyền lực; mọi chủ thể đều bình đẳng trước pháp luật. Pháp luật vừa là chuẩn tắc chi phối hành vi, vừa là công cụ tổ chức xã hội hướng tới công bằng và phát triển.
        </div>
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded shadow-sm">
          <span className="font-bold text-yellow-700">Nguyên tắc tổ chức và vận hành:</span> <span className="font-semibold">Tập trung dân chủ, trách nhiệm – kỷ luật, công khai – minh bạch, gắn bó mật thiết với nhân dân</span> (<span className="italic">“của dân, do dân, vì dân”</span>).
        </div>
      </div>
    )
  },
  {
    title: "IV. Bản chất và chức năng",
    icon: null,
    content: (
      <div className="space-y-6">
        <div className="rounded-xl shadow-lg p-6 bg-gradient-to-r from-cyan-100 via-blue-50 to-cyan-50 border-l-8 border-cyan-400">
          <span className="font-extrabold text-cyan-700 text-lg">Bản chất:</span>
          <span className="font-semibold text-cyan-800"> Giai cấp công nhân</span> <span className="italic text-cyan-600">(trên nền liên minh xã hội rộng rãi)</span>, đồng thời mang <span className="font-semibold text-blue-700">tính nhân dân</span>, <span className="font-semibold text-green-700">tính dân tộc</span>, <span className="font-semibold text-purple-700">tính thời đại</span>; hướng đích <span className="font-bold text-cyan-700">công bằng xã hội</span> và <span className="font-bold text-cyan-700">giải phóng con người</span>.
        </div>
        <div className="rounded-xl shadow-lg p-6 bg-gradient-to-r from-orange-100 via-yellow-50 to-orange-50 border-l-8 border-orange-400">
          <span className="font-extrabold text-orange-700 text-lg">Chức năng:</span>
          <div className="mt-2">
            <div className="mb-2">
              <span className="font-semibold text-orange-700">Đối nội:</span> <span className="text-gray-800">Mang bản chất giai cấp công nhân, thấm nhuần tính nhân dân, tính dân tộc, tính thời đại. Mục tiêu chiến lược là <span className="font-bold">giải phóng con người</span>, thực hiện <span className="font-bold">công bằng xã hội</span>, phát triển toàn diện cá nhân trong cộng đồng được tổ chức và quản trị hiệu quả.</span>
              <ul className="list-disc ml-8 mt-2 space-y-1">
                <li className="text-orange-700">Tổ chức phát triển kinh tế – văn hoá</li>
                <li className="text-orange-700">Bảo đảm an sinh, công bằng, bình đẳng</li>
                <li className="text-orange-700">Hoàn thiện pháp luật và pháp chế</li>
                <li className="text-orange-700">Đấu tranh phòng chống tội phạm, tham nhũng, lợi ích nhóm</li>
              </ul>
            </div>
            <div>
              <span className="font-semibold text-orange-700">Đối ngoại:</span> <span className="text-gray-800">Bảo vệ độc lập – chủ quyền; hợp tác quốc tế, hội nhập, đóng góp hoà bình – phát triển.</span>
            </div>
          </div>
        </div>
        <div className="rounded-xl shadow-lg p-6 bg-gradient-to-r from-gray-100 via-gray-50 to-gray-50 border-l-8 border-gray-400">
          <span className="font-extrabold text-gray-700 text-lg">Cơ chế thực thi:</span>
          <span className="text-gray-800"> Phối hợp công cụ <span className="font-semibold text-blue-700">chính trị</span> – <span className="font-semibold text-green-700">pháp luật</span> – <span className="font-semibold text-cyan-700">kinh tế</span> – <span className="font-semibold text-orange-700">văn hoá</span> – <span className="font-semibold text-purple-700">giáo dục</span>, trong đó <span className="font-bold text-green-700">pháp luật</span> giữ vai trò chuẩn tắc – bắt buộc, còn <span className="font-bold text-blue-700">dân chủ</span> là động lực – mục tiêu. Thực hiện dựa vào pháp luật nhà nước ban hành, là công cụ tổ chức – điều chỉnh; mọi chủ thể bình đẳng trước pháp luật, đồng thời nhà nước kiểm soát quyền lực bằng <span className="font-semibold text-blue-700">lập pháp</span> – <span className="font-semibold text-green-700">hành pháp</span> – <span className="font-semibold text-purple-700">tư pháp</span> phân công, phối hợp, kiểm soát trong tổng thể thống nhất, mở rộng quyền con người/quyền công dân; <span className="italic text-blue-700">nhà nước của dân, do dân, vì dân</span>.</span>
        </div>
      </div>
    )
  },
  {
    title: "V. Đặc trưng cốt lõi",
    icon: null,
    content: (
      <div className="space-y-4">
        <div className="flex items-center bg-pink-50 border-l-4 border-pink-400 p-4 rounded shadow-sm">
          <span><span className="font-bold text-pink-700">Tính nhân dân và dân chủ xã hội chủ nghĩa:</span> Quyền lực thuộc về nhân dân; dân chủ vừa là giá trị, vừa là phương thức quản trị.</span>
        </div>
        <div className="flex items-center bg-blue-50 border-l-4 border-blue-400 p-4 rounded shadow-sm">
          <span><span className="font-bold text-blue-700">Tính pháp quyền xã hội chủ nghĩa:</span> Thượng tôn Hiến pháp, tổ chức quyền lực hợp lý (thống nhất nhưng có phân công, phối hợp, kiểm soát), bảo đảm quyền con người/quyền công dân.</span>
        </div>
        <div className="flex items-center bg-green-50 border-l-4 border-green-400 p-4 rounded shadow-sm">
          <span><span className="font-bold text-green-700">Tính giai cấp công nhân trong liên minh xã hội rộng:</span> Bảo đảm định hướng xã hội chủ nghĩa nhất quán.</span>
        </div>
        <div className="flex items-center bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded shadow-sm">
          <span><span className="font-bold text-yellow-700">Nền tảng sở hữu công cộng chủ đạo:</span> Cùng với cơ chế kế hoạch/điều tiết; mở rộng công cụ kinh tế-pháp lý để hiện thực hoá mục tiêu xã hội.</span>
        </div>
        <div className="flex items-center bg-red-50 border-l-4 border-red-400 p-4 rounded shadow-sm">
          <span><span className="font-bold text-red-700">Vai trò lãnh đạo của Đảng Cộng sản:</span> Đối với Nhà nước và xã hội nhằm phát triển và mở rộng đời sống xã hội, nhân dân và hợp tác quốc tế được ưu tiên đẩy mạnh.</span>
        </div>
        <div className="flex items-center bg-purple-50 border-l-4 border-purple-400 p-4 rounded shadow-sm">
          <span><span className="font-bold text-purple-700">Nguyên tắc tổ chức của Đảng và Nhà nước:</span> Tập trung dân chủ, kỷ luật – trách nhiệm, công khai – minh bạch, gắn bó với nhân dân.</span>
        </div>
        <div className="flex items-center bg-gray-50 border-l-4 border-gray-400 p-4 rounded shadow-sm">
          <span><span className="font-bold text-gray-700">Tính lịch sử – phát triển qua các thời kỳ tại Việt Nam:</span> Nhà nước kiểu mới sau 1945 có độ mở để hiện đại hoá thiết chế, thích ứng với bối cảnh, tiệm cận tàn lụi khi điều kiện lịch sử – xã hội cho phép nhằm ngày một hoàn thiện hệ thống pháp luật; chuẩn hoá quy trình lập pháp – hành pháp – tư pháp phục đời sống nhân dân và phát triển đất nước.</span>
        </div>
      </div>
    )
  },
  {
    title: "VI. Khái quát các giai đoạn của Nhà nước xã hội chủ nghĩa trong lịch sử hiện đại Việt Nam",
    icon: null,
    content: (
      <div className="space-y-4">
        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded shadow-sm">
          <span className="font-bold text-blue-700">Giai đoạn hình thành tiền đề (1945-1954):</span> Sự ra đời của <span className="font-bold text-red-600">Nhà nước Việt Nam Dân chủ Cộng hoà</span> mở nền móng cho nhà nước kiểu mới, đặt trọng tâm vào <span className="font-bold text-red-600">độc lập dân tộc</span> và quyền lực thuộc về nhân dân, từng bước xây dựng cơ sở pháp lý – thể chế trong bối cảnh chiến tranh bảo vệ nền độc lập.
        </div>
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded shadow-sm">
          <span className="font-bold text-yellow-700">Miền Bắc thời kỳ quá độ (1954-1975):</span> Ở miền Bắc, quá trình <span className="font-bold text-red-600">xây dựng chủ nghĩa xã hội</span> diễn ra song song với nhiệm vụ giải phóng miền Nam; mô hình công hữu, kế hoạch hoá và hệ thống phúc lợi – giáo dục – y tế được mở rộng; nhà nước củng cố bản chất giai cấp công nhân gắn với tính nhân dân và tính dân tộc.
        </div>
        <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded shadow-sm">
          <span className="font-bold text-green-700">Sau thống nhất (1976-1986):</span> Sau thống nhất, <span className="font-bold text-red-600">mô hình kế hoạch hoá tập trung</span> được áp dụng toàn quốc; nhà nước tiếp tục phát huy vai trò tổ chức xã hội nhưng cũng khẳng định định hướng về những thách thức và hiệu quả phân bổ nguồn lực trong điều kiện mới của nền kinh tế.
        </div>
        <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded shadow-sm">
          <span className="font-bold text-red-700">Đổi mới và hiện đại hoá nhà nước (1986-nay):</span> Sự chuyển đổi sang <span className="font-bold text-red-600">kinh tế thị trường định hướng xã hội chủ nghĩa</span> đòi hỏi quá trình hiện đại hoá nhà nước theo hướng <span className="font-bold text-red-600">pháp quyền xã hội chủ nghĩa</span>: hoàn thiện hệ thống pháp luật; bảo đảm thượng tôn Hiến pháp; thúc đẩy cải cách hành chính, cải cách tư pháp; tăng cường cơ chế kiểm soát quyền lực; phòng, chống tham nhũng; mở rộng các cơ chế dân chủ, tham gia, giám sát và phản biện xã hội. Nhà nước chủ động <span className="font-bold text-red-600">hội nhập quốc tế</span>, tiếp thu chuẩn mực quản trị hiện đại, đồng thời giữ vững <span className="font-bold text-red-600">định hướng xã hội chủ nghĩa</span> và lợi ích quốc gia – dân tộc theo phương châm <span className="font-bold text-red-600">“của dân, do dân, vì dân”</span> được cụ thể hoá vào quy trình lập pháp – hành pháp – tư pháp.
        </div>
      </div>
    )
  },
  {
    title: "VII. Dân chủ và pháp quyền xã hội chủ nghĩa trong bối cảnh hiện nay",
    icon: null,
    content: (
      <div className="space-y-4">
        <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded shadow-sm">
          <span className="font-bold text-green-700">Dân chủ xã hội chủ nghĩa</span> được cụ thể hoá qua việc tôn trọng, bảo vệ, bảo đảm <span className="font-bold text-red-600">quyền con người và quyền công dân</span>; cải tiến quy trình lập pháp – hành pháp – tư pháp theo hướng minh bạch, trách nhiệm giải trình; hoàn thiện cơ chế trưng cầu ý dân, tiếp công dân, phản biện xã hội.
        </div>
        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded shadow-sm">
          <span className="font-bold text-blue-700">Pháp quyền xã hội chủ nghĩa</span> nhấn mạnh <span className="font-bold text-red-600">tính tối thượng của Hiến pháp</span>, tính dự đoán được của pháp luật và tính khả thi trong tổ chức thi hành; tăng cường giám sát quyền lực bằng cả cơ chế nhà nước và cơ chế xã hội, bảo đảm rằng quyền lực được kiểm soát hữu hiệu trong khuôn khổ thống nhất.
        </div>
      </div>
    )
  },
  {
    title: "VIII. Những thách thức đặt ra đối với Nhà nước hiện nay",
    icon: null,
    content: (
      <div className="space-y-4">
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded shadow-sm">
          <span className="font-bold text-yellow-700">Thứ nhất:</span> Tiếp tục <span className="font-bold">hoàn thiện thể chế</span> để cân bằng giữa hiệu quả quản trị và bảo đảm quyền làm chủ của nhân dân; tăng cường minh bạch, trách nhiệm giải trình, và chất lượng dịch vụ công.
        </div>
        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded shadow-sm">
          <span className="font-bold text-blue-700">Thứ hai:</span> Đẩy mạnh <span className="font-bold">chuyển đổi số trong quản trị nhà nước</span> để nâng cao hiệu quả, giảm chi phí giao dịch, mở rộng sự tham gia của người dân.
        </div>
        <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded shadow-sm">
          <span className="font-bold text-green-700">Thứ ba:</span> <span className="font-bold">Củng cố kỷ luật – kỷ cương</span> đi liền với nhân văn – sáng tạo, tạo môi trường khuyến khích phát triển tài năng và đổi mới.
        </div>
        <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded shadow-sm">
          <span className="font-bold text-red-700">Thứ tư:</span> Gắn <span className="font-bold">tăng trưởng kinh tế</span> với <span className="font-bold">công bằng xã hội</span> và <span className="font-bold">phát triển bền vững</span>, bảo đảm không ai bị bỏ lại phía sau trong quá trình hiện đại hoá.
        </div>
      </div>
    )
  },
  {
    title: "IX. Kết luận",
    icon: null,
    content: (
      <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded shadow-sm">
        <span className="font-bold text-blue-700">Nhà nước xã hội chủ nghĩa</span>, xét về nền tảng lý luận, là hình thức tổ chức quyền lực nhằm hiện thực hoá những <span className="font-bold">giá trị dân chủ</span> và <span className="font-bold">công bằng</span> trên cơ sở phát triển của <span className="font-bold">lực lượng sản xuất</span> và những <span className="font-bold">điều chỉnh tiến bộ của quan hệ sản xuất</span>.<br />
        Trong lịch sử hiện đại Việt Nam, mô hình này trải qua nhiều giai đoạn, với trọng tâm ngày càng rõ vào <span className="font-bold">xây dựng nhà nước pháp quyền xã hội chủ nghĩa</span> phù hợp với <span className="font-bold">kinh tế thị trường định hướng xã hội chủ nghĩa</span> và <span className="font-bold">hội nhập quốc tế</span>.<br />
        <span className="font-bold">Tính lịch sử – phát triển</span> của mô hình đòi hỏi việc <span className="font-bold">hoàn thiện thể chế</span> một cách liên tục, sáng tạo và chuẩn mực, để vừa bảo đảm <span className="font-bold">định hướng xã hội chủ nghĩa</span>, vừa đáp ứng <span className="font-bold">yêu cầu phát triển của thời đại</span>.
      </div>
    )
  },
];

// Removed unused referenceContent

const MacLeninConcept = () => {
  const [current, setCurrent] = useState(0);
  const total = sections.length;

  return (
    <Box
      sx={{
        minHeight: '100vh',
        width: '100%',
        background: '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        py: { xs: 2, md: 6 },
        px: { xs: 0, md: 0 },
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* ...existing code... */}
      <Container maxWidth="md" sx={{ position: 'relative', zIndex: 2 }}>
        <Box sx={{ mb: 4, textAlign: 'center' }}>
          <Typography
            variant="h2"
            fontWeight="bold"
            color="primary"
            gutterBottom
            sx={{
              letterSpacing: 2,
              color: '#222',
              fontSize: { xs: '2.4rem', sm: '3.2rem', md: '3.8rem' },
              lineHeight: 1.12,
              mb: 1,
              fontFamily: 'Montserrat, serif',
            }}
          >
            Nền tảng lý luận về Nhà nước xã hội chủ nghĩa
          </Typography>
          <Typography variant="h5" sx={{ fontStyle: 'italic', mb: 2, fontWeight: 500, fontFamily: 'Montserrat, serif', color: '#555' }}>
            Khái niệm, bản chất, chức năng, đặc trưng và quá trình phát triển tại Việt Nam
          </Typography>
        </Box>
        <Box sx={{ position: 'relative', mb: 3, minHeight: { xs: 420, md: 520 } }}>
          {/* Left Arrow - floating, animated, glowing */}
          <Fade in={current > 0} timeout={400}>
            <Box
              sx={{
                position: 'absolute',
                top: '50%',
                left: -80,
                transform: 'translateY(-50%)',
                width: 70,
                height: 70,
                display: { xs: 'none', sm: 'flex' },
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 3,
                cursor: current === 0 ? 'not-allowed' : 'pointer',
                opacity: current === 0 ? 0.2 : 1,
                transition: 'opacity 0.2s',
                filter: 'drop-shadow(0 0 16px #6a4fcf)',
                ':hover': {
                  transform: current === 0 ? 'translateY(-50%)' : 'translateY(-50%) scale(1.13)',
                },
              }}
              onClick={() => {
                if (current !== 0) setCurrent((prev) => Math.max(prev - 1, 0));
              }}
              aria-label="Quay lại"
              role="button"
            >
              <ArrowBackIosNewIcon sx={{ fontSize: 54, color: current === 0 ? '#bbb' : '#6a4fcf' }} />
            </Box>
          </Fade>
          {/* Content Card with luxury glassmorphism and border gradient */}
          <Zoom in={true} key={current}>
            <Card
              sx={{
                boxShadow: '0 8px 32px 0 rgba(33,150,243,0.10)',
                borderRadius: 6,
                background: '#fff',
                border: '1.5px solid #e3e3e3',
                minHeight: { xs: 420, md: 520 },
                px: { xs: 2, md: 5 },
                py: { xs: 2, md: 5 },
                transition: 'box-shadow 0.3s',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <CardContent sx={{ position: 'relative', zIndex: 1 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Typography
                    variant="h4"
                    fontWeight="bold"
                    color="secondary"
                    sx={{
                      color: '#1976d2',
                      fontSize: { xs: '1.3rem', sm: '1.7rem', md: '2.1rem' },
                      letterSpacing: 1,
                      fontFamily: 'Montserrat, serif',
                    }}
                  >
                    {sections[current].title}
                  </Typography>
                </Box>
                <Divider sx={{ mb: 2, borderColor: '#90caf9' }} />
                <Box sx={{ fontSize: { xs: '1.08rem', md: '1.18rem' }, lineHeight: 1.7, color: '#222', fontFamily: 'Montserrat, serif' }}>
                  {sections[current].content}
                </Box>
              </CardContent>
            </Card>
          </Zoom>
          {/* Right Arrow - floating, animated, glowing */}
          <Fade in={current < total - 1} timeout={400}>
            <Box
              sx={{
                position: 'absolute',
                top: '50%',
                right: -80,
                transform: 'translateY(-50%)',
                width: 70,
                height: 70,
                display: { xs: 'none', sm: 'flex' },
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 3,
                cursor: current === total - 1 ? 'not-allowed' : 'pointer',
                opacity: current === total - 1 ? 0.2 : 1,
                transition: 'opacity 0.2s',
                filter: 'drop-shadow(0 0 16px #6a4fcf)',
                ':hover': {
                  transform: current === total - 1 ? 'translateY(-50%)' : 'translateY(-50%) scale(1.13)',
                },
              }}
              onClick={() => {
                if (current !== total - 1) setCurrent((prev) => Math.min(prev + 1, total - 1));
              }}
              aria-label="Tiếp theo"
              role="button"
            >
              <ArrowForwardIosIcon sx={{ fontSize: 54, color: current === total - 1 ? '#bbb' : '#6a4fcf' }} />
            </Box>
          </Fade>
          {/* Progress bar indicator - luxury style */}
          <Box sx={{ position: 'absolute', left: 0, right: 0, bottom: -18, px: 6 }}>
            <LinearProgress
              variant="determinate"
              value={((current + 1) / total) * 100}
              sx={{
                height: 8,
                borderRadius: 4,
                background: '#f3f3f3',
                '& .MuiLinearProgress-bar': {
                  background: 'linear-gradient(90deg, #1976d2 0%, #8e24aa 100%)',
                },
              }}
            />
            <Box sx={{ textAlign: 'center', mt: 0.5, fontWeight: 500, color: '#1976d2', fontSize: '1rem' }}>
              {`Phần ${current + 1} / ${total}`}
            </Box>
          </Box>
        </Box>
        {/* Reference section - clean card */}
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt: 8, mb: 4 }}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              background: '#f7f7fa',
              border: '1.5px solid #e3e3e3',
              borderRadius: 5,
              px: 5,
              py: 3,
              color: '#1976d2',
              fontSize: '1.15rem',
              fontWeight: 600,
              boxShadow: '0 2px 12px rgba(33,150,243,0.08)',
              fontFamily: 'Montserrat, serif',
            }}
          >
            <InfoIcon sx={{ mr: 2, color: '#1976d2', fontSize: 28 }} />
            <span><strong>Tham khảo:</strong> Giáo trình học phần Chủ nghĩa xã hội khoa học (K) Tr 67 -Tr144</span>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default MacLeninConcept;
