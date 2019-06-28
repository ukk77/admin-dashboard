/* eslint-disable no-array-constructor */
import React, {Component} from "react";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Grid } from "@material-ui/core";


let socket = require('socket.io-client')('http://127.0.0.1:5002');
var objx = new Array();

class RReplication_object extends Component {
    constructor() {
        super();
        this.state = {
            response_replication_object: "",
        };  
    }

    componentWillMount() {
        socket.emit('incoming data', '/replication/object');
        socket.on("outgoing data", data => this.setState({response_replication_object: data}, () => {
            this.forceUpdate()
            objx = []
            objx.push(this.state.response_replication_object['replication_stats'])         
            
        }))        
    }
    
    render() {
        const items = objx.map((obj) => {
            return(
                <div>
                    <div>
                        rsync - {obj['rsync']}<br/>
                        success - {obj['success']}<br/>
                        start - {obj['start']}<br/>
                        attempted - {obj['attempted']}<br/>
                        remove - {obj['remove']}<br/>
                        hashmatch - {obj['hashmatch']}<br/>
                    </div>
                </div>
            )
        })
        return (
            <Grid container spacing={1}>
            <Grid item xs={12}>
                <div style = {{backgroundColor:'#212121' }}>
                    <Card >
                    <CardContent style={{display: 'inline-block',fontSize: '14',margin: '0 2px',}}>
                    <Typography  color="textSecondary" gutterBottom>
                    <h3>Object</h3>
                    <b>Last replication</b> - {JSON.stringify(this.state.response_replication_object['replication_last'])}<br/>
                    <b>Replication stats</b> -     
                    {items}<br/>
                    <b>Replication time</b> - {JSON.stringify(this.state.response_replication_object['replication_time'])}<br/> 
                    <b>object_replication_last</b> - {JSON.stringify(this.state.response_replication_object['object_replication_last'])}<br/>
                    <b>object_replication_time</b> - {JSON.stringify(this.state.response_replication_object['object_replication_time'])}<br/> 
                    </Typography>
                    </CardContent>
                    </Card>
                </div>
                </Grid>
                </Grid>
        )  
    }
}

export default RReplication_object;
