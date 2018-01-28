import React, { Component } from 'react';

import './App.css';
import { Button,Navbar ,Grid,Row,Col,ProgressBar,Well, Label} from 'react-bootstrap';
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
var RadarChart = require("react-chartjs").Radar;
var PolarAreaChart =require("react-chartjs").PolarArea;
var DoughnutChart = require("react-chartjs").Doughnut;
var axios = require('axios');



var topojson = require('topojson');

/*var d3 = require('d3');
var ReactDOM = require('react-dom');*/

class App extends Component {

constructor()
{
super()
this.state = {
   type_developers : [],
   countries :[],
   educations :[],
   gender :[],
   programmer_hobbies :0,
   nbr_web_developers :0,
   web_developers :[],
  nbr_mobile_developers :0,
  mobile_developers : [],
  ide :[],
  programming_languaes :[],
  databases :[],
  frameworks :[],
  methodologies :[],
  version_controls :[],
  platforms :[],
  programming_languages :[],
  platforms :[],
  developer_type :[],
 }
}

//****************************//


componentDidMount() {


  //**********get the developers professions*********
    axios.get(`http://localhost:9000/programmers_professions`)
      .then(res => {
        this.setState({ type_developers:res.data });
      });



      //**********get countires*********
        axios.get(`http://localhost:9000/countries`)
          .then(res => {
            this.setState({ countries:res.data });
          });




          //**********get educations*********
            axios.get(`http://localhost:9000/educations`)
              .then(res => {
                this.setState({ educations:res.data });
              });



                //**********get educations*********
              axios.get(`http://localhost:9000/programmer_hobbies`)
                            .then(res => {

                              this.setState({ programmer_hobbies:res.data[0]['count(1)'] });
                            });


  //**********web developers roles *********
axios.get(`http://localhost:9000/web_developers`)
                                        .then(res => {

                                          this.setState({ web_developers:res.data });
                                        });


                                                        //**********get nbr web developers *********
                                                      axios.get(`http://localhost:9000/nbr_web_developers`)
                                                                    .then(res => {

                                                                      this.setState({ nbr_web_developer:res.data[0]['count(1)'] });
                                                                    });

                                                                    //**********get nbr web developers *********
                                                                  axios.get(`http://localhost:9000/nbr_mobile_developers`)
                                                                                .then(res => {

                                                                                  this.setState({ nbr_mobile_developers:res.data[0]['count(1)'] });
                                                                                });

                                                                                //**********get mobile developers  *********
                                                                              axios.get(`http://localhost:9000/mobile_developers`)
                                                                                            .then(res => {

                                                                                              this.setState({ mobile_developers:res.data});
                                                                                            });

                                                                                            //**********get programming languages  *********
                                                                                          axios.get(`http://localhost:9000/programming_languages`)
                                                                                                        .then(res => {

                                                                                                          this.setState({ programming_languages:res.data});
                                                                                                        });


                                                                                                        //**********databases  *********
                                                                                                      axios.get(`http://localhost:9000/databases`)
                                                                                                                    .then(res => {

                                                                                                                      this.setState({databases:res.data});
                                                                                                                    });


                                                                                                                    //*********platforms *********
                                                                                                                  axios.get(`http://localhost:9000/paltforms`)
                                                                                                                                .then(res => {

                                                                                                                                  this.setState({platforms:res.data});
                                                                                                                                });


                                                                                                                                //*********platforms *********
                                                                                                                              axios.get(`http://localhost:9000/frameworks`)
                                                                                                                                            .then(res => {

                                                                                                                                              this.setState({frameworks:res.data});
                                                                                                                                            });


                                                                                                                                            //*********platforms *********
                                                                                                                                          axios.get(`http://localhost:9000/version_control`)
                                                                                                                                                        .then(res => {

                                                                                                                                                          this.setState({version_controls:res.data});
                                                                                                                                                        });
}










  render() {







const { type_developers} = this.state ;
const { countries} = this.state ;
const { educations} = this.state ;
const { programmer_hobbies} = this.state ;
const { nbr_web_developer } = this.state ;
const { nbr_mobile_developers} = this.state ;
const { web_developers} = this.state ;
const { mobile_developers} = this.state ;
const { programming_languages} = this.state ;
const { databases } = this.state ;
const { platforms } = this.state ;
const { frameworks } = this.state ;
const { version_controls} = this.state ;
//**********************************//
const list_type_developers = type_developers.map((dev) =>
<Well> <Label>{ dev.nbr} </Label> <b> { dev.Professional} </b>  </Well>
);
//****************************//
const list_countries = countries.map((count) =>
<Well> <Label>{ count.nbr} </Label>  Developers   From  <b> { count.Country} </b>   </Well>
);

const list_educations = educations.map((educ) =>
<Well> <Label>{ educ.nbr} </Label>   studies :    <b> { educ.FormalEducation} </b>   </Well>
);


const list_web_developers = web_developers.map((web) =>
<Well> <Label>{ web.nbr} </Label>  Are   <b>{ web.WebDeveloperType} </b>  </Well>
);

const list_mobile_developers = mobile_developers.map((mob) =>
<Well> <Label>{ mob.nbr} </Label>   Are    <b>{ mob.MobileDeveloperType} </b>  </Well>
);

const list_programming_languages =programming_languages.map((prog) =>
<Well> { prog }  </Well>
);

const list_databases  =databases.map((data) =>
<Well> { data }  </Well>
);


const list_platforms  =platforms.map((plat) =>
<Well> { plat }  </Well>
);



const list_frameworks  =frameworks.map((frame) =>
<Well> { frame }  </Well>
);


const list_version_controls  = version_controls.map((ver) =>
<Well> <Label>{ ver.type} </Label>   indicates :     <b>{ ver.VersionControl} </b>   </Well>
);



    const data = [
      {'Professional developer':	36131},
  {'Student'	: 8224},
  {'Professional non-developer who sometimes writes code':	5140},
  {'Used to be a professional developer'	:983},
  {'None of these'	:914}

       ];

       var polardata = [
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







       var developerdata = {
       	labels: ["Professional developer", "Student", "Professional non-developer", "Used to be a professional developer",
         "None of these"],
       	datasets: [
       		{
       			label: "My First dataset",
       			fillColor: "rgba(220,220,220,0.5)",
       			strokeColor: "rgba(220,220,220,0.8)",
       			highlightFill: "rgba(220,220,220,0.75)",
       			highlightStroke: "rgba(220,220,220,1)",
       			data: [361.31,82.24,51.40,9.83,9.14]
       		},

       	]
       };


       var education_data = {
       	labels: ["Bachelor's degree", "Secondary school", "No Answer"],
       	datasets: [
       		{
       			label: "My First dataset",
       			fillColor: "rgba(220,220,220,0.5)",
       			strokeColor: "rgba(220,220,220,0.8)",
       			highlightFill: "rgba(220,220,220,0.75)",
       			highlightStroke: "rgba(220,220,220,1)",
       			data: [13813,3878,786]
       		},

       	]
       };


       var web_data = [
	{
		value: 6816,
		color:"#F7464A",
		highlight: "#FF5A5E",
		label: "Full-Stack"
	},
	{
		value: 2610,
		color: "#46BFBD",
		highlight: "#5AD3D1",
		label: "Back-end"
	},
	{
		value: 1270 ,
		color: "#FDB45C",
		highlight: "#FFC870",
		label: "Front-end"
	}
]

//*******************************//
var mobile_data = [
{
value: 641,
color:"#009688",
highlight: "#009688",
label: "Android"
},
{
value: 534,
color: "#3F51B5",
highlight: "#5AD3D1",
label: "IOS"
},
{
value: 5 ,
color: "#6200EA",
highlight: "#FFC870",
label: "Windows Phone"
}
]


var database_data
=
{
  labels: ["MongoDB", "MySQL", "Cassandra","Oracle",
"PostgreSQL","Redis"],
  datasets: [
    {

      data: [118,125,110,115,115,118]
    },

  ]
}
//**************************************//

var frameworks_data
=
{
  labels: ["Firebase", "Cordova'", "Nodejs",".NET",
"AngularJS","Spark","React","Xamarin"],
  datasets: [
    {

      data: [104,109,151,124,146,91,115,92]
    },

  ]
}

//******************//

var version_data =[

  {
  value: 15927,
  color:"#009688",
  highlight: "#009688",
  label: "Git"
  },
  {
  value: 2138,
  color: "#4c8c63",
  highlight: "#5AD3D1",
  label: "Subversion"
  },
  {
  value: 1698  ,
  color: "#84b578",
  highlight: "#FFC870",
  label: "Team Foundation Server"
},

{
value: 1178   ,
color: "#9f6f17",
highlight: "#FFC870",
label: "I dont' Use"
},

{
value: 1178   ,
color: "#6200EA",
highlight: "#FFC870",
label: "Zip "
},
{
value: 479   ,
color: "#6584a9",
highlight: "#FFC870",
label: "Zip "
},
{
value:419   ,
color: "#a082c7",
highlight: "#FFC870",
label: "Mercurial "
},

{
value:99  ,
color: "#ee89e6",
highlight: "#FFC870",
label: "Rational ClearCase "
},
]

//*********************//

var programming_languages_data
=
{
  labels: ["Java","VBA","'Swift","Erlang","Clojure","Objective-C","PHP","R",
"Go","'Ruby","Python"],
  datasets: [
    {

      data: [3028,550,806,157,109,865,2081,610,695,1086, 2722]
    },

  ]
}

//*****************************//

var platforms_data = [
{
value: 911,
color:"#009688",
highlight: "#009688",
label: "AWS"
},
{
value: 760,
color: "#3F51B5",
highlight: "#5AD3D1",
label: "IOS"
},
{
value: 812 ,
color: "#6200EA",
highlight: "#FFC870",
label: "Os "
},
{
value: 1413 ,
color: "#6200EA",
highlight: "#FFC870",
label: "'Windows "
},
{
value: 758 ,
color: "#6200EA",
highlight: "#FFC870",
label: "'Wordpress "
},
{
value: 421 ,
color: "#6200EA",
highlight: "#FFC870",
label: "IPhone "
},
{
value: 871 ,
color: "#6200EA",
highlight: "#FFC870",
label: "Linux "
},
{
value: 678 ,
color: "#6200EA",
highlight: "#FFC870",
label: "Azure"
},
{
value: 592 ,
color: "#6200EA",
highlight: "#FFC870",
label: "Arduino"
}
]
//****************************************//

       var countries_data = [
	{
		value: 6816,
		color:"#F7464A",
		highlight: "#FF5A5E",
		label: "Full-Stack"
	},
	{
		value: 2610,
		color: "#46BFBD",
		highlight: "#5AD3D1",
		label: "Back-end"
	},
	{
		value: 1270 ,
		color: "#FDB45C",
		highlight: "#FFC870",
		label: "Front-end"
	}
]




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
  <h3> Type of Developers  </h3>
  <img src='../public/programming.png' />
  <div>
  <Well>32155 Professional Developers</Well>
 { list_type_developers }

</div>
    </Col>
    <Col xs={12} md={9}>


<BarChart data={developerdata}  width="700" height="750"/>






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
{ list_educations }

</div>
    </Col>
    <Col xs={12} md={9}>


<BarChart data={education_data}  width="700" height="750"/>

    </Col>
  </Row>

  <br />
  <br />
  <br />
  <br />
  <br />
  <br />





    <Row className="show-grid">
    <h1>
     <Label>{ programmer_hobbies}</Label> Answers that The programming is a Hobby for him
  </h1>

    </Row>

    <br />
    <br />
    <br />
    <br />
    <br />
    <br />


    <Row className="show-grid">
    <h1>
     <Label>{ nbr_web_developer }</Label> Answers that  Are Web Developers
  </h1>

    </Row>

    <br />
    <br />
    <br />
    <br />
    <br />
    <br />





      <Row className="show-grid">
        <Col xs={4} md={3}>
      <h3> Web Developer Roles </h3>
      <div>
      { list_web_developers }
    </div>
        </Col>
        <Col xs={12} md={9}>

<PieChart data={web_data} width="400" height="350" />



        </Col>
      </Row>


    <br />
    <br />
    <br />
    <br />
    <br />
    <br />

    <Row className="show-grid">
    <h1>
     <Label>{ nbr_mobile_developers }</Label> Answers that  Are Mobile Developers
  </h1>

    </Row>

    <br />
    <br />
    <br />
    <br />
    <br />
    <br />








          <Row className="show-grid">
            <Col xs={4} md={3}>
          <h3> Mobile Developers  </h3>
          <div>
          { list_mobile_developers }
        </div>
            </Col>
            <Col xs={12} md={9}>


<PieChart data={mobile_data} width="400" height="350" />

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
        <h3> The Databases Most Used  </h3>
        <div>
        { list_databases }
      </div>
          </Col>
          <Col xs={12} md={9}>


<BarChart data={database_data}  width="700" height="750"/>

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
      <h3> The PLatforms Most Used  </h3>
      <div>
      { list_platforms }
    </div>
        </Col>
        <Col xs={12} md={9}>


<PolarAreaChart data={platforms_data} width="600" height="600" />

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
    <h3> The Frameworks  Most Used  </h3>
    <div>
    { list_frameworks }
  </div>
      </Col>
      <Col xs={12} md={9}>

<BarChart data={frameworks_data}  width="700" height="750"/>


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
      <h3> The Version Control  Most Used  </h3>
      <div>
      { list_version_controls}
    </div>
        </Col>
        <Col xs={12} md={9}>


<PieChart data={version_data} width="400" height="350" />

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
        <h3> The Programming language Most Used   </h3>
        <div>
        { list_programming_languages }
      </div>
          </Col>
          <Col xs={12} md={9}>



          <BarChart data={programming_languages_data}  width="700" height="750"/>

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
{ list_countries }
</div>
    </Col>
    <Col xs={12} md={9}>


<DoughnutChart data={countries_data } width="900" height="700" />





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







































</Grid>

</div>









      </div>
    );
  }
}

export default App;
