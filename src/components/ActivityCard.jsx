export default function ActivityCard({ activity }) {
  return (
    <div className="card">
      <h3>{activity.title}</h3>

      <p className="meta">Budget: {activity.budget}</p>

      {activity.location && <p className="meta">📍 {activity.location}</p>}
    </div>
  );
}
