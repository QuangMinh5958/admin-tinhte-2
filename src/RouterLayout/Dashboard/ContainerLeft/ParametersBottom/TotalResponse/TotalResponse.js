import {
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const TotalResponse = () => {
  const data = [
    { name: "Jan", love: 250, like: 90, wow: 32, angry: 5 },
    { name: "Feb", love: 500, like: 245, wow: 78, angry: 7 },
    { name: "Mar", love: 1000, like: 425, wow: 72, angry: 4 },
    { name: "Apr", love: 1200, like: 602, wow: 22, angry: 12 },
    { name: "May", love: 1700, like: 882, wow: 82, angry: 0 },
    { name: "Jun", love: 1200, like: 902, wow: 102, angry: 3 },
    { name: "Jul", love: 3600, like: 2056, wow: 132, angry: 2 },
    { name: "Aug", love: 2500, like: 2451, wow: 102, angry: 1 },
    { name: "Sep", love: 1200, like: 560, wow: 52, angry: 7 },
    { name: "Oct", love: 5000, like: 2578, wow: 42, angry: 4 },
    { name: "Nov", love: 1200, like: 827, wow: 35, angry: 4 },
    { name: "Dec", love: 1300, like: 402, wow: 39, angry: 5 },
  ];

  const CustomTooltip = ({ payload, label }: any) => {
    if (!payload || payload.length === 0) return null;

    // Lấy dữ liệu từ payload
    const { love, like, wow, angry } = payload[0].payload;

    return (
      <div className="flex flex-col bg-white p-2 shadow-lg rounded-md">
        <div>
          <strong>Month: </strong>
          {label}
        </div>
        <div>
          <strong>👍: </strong>
          {like}
        </div>
        <div>
          <strong>❤️: </strong>
          {love}
        </div>
        <div>
          <strong>😮 : </strong>
          {wow}
        </div>
        <div>
          <strong>😡 : </strong>
          {angry}
        </div>
      </div>
    );
  };

  const updatedData = data.map((item) => ({
    ...item,
    total: item.love + item.like + item.wow + item.angry,
  }));

  return (
    <div className="bg-[#ffffff] w-full h-96 pb-14 pl-0 pr-6 rounded-md shadow-md">
      <div className="flex justify-end py-4  text-[#4d4d50]">
        Total Response
      </div>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={updatedData} margin={{ left: 0 }}>
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" vertical={false} />
          <XAxis dataKey="name" stroke="#4d4d50" />
          <YAxis stroke="#4d4d50" axisLine={false} />
          <Tooltip
            itemStyle={{ color: "#000000" }}
            content={<CustomTooltip />}
          />
          <Bar dataKey="total" fill="#267ed1" barSize={30} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TotalResponse;
