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
      
      // Update position of airplane image
      this.positionMarkerImage(chart, chart.options.data[0].dataPoints.length - 1);
      
      // Update position of airplane image on window resize
      window.addEventListener('resize', () => {
        this.positionMarkerImage(chart, chart.options.data[0].dataPoints.length - 1);
      });
    };

    var updateId = setInterval(() => { updateChart(); }, updateInterval);

    // Store updateId and chart in component state
    this.setState({ updateId });
    this.setState({ chart });
  }

  componentWillUnmount() {
    // Clear interval on component unmount
    clearInterval(this.state.updateId);
  }

  positionMarkerImage = (chart, index) => {
    var pixelX = chart.axisX[0].convertValueToPixel(chart.options.data[0].dataPoints[index].x);
    var pixelY = chart.axisY[0].convertValueToPixel(chart.options.data[0].dataPoints[index].y);

    if (!this.airplaneImage) {
      this.airplaneImage = new Image();
      this.airplaneImage.src = "https://i.imgur.com/4vH0hYL.png";
      this.airplaneImage.classList.add("airplane-image"); // Add class for styling
      this.chartContainerRef.current.appendChild(this.airplaneImage);
    }

    this.airplaneImage.style.top = pixelY - 20 + "px"; // Adjust position to center image on the line
    this.airplaneImage.style.left = pixelX - 20 + "px"; // Adjust position to center image on the line
  };

  render() {

    return (
      <>
        <div className='round_history'> {/* Corrected class name */}
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
          <div ref={this.chartContainerRef} className="chart-container"></div>
        </div>
      </>
    );
  }
}

export default MainLiveChart;
