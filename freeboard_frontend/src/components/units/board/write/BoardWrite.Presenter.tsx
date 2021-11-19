import * as S from '../../../../../styles/boards/write/index'
import DaumPostcode from 'react-daum-postcode';
import { Modal } from 'antd';

export default function BoardWritePresenter(props){

    return(
        <S.Container>
            <S.Wrapper>
                <S.Title>
                    게시물 {props.isEdit?"수정":"등록"}
                </S.Title>
                {/* header */}
                
                
                {/* body */}
                <S.HeaderWrapper>
                    <S.HeaderWrapper_left>
                        <S.TitleText>작성자</S.TitleText>
                        <S.Writer type="text" 
                                  placeholder="이름을 적어주세요." 
                                  onChange={props.WriterChk}
                                  defaultValue={props.fetchBoardData?.fetchBoard.writer}
                                //   style={props.isEdit?disabled:""}
                                  readOnly={props.isEdit?'readonly':''}
                        />
                        <S.ErrMessage>{props.writerErr}</S.ErrMessage>
                    </S.HeaderWrapper_left>
                    

                    <S.HeaderWrapper_right>
                        <S.TitleText>비밀번호</S.TitleText>
                        <S.Password type="password" 
                                    placeholder="비밀번호를 입력해주세요." 
                                    onChange={props.PasswordChk}
                        />
                        <S.ErrMessage>{props.passwordErr}</S.ErrMessage>
                    </S.HeaderWrapper_right>
                </S.HeaderWrapper>


                <S.BoardTitleWrapper>
                    <S.TitleText>제목</S.TitleText>
                    <S.BoardTitle type="text" 
                                  placeholder="제목을 작성해주세요." 
                                  onChange={props.BoardTitleChk} 
                                  defaultValue={props.fetchBoardData?.fetchBoard.title}
                    />
                    <S.ErrMessage>{props.boardTitleErr}</S.ErrMessage>
                </S.BoardTitleWrapper>


                <S.BoardContentWrapper>
                    <S.TitleText>내용</S.TitleText>
                    <S.BoardContent placeholder="내용을 작성해주세요." 
                                    onChange={props.BoardContentChk} 
                                    defaultValue={props.fetchBoardData?.fetchBoard.contents}
                    />
                    <S.ErrMessage>{props.boardContentErr}</S.ErrMessage>
                </S.BoardContentWrapper>


                <S.AddressWrapper>
                    <S.TitleText>주소</S.TitleText>

                    <S.MainAddressWrapper>
                        <S.AddressNum type="text"
                                      readOnly 
                                      value = { 
                                                props.ZoneCode ||
                                                props.fetchBoardData?.fetchBoard.boardAddress?.zipcode||
                                                "" 
                                        }
                                        // defaultValue = { props.ZoneCode }
                                        // defaultValue = {props.isEdit ? props.fetchBoardData?.fetchBoard.boardAddress.zipcode : ""}
                        />
                        <S.AddressButton type="primary" onClick={props.onToggleModal}> 우편번호 검색 </S.AddressButton>
                        {props.isModalVisible && (
                        <Modal visible={true} onOk={props.onToggleModal} onCancel={props.onToggleModal}>
                            <DaumPostcode onComplete={props.handleComplete}/>
                        </Modal>
                         )}
                    </S.MainAddressWrapper>

                    <S.SubAddressWrapper>
                        <S.Address type="text" 
                                   placeholder  = "우편 번호를 검색 해주세요" 
                                   readOnly 
                                   value        = { 
                                       props.Address ||
                                       props.fetchBoardData?.fetchBoard.boardAddress?.address ||
                                       "" 
                                    }
                                   // defaultValue = { props.Address }
                                   // onChange={props.Address}
                        />
                        <S.AddressSub type="text" 
                                      placeholder  = "상세주소를 입력해주세요" 
                                      onChange     = { props.onChangeAddressSub }
                                      defaultValue = { 
                                          props.fetchBoardData?.fetchBoard.boardAddress?.addressDetail || ""
                                       }
                        />
                    </S.SubAddressWrapper>
                </S.AddressWrapper>

                <S.UtubeWrapper>
                    <S.TitleText>유튜브</S.TitleText>
                    <S.UtubeLink type="text" 
                                 placeholder="링크를 복사해주세요." 
                                 onChange={props.onChangeYoutubeUrl}
                                 defaultValue={props.fetchBoardData?.fetchBoard.youtubeUrl}
                                 />
                </S.UtubeWrapper>


                <S.PhotoWrapper>
                    <S.TitleText>사진첨부</S.TitleText>
                    <S.PhotoListWrapper>
                        <S.PhotoList>Upload</S.PhotoList>
                        <S.PhotoList>Upload</S.PhotoList>
                        <S.PhotoList>Upload</S.PhotoList>
                    </S.PhotoListWrapper>
                </S.PhotoWrapper>


                <S.MainSettingWrapper>
                    <S.TitleText>메인 설정</S.TitleText>
                    <S.MainSettingItemWrapper>
                        <S.MainSettingItem type="radio" id="contents" /> 유튜브
                        <S.MainSettingItem type="radio" id="contents" /> 사진
                    </S.MainSettingItemWrapper>
                </S.MainSettingWrapper>


                {/* footer */}
                <S.FooterWrapper>
                    <div>
                        {!props.isEdit && <S.FooterBtn onClick={props.RegisterConfirm} backColor={props.backColor}>{!props.isEdit?"등록":"수정"}하기</S.FooterBtn> }
                        { props.isEdit && <S.FooterBtn onClick={props.Edit}            backColor={props.backColor}>{ props.isEdit?"수정":"등록"}하기</S.FooterBtn> }
                    </div>
                </S.FooterWrapper>
            </S.Wrapper>
        </S.Container>
    )
}