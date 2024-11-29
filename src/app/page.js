"use client";

import { useAuth } from "@/context/authContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { MenuBuilder } from "@/components/menu-builder";
import { Card, CardContent } from "@/components/ui/card";
import { logout } from "@/lib/firebase";

export default function Home() {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push("/login");
    }
  }, [user, loading, router]);

  const handleLogout = async () => {
    try {
      await logout();
      router.push("/login");
    } catch (error) {
      console.error("Erreur lors de la déconnexion :", error);
    }
  };

  if (loading) {
    return <p>Chargement...</p>;
  }

  if (!user) {
    return <p>Redirection vers la page de connexion...</p>;
  }

  return (
    <main className="container px-4 py-16 mx-auto relative">
      <div className="mx-auto space-y-8 max-w-5xl">
        <button
          onClick={handleLogout}
          className="absolute top-4 right-4 px-4 py-2 text-white bg-red-600 rounded hover:bg-red-700"
        >
          Se déconnecter
        </button>

        <header className="space-y-4 text-center">
          <h1 className="text-5xl font-bold tracking-tight text-slate-900">
            Menu Maker
          </h1>
          <p className="text-xl text-slate-600">
            Créez et personnalisez facilement vos menus
          </p>
        </header>

        <Card className="shadow-xl">
          <CardContent className="p-6">
            <MenuBuilder />
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
