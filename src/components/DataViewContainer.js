import React from 'react';
import {ShotChart} from "./ShotChart"

import {
    Radio, Switch
} from 'antd';
import {CountSlider} from "./CountSlider"

const RadioGroup = Radio.Group;

export  class DataViewContainer extends React.Component {

    state = {
        minCount: 2,
        displayToolTips: true,
        chartType: "hexbin"
    }

    onChange = (value) => {
        this.setState({
            inputValue: value,
            minCount: value
        });
    }

    onMinCountChange = (value) => {
        this.setState({
            minCount:value
        })
    }

    onDisplayToolTipsChange = (displayToolTips)=> {
        this.setState({
            displayToolTips
        })
    }


    onChartTypeChange = (e) => {
        this.setState({
            chartType : e.target.value
        });

    }
    render() {
        const { inputValue } = this.state;
        return (
            <div style = {{ flex : 1}}>
                <ShotChart
                    playerId = {this.props.playerId}
                    minCount={this.state.minCount}
                    displayToolTips={this.state.displayToolTips}
                    chartType= {this.state.chartType}/>
                <CountSlider onMinCountChange = {this.onMinCountChange}/>
                <RadioGroup value={this.state.chartType} onChange={this.onChartTypeChange}>
                    <Radio value="hexbin">Hexbin</Radio>
                    <Radio value ="scatter">Scatter</Radio>
                </RadioGroup>

                <Switch
                    onChange={this.onDisplayToolTipsChange}
                    checkedChildren="On"
                    unCheckedChildren="Off"
                    defaultChecked
                />
            </div>
        );
    }
}