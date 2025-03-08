import { ReactNode } from "react";

interface StatCardProps {
  icon: ReactNode;
  title: string;
  value: string | number;
  bgColor?: string;
  borderColor?: string;
  textColor?: string;
}

const StatCard: React.FC<StatCardProps> = ({
  icon,
  title,
  value,
  bgColor = "bg-top-light-10",
  borderColor = "border-gray-df",
  textColor = "text-white",
}) => {
  return (
    <div
      className={`flex flex-col justify-between gap-4 p-5 border rounded-2xl w-full ${bgColor} ${borderColor}`}
    >
      <div className="flex gap-2 items-center">
        {icon}
        <h1 className={`text-sm font-semibold text-white`}>{title}</h1>
      </div>
      <span className={`text-2xl font-black pt-3 pb-2 ${textColor}`}>
        {value}
      </span>
    </div>
  );
};

export default StatCard;