import styled from '@emotion/styled'

export const MyInput = styled.input`

`

export const MyButton = styled.button`
    background-color: ${(props) => props.BackGround === true ? 'yellow' : 'whiteGray'};
    font-size: 30px;
`
