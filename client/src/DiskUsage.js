/* eslint-disable no-array-constructor */
import React, {Component} from "react";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
var objx = new Array();

let socket = require('socket.io-client')('http://127.0.0.1:5000');

class RDiskUsage extends Component {
    constructor() {
        super();
        this.state = {
            response_diskusage: "",
        };  
    }

    componentWillMount() {
        socket.emit('incoming data', '/diskusage');
        socket.on("outgoing data", data => this.setState({response_diskusage: data}, () => {
            this.forceUpdate()
            objx = []
            for(var x in this.state.response_diskusage){
                objx.push(this.state.response_diskusage[x])         
            }
        }))        
    }
    
    render() {
        const items = objx.map((obj) => {
            return(
                <div>
                    <div>
                        device - {obj['device']}<br/> 
                        available - {JSON.stringify(obj['avail'])}<br/>
                        mounted - {JSON.stringify(obj['mounted'])}<br/>
                        used - {JSON.stringify(obj['used'])}<br/>
                        size - {JSON.stringify(obj['size'])}<br/>
                    </div>
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

export default RDiskUsage;
