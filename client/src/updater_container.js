import React, {Component} from "react";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';


let socket = require('socket.io-client')('http://127.0.0.1:5003');

class RUpdater_Container extends Component {
    constructor() {
        super();
        this.state = {
            response_Updater_Container: "",
        };  
    }

    componentWillMount() {
        socket.emit('incoming data', '/updater/container');
        socket.on("outgoing data", data => this.setState({response_Updater_Container: data}, () => {
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
                    <b>container_updater_sweep</b> - {JSON.stringify(this.state.response_Updater_Container['container_updater_sweep'])}<br/>
                    </Typography>
                    </CardContent>
                    </Card>
                </div>
            </div>
        )  
    }
}

export default RUpdater_Container;
