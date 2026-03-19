export function StatCard({ title, value }) {
  return (
    <div className=" p-6 rounded-lg bg-black">
      <p className="text-gray-400">{title}</p>
      <h2 className="text-2xl font-bold break-words">{value}</h2>
    </div>
  );
}
