import React, { Component } from 'react'
import {
    ScatterChart, Scatter, XAxis, YAxis, ZAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts';

class ScatterPlot extends Component {
    render() {
        return (
            <div className="eventComponent">
                <h3 className='p-4'>Cities</h3>
                <ResponsiveContainer height={500}>
                    <ScatterChart
                        margin={{
                            top: 20, right: 40, bottom: 20, left: 0,
                        }}
                    >
                        <CartesianGrid vertical={false} />
                        <XAxis type="category" dataKey="city" name="City" tick={false} />
                        <YAxis type="number" dataKey="number" name="Number of Events" allowDecimals={false} />
                        <ZAxis range={[150, 150]} />
                        <Tooltip cursor={{ strokeDasharray: '3 3' }} />
                        <Scatter data={this.props.getData()} fill="#8884d8" />
                    </ScatterChart>
                </ResponsiveContainer>
            </div>
        )
    }
}

export default ScatterPlot