import { react, useState } from 'react';
import { Form, Input, Modal, Select, TimePicker, DatePicker, Button } from 'antd';

const EditProfile = ({ visible, setVisible, data }) => {
    const [form] = Form.useForm();

    const handleOk = () => {
      // handle form submission here
      setVisible(false);
    };

    const handleCancel = () => {
      setVisible(false);
    };
    const onSubmit = (values) =>{
      console.log(values)
      //await  fetch ...
      form.resetFields();
      // close()
    }

    const handleDeleteForm = () => {
      return;
    }
  
    return (
      <div>
        <Modal 
            wrapClassName="modal-wrap"
            okText="Confirm"
            cancelButtonProps={{ shape: 'round' }}
            okButtonProps={{ shape: 'round' }}
            width={600}
            visible={visible}
            title="Edit My Profile" 
            onCancel={handleCancel}
            autoFocusButton="OK" 
            onOk={handleOk}
        >
          <div className="form">
            <Form form={form} labelCol={{ span: 5 }} wrapperCol={{ span: 16 }} onFinish={onSubmit}>
              <Form.Item
                label="Name"
                name="name"
                rules={[{ required: true, message: 'Please input your name!' }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Student ID"
                name="student id"
                rules={[{ required: true, message: 'Please input your Student ID!' }]}
              >
                 <Input />
              </Form.Item>
              <Form.Item
                label="Major"
                name="major"
                rules={[{ required: true, message: 'Please input your major!' }]}
              >
                 <Input />
              </Form.Item>
              <Form.Item
                label="Self Description"
                name="self description"
                rules={[{ required: true, message: 'Please input your self description!' }]}
              >
                 <Input />
              </Form.Item>
      
            </Form>
            
          </div>
        </Modal>
      </div>
    )
};

export default EditProfile;