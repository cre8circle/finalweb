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
              At Cre8Circle, we believe true peace of mind comes when the people you love are connected, safe, and cared for. Our platform helps families and friends stay closer by sharing live locations, medical updates, and timely reminders.


              <p className="text-muted-foreground text-lg">
                We’re not just creating an app — we’re fostering a digital circle of care, where health, safety, and connection come together to build stronger bonds.
              </p>
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
                We prioritize families and friendships, enabling meaningful connections that go beyond simple messaging.
              </p>
            </div>

            <div className="text-center p-6 rounded-lg bg-card border border-border">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-subtle flex items-center justify-center">
                <Rocket className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Innovation in Care</h3>
              <p className="text-muted-foreground">
                From live GPS sharing to health reports and medicine reminders, we use technology to simplify care and support.
              </p>
            </div>

            <div className="text-center p-6 rounded-lg bg-card border border-border">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-subtle flex items-center justify-center">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Built with Love</h3>
              <p className="text-muted-foreground">
                Every feature is designed with compassion — helping families protect, monitor, and support each other every day.
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
            Our team understands the challenges of keeping loved ones safe and connected. That’s why Cre8Circle is designed to bring technology and care together in the simplest way possible.
          </p>
          <div className="bg-gradient-subtle p-8 rounded-lg">
            <p className="text-lg font-medium">
              "We’re not just building software — we’re creating peace of mind, making care easier, and ensuring no loved one is ever out of reach."
            </p>
            <p className="text-primary mt-4 font-semibold">— The Cre8Circle Team</p>
          </div>
        </div>
      </section>

      {/* Core Team Section */}
      <section className="bg-background py-12 mt-12 border-t border-border">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-10">Our Core Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {/* Team Member 1 */}
            <div className="flex flex-col items-center">
              <img
                src="/team/member1.jpg" // put your image inside public/team/
                alt="Member 1"
                className="w-32 h-32 rounded-full object-cover shadow-md"
              />
              <h3 className="mt-4 text-lg font-semibold">Hirin Jain</h3>
              <p className="text-sm text-muted-foreground">member</p>
            </div>

            {/* Team Member 2 */}
            <div className="flex flex-col items-center">
              <img
                src="/team/member2.jpg"
                alt="Member 2"
                className="w-32 h-32 rounded-full object-cover shadow-md"
              />
              <h3 className="mt-4 text-lg font-semibold">Kirtan Shah</h3>
              <p className="text-sm text-muted-foreground">member</p>
            </div>

            {/* Team Member 3 */}
            <div className="flex flex-col items-center">
              <img
                src="/team/member3.jpg"
                alt="Member 3"
                className="w-32 h-32 rounded-full object-cover shadow-md"
              />
              <h3 className="mt-4 text-lg font-semibold">Param Megha</h3>
              <p className="text-sm text-muted-foreground">member</p>
            </div>

            {/* Team Member 4 */}
            <div className="flex flex-col items-center">
              <img
                src="/team/member4.jpg"
                alt="Member 4"
                className="w-32 h-32 rounded-full object-cover shadow-md"
              />
              <h3 className="mt-4 text-lg font-semibold">Nairit Medhi</h3>
              <p className="text-sm text-muted-foreground">member</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;