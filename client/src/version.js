import React, {Component} from "react";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

let socket = require('socket.io-client')('http://127.0.0.1:5003');

class RVersion extends Component {
    constructor() {
        super();
        this.state = {
            response_version: "",
        };  
    }

    componentWillMount() {
        socket.emit('incoming data', '/version');
        socket.on("outgoing data", data => this.setState({response_version: data}, () => {
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
                    <b>version </b> - {JSON.stringify(this.state.response_version['version'])}<br/>
                    </Typography>
                    </CardContent>
                    </Card>
                </div>
            </div>
        )  
    }
}

export default RVersion;
