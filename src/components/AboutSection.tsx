import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Leaf, Award, Users, Clock } from "lucide-react";

const AboutSection = () => {
  const features = [
    {
      icon: Leaf,
      title: "Eco-Friendly",
      description: "Sustainable landscaping practices that respect Colorado's natural environment."
    },
    {
      icon: Award,
      title: "Expert Craftsmanship",
      description: "20+ years of experience creating beautiful outdoor spaces in Grand Junction."
    },
    {
      icon: Users,
      title: "Trusted by Locals",
      description: "Hundreds of satisfied customers across the Grand Valley area."
    },
    {
      icon: Clock,
      title: "Reliable Service",
      description: "On-time project completion with attention to every detail."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-warm-cream">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            About Lawns 4 Less
          </h2>
          
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Serving Grand Junction and the surrounding Colorado communities, Lawns 4 Less 
            has been transforming outdoor spaces for over two decades. We specialize in 
            complete landscaping solutions, from irrigation systems to custom stone work, 
            bringing your vision to life with quality craftsmanship and personalized service.
          </p>
          
          <Button variant="primary" size="lg">
            Learn More About Our Process
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-none bg-card/80 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-2 text-foreground">
                    {feature.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;