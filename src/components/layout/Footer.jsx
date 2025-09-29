
export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-red-700 to-red-900 text-white">
      <div className="mx-auto w-full max-w-screen-xl p-6 md:py-8">
        <div className="text-center space-y-3">
          <h2 className="text-lg font-bold">Học thuyết nhà nước XHCN</h2>
          <p className="text-sm">
            Dự án MLN131 - Xây dựng ứng dụng web hiện đại với React và TailwindCSS.
          </p>

          <div className="flex justify-center space-x-6 mt-4 text-sm font-medium">
            <a href="/" className="hover:underline">Trang chủ</a>
            <a href="/about" className="hover:underline">Giới thiệu</a>
            <a href="/contact" className="hover:underline">Liên hệ</a>
          </div>

          <hr className="my-4 border-gray-400 opacity-50" />

          <span className="block text-xs text-gray-200">
            © {new Date().getFullYear()} Học thuyết nhà nước XHCN. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}

