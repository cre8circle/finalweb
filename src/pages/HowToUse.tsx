import Navigation from "@/components/Navigation";
import { Play, Users, MessageSquare, Share2, Settings, Sparkles } from "lucide-react";

const HowToUse = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              How to Use{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Cre8Circle
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Get started with Cre8Circle in minutes. Follow our step-by-step guide to unlock your creative potential.
            </p>
          </div>
        </section>

        {/* Step-by-step Guide */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              
              {/* Step 1 */}
              <div className="p-6 rounded-lg border bg-card hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center mb-4">
                  <Play className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-3">1. Sign Up & Get Started</h3>
                <p className="text-muted-foreground">
                  Create your account and complete your profile. Choose your interests and creative focus areas to get personalized recommendations.
                </p>
              </div>

              {/* Step 2 */}
              <div className="p-6 rounded-lg border bg-card hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-3">2. Find Your Tribe</h3>
                <p className="text-muted-foreground">
                  Discover creators who share your passion. Join circles, follow artists, and build your creative network.
                </p>
              </div>

              {/* Step 3 */}
              <div className="p-6 rounded-lg border bg-card hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center mb-4">
                  <MessageSquare className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-3">3. Start Collaborating</h3>
                <p className="text-muted-foreground">
                  Create or join projects. Use our collaboration tools to work together seamlessly, no matter where you are.
                </p>
              </div>

              {/* Step 4 */}
              <div className="p-6 rounded-lg border bg-card hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center mb-4">
                  <Share2 className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-3">4. Share Your Work</h3>
                <p className="text-muted-foreground">
                  Showcase your creations to the community. Get feedback, gain followers, and inspire others with your work.
                </p>
              </div>

              {/* Step 5 */}
              <div className="p-6 rounded-lg border bg-card hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center mb-4">
                  <Settings className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-3">5. Customize Your Experience</h3>
                <p className="text-muted-foreground">
                  Personalize your workspace, set preferences, and configure notifications to match your creative workflow.
                </p>
              </div>

              {/* Step 6 */}
              <div className="p-6 rounded-lg border bg-card hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center mb-4">
                  <Sparkles className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-3">6. Level Up</h3>
                <p className="text-muted-foreground">
                  Unlock advanced features, earn badges, and become a recognized creator in your field. The sky's the limit!
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* Tips Section */}
        <section className="py-16 px-4 bg-muted/50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Pro Tips for Success</h2>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div className="p-6 bg-background rounded-lg border">
                <h3 className="font-semibold mb-2">🚀 Be Active</h3>
                <p className="text-muted-foreground">
                  Regular engagement leads to better connections and more collaboration opportunities.
                </p>
              </div>
              <div className="p-6 bg-background rounded-lg border">
                <h3 className="font-semibold mb-2">💡 Stay Open</h3>
                <p className="text-muted-foreground">
                  Be open to feedback and new ideas. The best creations come from unexpected collaborations.
                </p>
              </div>
              <div className="p-6 bg-background rounded-lg border">
                <h3 className="font-semibold mb-2">🎯 Set Goals</h3>
                <p className="text-muted-foreground">
                  Define what you want to achieve and use Cre8Circle's tools to track your creative journey.
                </p>
              </div>
              <div className="p-6 bg-background rounded-lg border">
                <h3 className="font-semibold mb-2">🌟 Support Others</h3>
                <p className="text-muted-foreground">
                  Help fellow creators succeed. A thriving community benefits everyone involved.
                </p>
              </div>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
};

export default HowToUse;