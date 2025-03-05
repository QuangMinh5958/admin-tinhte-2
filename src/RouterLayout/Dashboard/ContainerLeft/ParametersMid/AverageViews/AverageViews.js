import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const AverageViews = () => {
  const data = [
    { name: "Jan", view: 0 },
    { name: "Feb", view: 500 },
    { name: "Mar", view: 1000 },
    { name: "Apr", view: 1200 },
    { name: "May", view: 1700 },
    { name: "Jun", view: 1200 },
    { name: "Jul", view: 3600 },
    { name: "Aug", view: 2500 },
    { name: "Sep", view: 1200 },
    { name: "Oct", view: 5000 },
    { name: "Nov", view: 1200 },
    { name: "Dec", view: 1300 },
  ];
  return (
    <div className="bg-[#4b9be7] w-full h-64 pb-14 pl-0 pr-6 rounded-md">
      <div className="flex justify-end py-4  text-white">Average Views</div>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ left: 0 }}>
          <Line type="monotone" dataKey="view" stroke="#ffff" />
          <CartesianGrid
            stroke="#ffff"
            strokeDasharray="5 5"
            vertical={false}
          />
          <XAxis dataKey="name" stroke="#ffff" axisLine={false} />
          <YAxis stroke="#ffff" axisLine={false} />
          <Tooltip itemStyle={{ color: "#000000" }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AverageViews;
