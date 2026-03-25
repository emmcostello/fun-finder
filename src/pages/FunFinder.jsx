import { useState } from "react";
import FilterPanel from "../components/FilterPanel";
import ActivityList from "../components/ActivityList";
import { activities } from "../data/activities";

export default function FunFinder() {
  const [budget, setBudget] = useState("free");
  const [weather, setWeather] = useState("any");

  const filtered = activities.filter((a) => {
    const budgetMatch = a.budget === budget;
    const weatherMatch = weather === "any" || a.weather === weather;
    return budgetMatch && weatherMatch;
  });

  return (
    <div>
      <h1 className="title">Fun Finder</h1>
      <p>
        Choose your budget and weather and let our random activity generator
        find something fun for you!
      </p>

      <FilterPanel
        budget={budget}
        setBudget={setBudget}
        weather={weather}
        setWeather={setWeather}
      />

      <ActivityList activities={filtered} />
    </div>
  );
}
