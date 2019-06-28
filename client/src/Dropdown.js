import React from 'react';
import RLoad from './load'
import 'bootstrap/dist/css/bootstrap.css';
import Button from '@material-ui/core/Button';
import RMem from './mem'
import RMounted from './mounted';
import RUnMounted from './UnMounted'
import RDiskUsage from './DiskUsage';
import RDriveAudit from './driveaudit';
import RRingMD5 from './RingMD5';
import RSwiftConfMD5 from './SwiftConfMD5';

class Dropdown extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            displaymenu_Load : false,
            displaymenu_Mem : false,
            displaymenu_Mounted : false,
            displaymenu_UnMounted : false,
            displaymenu_DiskUsage : false,
            displaymenu_DriveAudit : false,
            displaymenu_RingMD5 : false,
            displaymenu_SwiftConfMD5 : false,
            // -
            // displaymenu_quarantined: false,
            // displaymenu_sockstat: false,
            // displaymenu_devices: false,
            // displaymenu_async: false,
            // displaymenu_replication: false,
            // -
            // displaymenu_replication_type: false,
            // displaymenu_auditor: false,
            // displaymenu_updater: false,
            // displaymenu_expirer/object: false,
            // displaymenu_version: false,
            // displaymenu_time: false,
        }

        this.ToggleMenu_Load_show = this.ToggleMenu_Load_show.bind(this)
        this.ToggleMenu_Load_hide = this.ToggleMenu_Load_hide.bind(this)
        this.ToggleMenu_Mem_show = this.ToggleMenu_Mem_show.bind(this)
        this.ToggleMenu_Mem_hide = this.ToggleMenu_Mem_hide.bind(this)
        this.ToggleMenu_Mounted_show = this.ToggleMenu_Mounted_show.bind(this)
        this.ToggleMenu_Mounted_hide = this.ToggleMenu_Mounted_hide.bind(this)
        this.ToggleMenu_UnMounted_show = this.ToggleMenu_UnMounted_show.bind(this)
        this.ToggleMenu_UnMounted_hide = this.ToggleMenu_UnMounted_hide.bind(this)
        this.ToggleMenu_DiskUsage_show = this.ToggleMenu_DiskUsage_show.bind(this)
        this.ToggleMenu_DiskUsage_hide = this.ToggleMenu_DiskUsage_hide.bind(this)
        this.ToggleMenu_DriveAudit_show = this.ToggleMenu_DriveAudit_show.bind(this)
        this.ToggleMenu_DriveAudit_hide = this.ToggleMenu_DriveAudit_hide.bind(this)
        this.ToggleMenu_RingMD5_show = this.ToggleMenu_RingMD5_show.bind(this)
        this.ToggleMenu_RingMD5_hide = this.ToggleMenu_RingMD5_hide.bind(this)
        this.ToggleMenu_SwiftConfMD5_show = this.ToggleMenu_SwiftConfMD5_show.bind(this)
        this.ToggleMenu_SwiftConfMD5_hide = this.ToggleMenu_SwiftConfMD5_hide.bind(this)
    }

    ToggleMenu_Load_show(event){
            this.setState ({
                displaymenu_Load:true,
                displaymenu_Mem : false,
                displaymenu_Mounted : false,
                displaymenu_UnMounted : false,
                displaymenu_DiskUsage : false,
                displaymenu_DriveAudit : false,
                displaymenu_RingMD5 : false,
                displaymenu_SwiftConfMD5 : false,
            },() => document.addEventListener('click', this.ToggleMenu_Load_hide)  ) 
    }
    ToggleMenu_Load_hide(event){
        this.setState ({
            displaymenu_Load:false,
        },() => document.removeEventListener('click', this.ToggleMenu_Load_hide)  ) 
    }
    
    ToggleMenu_Mem_show(event){
            this.setState ({
                displaymenu_Mem:true,
                displaymenu_Load: false,
                displaymenu_Mounted : false,
                displaymenu_UnMounted : false,
                displaymenu_DiskUsage : false,
                displaymenu_DriveAudit : false,
                displaymenu_RingMD5 : false,
                displaymenu_SwiftConfMD5 : false,
            },() => document.addEventListener('click', this.ToggleMenu_Mem_hide)  ) 
        
    }
    ToggleMenu_Mem_hide(event){
        this.setState ({
            displaymenu_Mem:false,
        } ,() => document.removeEventListener('click', this.ToggleMenu_Mem_hide)  ) 
    
    }
    ToggleMenu_Mounted_show(event){
            this.setState ({
                displaymenu_Mounted:true,
                displaymenu_Mem:false,
                displaymenu_Load: false,
                displaymenu_UnMounted : false,
                displaymenu_DiskUsage : false,
                displaymenu_DriveAudit : false,
                displaymenu_RingMD5 : false,
                displaymenu_SwiftConfMD5 : false,
            },() => document.addEventListener('click', this.ToggleMenu_Mounted_hide)   ) 
        
    }
    ToggleMenu_Mounted_hide(event){
        this.setState ({
            displaymenu_Mounted:false,
        },() => document.removeEventListener('click', this.ToggleMenu_Mounted_hide)   ) 
    }

    ToggleMenu_UnMounted_show(event){
        this.setState ({
            displaymenu_UnMounted:true,
            displaymenu_Mem:false,
            displaymenu_Load: false,
            displaymenu_Mounted : false,
            displaymenu_DiskUsage : false,
            displaymenu_DriveAudit : false,
            displaymenu_RingMD5 : false,
            displaymenu_SwiftConfMD5 : false,
        },() => document.addEventListener('click', this.ToggleMenu_UnMounted_hide)   ) 
    
    }
    ToggleMenu_UnMounted_hide(event){
        this.setState ({
            displaymenu_UnMounted:false,
        },() => document.removeEventListener('click', this.ToggleMenu_UnMounted_hide)   ) 
    }
    ToggleMenu_DiskUsage_show(event){
        this.setState ({
            displaymenu_DiskUsage : true,
            displaymenu_UnMounted:false,
            displaymenu_Mem:false,
            displaymenu_Load: false,
            displaymenu_Mounted : false,
            displaymenu_DriveAudit : false,
            displaymenu_RingMD5 : false,
            displaymenu_SwiftConfMD5 : false,
        },() => document.addEventListener('click', this.ToggleMenu_DiskUsage_hide)   ) 
    
    }
    ToggleMenu_DiskUsage_hide(event){
        this.setState ({
            displaymenu_DiskUsage : false,
        },() => document.removeEventListener('click', this.ToggleMenu_DiskUsage_hide)   ) 
    }

    ToggleMenu_DriveAudit_show(event){
        this.setState ({
            displaymenu_DiskUsage : false,
            displaymenu_UnMounted:false,
            displaymenu_Mem:false,
            displaymenu_Load: false,
            displaymenu_Mounted : false,
            displaymenu_DriveAudit : true,
            displaymenu_RingMD5 : false,
            displaymenu_SwiftConfMD5 : false,
        },() => document.addEventListener('click', this.ToggleMenu_DriveAudit_hide)   ) 
    
    }
    ToggleMenu_DriveAudit_hide(event){
        this.setState ({
            displaymenu_DriveAudit : false,
            
        },() => document.removeEventListener('click', this.ToggleMenu_DriveAudit_hide)   ) 
    }
    ToggleMenu_RingMD5_show(event){
        this.setState ({
            displaymenu_DiskUsage : false,
            displaymenu_UnMounted:false,
            displaymenu_Mem:false,
            displaymenu_Load: false,
            displaymenu_Mounted : false,
            displaymenu_DriveAudit : false,
            displaymenu_RingMD5 : true,
            displaymenu_SwiftConfMD5 : false,
        },() => document.addEventListener('click', this.ToggleMenu_RingMD5_hide)   ) 
    
    }
    ToggleMenu_RingMD5_hide(event){
        this.setState ({
            displaymenu_RingMD5 : false,
            
        },() => document.removeEventListener('click', this.ToggleMenu_RingMD5_hide)   ) 
    }
    ToggleMenu_SwiftConfMD5_show(event){
        this.setState ({
            displaymenu_DiskUsage : false,
            displaymenu_UnMounted:false,
            displaymenu_Mem:false,
            displaymenu_Load: false,
            displaymenu_Mounted : false,
            displaymenu_DriveAudit : false,
            displaymenu_RingMD5 : false,
            displaymenu_SwiftConfMD5 : true,
        },() => document.addEventListener('click', this.ToggleMenu_SwiftConfMD5_hide)   ) 
    
    }
    ToggleMenu_SwiftConfMD5_hide(event){
        this.setState ({
            displaymenu_SwiftConfMD5 : false,
            
        },() => document.removeEventListener('click', this.ToggleMenu_SwiftConfMD5_hide)   ) 
    }
    render(){
            return(
                <div>
                    <div>
                        <Button onClick = {this.ToggleMenu_Load_show}
                            variant="contained" color="default" size="small">Load</Button>
                        {this.state.displaymenu_Load ? (
                            <div style = {{ height:'500px', width:'500px',float:'right', marginRight:'500px' }}>
                                <RLoad/>
                            </div>
                        ):(null)}              
                    </div>
                    <br/>
                    <div>
                        <Button onClick = {this.ToggleMenu_Mem_show}  
                        variant="contained" color="default" size="small" > Mem</Button>
                        {this.state.displaymenu_Mem ? (
                            <div style = {{ height:'500px', width:'500px',  float:'right', marginRight:'500px' }}>
                                <RMem/>
                            </div>
                        ):(null)}
                    </div>
                    <br/>
                    <div>
                        <Button onClick = {this.ToggleMenu_Mounted_show} 
                        variant="contained" color="default" size="small"> Mounted</Button>
                        {this.state.displaymenu_Mounted ? (
                            <div style = {{ height:'500px', width:'500px',float:'right', marginRight:'500px' }}>
                                <RMounted/>
                            </div>
                        ):(null)}
                    </div>
                    <br/>
                    <div>
                        <Button onClick = {this.ToggleMenu_UnMounted_show} 
                        variant="contained" color="default" size="small"> UnMounted</Button>
                        {this.state.displaymenu_UnMounted ? (
                            <div style = {{ height:'500px', width:'500px',float:'right', marginRight:'500px' }}>
                                <RUnMounted/>
                            </div>
                        ):(null)}
                    </div>
                    <br/>
                    <div>
                        <Button onClick = {this.ToggleMenu_DiskUsage_show} 
                        variant="contained" color="default" size="small"> DiskUsage</Button>
                        {this.state.displaymenu_DiskUsage ? (
                            <div style = {{ height:'500px', width:'500px',float:'right', marginRight:'500px' }}>
                                <RDiskUsage/>
                            </div>
                        ):(null)}
                    </div>
                    <br/>
                    <div>
                        <Button onClick = {this.ToggleMenu_DriveAudit_show} 
                        variant="contained" color="default" size="small"> DriveAudit</Button>
                        {this.state.displaymenu_DriveAudit ? (
                            <div style = {{ height:'500px', width:'500px',float:'right', marginRight:'500px' }}>
                                <RDriveAudit/>
                            </div>
                        ):(null)}
                    </div>
                    <br/>
                    <div>
                        <Button onClick = {this.ToggleMenu_RingMD5_show} 
                        variant="contained" color="default" size="small"> RingMD5</Button>
                        {this.state.displaymenu_RingMD5 ? (
                            <div style = {{ height:'500px', width:'500px',float:'right', marginRight:'500px' }}>
                                <RRingMD5/>
                            </div>
                        ):(null)}
                    </div>
                    <br/>
                    <div>
                        <Button onClick = {this.ToggleMenu_SwiftConfMD5_show} 
                        variant="contained" color="default" size="small"> SwiftConfMD5</Button>
                        {this.state.displaymenu_SwiftConfMD5 ? (
                            <div style = {{ height:'500px', width:'500px',float:'right', marginRight:'500px' }}>
                                <RSwiftConfMD5/>
                            </div>
                        ):(null)}
                    </div>
                </div>
            )
        }
    }



export default Dropdown