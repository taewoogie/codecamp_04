import styled from "@emotion/styled";

export const Container = styled.div`
  margin: auto;
`;

export const Title = styled.div`
  font-size: 50px;
  text-align: center;
  margin-top: 50px;
  margin-bottom: 50px;
  color: #636363;
  text-shadow: 6px 6px 6px lightgray;
`;

export const BestItemWrapper = styled.div`
  width: 100%;
  height: 400px;
  display: flex;
  justify-content: space-evenly;
  /* background-color: red; */
`;

export const BestItemCardWrapper = styled.div`
  width: 20%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  border: 1px solid lightgray;
  overflow: hidden;
  padding: 10px;
`;

export const Img = styled.img`
  width: 100%;
  height: 60%;
  border: 1px solid gray;
  background-color: yellow;
`;

export const Info_Title = styled.span`
  width: 100%;
  font-size: 20px;
  font-weight: bold;
  overflow: hidden;
  cursor: pointer;
`;
export const Info = styled.span`
  width: 100%;
  font-size: 17px;
  overflow: hidden;
`;

export const UsedItemsWrapper = styled.div`
  width: 90%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 50px;
`;

export const UsedItemCardWrapper = styled.div`
  width: 20%;
  height: 400px;
  display: flex;
  padding: 30px;
`;

export const ItemCard = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  font-size: 17px;
  border: 1px solid black;
  border-radius: 15px;
  box-shadow: 6px 6px 6px 6px lightgray;
  overflow: hidden;
  padding: 10px;
`;

export const ItemCardBottomWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: space-between;
  /* background-color: blue; */
`;
export const PickCount = styled.div`
  width: 30%;
  text-align: center;
  /* background-color: red; */
`;

export const DateWrapper = styled.div`
  width: 100%;
  color: lightgray;
`;
export const BasketBtn = styled.button`
  width: 30%;
`;
