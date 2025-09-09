import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Chatbot from "@/components/Chatbot";
import Index from "./pages/Index";
import About from "./pages/About";
import Download from "./pages/Download";
import Login from "./pages/Login";
import HowToUse from "./pages/HowToUse";
import NotFound from "./pages/NotFound";
import { AuthProvider } from "@/context/AuthContext";
// import Dashboard from "./pages/Dashboard"; // ✅ new page

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/download" element={<Download />} />
          <Route path="/how-to-use" element={<HowToUse />} />
          <Route path="/login" element={<Login />} />
          <Route path="/chatbot" element={<Chatbot />} />
          {/* <Route path="/dashboard" element={<Dashboard />} /> ✅ Added */}
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        
      </BrowserRouter>
    </AuthProvider>
  </TooltipProvider>
</QueryClientProvider>
);

export default App;

