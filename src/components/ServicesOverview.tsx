import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Wrench, Disc, Wind, Zap, Settings, Engine } from "lucide-react"; 
import { Link } from "react-router-dom";

const ServicesOverview = () => {
  const services = [
    {
      icon: Settings, // Gear for transmission
      title: "Transmission Issues",
      description: "Professional transmission repair and replacement."
    },
    {
      icon: Disc, // Brake disc
      title: "Brakes",
      description: "Brake assessment and replacement."
    },
    {
      icon: Wind, // Fan/Airflow for A/C
      title: "A/C Issues",
      description: "Fixing A/C systems."
    },
    {
      icon: Zap, // Lightning bolt for electrical
      title: "Electrical Issues",
      description: "Expert electrical repair."
    },
    {
      icon: Wrench, // General tool for drivetrain
      title: "Drive Train",
      description: "Drive train repair and replacement."
    },
    {
      icon: Engine, // Engine icon
      title: "Engine Repair",
      description: "Fixing major and minor engine problems."
    }
  ];

  return (
    <section className="py-20 bg-warm-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Our expert team is ready to fix whatever problems may arise with your vehicle.
            From small leaks to major engine problems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 border-none bg-card/90 backdrop-blur-sm hover:-translate-y-2"
              >
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl text-foreground">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-muted-foreground text-center leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <Link to="/services">
            <Button variant="primary" size="lg">
              View All Services Details
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;

          
