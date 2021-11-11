import styled from '@emotion/styled'

export const MyInput = styled.input`

`
interface IProps{
    BackGround : boolean
}
export const MyButton = styled.button`
    background-color: ${(props:IProps) => props.BackGround === true ? 'yellow' : 'whiteGray'};
    font-size: 30px;
`
