import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const AverageReachs = () => {
  const data = [
    { name: "Jan", reach: 0 },
    { name: "Feb", reach: 5000 },
    { name: "Mar", reach: 40000 },
    { name: "Apr", reach: 72000 },
    { name: "May", reach: 12000 },
    { name: "Jun", reach: 7000 },
    { name: "Jul", reach: 26000 },
    { name: "Aug", reach: 35000 },
    { name: "Sep", reach: 52000 },
    { name: "Oct", reach: 10000 },
    { name: "Nov", reach: 42000 },
    { name: "Dec", reach: 13000 },
  ];

  return (
    <div className="bg-[#5fa493] w-full h-64 pb-14 pl-0 pr-6 rounded-md">
      <div className="flex justify-end py-4 text-white">Average Reachs</div>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ left: 0 }}>
          <Line type="monotone" dataKey="reach" stroke="#ffff" />
          <CartesianGrid
            stroke="#ffff"
            strokeDasharray="5 5"
            vertical={false}
          />
          <XAxis dataKey="name" stroke="#ffff" axisLine={false} />
          <YAxis stroke="#ffff" />
          <Tooltip itemStyle={{ color: "#000000" }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AverageReachs;
