/* eslint-disable no-array-constructor */
import React, {Component} from "react";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';


let socket = require('socket.io-client')('http://127.0.0.1:5001');
var objx = new Array();


class RDevices extends Component {
    constructor() {
        super();
        this.state = {
            response_devices: "",
        };  
    }

    componentWillMount() {
        socket.emit('incoming data', '/devices');
        socket.on("outgoing data", data => this.setState({response_devices: data}, () => {
            this.forceUpdate()
            objx = []
            for(var x in this.state.response_devices){
                objx.push(this.state.response_devices[x])         
            }
            
        }))        
    }
    
    render() {
        const items = objx.map((obj) => {
            return(
                <div>
                    <div>devices - {obj}</div>
                </div>
            )
        })
        return (
            <div>
                <div style = {{backgroundColor:'#212121' }}>
                    <Card >
                    <CardContent style={{display: 'inline-block',fontSize: '14',margin: '0 2px',}}>
                    <Typography  color="textSecondary" gutterBottom>
                        {items}
                    </Typography>
                    </CardContent>
                    </Card>
                </div>
            </div>
        )  
    }
}

export default RDevices;
