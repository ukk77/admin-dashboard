import React, {Component} from "react";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Grid } from "@material-ui/core";


let socket = require('socket.io-client')('http://127.0.0.1:5002');

class RAuditor_account extends Component {
    constructor() {
        super();
        this.state = {
            response_auditor_account: "",
        };  
    }

    componentWillMount() {
        socket.emit('incoming data', '/auditor/account');
        socket.on("outgoing data", data => this.setState({response_auditor_account: data}, () => {
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
                    <h3>Account</h3>
                    <b>account_audits_passed</b> - {JSON.stringify(this.state.response_auditor_account['account_audits_passed'])}<br/>
                    <b>account_audits_failed</b> - {JSON.stringify(this.state.response_auditor_account['account_audits_failed'])}<br/>
                    <b>account_auditor_pass_completed</b> - {JSON.stringify(this.state.response_auditor_account['account_auditor_pass_completed'])}<br/>
                    <b>account_audits_since</b> - {JSON.stringify(this.state.response_auditor_account['account_audits_since'])}<br/>
                    </Typography>
                    </CardContent>
                    </Card>
                </div>
                </Grid>
                </Grid>
            
        )  
    }
}

export default RAuditor_account;
