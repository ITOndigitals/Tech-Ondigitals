import { useState, useEffect, useMemo } from "react";
import { useRouter } from "next/router";

const usePageLoading = (delay = 1000) => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const events = useMemo(() => router.events, [router]);
  useEffect(() => {
    const handleStart = () => setIsLoading(true);
    const handleComplete = () => {
      setTimeout(() => setIsLoading(false), delay);
    };

    events.on("routeChangeStart", handleStart);
    events.on("routeChangeComplete", handleComplete);
    events.on("routeChangeError", handleComplete);

    return () => {
      events.off("routeChangeStart", handleStart);
      events.off("routeChangeComplete", handleComplete);
      events.off("routeChangeError", handleComplete);
    };
  }, [events]);

  return isLoading;
};

export default usePageLoading;
