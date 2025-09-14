import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Droplets, TreePine, Gem, Flower, Footprints, Layers } from "lucide-react";
import { Link } from "react-router-dom";

const ServicesOverview = () => {
  const services = [
    {
      icon: Droplets,
      title: "Complete Sprinkler Systems",
      description: "Professional irrigation installation and maintenance for efficient water management."
    },
    {
      icon: TreePine,
      title: "Tree Planting",
      description: "Expert tree installation including large mature trees for instant landscape impact."
    },
    {
      icon: Gem,
      title: "Stone Work",
      description: "Beautiful flagstone patios, retaining walls, and decorative stone features."
    },
    {
      icon: Flower,
      title: "Pebbles & Bushes",
      description: "Decorative rock gardens and professional shrub planting and design."
    },
    {
      icon: Footprints,
      title: "Walkways",
      description: "Custom pathway design and installation using stone, pavers, or concrete."
    },
    {
      icon: Layers,
      title: "Sod Installation",
      description: "Premium sod installation for instant green lawn transformation."
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
            From complete landscape design to specialized installations, we offer comprehensive 
            services to transform your outdoor space into something extraordinary.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-none bg-card/90 backdrop-blur-sm hover:-translate-y-2">
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