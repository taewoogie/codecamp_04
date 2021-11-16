import DaumPostcode from 'react-daum-postcode';
import React, { useState } from 'react';
import { Modal, Button } from 'antd';

export default function ModalBasicPage() {

        const [isModalVisible, setIsModalVisible] = useState(false);
        const [Address  , setAddress]   = useState("");
        const [ZoneCode , setZoneCode]  = useState("");

      
        const showModal = () => {
          setIsModalVisible(true);
        };
      
        const handleOk = () => {
          setIsModalVisible(false);
        };
      
        const handleCancel = () => {
          setIsModalVisible(false);
        };
       
        const handleComplete = (data:any) => {
            // 데이터
            console.log(data);
            // console.log(data.address);
            // console.log(data.jibunAddress);
            // console.log(data.zonecode);

            setAddress(data.address);
            setZoneCode(data.zonecode);

            // 모달 창 닫기
            setIsModalVisible(false);

            // 필요한 데이터 set***으로 데이터 담아서 쓰기
        };

    return(
        <>
        <div>내 주소  : {Address}</div>
        <div>우편번호  : {ZoneCode}</div>
        <Button type="primary" onClick={showModal}> Open Modal </Button>
        {/* <Modal visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}> */}
        {isModalVisible && (
            <Modal visible={true} onOk={handleOk} onCancel={handleCancel}>
                <DaumPostcode onComplete={handleComplete}/>
            </Modal>
        )}
        </>
    )
}