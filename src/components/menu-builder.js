"use client";

import { Alert, AlertDescription } from "@/components/ui/alert";
import { Loader2 } from "lucide-react";
import { useEffect, useState } from "react";

const TALLY_FORM_ID = "3XRAvY";

export function MenuBuilder() {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [loadingStatus, setLoadingStatus] = useState("initial");

  useEffect(() => {
    const loadTally = async () => {
      try {
        setLoadingStatus("loading script");

        if (!window.Tally) {
          const script = document.createElement("script");
          script.src = "https://tally.so/widgets/embed.js";
          script.async = true;

          script.onload = () => {
            setLoadingStatus("script loaded");
            setTimeout(() => {
              if (window.Tally) {
                window.Tally.loadEmbeds();
                setIsLoading(false);
                setLoadingStatus("embeds loaded");
              }
            }, 1000);
          };

          script.onerror = (error) => {
            console.error("Tally script error:", error);
            setHasError(true);
            setIsLoading(false);
            setLoadingStatus("script error");
          };

          document.head.appendChild(script);
        } else {
          window.Tally.loadEmbeds();
          setIsLoading(false);
          setLoadingStatus("existing script used");
        }
      } catch (err) {
        console.error("Tally loading error:", err);
        setHasError(true);
        setIsLoading(false);
        setLoadingStatus("loading error");
      }
    };

    loadTally();

    return () => {
      const script = document.querySelector(
        'script[src="https://tally.so/widgets/embed.js"]'
      );
      if (script) {
        script.remove();
      }
    };
  }, []);

  if (hasError) {
    return (
      <Alert variant="destructive" className="mb-4">
        <AlertDescription>
          Une erreur est survenue lors du chargement du formulaire. (Status:{" "}
          {loadingStatus})
        </AlertDescription>
      </Alert>
    );
  }

  return (
    <div className="min-h-[600px] relative">
      {isLoading ? (
        <div className="flex flex-col items-center justify-center h-[600px] gap-4">
          <Loader2 className="w-8 h-8 animate-spin text-slate-600" />
          <p className="text-slate-600">
            Chargement du formulaire... ({loadingStatus})
          </p>
        </div>
      ) : (
        <>
          <iframe
            src="https://tally.so/embed/3XRAvY"
            width="100%"
            height="600"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
            title="Créateur de menu"
            style={{ border: "none" }}
          />
          <div className="absolute right-0 bottom-0 left-0 p-2 text-xs text-center text-gray-500">
            Form ID: {TALLY_FORM_ID} | Status: {loadingStatus}
          </div>
        </>
      )}
    </div>
  );
}
