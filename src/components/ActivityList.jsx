import ActivityCard from "./ActivityCard.jsx";

export default function ActivityList({ activities }) {
  if (activities.length === 0) {
    return <p>No activities found 😢</p>;
  }

  return (
    <div className="card-grid">
      {activities.map((a) => (
        <ActivityCard key={a.id} activity={a} />
      ))}
    </div>
  );
}
