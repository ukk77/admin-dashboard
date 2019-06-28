/* eslint-disable no-array-constructor */
import React, {Component} from "react";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

let socket = require('socket.io-client')('http://127.0.0.1:5000');
var objx = new Array();

class RUnMounted extends Component {
    constructor() {
        super();
        this.state = {
            response_unmounted: "",
        };  
    }

    componentWillMount() {
        socket.emit('incoming data', '/unmounted');
        socket.on("outgoing data", data => this.setState({response_unmounted: data}, () => {
            this.forceUpdate()
            objx = []
            for(var x in this.state.response_unmounted){
                objx.push(this.state.response_unmounted[x]['device'])         
            }
        }))        
    }
    
    render() {
        const items = objx.map((obj) => {
            return(
                <div>
                    <div>device - {obj}</div>
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

export default RUnMounted;
