import React, {Component} from "react";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

let socket = require('socket.io-client')('http://127.0.0.1:5001');

class RRingMD5 extends Component {
    constructor() {
        super();
        this.state = {
            response_ringmd5: "",
        };  
    }

    componentWillMount() {
        socket.emit('incoming data', '/ringmd5');
        socket.on("outgoing data", data => this.setState({response_ringmd5: data}, () => {
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
                        RingMD5 objects- {JSON.stringify(this.state.response_ringmd5['/etc/swift/object.ring.gz'])}<br/>
                        RingMD5 accounts- {JSON.stringify(this.state.response_ringmd5['/etc/swift/account.ring.gz'])}<br/>
                        RingMD5 containers- {JSON.stringify(this.state.response_ringmd5['/etc/swift/container.ring.gz'])}<br/>
                    </Typography>
                    </CardContent>
                    </Card>
                </div>
            </div>
        )  
    }
}

export default RRingMD5;
