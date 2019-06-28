/* eslint-disable no-array-constructor */
import React, {Component} from "react";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';


let socket = require('socket.io-client')('http://127.0.0.1:5002');
var objx = new Array();

class RReplication_account extends Component {
    constructor() {
        super();
        this.state = {
            response_replication_account: "",
        };  
    }

    componentWillMount() {
        socket.emit('incoming data', '/replication/account');
        socket.on("outgoing data", data => this.setState({response_replication_account: data}, () => {
            this.forceUpdate()
            objx = []
            objx.push(this.state.response_replication_account['replication_stats'])         
            
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
                <div style = {{backgroundColor:'#212121' }}>
                    <Card >
                    <CardContent style={{display: 'inline-block',fontSize: '14',margin: '0 2px',}}>
                    <Typography  color="textSecondary" gutterBottom>
                    <h3>account</h3>
                    <b>Last replication</b> - {JSON.stringify(this.state.response_replication_account['replication_last'])}<br/>
                    <b>Replication stats</b> -     
                    {items}<br/>
                    <b>Replication time</b> - {JSON.stringify(this.state.response_replication_account['replication_time'])} 
                    </Typography>
                    </CardContent>
                    </Card>
                </div>
                
        )  
    }
}

export default RReplication_account;
