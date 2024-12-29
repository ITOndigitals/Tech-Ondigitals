import { useState, useEffect } from "react";

const useMediaQuery = (maxWidth) => {
  const [isMatch, setIsMatch] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(`(max-width: ${maxWidth}px)`);

    const updateMatch = () => {
      setIsMatch(mediaQuery.matches);
    };

    updateMatch(); // Kiểm tra ngay khi component được render
    mediaQuery.addEventListener("change", updateMatch); // Lắng nghe thay đổi

    return () => {
      mediaQuery.removeEventListener("change", updateMatch); // Cleanup khi component unmount
    };
  }, [maxWidth]);

  return isMatch;
};

export default useMediaQuery;
