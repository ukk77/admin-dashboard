/* eslint-disable no-array-constructor */
import React, {Component} from "react";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';


let socket = require('socket.io-client')('http://127.0.0.1:5003');

class RExpirer_Object extends Component {
    constructor() {
        super();
        this.state = {
            response_Expirer_Object: "",
        };  
    }

    componentWillMount() {
        socket.emit('incoming data', '/expirer/object');
        socket.on("outgoing data", data => this.setState({response_Expirer_Object: data}, () => {
            this.forceUpdate()
            
        }))        
    }
    
    render() {
        return (
            <div>
                <div style = {{backgroundColor:'#212121' }}>
                    <Card >
                    <CardContent style={{display: 'inline-block',fontSize: '14',margin: '0 2px',}}>
                    <Typography  color="textSecondary" gutterBottom>
                    <b>object_expiration_pass</b> - {JSON.stringify(this.state.response_Expirer_Object['object_expiration_pass'])}<br/>
                    <b>expired_last_pass</b> - {JSON.stringify(this.state.response_Expirer_Object['expired_last_pass'])}<br/>
                    </Typography>
                    </CardContent>
                    </Card>
                </div>
            </div>
        )  
    }
}

export default RExpirer_Object;
