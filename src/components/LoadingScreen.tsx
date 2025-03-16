"use client";
import { useRiveStore } from "@/stores/riveStore";

export const LoadingScreen = () => {
  const { isRiveLoaded } = useRiveStore();

  if (isRiveLoaded) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 transition-opacity duration-500">
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-t-transparent border-white rounded-full animate-spin mx-auto mb-4"></div>
        <p className="text-white text-lg">Loading experience...</p>
      </div>
    </div>
  );
};
