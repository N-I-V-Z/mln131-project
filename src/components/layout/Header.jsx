import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Menu, X, Star, BookOpen } from "lucide-react";
import { ROUTES, APP_CONFIG } from "../../utils/constants";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const navigation = [
    { name: "Trang chủ", href: ROUTES.HOME },
    { name: "Khái niệm", href: ROUTES.MACLENIN_CONCEPT },
    { name: "Vai trò Đảng", href: ROUTES.PARTY_ROLE },
    { name: "Bảo tàng", href: ROUTES.MUSEUM },
    { name: "Quiz", href: ROUTES.QUIZ },
    { name: "Chatbot AI", href: ROUTES.CHATBOT },
  ];

  const handleNavClick = (href) => {
    // Nếu cần làm logic trước khi chuyển — giữ ở đây
    navigate(href);
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="bg-gradient-to-r from-red-800 via-red-700 to-yellow-700 shadow-2xl sticky top-0 z-50 backdrop-blur-md">
      {/* Top accent bar */}
      <div className="h-1 bg-gradient-to-r from-yellow-400 via-red-500 to-yellow-400" />

      <nav className="container mx-auto px-4">
        <div className="flex h-16 justify-between items-center py-2">
          {/* Logo Section */}
          <div className="flex items-center space-x-3">
            <Link
              to={ROUTES.HOME}
              className="flex items-center space-x-3 group"
            >
              {/* Socialist Symbol */}
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Star className="w-7 h-7 text-red-800" />
              </div>

              {/* App Name */}
              <div className="flex flex-col leading-none">
                <span className="text-xl font-black text-yellow-200 group-hover:text-yellow-100 transition-colors">
                  Học thuyết
                </span>
                <span className="text-xs text-red-200 font-medium -mt-1">
                  Chủ nghĩa xã hội khoa học
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex md:items-center md:space-x-2">
            {navigation.map((item) => (
              <NavLink
                key={item.name}
                to={item.href}
                className={({ isActive }) =>
                  `relative px-4 py-2 text-sm font-semibold transition-all duration-300 rounded-lg group ${
                    isActive
                      ? "text-yellow-200 bg-red-700/50 shadow-lg"
                      : "text-red-100 hover:text-yellow-200 hover:bg-red-700/30"
                  }`
                }
              >
                {/* Active indicator - optional */}
                <span className="relative z-10">{item.name}</span>

                {/* Hover effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 to-red-400/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </NavLink>
            ))}
          </div>

          {/* Study Progress Indicator (Desktop) */}
          <div className="hidden lg:flex items-center space-x-3">
            <div className="flex items-center space-x-2 px-3 py-1 bg-yellow-400/20 rounded-full border border-yellow-400/30">
              <BookOpen className="w-4 h-4 text-yellow-300" />
              <span className="text-xs text-yellow-200 font-medium">
                Học tập
              </span>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen((v) => !v)}
              className="text-red-100 hover:text-yellow-200 p-2 rounded-lg hover:bg-red-700/30 transition-all duration-300"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-red-600/30 bg-red-800/50 backdrop-blur-md">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className={`w-full text-left block px-4 py-3 text-base font-semibold rounded-lg transition-all duration-300 ${
                    locationMatches(item.href)
                      ? "text-yellow-200 bg-gradient-to-r from-yellow-400/20 to-red-400/20 border border-yellow-400/30"
                      : "text-red-100 hover:text-yellow-200 hover:bg-red-700/30"
                  }`}
                >
                  {item.name}
                </button>
              ))}

              {/* Mobile Study Section */}
              <div className="mt-4 pt-4 border-t border-red-600/30">
                <div className="px-4 py-2 text-xs text-red-200 font-medium">
                  🚩 Học tập để phục vụ Tổ quốc
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Bottom accent line */}
      <div className="h-px bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent" />
    </header>
  );
};

// Helper: small function to check location pathname without importing useLocation in top-level again
// (If you prefer, import useLocation at top and replace function with location.pathname check)
function locationMatches(href) {
  try {
    // window.location is fine for mobile menu active highlight fallback
    return window?.location?.pathname === href;
  } catch {
    return false;
  }
}

export default Header;
