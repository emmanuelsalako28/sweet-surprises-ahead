import { useState, useEffect } from "react";

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const launchDay = new Date("2026-02-02T00:00:00");

    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = launchDay.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeUnits = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <div className="w-full max-w-xl mx-auto px-2">
      <div className="grid grid-cols-4 gap-2 sm:gap-4 md:gap-6">
        {timeUnits.map((unit) => (
          <div
            key={unit.label}
            className="flex flex-col items-center p-2 sm:p-3 md:p-5 bg-card/90 backdrop-blur-sm rounded-xl shadow-romantic border border-primary/20 transition-transform hover:scale-105"
          >
            <span className="text-xl sm:text-2xl md:text-5xl font-display font-bold text-primary animate-pulse-soft">
              {String(unit.value).padStart(2, "0")}
            </span>
            <span className="text-[10px] sm:text-xs md:text-sm font-body text-muted-foreground uppercase tracking-wider mt-1">
              {unit.label}
            </span>
          </div>
        ))}
      </div>
      <p className="text-center mt-6 text-muted-foreground font-body italic text-sm md:text-base">
        The wait makes it sweeter ✨
      </p>
    </div>
  );
};

export default CountdownTimer;
