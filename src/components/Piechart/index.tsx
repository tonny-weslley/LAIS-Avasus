import { ResponsiveContainer, PieChart, Pie } from 'recharts';

const Piechart = () => {

    const data = [
        { name: 'Group A', value: 400 },
        { name: 'Group B', value: 300 },
        { name: 'Group C', value: 300 },
        { name: 'Group D', value: 200 },
        ];
    return(
    <ResponsiveContainer>
          <PieChart width={600} height={300}>
            <Pie dataKey="value" data={data} fill="#8884d8" label />
          </PieChart>
        </ResponsiveContainer>
    );
}

export default Piechart