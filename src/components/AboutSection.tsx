import { Card, CardContent } from "@/components/ui/card";
import { Award, Users, Clock } from "lucide-react";

const AboutSection = () => {
  const features = [
    {
      icon: Award,
      title: "Low Cost",
      description: "Years of providing high quality, low cost service."
    },
    {
      icon: Users,
      title: "Trusted by Locals",
      description: "Hundreds of satisfied customers across the Grand Valley area."
    },
    {
      icon: Clock,
      title: "Reliable Service",
      description: "Your safety is our number one priority."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-warm-cream">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            About Mesa Automotive LLC
          </h2>
          
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Serving Grand Junction and anyone passing through. Mesa Automotive  
            has been helping hundreds of customers get back on the road for years.
            Whatever is wrong with your vehicle, your safety and satisfaction is our priority.
          </p>
        </div>         
          
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300 border-none bg-card/80 backdrop-blur-sm"
              >
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
