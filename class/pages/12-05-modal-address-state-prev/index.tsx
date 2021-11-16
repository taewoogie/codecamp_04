import DaumPostcode from 'react-daum-postcode';
import { Modal, Button } from 'antd';
import React, { useState } from 'react';

export default function ModalBasicPage() {

        const [isModalVisible, setIsModalVisible] = useState(false);
        const [Address  , setAddress]   = useState("");
        const [ZoneCode , setZoneCode]  = useState("");
      
        const onToggleModal = () => {
          setIsModalVisible(prev => !prev);
        }

        const handleComplete = (data:any) => {
            console.log(data);
            setAddress(data.address);
            setZoneCode(data.zonecode);
            setIsModalVisible(prev => !prev);
        };

    return(
        <>
        <div>내 주소  : {Address}</div>
        <div>우편번호  : {ZoneCode}</div>
        <Button type="primary" onClick={onToggleModal}> Open Modal </Button>
        {/* <Modal visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}> */}
        {isModalVisible && (
            <Modal visible={true} onOk={onToggleModal} onCancel={onToggleModal}>
                <DaumPostcode onComplete={handleComplete}/>
            </Modal>
        )}
        </>
    )
}