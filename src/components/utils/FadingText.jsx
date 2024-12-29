import React, { useEffect, useState } from "react";
export default function FadingText({
  words,
  interval = 1500,
  fadeDuration = 1000,
}) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeout(() => {
        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
      }, fadeDuration); // Thời gian để hoàn thành fade-out
    }, interval);

    return () => clearInterval(intervalId); // Dọn dẹp interval khi unmount
  }, [words.length, interval, fadeDuration]);

  return <span>{words[currentWordIndex]}</span>;
}
