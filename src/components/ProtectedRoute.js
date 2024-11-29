import { useAuth } from "@/context/authContext";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function ProtectedRoute({ children }) {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push("/app/login");
    }
  }, [user, loading, router]);

  if (loading) return <p>Chargement...</p>;

  return <>{user ? children : null}</>;
}
