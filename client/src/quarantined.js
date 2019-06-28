import React, {Component} from "react";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

let socket = require('socket.io-client')('http://127.0.0.1:5001');

class RQuarantined extends Component {
    constructor() {
        super();
        this.state = {
            response_quarantined: "",
        };  
    }

    componentWillMount() {
        socket.emit('incoming data', '/quarantined');
        socket.on("outgoing data", data => this.setState({response_quarantined: data}, () => {
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
                        Quarantined objects- {JSON.stringify(this.state.response_quarantined['objects'])}<br/>
                        Quarantined accounts- {JSON.stringify(this.state.response_quarantined['accounts'])}<br/>
                        Quarantined policies- {JSON.stringify(this.state.response_quarantined['policies'])}<br/>
                        Quarantined containers- {JSON.stringify(this.state.response_quarantined['containers'])}<br/>
                    </Typography>
                    </CardContent>
                    </Card>
                </div>
            </div>
        )  
    }
}

export default RQuarantined;
