import { react, useState } from 'react';
import { Form, Input, Modal, Select, TimePicker, DatePicker, Button } from 'antd';

const EditPopUp = ({ visible, setVisible, data }) => {
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
            title="Edit Study Plan" 
            onCancel={handleCancel}
            autoFocusButton="OK" 
            onOk={handleOk}
        >
          <div className="form">
            <Form form={form} labelCol={{ span: 5 }} wrapperCol={{ span: 16 }} onFinish={onSubmit}>
              <Form.Item
                label="Event Name"
                name="eventname"
                rules={[{ required: true, message: 'Please input event name!' }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Description"
                name="eventdesc"
                rules={[{ required: true, message: 'Please input description!' }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Location"
                name="location"
                rules={[{ required: true, message: 'Please input location!' }]}
              >
                <Select>
                  <Select.Option value={1}>Science Library</Select.Option>
                  <Select.Option value={2}>Utown</Select.Option>
                  <Select.Option value={3}>Central Library</Select.Option>
                </Select>
              </Form.Item>
              <Form.Item
                label="Date"
                name="end"
                rules={[{ required: true, message: 'Please input end time!' }]}
              >
                <DatePicker />
              </Form.Item>
              <Form.Item
                label="Start-time"
                name="start"
                rules={[{ required: true, message: 'Please input start time!' }]}
              >
                <TimePicker format={'HH:mm'}/>
              </Form.Item>
              <Form.Item
                label="End-time"
                name="end"
                rules={[{ required: true, message: 'Please input end time!' }]}
              >
                <TimePicker format={'HH:mm'}/>
              </Form.Item>
            </Form>
            <Button type='primary' danger onclick={handleDeleteForm}>Delete Plan</Button>
          </div>
        </Modal>
      </div>
    )
};

export default EditPopUp;