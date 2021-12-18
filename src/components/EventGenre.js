import React, { useEffect, useState } from 'react'
import { PieChart, Pie, ResponsiveContainer } from 'recharts';

const EventGenre = ({ events }) => {
    const [data, setData] = useState([])

    useEffect(() => {
        const getData = () => {
            const genres = ['React', 'JavaScript', 'Node', 'jQuery', 'AngularJS'];
            const data = genres.map((genre) => {
                const value = events.filter((event) => {
                    let summary = event.summary.split(' ')
                    return summary.includes(genre) === true
                }).length
                return { name: genre, value }
            })
            return data
        }
        setData(() => getData());
    }, [events])


    return (
        <div className="eventComponent mb-3">
            <h3 className='p-4'>Technologies</h3>
            <ResponsiveContainer height={500}>
                <PieChart>
                    <Pie
                        data={data}
                        cx={300}
                        cy={200}
                        labelLine={false}
                        outerRadius={90}
                        fill="#8884d8"
                        dataKey="value"
                        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    >
                    </Pie>
                </PieChart>
            </ResponsiveContainer>
        </div>
    )
}

export default EventGenre