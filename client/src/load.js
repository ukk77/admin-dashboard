import {Bar} from 'react-chartjs-2'
import 'chartjs-plugin-annotation'
import React, {Component} from "react";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';


let socket = require('socket.io-client')('http://127.0.0.1:5000');
  

class RLoad extends Component {
    constructor() {
        super();
        this.state = {
            response_load: "",
        }; 
        this.connectorx = this.connectorx.bind(this) 
    }

    componentWillMount() {
        socket.emit('incoming data', '/load');
        socket.on("outgoing data", data => this.setState({response_load: data}))
        this.forceUpdate()   
    }

    componentDidMount(){
        this.timer = setInterval(
            () => this.connectorx(), 5000
        )
    }

    connectorx(){
        socket.emit('incoming data', '/load');
        socket.on("outgoing data", data => this.setState({response_load: data}))
        this.forceUpdate()
    }
    
    componentWillUnmount(){
        clearInterval(this.timer)
    }

    render() {
        return (
            <Grid container spacing={1} >
            <Grid item xs={7}>
                <Card >
                    <CardContent>
                    <Typography  color="textSecondary" gutterBottom>
                    <Bar onElementsClick =  {this.connectorx}
                    data={{
                        labels:["1m","5m","15m"],
                        datasets:[{
                        label: 'Average Load',
                        data:[this.state.response_load['1m'],this.state.response_load['5m'],this.state.response_load['15m']],
                        backgroundColor: 'rgba(255,99,132,0.2)',
                        borderColor: 'rgba(255,99,132,1)',
                        borderWidth: 1,
                        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                        hoverBorderColor: 'rgba(255,99,132,1)',
                      }]}
                    }
                    options={{
                        scales: {
                          yAxes: [{
                            ticks: {
                              beginAtZero: true
                            }
                          }]
                        }
                      }}
                    width={300}
                    height={300}
                    />
                    </Typography>
                    </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={6}>
                    <Card >
                    <CardContent>
                    <Typography  color="textSecondary" gutterBottom>
                        Number of processes - {JSON.stringify(this.state.response_load['processes'])}<br/>
                        Number of tasks - {JSON.stringify(this.state.response_load['tasks'])}
                    </Typography>
                    </CardContent>
                    </Card>
                </Grid>
                </Grid>
        )  
    }
}

export default RLoad;
