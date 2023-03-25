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


    const handleDeleteForm = () => {
      return;
    }
  
    return (
      <div>
        <Modal 
            wrapClassName="modal-wrap"
            okText="Approved"
            cancelText="Rejected"
            cancelButtonProps={{ shape: 'round' }}
            okButtonProps={{ shape: 'round' }}
            width={600}
            visible={visible}
            title = "Approve the request?"
            onCancel={handleCancel}
            autoFocusButton="OK" 
            onOk={handleOk}
        > 
        </Modal>
        
      </div>
    )
};

export default EditPopUp;

// <Button>Default Button</Button>