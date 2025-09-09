import { Button } from "@/components/ui/button";
import { FaApple, FaGooglePlay } from "react-icons/fa";
import Navigation from "@/components/Navigation";

const Download = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <section className="text-center py-16 mt-16">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Download <span className="bg-gradient-primary bg-clip-text text-transparent">Cre8Circle</span>
          </h1>
        <p className="text-gray-400 mb-12">
          Get started with Cre8Circle on your favorite mobile platform and join the creative revolution.
        </p>

        {/* Mobile Options: iOS & Android */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* iOS Card */}
          <div className="bg-neutral-900 p-8 rounded-2xl shadow-lg text-center">
            <div className="flex justify-center mb-4 text-5xl text-white">
              <FaApple />
            </div>
            <h2 className="text-2xl font-semibold mb-3">iOS App</h2>
            <p className="text-gray-400 mb-8">
              Download Cre8Circle for iPhone and iPad from the App Store.
            </p>
            <Button className="flex items-center justify-center gap-3 bg-green-500 hover:bg-green-600 text-white w-full text-lg py-6">
              <FaApple size={24} /> Download for iOS
            </Button>
          </div>

          {/* Android Card */}
          <div className="bg-neutral-900 p-8 rounded-2xl shadow-lg text-center">
            <div className="flex justify-center mb-4 text-5xl text-green-500">
              <FaGooglePlay />
            </div>
            <h2 className="text-2xl font-semibold mb-3">Android App</h2>
            <p className="text-gray-400 mb-8">
              Get Cre8Circle for Android devices on the Google Play Store.
            </p>
            <Button className="flex items-center justify-center gap-3 bg-green-500 hover:bg-green-600 text-white w-full text-lg py-6">
              <FaGooglePlay size={24} /> Download for Android
            </Button>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="bg-neutral-950 py-12">
        <h2 className="text-center text-2xl font-semibold mb-8">What's Included</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto text-gray-300">
          <p>✔ Real-time collaboration tools</p>
          <p>✔ Cloud sync across devices</p>
          <p>✔ Project management tools</p>
          <p>✔ Advanced creative suite</p>
          <p>✔ Community features</p>
          <p>✔ Export in multiple formats</p>
        </div>
      </section>

      {/* System Requirements */}
      <section className="py-12 text-center">
        <h2 className="text-2xl font-semibold mb-6">System Requirements</h2>
        <div className="flex flex-col md:flex-row justify-center gap-12 text-gray-400">
          <div>
            <h3 className="font-bold mb-2">Minimum Requirements</h3>
            <p>2GB+ storage space</p>
            <p>Internet connection</p>
            <p>Modern smartphone</p>
          </div>
          <div>
            <h3 className="font-bold mb-2">Recommended</h3>
            <p>4GB+ RAM</p>
            <p>5GB+ storage space</p>
            <p>High-speed internet</p>
            <p>Latest Android/iOS version</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Download;
