import React, {Component} from "react";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Grid } from "@material-ui/core";


let socket = require('socket.io-client')('http://127.0.0.1:5002');

class RAuditor_object extends Component {
    constructor() {
        super();
        this.state = {
            response_auditor_object: "",
        };  
    }

    componentWillMount() {
        socket.emit('incoming data', '/auditor/object');
        socket.on("outgoing data", data => this.setState({response_auditor_object: data}, () => {
            this.forceUpdate()
            
        }))        
    }
    
    render() {
        return (
            <Grid container spacing={1}>
            <Grid item xs={12}>
                <div style = {{backgroundColor:'#212121' }}>
                    <Card >
                    <CardContent style={{display: 'inline-block',fontSize: '14',margin: '0 2px',}}>
                    <Typography  color="textSecondary" gutterBottom>
                    <h3>Object</h3>
                    <b>object_auditor_stats_ALL</b> - {JSON.stringify(this.state.response_auditor_object['object_auditor_stats_ALL'])}<br/>
                    <b>object_auditor_stats_ZBF</b> - {JSON.stringify(this.state.response_auditor_object['object_auditor_stats_ZBF'])}<br/>
                    </Typography>
                    </CardContent>
                    </Card>
                </div>
            </Grid>
            </Grid>
            
        )  
    }
}

export default RAuditor_object;
