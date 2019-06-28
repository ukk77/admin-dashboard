/* eslint-disable no-array-constructor */
import 'chartjs-plugin-annotation'
import React, {Component} from "react";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import {Line} from 'react-chartjs-2';

let socket = require('socket.io-client')('http://127.0.0.1:5000');

var ldata;

class RMem2 extends Component {
    constructor() {
        super();
        this.state = {
            response_mem: ""
        };
        this.connector = this.connector.bind(this)
    }

    componentWillMount() {
        localStorage.setItem('aanon',JSON.stringify([0,0,0,0,0]));
        localStorage.setItem('afile',JSON.stringify([0,0,0,0,0]));
        localStorage.setItem('iaanon',JSON.stringify([0,0,0,0,0]));
        localStorage.setItem('iafile',JSON.stringify([0,0,0,0,0]));
        socket.emit('incoming data', '/mem');
        socket.on("outgoing data", data => this.setState({response_mem: data}, () => {
            var aanon_i = localStorage.getItem('aanon')
            var aanon = JSON.parse(aanon_i)
            aanon.shift()
            aanon.push(parseInt(((this.state.response_mem['Active(anon)']).slice(0,(this.state.response_mem['Active(anon)']).length-2)),10)/parseInt('1000'))
            localStorage.setItem('aanon',JSON.stringify(aanon))

            var afile_i = localStorage.getItem('afile')
            var afile = JSON.parse(afile_i)
            afile.shift()
            afile.push(parseInt(((this.state.response_mem['Active(file)']).slice(0,(this.state.response_mem['Active(file)']).length-2)),10)/parseInt('1000'))
            localStorage.setItem('afile',JSON.stringify(afile))

            var iaanon_i = localStorage.getItem('iaanon')
            var iaanon = JSON.parse(iaanon_i)
            iaanon.shift()
            iaanon.push(parseInt(((this.state.response_mem['Inactive(anon)']).slice(0,(this.state.response_mem['Inactive(anon)']).length-2)),10)/parseInt('1000'))
            localStorage.setItem('iaanon',JSON.stringify(iaanon))

            var iafile_i = localStorage.getItem('iafile')
            var iafile = JSON.parse(iafile_i)
            iafile.shift()
            iafile.push(parseInt(((this.state.response_mem['Inactive(file)']).slice(0,(this.state.response_mem['Inactive(file)']).length-2)),10)/parseInt('1000'))
            localStorage.setItem('iafile',JSON.stringify(iafile))

            ldata = {
                labels:['12 sec','9 sec','6 sec','3 sec','0 sec'],
                datasets:[
                {
                data:JSON.parse(localStorage.getItem('aanon')),
                label: 'Active anon',
                fill: false,
                lineTension: 0.1,
                backgroundColor: 'rgb(153, 255, 102)',
                borderColor: 'rgb(153, 255, 102)',
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: 'rgb(0,0,0)',
                pointBackgroundColor: '#fff',
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: 'rgb(0,0,0)',
                pointHoverBorderColor: 'rgb(0,0,0)',
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10, 
              },
              {
                label: 'Active file',
                data:JSON.parse(localStorage.getItem('afile')),
                fill: false,
                lineTension: 0.1,
                backgroundColor: 'rgb(255, 204, 153)',
                borderColor: 'rgb(255, 204, 153)',
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: 'rgb(0,0,0)',
                pointBackgroundColor: '#fff',
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: 'rgb(0,0,0)',
                pointHoverBorderColor: 'rgb(0,0,0)',
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
              },
              {
                label: 'Inactive anon',
                data:JSON.parse(localStorage.getItem('iaanon')),
                fill: false,
                lineTension: 0.1,
                backgroundColor: 'rgb(255, 102, 153)',
                borderColor: 'rgb(255, 102, 153)',
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: 'rgb(0,0,0)',
                pointBackgroundColor: '#fff',
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: 'rgb(0,0,0)',
                pointHoverBorderColor: 'rgb(0,0,0)',
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
              },
              {
                label: 'Inactive file',
                data:JSON.parse(localStorage.getItem('iafile')),
                fill: false,
                lineTension: 0.1,
                backgroundColor: 'rgba(75,192,192,1)',
                borderColor: 'rgba(75,192,192,1)',
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: 'rgb(0,0,0)',
                pointBackgroundColor: '#fff',
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: 'rgb(0,0,0)',
                pointHoverBorderColor: 'rgb(0,0,0)',
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
              }
            ]
        }
            this.forceUpdate()
        })
        )   
    }
    
    componentDidMount(){
        this.timer = setInterval(
            () => this.connector(), 3000
        )
    }

    componentWillUnmount(){
        clearInterval(this.timer)
    }

    connector(){
        socket.emit('incoming data', '/mem');
        socket.on("outgoing data", data => this.setState({response_mem: data}, () => {
            var aanon_i = localStorage.getItem('aanon')
            var aanon = JSON.parse(aanon_i)
            aanon.shift()
            aanon.push(parseInt(((this.state.response_mem['Active(anon)']).slice(0,(this.state.response_mem['Active(anon)']).length-2)),10)/parseInt('1000'))
            localStorage.setItem('aanon',JSON.stringify(aanon))

            var afile_i = localStorage.getItem('afile')
            var afile = JSON.parse(afile_i)
            afile.shift()
            afile.push(parseInt(((this.state.response_mem['Active(file)']).slice(0,(this.state.response_mem['Active(file)']).length-2)),10)/parseInt('1000'))
            localStorage.setItem('afile',JSON.stringify(afile))

            var iaanon_i = localStorage.getItem('iaanon')
            var iaanon = JSON.parse(iaanon_i)
            iaanon.shift()
            iaanon.push(parseInt(((this.state.response_mem['Inactive(anon)']).slice(0,(this.state.response_mem['Inactive(anon)']).length-2)),10)/parseInt('1000'))
            localStorage.setItem('iaanon',JSON.stringify(iaanon))

            var iafile_i = localStorage.getItem('iafile')
            var iafile = JSON.parse(iafile_i)
            iafile.shift()
            iafile.push(parseInt(((this.state.response_mem['Inactive(file)']).slice(0,(this.state.response_mem['Inactive(file)']).length-2)),10)/parseInt('1000'))
            localStorage.setItem('iafile',JSON.stringify(iafile))

            ldata = {
                labels:['12 sec','9 sec','6 sec','3 sec','0 sec'],
                datasets:[
                {
                data:JSON.parse(localStorage.getItem('aanon')),
                label: 'Active anon',
                fill: false,
                lineTension: 0.1,
                backgroundColor: 'rgb(153, 255, 102)',
                borderColor: 'rgb(153, 255, 102)',
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: 'rgb(0,0,0)',
                pointBackgroundColor: '#fff',
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: 'rgb(0,0,0)',
                pointHoverBorderColor: 'rgb(0,0,0)',
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10, 
              },
              {
                label: 'Active file',
                data:JSON.parse(localStorage.getItem('afile')),
                fill: false,
                lineTension: 0.1,
                backgroundColor: 'rgb(255, 204, 153)',
                borderColor: 'rgb(255, 204, 153)',
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: 'rgb(0,0,0)',
                pointBackgroundColor: '#fff',
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: 'rgb(0,0,0)',
                pointHoverBorderColor: 'rgb(0,0,0)',
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
              },
              {
                label: 'Inactive anon',
                data:JSON.parse(localStorage.getItem('iaanon')),
                fill: false,
                lineTension: 0.1,
                backgroundColor: 'rgb(255, 102, 153)',
                borderColor: 'rgb(255, 102, 153)',
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: 'rgb(0,0,0)',
                pointBackgroundColor: '#fff',
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: 'rgb(0,0,0)',
                pointHoverBorderColor: 'rgb(0,0,0)',
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
              },
              {
                label: 'Inactive file',
                data:JSON.parse(localStorage.getItem('iafile')),
                fill: false,
                lineTension: 0.1,
                backgroundColor: 'rgba(75,192,192,1)',
                borderColor: 'rgba(75,192,192,1)',
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: 'rgb(0,0,0)',
                pointBackgroundColor: '#fff',
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: 'rgb(0,0,0)',
                pointHoverBorderColor: 'rgb(0,0,0)',
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
              }
            ]
        }
            this.forceUpdate()
        })
        )
    }
    
    render() {
        return (
            <Grid container spacing={1}>
                <Grid item xs={10}>
                <Card>
                <CardContent style={{display: 'block',fontSize: '14',margin: '0 2px',}}>
                <Typography  color="textSecondary" gutterBottom>
                    <Line  
                        data={ldata}
                        height={150}
                        width={300}
                    />
                </Typography>
                </CardContent>
                </Card>
            </Grid>
            <Grid item xs={5}>
                    <Card >
                    <CardContent style={{display: 'block',fontSize: '14',margin: '0 2px',}}>
                    <Typography  color="textSecondary" gutterBottom>
                        Active anon- {JSON.parse(localStorage.getItem('aanon'))[4]}<br/>
                        Active file- {JSON.parse(localStorage.getItem('afile'))[4]}<br/>
                        Inactive file- {JSON.parse(localStorage.getItem('iafile'))[4]}<br/>
                        Inactive anon- {JSON.parse(localStorage.getItem('iaanon'))[4]}<br/>
                    </Typography>
                    </CardContent>
                    </Card>
                </Grid>
            </Grid>
        )  
    }
}

export default RMem2;
