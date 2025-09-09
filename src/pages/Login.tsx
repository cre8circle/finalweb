import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  signInWithEmailAndPassword,
  setPersistence,
  browserLocalPersistence,
  browserSessionPersistence,
} from "firebase/auth";
import { auth } from "@/lib/firebase";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  // Email login
  const handleLogin = async (e: React.FormEvent) => {
  e.preventDefault();

  try {
    // Set persistence based on rememberMe checkbox
    await setPersistence(auth, rememberMe ? browserLocalPersistence : browserSessionPersistence);

    await signInWithEmailAndPassword(auth, email, password);

    // Redirect to home after successful login
    navigate("/");
  } catch (error) {
    console.error("Login failed:", error);
  }
};

  // Signup
  const handleSignup = async () => {
    setLoading(true);
    setError("");
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Google Login
  const handleGoogleLogin = async () => {
    setLoading(true);
    setError("");
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      navigate("/");
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0a0f1a] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#00ff99]/30 via-[#00e0ff]/20 to-[#0a0f1a] p-6">
      <Card className="w-full max-w-md backdrop-blur-md bg-[#101820]/80 border border-[#00ff99]/20 shadow-2xl">
        <Tabs defaultValue="login" className="w-full">
          <TabsList className="grid w-full grid-cols-2 bg-[#00ff99]/10">
            <TabsTrigger value="login" className="data-[state=active]:bg-[#00ff99] data-[state=active]:text-black">Login</TabsTrigger>
            <TabsTrigger value="signup" className="data-[state=active]:bg-[#00ff99] data-[state=active]:text-black">Sign Up</TabsTrigger>
          </TabsList>

          {/* Login Tab */}
          <TabsContent value="login">
            <CardHeader>
              <CardTitle className="text-[#00ff99]">Welcome Back</CardTitle>
              <CardDescription className="text-white/80">
                Log in to continue your creative journey
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="login-email" className="text-[#00ff99]">
                  Email
                </Label>
                <Input
                  id="login-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="bg-[#1a2330] text-[#00ff99] border-[#00ff99]/30 focus:border-[#00ff99]"
                />
              </div>
              <div>
                <Label htmlFor="login-password" className="text-[#00ff99]">
                  Password
                </Label>
                <Input
                  id="login-password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="bg-[#1a2330] text-[#00ff99] border-[#00ff99]/30 focus:border-[#00ff99]"
                />
              </div>
              {error && <p className="text-red-400 text-sm">{error}</p>}
              <div className="flex items-center space-x-2">
                <input
                  id="rememberMe"
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="h-4 w-4 accent-[#00ff99]"
                />
                <label htmlFor="rememberMe" className="text-sm text-[#00ff99]">
                  Keep me signed in
                </label>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col gap-3">
              <Button
                className="w-full bg-[#00ff99] hover:bg-[#00e0ff] text-black font-bold shadow-lg shadow-[#00ff99]/30"
                onClick={handleLogin}
                disabled={loading}
              >
                {loading ? "Signing in..." : "Login"}
              </Button>
              <Button
                variant="outline"
                className="w-full flex items-center justify-center gap-2 bg-[#1a2330] text-[#00ff99] border-[#00ff99]/40 hover:bg-[#00e0ff]/10"
                onClick={handleGoogleLogin}
              >
                <FcGoogle size={20} /> Continue with Google
              </Button>
            </CardFooter>
          </TabsContent>

          {/* Signup Tab */}
          <TabsContent value="signup">
            <CardHeader>
              <CardTitle className="text-[#00ff99]">Join Cre8Circle</CardTitle>
              <CardDescription className="text-white/80">
                Create your account and start collaborating
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="signup-email" className="text-[#00ff99]">
                  Email
                </Label>
                <Input
                  id="signup-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="bg-[#1a2330] text-[#00ff99] border-[#00ff99]/30 focus:border-[#00ff99]"
                />
              </div>
              <div>
                <Label htmlFor="signup-password" className="text-[#00ff99]">
                  Password
                </Label>
                <Input
                  id="signup-password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="bg-[#1a2330] text-[#00ff99] border-[#00ff99]/30 focus:border-[#00ff99]"
                />
              </div>
              {error && <p className="text-red-400 text-sm">{error}</p>}
            </CardContent>
            <CardFooter className="flex flex-col gap-3">
              <Button
                className="w-full bg-[#00ff99] hover:bg-[#00e0ff] text-black font-bold shadow-lg shadow-[#00ff99]/30"
                onClick={handleSignup}
                disabled={loading}
              >
                {loading ? "Creating..." : "Sign Up"}
              </Button>
              <Button
                variant="outline"
                className="w-full flex items-center justify-center gap-2 bg-[#1a2330] text-[#00ff99] border-[#00ff99]/40 hover:bg-[#00e0ff]/10"
                onClick={handleGoogleLogin}
              >
                <FcGoogle size={20} /> Sign up with Google
              </Button>
            </CardFooter>
          </TabsContent>
        </Tabs>
      </Card>
    </div>
  );
};

export default Login;
