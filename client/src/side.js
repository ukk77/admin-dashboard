/* eslint-disable react/jsx-pascal-case */
import React from 'react';
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/Styles';
import RLoad from './load';
import 'bootstrap/dist/css/bootstrap.css';
import RMem2 from './mem2'
import RMounted from './mounted';
import RUnMounted from './UnMounted'
import RDiskUsage from './DiskUsage';
import RDriveAudit from './driveaudit';
import RRingMD5 from './RingMD5';
import RSwiftConfMD5 from './SwiftConfMD5';
import RQuarantined from './quarantined'
import RSockstat from './sockstat';
import RDevices from './devices';
import RAsync from './async';
import RReplication_account from './replication_account';
import RReplication_container from './replication_container';
import RReplication_object from './replication_object';
import RAuditor_account from './auditor_account';
import RAuditor_container from './auditor_container';
import RAuditor_object from './auditor_object';
import RUpdater_Container from './updater_container';
import RUpdater_Object from './updater_object';
import RExpirer_Object from './Object_expirer';
import RVersion from './version';
import RTime from './time'
import Grid from '@material-ui/core/Grid';

class ProfileTabs extends React.PureComponent {
    constructor(props){
        super(props)
        this.state = { 
          activeIndex: 0 }
        }
  handleChange = (_, activeIndex) => this.setState({ activeIndex })
  render() {

    const { activeIndex } = this.state;
    return (
      <div
        style={{
          display: 'flex',
          flexBasis:'200px'     
        }}
      >
        <VerticalTabs
          style={{borderRight:'1px solid grey',
          borderBottom:'1px solid grey',
          }}
          value={activeIndex}
          onChange={this.handleChange}
        >           
          <MyTab label='Load'/>
          <MyTab label='Mem'/>
          <MyTab label='Mounted'/>
          <MyTab label='UnMounted'/>
          <MyTab label='DiskUsage'/>
          <MyTab label='DriveAudit'/>
          <MyTab label='RingMD5'/>
          <MyTab label='SwiftfMD5'/>
          <MyTab label='quarantined'/>
          <MyTab label='sockstat' />
          <MyTab label='devices'/>
          <MyTab label='async'/>
          <MyTab label='replication'/>
          <MyTab label='Auditor'/>
          <MyTab label='Container Updater'/>
          <MyTab label='Object Updater'/>
          <MyTab label='Object Expirer'/>
          <MyTab label='Version'/>
          <MyTab label='time'/>
        </VerticalTabs>

        { activeIndex === 0 && <TabContainer >
              <RLoad/>
          </TabContainer> 
        }

        { activeIndex === 1 && <TabContainer>
              <RMem2/>
          </TabContainer> 
        }
        { activeIndex === 2 && <TabContainer>
              <RMounted/>
          </TabContainer> 
        }
        { activeIndex === 3 && <TabContainer>
              <RUnMounted/>
         </TabContainer> 
        }
        { activeIndex === 4 && <TabContainer>
              <RDiskUsage/>
          </TabContainer> 
        }
        { activeIndex === 5 && <TabContainer>
              <RDriveAudit/>
          </TabContainer> 
        }
        { activeIndex === 6 && <TabContainer>
              <RRingMD5/>
          </TabContainer> 
        }
        { activeIndex === 7 && <TabContainer>
              <RSwiftConfMD5/>
          </TabContainer> 
        }
        { activeIndex === 8 && <TabContainer>
          <RQuarantined/>
          </TabContainer> 
        }
        { activeIndex === 9 && <TabContainer>
          <RSockstat/>
          </TabContainer> 
        }
        { activeIndex === 10 && <TabContainer>
          <RDevices/>
          </TabContainer> 
        }
        { activeIndex === 11 && <TabContainer>
          <RAsync/>
          </TabContainer> 
        }
        { activeIndex === 12 && <TabContainer>
          <div style={{maxWidth:'950px'}}>
          <Grid container spacing={1} >
            <Grid item xs={4}>
              <RReplication_account/>
            </Grid>
            <Grid item xs={4}>
            <RReplication_container/>
            </Grid>
            <Grid item xs={4}>
            <RReplication_object/>
            </Grid>
          </Grid>
          </div>
          </TabContainer> 
        }
        
        { activeIndex === 13 && <TabContainer>
          <div style={{maxWidth:'950px'}}>
          <Grid container spacing={1}>
            <Grid item xs={5}>
              <RAuditor_account/>
            </Grid>
            <Grid item xs={4}>
              <RAuditor_container/>
            </Grid>
            <Grid item xs={4}>
              <RAuditor_object/>
            </Grid>
            </Grid>
          </div>
          </TabContainer> 
        }
        
        { activeIndex === 14 && <TabContainer>
          <RUpdater_Container/>
          </TabContainer> 
        }
        { activeIndex === 15 && <TabContainer>
          <RUpdater_Object/> 
          </TabContainer> 
        }
        { activeIndex === 16 && <TabContainer>
          <RExpirer_Object/>
          </TabContainer> 
        }
        { activeIndex === 17 && <TabContainer>
          <RVersion/> 
          </TabContainer> 
        }
        { activeIndex === 18 && <TabContainer>
          <RTime/>
          </TabContainer> 
        }
        
    </div>
    )
  }
}


const VerticalTabs = withStyles(theme => ({
  flexContainer: {
    flexDirection: 'column',  
    // backgroundColor:'black',
    // color:'white'
  },
  indicator: {
    display: 'none',
  },
}))(Tabs)

const MyTab = withStyles(theme => ({
  selected: {
    color: 'tomato',
    // backgroundColor:'#BEBEBE',
    border: '2px solid tomato',
    borderRadius:'5px'
  },
  
}))(Tab);

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 24 }}>
      {props.children}
    </Typography>
  );
}

export default ProfileTabs;