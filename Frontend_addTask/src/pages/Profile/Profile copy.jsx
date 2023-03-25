
import {React, useState}  from 'react';
import { useNavigate } from 'react-router-dom'
import { LikeOutlined, MessageOutlined, StarOutlined, UserOutlined } from '@ant-design/icons';
import { ScheduleOutlined, TeamOutlined, EditOutlined, FileAddOutlined } from '@ant-design/icons';
import { makeStyles } from "@material-ui/core/styles";
import { FaBeer } from "react-icons/fa";
import { Avatar, Space } from 'antd';


import {
  Grid,
  Card,
  CardContent,
  Typography,
  CardHeader,
  CardActionArea
} from "@material-ui/core/";

import EditProfile from './EditProfile';
import './Profile.css'



const data_profile = 
    {
      user_name: "Bob", 
      student_id : "A023456K",
      email : "A023456K@u.nus.edu",
      major: "Data Science and Machine Learning",
      intro: "Hi, I am Bob, a master's student at NUS",
    }


const Profile = () => {
  const [visible, setVisible] = useState(false);
 
  const showModal = () => {
    setVisible(true);
  };

  return (
    <div>
      <div className='card__header'>
     
        <CardHeader
          avatar={<UserOutlined/>}
          title={`${data_profile.user_name}`}
        />
        <UserOutlined size={200} />
      <Space direction="vertical" size={16}>
      <Space wrap size={16}>
      <Avatar size={64} icon={<UserOutlined />} />
      <Avatar size="large" icon={<UserOutlined />} />
      <Avatar icon={<UserOutlined />} />
      <Avatar size="small" icon={<UserOutlined />} />
      </Space>
     </Space>
     
        <div>
        
         
          <EditOutlined style={{ fontSize:"120%" }} onClick={showModal} />
          <EditProfile visible={visible} setVisible={setVisible} data ={data_profile}/>
        </div>

      </div>
      
      <CardContent>
      <div>
        <h1 className ="main-title">Student ID:
        <Typography>{data_profile.student_id} </Typography>
        </h1>

        <h1 className ="main-title">Email:
        <Typography>{data_profile.email} </Typography>
        </h1>
        
        <h1 className ="main-title">Major:
        <Typography>{data_profile.major} </Typography>
        </h1>
        
        <h1 className ="main-title text-center">Self Description:
        <Typography>{data_profile.intro} </Typography>
        </h1>
      </div>
    </CardContent>
    </div>
  )
};



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2)
  }
}));




export default Profile ;

