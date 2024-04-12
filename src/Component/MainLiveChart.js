import React, { Component } from 'react';
import { useState } from 'react';
import CanvasJSReact from '@canvasjs/react-charts';
import { Accordion } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';



class MainLiveChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      updateId: null,
      chart: null
    };
    this.chartContainerRef = React.createRef();
    this.airplaneImage = null;
  }

  componentDidMount() {
    // Chart setup and rendering
    var dps = [];
    var updateInterval = 500;

    var chart = new CanvasJSReact.CanvasJS.Chart(this.chartContainerRef.current, {
      title: {
        text: "4.03x",
        dockInsidePlotArea: true,
        verticalAlign: "center",
        fontSize: 100,
      },
      theme: "dark2",
      axisX: {
        gridThickness: 0,
        tickLength: 0,
        labelFontSize: 20,
        labelFormatter: function (e) {
          return "."
        }
      },
      axisY: {
        gridThickness: 0,
        tickLength: 0,
        margin: 10,
        lineThickness: 1,
        labelFontSize: 20,
        labelFormatter: function (e) {
          return "."
        }
      },
      data: [
        {
          color: "red",
          markerSize: 0,
          fillOpacity: 0.3,
          lineThickness: 4,
          type: "area",
          markerImageUrl: "https://i.imgur.com/4vH0hYL.png",
          dataPoints: dps
        }
      ]
    });

    var xVal = 0;
    var yVal = 0;

    var updateChart = () => {
      yVal = xVal ** 2;
      dps.push({ x: xVal, y: yVal });
      xVal++;
      chart.render();
      chart.axisY[0].set("maximum", yVal + 1);
      this.positionMarkerImage(chart, chart.options.data[0].dataPoints.length - 1);
    };

    var updateId = setInterval(() => { updateChart(); }, updateInterval);

    window.addEventListener('resize', () => {
      this.positionMarkerImage(chart, chart.options.data[0].dataPoints.length - 1);
    });

    // Store updateId and chart in component state
    this.setState({ updateId });
    this.setState({ chart });
  }

  componentWillUnmount() {
    // Clear interval and remove event listener on component unmount
    clearInterval(this.state.updateId);
    window.removeEventListener('resize', () => {
      this.positionMarkerImage(this.state.chart, this.state.chart.options.data[0].dataPoints.length - 1);
    });
  }

  positionMarkerImage = (chart, index) => {
    var pixelX = chart.axisX[0].convertValueToPixel(chart.options.data[0].dataPoints[index].x);
    var pixelY = chart.axisY[0].convertValueToPixel(chart.options.data[0].dataPoints[index].y);

    if (!this.airplaneImage) {
      this.airplaneImage = new Image();
      // this.airplaneImage.src = "https://image.flaticon.com/icons/png/512/868/868059.png";
      this.airplaneImage.src = "https://i.imgur.com/4vH0hYL.png";
      this.airplaneImage.style.position = "absolute";
      this.airplaneImage.style.display = "block";
      this.airplaneImage.style.height = "40px";
      this.airplaneImage.style.width = "40px";
      this.chartContainerRef.current.appendChild(this.airplaneImage);
    }

    this.airplaneImage.style.top = pixelY - 20 + "px"; // Adjust position to center image on the line
    this.airplaneImage.style.left = pixelX - 20 + "px"; // Adjust position to center image on the line
  };

  render() {

    return (
      <>
        <div className='round_hostory'>
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="1">
              <Accordion.Header>
                <h6>Round History</h6>
              </Accordion.Header>
              <Accordion.Body>
                <div className='round_history_type'>
                  <ul>
                    <li>
                      <button variant="primary" > 1.55X</button>
                    </li>
                  </ul>
                </div>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>

        <div>
          {/* Chart container */}
          <div ref={this.chartContainerRef} style={{ height: '500px', width: '100%', position: 'relative' }}></div>
        </div>
      </>
    );
  }
}

export default MainLiveChart;
