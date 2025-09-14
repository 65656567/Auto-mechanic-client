import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Droplets, TreePine, Gem, Flower, Footprints, Layers, ArrowRight } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Droplets,
      title: "Complete Sprinkler Systems",
      description: "Our irrigation specialists design and install comprehensive sprinkler systems tailored to your landscape's unique needs. We use high-quality components and smart controllers to ensure efficient water distribution while conserving resources. From residential gardens to commercial properties, our systems are built to last and perform reliably year after year.",
      features: ["Smart controller installation", "Zone-based watering", "Water-efficient design", "Professional maintenance", "Seasonal system checks"]
    },
    {
      icon: TreePine,
      title: "Tree Planting & Installation",
      description: "Transform your property instantly with our expert tree planting services. We specialize in installing mature trees, including very large specimens that provide immediate impact and shade. Our team carefully selects trees suited to Colorado's climate and ensures proper planting techniques for long-term health and growth.",
      features: ["Large mature tree installation", "Climate-appropriate selection", "Professional root care", "Staking and support", "Growth guarantee"]
    },
    {
      icon: Gem,
      title: "Stone Work & Hardscaping",
      description: "Create stunning outdoor living spaces with our custom stone work. From elegant flagstone patios to functional retaining walls, we work with natural stone materials that complement Colorado's landscape. Our craftsmen bring years of experience to every project, ensuring both beauty and durability.",
      features: ["Flagstone patios", "Retaining walls", "Decorative borders", "Fire pit surrounds", "Natural stone selection"]
    },
    {
      icon: Flower,
      title: "Pebbles & Landscape Plants",
      description: "Add texture and color to your landscape with our decorative rock gardens and professional plant installations. We select drought-resistant plants and decorative pebbles that thrive in our local climate while providing year-round visual interest and low maintenance beauty.",
      features: ["Decorative rock gardens", "Drought-resistant plants", "Seasonal color planning", "Mulching services", "Plant health care"]
    },
    {
      icon: Footprints,
      title: "Custom Walkways",
      description: "Guide visitors through your landscape with beautifully designed walkways and paths. Whether you prefer natural flagstone, modern pavers, or decorative concrete, we create functional pathways that enhance your property's accessibility and aesthetic appeal.",
      features: ["Custom pathway design", "Multiple material options", "Proper drainage planning", "Lighting integration", "ADA compliant options"]
    },
    {
      icon: Layers,
      title: "Professional Sod Installation",
      description: "Get an instant green lawn with our premium sod installation services. We prepare the soil properly, select the best grass varieties for our Colorado climate, and ensure perfect installation for a lush, healthy lawn that establishes quickly and thrives for years to come.",
      features: ["Soil preparation", "Premium sod varieties", "Proper installation techniques", "Watering schedule guidance", "Establishment guarantee"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-background to-warm-cream">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Professional Landscaping
              <span className="block text-primary">Services</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Comprehensive landscaping solutions for Grand Junction and surrounding Colorado communities. 
              Quality craftsmanship backed by over 20 years of experience.
            </p>
            <Button variant="hero" size="lg">
              Get Your Free Estimate
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="overflow-hidden border-none shadow-natural">
                  <div className={`grid grid-cols-1 lg:grid-cols-2 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                    {/* Content */}
                    <div className="p-8 lg:p-12 flex flex-col justify-center">
                      <CardHeader className="p-0 mb-6">
                        <div className="flex items-center mb-4">
                          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                            <Icon className="h-8 w-8 text-primary" />
                          </div>
                          <CardTitle className="text-3xl text-foreground">{service.title}</CardTitle>
                        </div>
                      </CardHeader>
                      
                      <CardContent className="p-0">
                        <p className="text-muted-foreground mb-6 leading-relaxed text-lg">
                          {service.description}
                        </p>
                        
                        <div className="space-y-2 mb-6">
                          {service.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-center text-sm">
                              <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0" />
                              <span className="text-muted-foreground">{feature}</span>
                            </div>
                          ))}
                        </div>
                        
                        <Button variant="primary">
                          Learn More About This Service
                        </Button>
                      </CardContent>
                    </div>
                    
                    {/* Image placeholder */}
                    <div className={`bg-gradient-to-br from-primary/20 to-accent/20 min-h-[400px] flex items-center justify-center ${index % 2 === 1 ? 'lg:order-first' : ''}`}>
                      <Icon className="h-24 w-24 text-primary/40" />
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-earth-brown text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Landscape?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Get started with a free consultation and estimate. Our team is ready to bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" size="lg" className="bg-white text-primary border-white hover:bg-white/90">
              Schedule Consultation
            </Button>
            <Button variant="secondary" size="lg">
              Call 970-208-5303
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;