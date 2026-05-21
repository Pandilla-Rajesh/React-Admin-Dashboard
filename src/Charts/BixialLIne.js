import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

const data = [
  {name: 'Jan', followers: 4000, posts: 2400},
  {name: 'Feb', followers: 3000, posts: 1398},
  {name: 'Mar', followers: 2000, posts: 9800},
  {name: 'Apr', followers: 5000, posts: 10000},
  {name: 'May', followers: 5000, posts: 11000},
  {name: 'June', followers: 5500, posts: 11500},
  {name: 'July', followers: 6000, posts: 12000},
  {name: 'Aug', followers: 6500, posts: 12200},
  {name: 'Sep', followers: 7300, posts: 13000},
  {name: 'Oct', followers: 8500, posts: 13500},
  {name: 'Nov', followers: 9000, posts: 14000},
  {name: 'Dec', followers: 9500, posts: 15000}
];

export default function BixialLIne() {
  return (
    <div style={{ width: '100%', height: 400 }}>
      <ResponsiveContainer>
        <LineChart data={data}>
          
          <CartesianGrid strokeDasharray="1" />

          <XAxis
            dataKey="name"
            tick={{ fontSize: 12 }}
          />

          <YAxis yAxisId="left" />

          <YAxis
            yAxisId="right"
            orientation="right"
          />

          <Tooltip />

          <Legend />

          <Line
            yAxisId="left"
            type="monotone"
            dataKey="posts"
            name="Posts"
            stroke="#ff6b6b"
            strokeWidth={3}
          />

          <Line
            yAxisId="right"
            type="monotone"
            dataKey="followers"
            name="Followers"
            stroke="#4f46e5"
            strokeWidth={3}
          />

        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}