import { react } from 'react';
import { useNavigate } from 'react-router-dom';
import { Tabs, Button } from 'antd';
import { ScheduleOutlined, TeamOutlined, EditOutlined, FileAddOutlined } from '@ant-design/icons';

const TopTab: React.FC = ( {tab} ) => {
    let history = useNavigate();
  
    const handleTabClick = (key) => {
      history.push(`/${key}`)
    }
    return (
      <Tabs
        onChange={(key) => {
          history(`/task_req/${key}`);
        }}
        defaultActiveKey={tab}
        items={
          [
            {
              label: (
                <span>
                  <ScheduleOutlined />
                  My Task
                </span>
              ),
              key: "task",
            },
            {
              label: (
                <span>
                  <ScheduleOutlined/>
                  My Request
                </span>
              ),
              key: "request",
            }
          ]
        }
      />
    )
  };

  export default TopTab;