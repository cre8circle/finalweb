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
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
            How to use <span className="bg-gradient-primary bg-clip-text text-transparent">Cre8Circle</span>
          </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Cre8Circle is your secure platform for staying connected with friends and family. Create private circles, share live locations, and track health updates in real time. Get instant SOS alerts and smart reminders for important tasks. Follow the guide below to get started and make the most of Cre8Circle.
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
                <h3 className="text-xl font-semibold mb-3">1. Sign up with email or phone (secured with two-step verification)</h3>
                <p className="text-muted-foreground">
                  Create your digital profile with personal and health details, plus an avatar or photo.

                </p>
              </div>

              {/* Step 2 */}
              <div className="p-6 rounded-lg border bg-card hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-3">2. Build or Join a Circle</h3>
                <p className="text-muted-foreground">
                  Create a Circle: Set a name, define its purpose (family, fitness group, couple, etc.), and invite members via phone or email.
                </p>
                <p className="text-muted-foreground">
                  Join a Circle: Enter a unique Circle Code and instantly sync with your group.

                </p>
              </div>

              {/* Step 3 */}
              <div className="p-6 rounded-lg border bg-card hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center mb-4">
                  <MessageSquare className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-3">3. Track, Analyse & Share</h3>
                <p className="text-muted-foreground">
                  Access real-time health dashboards for each member (steps, calories, BMI, distance, medical stats).</p>

                <p className="text-muted-foreground">
                  Upload or scan medical reports (blood pressure, sugar levels, prescriptions).
                </p>
                <p className="text-muted-foreground">
                  Let the AI-powered Report Analyser provide intelligent insights and daily summaries.

                </p>
              </div>

              {/* Step 4 */}
              <div className="p-6 rounded-lg border bg-card hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center mb-4">
                  <Share2 className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-3">4. Location & Safety Intelligence</h3>
                <p className="text-muted-foreground">
                  Track members live on the Google Maps-powered interface.
                </p>
                <p className="text-muted-foreground">
                  View detailed trip history, speed analysis, and unusual route alerts.
                </p>
                <p className="text-muted-foreground">
                  Enable geofencing to get instant alerts when members move in/out of chosen zones.
                </p>
                <p className="text-muted-foreground">
                  Use SOS & crash detection (Pro feature) for emergency-ready responses.
                </p>
              </div>

              {/* Step 5 */}
              <div className="p-6 rounded-lg border bg-card hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center mb-4">
                  <Settings className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-3">5. Intelligent Reminders</h3>
                <p className="text-muted-foreground">
                  Add smart reminders for medicines, doctor visits, water intake, meals, fitness, or custom needs.
                </p>
                <p className="text-muted-foreground">
                  Sync with a built-in calendar for seamless scheduling.
                </p>
                <p className="text-muted-foreground">
                  Notifications adapt to each member’s routine for personalized care.

                </p>
              </div>

              {/* Step 6 */}
              <div className="p-6 rounded-lg border bg-card hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center mb-4">
                  <Sparkles className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-3">6. Upgrade to CRE8CIRCLE PRO</h3>
                <p className="text-muted-foreground">
                  Unlock premium intelligence starting at just ₹50/month:
                </p>
                <p className="text-muted-foreground">
                  AI-generated health reports with deeper analytics
                </p>
                <p className="text-muted-foreground">
                  Crash detection & SOS alerts
                </p>
                <p className="text-muted-foreground">
                  Extended travel and health history
                </p>
                <p className="text-muted-foreground">
                  Smart anomaly detection for routes & health changes
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
                <h3 className="font-semibold mb-2">🎨 Personalize Your Experience</h3>
                <p className="text-muted-foreground">
                  Switch between Dark Mode / Light Mode / System Default.
                </p>    
              </div>
              <div className="p-6 bg-background rounded-lg border">
                <h3 className="font-semibold mb-2">🌐 Language Preferences</h3>
                <p className="text-muted-foreground">
                  Choose your preferred language. Cre8Circle supports multiple languages for a personalized experience.
                </p>
              </div>
              <div className="p-6 bg-background rounded-lg border">
                <h3 className="font-semibold mb-2">🔒 Enhanced Security</h3>
                <p className="text-muted-foreground">
                  Lock the app with Fingerprint/Face ID.

                </p>
              </div>
              <div className="p-6 bg-background rounded-lg border">
                <h3 className="font-semibold mb-2">⚙️ Manage Circles & Settings</h3>
                <p className="text-muted-foreground">
                  Manage circles, notifications, and privacy settings easily.
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