import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const RatingChart = ({ ratings }) => {
  const ratingChart = [...ratings].reverse();
  return (
    <div style={{ width: "100%", height: 500 }}>
      <ResponsiveContainer width="100%" height="100%" className="mt-10">
        <BarChart
          data={ratingChart}
          layout="vertical"
          barCategoryGap={30}
          
        >
          <CartesianGrid
            strokeDasharray="3 3"
            stroke="#e0e0e0"
            horizontal={false}
          />
          <XAxis type="number" tick={{ fontSize: 12, color: "#666" }} />
          <YAxis
            type="category"
            dataKey="name"
            tick={{ fontSize: 14, fontWeight: 500 }}
          />
          <Tooltip
            formatter={(value) => [
              `reviews: ${Number(value).toLocaleString()} `,
            ]}
            labelFormatter={(label) => label}
            contentStyle={{ borderRadius: "6px", border: "1px solid #ddd" }}
          />
          <Legend
            iconType="square"
            iconSize={15}
            wrapperStyle={{ paddingTop: 15, fontSize: 15 }}
          />
          <Bar dataKey="count" fill="#00D084" radius={[0, 4, 4, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RatingChart;
