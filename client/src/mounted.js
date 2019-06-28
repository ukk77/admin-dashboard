/* eslint-disable no-array-constructor */
import React, {Component} from "react";
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


let socket = require('socket.io-client')('http://127.0.0.1:5000');
var objx = new Array();

class RMounted extends Component {
    constructor() {
        super();
        this.state = {
            response_mounted: "",
        };  
    }

    componentWillMount() {
        socket.emit('incoming data', '/mounted');
        socket.on("outgoing data", data => this.setState({response_mounted: data}, () => {
            this.forceUpdate()
            objx = []
            for(var x in this.state.response_mounted){
                objx.push(this.state.response_mounted[x])         
            }
        }))        
    }
    
    render() {
        const items = objx.map((obj) => {
            return(
                    <TableRow >
                        <TableCell align="left"><Typography>{obj['device']}</Typography></TableCell>
                        <TableCell align="right"><Typography>{obj['path']}</Typography></TableCell>
                    </TableRow>
            )
        })
        return (
            <div>
                <div style = {{backgroundColor:'#212121', }}>
                    <Paper style={{width: '100%',overflowX: 'auto',}}>
                    <Table style ={{minWidth: 450,}}>
                    <TableHead style={{backgroundColor:'black'}}>
                        <TableRow>
                            <TableCell style={{color:'white'}}><b>Device</b></TableCell>
                            <TableCell align="right"style={{color:'white'}}><b>Path</b></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {items}
                    </TableBody>
                    </Table>
                    </Paper>    
                </div>
            </div>
        )  
    }
}

export default RMounted;








