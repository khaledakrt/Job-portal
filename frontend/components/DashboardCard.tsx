interface DashboardCardProps {
  title: string;
  value: string | number;
  icon?: React.ReactNode;
}

export default function DashboardCard({ title, value, icon }: DashboardCardProps) {
  return (
    <div className="bg-white rounded-xl shadow p-5 flex justify-between items-center hover:shadow-lg transition">
      <div>
        <p className="text-gray-500 text-sm">{title}</p>
        <p className="text-2xl font-bold text-blue-800">{value}</p>
      </div>
      {icon && (
        <div className="text-3xl text-yellow-400">
          {icon}
        </div>
      )}
    </div>
  );
}
