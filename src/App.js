import React, { Component } from 'react';

import './App.css';
import { Button,Navbar ,Grid,Row,Col,ProgressBar,Well} from 'react-bootstrap';
import '../node_modules/react-vis/dist/style.css';
import {XYPlot, LineSeries,VerticalBarSeries,
  VerticalGridLines,
  HorizontalGridLines,
  XAxis,
    YAxis,
  VerticalBarSeriesCanvas,
  DiscreteColorLegend,
MarkSeries} from 'react-vis';
import {Doughnut} from 'react-chartjs-2';
var Papa = require('papaparse')
var LineChart = require("react-chartjs").Line;
var BarChart = require("react-chartjs").Bar
var PieChart = require("react-chartjs").Pie;

/*var d3 = require('d3');
var ReactDOM = require('react-dom');*/

class App extends Component {

constructor()
{
super()
this.state = {
   useCanvas: false
 }
}



test()
{
  Papa.parse('http://localhost:3000/developers.csv', {
	complete: function(results) {
		console.log("Finished:", results.data);
	}
});








}








  render() {
    //this.test()
    const datagenre = {
    	labels: [
    		'Red',
    		'Green',
    		'Yellow'
    	],
    	datasets: [{
    		data: [300, 50, 100],
    		backgroundColor: [
    		'#FF6384',
    		'#36A2EB',
    		'#FFCE56'
    		],
    		hoverBackgroundColor: [
    		'#FF6384',
    		'#36A2EB',
    		'#FFCE56'
    		]
    	}]
    };










    const data = [
      {'Professional developer':	36131},
  {'Student'	: 8224},
  {'Professional non-developer who sometimes writes code':	5140},
  {'Used to be a professional developer'	:983},
  {'None of these'	:914}

       ];
       var bardata = {
       	labels: ["January", "February", "March", "April", "May", "June", "July"],
       	datasets: [
       		{
       			label: "My First dataset",
       			fillColor: "rgba(220,220,220,0.5)",
       			strokeColor: "rgba(220,220,220,0.8)",
       			highlightFill: "rgba(220,220,220,0.75)",
       			highlightStroke: "rgba(220,220,220,1)",
       			data: [65, 59, 80, 81, 56, 55, 40]
       		},
       		{
       			label: "My Second dataset",
       			fillColor: "rgba(151,187,205,0.5)",
       			strokeColor: "rgba(151,187,205,0.8)",
       			highlightFill: "rgba(151,187,205,0.75)",
       			highlightStroke: "rgba(151,187,205,1)",
       			data: [28, 48, 40, 19, 86, 27, 90]
       		}
       	]
       };








       const {useCanvas} = this.state;
         const BarSeries = useCanvas ? VerticalBarSeriesCanvas : VerticalBarSeries;
         const content = useCanvas ? 'TOGGLE TO SVG' : 'TOGGLE TO CANVAS';
         const countriesdata = [
         	{
         		value: 300,
         		color:"#F7464A",
         		highlight: "#FF5A5E",
         		label: "Red"
         	},
         	{
         		value: 50,
         		color: "#46BFBD",
         		highlight: "#5AD3D1",
         		label: "Green"
         	},
         	{
         		value: 100,
         		color: "#FDB45C",
         		highlight: "#FFC870",
         		label: "Yellow"
         	},
         	{
         		value: 40,
         		color: "#949FB1",
         		highlight: "#A8B3C5",
         		label: "Grey"
         	},
         	{
         		value: 120,
         		color: "#4D5360",
         		highlight: "#616774",
         		label: "Dark Grey"
         	}

         ];
    return (
      <div>

      <Navbar inverse collapseOnSelect>
      		<Navbar.Header>
      			<Navbar.Brand>
      				<a href="#brand">StackOverflow Analaysis</a>
      			</Navbar.Brand>
      			<Navbar.Toggle />
      		</Navbar.Header>

      	</Navbar>



<div className="container">
<Grid>




  <Row className="show-grid">
    <Col xs={4} md={3}>
  <h3> Type of Developers </h3>
  <div>
  <Well>32155 Professional Developers</Well>
  <Well>32155 Professional Developers</Well>
  <Well>32155 Professional Developers</Well>
  <Well>32155 Professional Developers</Well>
</div>
    </Col>
    <Col xs={12} md={9}>


<BarChart data={bardata}  width="600" height="250"/>






    </Col>
  </Row>


  <br />
  <br />
  <br />
  <br />
  <br />
  <br />





  <Row className="show-grid">
    <Col xs={4} md={3}>
  <h3> Geography </h3>
  <div>
  <Well>32155 Germany</Well>
  <Well>32155 Tunisia</Well>
  <Well>32155 Tunisia</Well>
  <Well>32155 Tunisia</Well>
</div>
    </Col>
    <Col xs={12} md={9}>
<PieChart data={countriesdata} />








    </Col>
  </Row>






  <br />
  <br />
  <br />
  <br />
  <br />
  <br />











  <Row className="show-grid">
    <Col xs={4} md={3}>
  <h3> Developer Roles </h3>
  <div>
  <Well>32155 Professional Developers</Well>
  <Well>32155 Professional Developers</Well>
  <Well>32155 Professional Developers</Well>
  <Well>32155 Professional Developers</Well>
</div>
    </Col>
    <Col xs={12} md={9}>




    </Col>
  </Row>


<br />
<br />
<br />
<br />
<br />
<br />
















  <Row className="show-grid">
    <Col xs={4} md={3}>
  <h3> Experience </h3>
  <div>
  <Well>32155 Professional Developers</Well>
  <Well>32155 Professional Developers</Well>
  <Well>32155 Professional Developers</Well>
  <Well>32155 Professional Developers</Well>
</div>
    </Col>
    <Col xs={12} md={9}>
<p> icic charts experience </p>

    </Col>
  </Row>

  <br />
  <br />
  <br />
  <br />
  <br />
  <br />













  <Row className="show-grid">
    <Col xs={4} md={3}>
  <h3> Years Coding Professionally </h3>
  <div>
  <Well>25 Years of Coding</Well>

</div>
    </Col>
    <Col xs={12} md={9}>



<p> years of coding </p>



    </Col>
  </Row>



  <br />
  <br />
  <br />
  <br />
  <br />
  <br />








  <Row className="show-grid">
    <Col xs={4} md={3}>
  <h3> Gender </h3>
  <div>
  <Well>32155 Male </Well>
   <Well>32155 Female </Well>
</div>
    </Col>
    <Col xs={12} md={9}>



    </Col>
  </Row>



  <br />
  <br />
  <br />
  <br />
  <br />
  <br />










  <Row className="show-grid">
    <Col xs={4} md={3}>
  <h3> Educational Attainment </h3>
  <div>
  <Well>32155 Master Degree</Well>

</div>
    </Col>
    <Col xs={12} md={9}>

<p> hdhddh </p>


    </Col>
  </Row>

  <br />
  <br />
  <br />
  <br />
  <br />
  <br />






  <Row className="show-grid">
    <Col xs={4} md={3}>
  <h3>Program as a Hobby </h3>
  <div>
  <Well>32155 Yes </Well>

</div>
    </Col>
    <Col xs={12} md={9}>
<p> charts programming hobby </p>
    </Col>
  </Row>



  <br />
  <br />
  <br />
  <br />
  <br />
  <br />






  <Row className="show-grid">
    <Col xs={4} md={3}>
  <h3> Programming Languages </h3>
  <div>
  <Well>Programming Languages</Well>

</div>
    </Col>
    <Col xs={12} md={9}>

ici charts


    </Col>
  </Row>



  <br />
  <br />
  <br />
  <br />
  <br />
  <br />





    <Row className="show-grid">
      <Col xs={4} md={3}>
    <h3> Frameworks, Libraries, and Other Technologies </h3>
    <div>
    <Well>Programming Languages</Well>

  </div>
      </Col>
      <Col xs={12} md={9}>

  ici charts


      </Col>
    </Row>



    <br />
    <br />
    <br />
    <br />
    <br />
    <br />






        <Row className="show-grid">
          <Col xs={4} md={3}>
        <h3> Databases</h3>
        <div>
        <Well>Programming Languages</Well>

      </div>
          </Col>
          <Col xs={12} md={9}>

      ici charts


          </Col>
        </Row>



        <br />
        <br />
        <br />
        <br />
        <br />
        <br />




        <Row className="show-grid">
          <Col xs={4} md={3}>
        <h3> Platforms</h3>
        <div>
        <Well>Programming Languages</Well>

      </div>
          </Col>
          <Col xs={12} md={9}>

      ici charts


          </Col>
        </Row>




</Grid>

</div>









      </div>
    );
  }
}

export default App;
