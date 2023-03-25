import {React, useState}  from 'react';
import { ScheduleOutlined, TeamOutlined, EditOutlined, FileAddOutlined } from '@ant-design/icons';
import { Tabs, Button } from 'antd';
import { useNavigate } from 'react-router-dom'
import Icon from '@ant-design/icons/lib/components/Icon';
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  CardHeader,
  CardActionArea
} from "@material-ui/core/";
import EditPopUp from './EditPopUp';
import TopTab from './TopTab';
import './Task.css'




const MyTask = ({data_group}) => {
  const [visible, setVisible] = useState(false);
  // open popup
  const showModal = () => {
    setVisible(true);
  };

  return (
    <Card>
      <div className='card__header'>
        <CardHeader
          title = "Need Approval"
        />
        <>
          <EditOutlined style={{ fontSize:"120%" }} onClick={showModal} />
          <EditPopUp visible={visible} setVisible={setVisible} data={data_group}/>
        </>
      </div>
      <CardContent>
      <div>
        <Typography>Requester: {data_group.user_name} </Typography>

        <div className='event_details'>
        Email: {data_group.email}
        </div>

        <div className='event_details'>
        Major: {data_group.major}
        </div>
      
        <br></br>
        
        <Typography>Group: {data_group.event_name}</Typography>
        <div className='event_details'>
        Location: {data_group.location}
        </div>

        <div className='event_details'>
        Time Period: {data_group.start_time} - {data_group.end_time}
        </div>
      
       
      </div>
      </CardContent>
    </Card>
  )
};

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2)
  }
}));



 // The map() function lets you manipulate the items in an array by iterating and accessing individual items

const MyTaskList = () => {
  const classes = useStyles();
  const [visible, setVisible] = useState(false);
  // open popup
  const showModal = () => {
    setVisible(true);
  };

 

  const data_group = {
    name: [
      {
      user_name: "Bob", 
      student_id : "A023456K",
      email : "A023456K@u.nus.edu",
      major: "Data Science and Machine Learning",
      intro: "Hi, I am Bob, a master's student at NUS",
      event_name: "Study Group 1",  
      event_description: "balabala", 
      location: "utown", 
      start_time: "00:00", end_time: "11:11"
    }
    ]
  };

  

  return (
    <div className={classes.root}>
        <Grid
          container
          spacing={2}
          direction="row"
          justify="flex-start"
          alignItems="flex-start"
        >
  
          {data_group.name.map(function (elem) {
            return(
              <Grid item xs={3} key={data_group.name.indexOf(elem)}>
                <MyTask data_group={elem}></MyTask>
              </Grid>
            )
          })}
        </Grid>
    </div>
  );
};

const Task = () => {
  const [addVisible, setAddVisible] = useState(false);
  // open popup
  const showAddModal = () => {
    setAddVisible(true);
  };
  return (
    <div>
      <header className='detail__header'>
        <TopTab tab={"task"}/>
        <FileAddOutlined style={{fontSize: "150%"}} onClick={showAddModal}/>
      </header>
      <MyTaskList />
    </div>
  )
};

export default Task;