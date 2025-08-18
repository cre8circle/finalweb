import Navigation from "@/components/Navigation";
import { Users, Target, Rocket, Heart } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            About <span className="bg-gradient-primary bg-clip-text text-transparent">Cre8Circle</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            We're building the future of creative collaboration, one circle at a time.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-muted-foreground text-lg mb-6">
                At Cre8Circle, we believe that the best ideas emerge when creative minds come together. 
                Our platform breaks down barriers and connects creators, innovators, and visionaries from 
                around the world in seamless collaborative experiences.
              </p>
              <p className="text-muted-foreground text-lg">
                We're not just building an app – we're fostering a global community where creativity 
                knows no bounds and collaboration drives innovation.
              </p>
            </div>
            <div className="relative">
              <div className="w-full h-64 bg-gradient-subtle rounded-lg flex items-center justify-center">
                <Target className="h-24 w-24 text-primary" />
              </div>
            </div>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-lg bg-card border border-border">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-subtle flex items-center justify-center">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Community First</h3>
              <p className="text-muted-foreground">
                We prioritize building meaningful connections and fostering a supportive creative community.
              </p>
            </div>

            <div className="text-center p-6 rounded-lg bg-card border border-border">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-subtle flex items-center justify-center">
                <Rocket className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Innovation</h3>
              <p className="text-muted-foreground">
                We constantly push boundaries to create cutting-edge tools that empower creators.
              </p>
            </div>

            <div className="text-center p-6 rounded-lg bg-card border border-border">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-subtle flex items-center justify-center">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Passion</h3>
              <p className="text-muted-foreground">
                Every feature is built with love and dedication to serving our creative community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4 bg-secondary/20">
        <div className="container mx-auto text-center max-w-4xl">
          <h2 className="text-4xl font-bold mb-6">Built by Creators, for Creators</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Our diverse team of designers, developers, and creators understands the challenges 
            of modern collaboration because we live them every day.
          </p>
          <div className="bg-gradient-subtle p-8 rounded-lg">
            <p className="text-lg font-medium">
              "We're not just building software – we're crafting experiences that inspire, 
              connect, and amplify human creativity."
            </p>
            <p className="text-primary mt-4 font-semibold">— The Cre8Circle Team</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;