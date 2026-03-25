export default function FilterPanel({
  budget,
  setBudget,
  weather,
  setWeather,
}) {
  return (
    <div>
      <h2>Filters</h2>
      <label>Budget:</label>
      <select value={budget} onChange={(e) => setBudget(e.target.value)}>
        <option value="free">Free</option>
        <option value="cheap">Cheap</option>
        <option value="treat">Treat</option>
      </select>
      <label>Weather:</label>
      <select value={weather} onChange={(e) => setWeather(e.target.value)}>
        <option value="any">Any</option>
        <option value="sunny">Sunny</option>
        <option value="rainy">Rainy</option>
      </select>
    </div>
  );
}
