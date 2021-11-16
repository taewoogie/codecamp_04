import {Modal} from 'antd'


export default function ModalAlertPage() {

    const onClickSuccess = () => {
        Modal.success({
            content: '게시물 등록에 성공 했습니다',
          });
    }
    const onClickFail = () => {
        Modal.error({
            content: '게시물 등록에 실패 했습니다',
          });
    }

    return(
        <>
            <button onClick={onClickSuccess}>알림창 나타내기 (성공 메시지)</button>
            <button onClick={onClickFail}>알림창 나타내기 (실패 메시지)</button>
        </>
    )
    
}