import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

const Navigation = () => {
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <nav className="absolute top-0 left-0 right-0 z-50 bg-gradient-to-r from-background/95 via-background/80 to-background/95 backdrop-blur-sm border-b border-border/50">
  <div className="container mx-auto px-4">
    <div className="flex items-center justify-between h-16">
      <Link to="/" className="text-2xl font-bold text-red-600">
        Mesa Automotive LLC
      </Link>
    </div>
  </div>
</nav>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  location.pathname === item.path
                    ? "text-primary border-b-2 border-primary"
                    : "text-muted-foreground"
                }`}
              >
                {item.name}
              </Link>
            ))}
            
            <div className="flex items-center space-x-2 text-sm">
              <Phone className="h-4 w-4 text-primary" />
              <span className="text-foreground font-medium">970-216-8535</span>
            </div>
          </div>

          {/* Mobile menu button would go here */}
          <div className="md:hidden flex items-center space-x-2">
            <Phone className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium">970-216-8535</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
