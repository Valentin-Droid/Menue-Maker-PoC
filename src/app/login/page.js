"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "@/lib/firebase"; 
import { useAuth } from "@/context/authContext";

export default function Login() {
  const { user, loading } = useAuth();
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleEmailPasswordLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
      setError("Erreur de connexion : " + err.message);
    }
  };

  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
    } catch (err) {
      setError("Erreur de connexion Google : " + err.message);
    }
  };

  useEffect(() => {
    // Si l'utilisateur est connecté et que le chargement est terminé, rediriger vers la page d'accueil
    if (!loading && user) {
      router.push("/");
    }
  }, [user, loading, router]);

  if (user && !loading) {
    return null;
  }

  return (
    <div className="container px-4 py-16 mx-auto max-w-md">
      <div className="space-y-8">
        <header className="space-y-4 text-center">
          <h1 className="text-5xl font-bold tracking-tight text-slate-900">Connexion</h1>
        </header>

        {error && <div className="text-red-500">{error}</div>}

        <form onSubmit={handleEmailPasswordLogin} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-2 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Mot de passe
            </label>
            <input
              type="password"
              id="password"
              name="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-2 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700"
          >
            Se connecter
          </button>
        </form>

        <div className="text-center space-y-4">
          <p className="text-sm text-gray-600">Ou connectez-vous avec :</p>
          <button
            onClick={handleGoogleLogin}
            className="w-full py-2 px-4 bg-red-600 text-white font-semibold rounded-md hover:bg-red-700"
          >
            Connexion avec Google
          </button>
          <p className="text-sm text-gray-600">
            Pas de compte ?{" "}
            <a
              href="/signup"
              className="text-blue-600 hover:text-blue-800"
            >
              Créez-en un !
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
