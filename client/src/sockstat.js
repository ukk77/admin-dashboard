import React, {Component} from "react";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

let socket = require('socket.io-client')('http://127.0.0.1:5001');

class RSockstat extends Component {
    constructor() {
        super();
        this.state = {
            response_sockstat: "",
        };  
    }

    componentWillMount() {
        socket.emit('incoming data', '/sockstat');
        socket.on("outgoing data", data => this.setState({response_sockstat: data}, () => {
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
                        time wait- {JSON.stringify(this.state.response_sockstat['time_wait'])}<br/>
                        tcp in use - {JSON.stringify(this.state.response_sockstat['tcp_in_use'])}<br/>
                        orphan - {JSON.stringify(this.state.response_sockstat['orphan'])}<br/>
                        tcp6 in use - {JSON.stringify(this.state.response_sockstat['tcp6_in_use'])}<br/>
                        tcp memory allocated bytes - {JSON.stringify(this.state.response_sockstat['tcp_mem_allocated_bytes'])}<br/>
                    </Typography>
                    </CardContent>
                    </Card>
                </div>
            </div>
        )  
    }
}

export default RSockstat;
