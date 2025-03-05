import {
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const AverageInteraction = () => {
  const data = [
    { name: "Jan", click: 250, like: 90 },
    { name: "Feb", click: 500, like: 245 },
    { name: "Mar", click: 1000, like: 425 },
    { name: "Apr", click: 1200, like: 602 },
    { name: "May", click: 1700, like: 882 },
    { name: "Jun", click: 1200, like: 902 },
    { name: "Jul", click: 3600, like: 2056 },
    { name: "Aug", click: 2500, like: 2451 },
    { name: "Sep", click: 1200, like: 560 },
    { name: "Oct", click: 5000, like: 2578 },
    { name: "Nov", click: 1200, like: 827 },
    { name: "Dec", click: 1300, like: 402 },
  ];
  return (
    <div className="bg-[#ffffff] w-full h-96 pb-14 pl-0 pr-6 rounded-md shadow-md">
      <div className="flex justify-end py-4  text-[#4d4d50]">
        Average Interaction
      </div>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ left: 0 }}>
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" vertical={false} />
          <XAxis dataKey="name" stroke="#4d4d50" />
          <YAxis stroke="#4d4d50" axisLine={false} />
          <Tooltip itemStyle={{ color: "#000000" }} />
          <Bar dataKey="click" fill="#4b9be7" barSize={30} />
          <Bar dataKey="like" fill="#5fa493" barSize={30} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AverageInteraction;
