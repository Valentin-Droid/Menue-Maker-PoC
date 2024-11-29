"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { useAuth } from "@/context/authContext";

export default function Signup() {
  const { user, loading } = useAuth();
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      router.push("/");
    } catch (err) {
      setError("Erreur d'inscription : " + err.message);
    }
  };

  if (user && !loading) {
    router.push("/");
    return null;
  }

  return (
    <div className="container px-4 py-16 mx-auto max-w-md">
      <div className="space-y-8">
        <header className="space-y-4 text-center">
          <h1 className="text-5xl font-bold tracking-tight text-slate-900">Créer un compte</h1>
        </header>

        {error && <div className="text-red-500">{error}</div>}

        <form onSubmit={handleSignup} className="space-y-6">
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
            Créer un compte
          </button>
        </form>

        <div className="text-center space-y-4">
          <p className="text-sm text-gray-600">
            Vous avez déjà un compte ?{" "}
            <a
              href="/login"
              className="text-blue-600 hover:text-blue-800"
            >
              Se connecter
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
