/* eslint-disable no-array-constructor */
import React, {Component} from "react";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Grid } from "@material-ui/core";


let socket = require('socket.io-client')('http://127.0.0.1:5002');
var objx = new Array();

class RReplication_container extends Component {
    constructor() {
        super();
        this.state = {
            response_replication_container: "",
        };  
    }

    componentWillMount() {
        socket.emit('incoming data', '/replication/container');
        socket.on("outgoing data", data => this.setState({response_replication_container: data}, () => {
            this.forceUpdate()
            objx = []
            objx.push(this.state.response_replication_container['replication_stats'])         
            
        }))        
    }
    
    render() {
        const items = objx.map((obj) => {
            return(
                <div>
                    <div>
                        no change - {obj['no_change']}<br/>
                        rsync - {obj['rsync']}<br/>
                        success - {obj['success']}<br/>
                        start - {obj['start']}<br/>
                        attempted - {obj['attempted']}<br/>
                        ts_repl - {obj['ts_repl']}<br/>
                        remove - {obj['remove']}<br/>
                        remote_merge - {obj['remote_merge']}<br/>
                        diff_capped - {obj['diff_capped']}<br/>
                        failure - {obj['failure']}<br/>
                        hashmatch - {obj['hashmatch']}<br/>
                        diff - {obj['diff']}<br/>
                        empty - {obj['empty']}<br/>
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
                    <h3>container</h3>
                    <b>Last replication</b> - {JSON.stringify(this.state.response_replication_container['replication_last'])}<br/>
                    <b>Replication stats</b> -     
                    {items}<br/>
                    <b>Replication time</b> - {JSON.stringify(this.state.response_replication_container['replication_time'])} 
                    </Typography>
                    </CardContent>
                    </Card>
                </div>
                </Grid>
            </Grid>
        )  
    }
}

export default RReplication_container;
