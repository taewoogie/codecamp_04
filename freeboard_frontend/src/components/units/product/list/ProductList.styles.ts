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
  height: 800px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #e4e4e6;
  padding: 20px;
`;

export const BestItemCardWrapper = styled.div`
  width: 21%;
  height: 500px;
  margin-right: 17px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  cursor: pointer;
  :hover {
    transform: scale(1.05, 1.05);
    transition-duration: 0.5s;
    overflow: hidden;
  }
`;

export const Img = styled.img`
  width: 100%;
  height: 250px;
`;

export const Info_Title = styled.span`
  width: 100%;
  height: 250px;
  font-size: 20px;
  font-weight: bold;
  padding: 15px;
  line-height: 25px;
`;

export const UsedItemBody = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

export const Info = styled.span`
  width: 100%;
  height: 250px;
  font-size: 17px;
  padding: 0px 15px 15px 15px;
  font-weight: bold;
  overflow: hidden;
`;

export const Info_Tag = styled.div`
  width: 100%;
  padding: 0px 15px 15px 15px;
  font-size: 17px;
`;

export const UsedItemsContainer = styled.div`
  width: 85%;
  display: flex;
  justify-content: center;
  align-content: center;
  flex-wrap: wrap;
  margin: 50px;
  padding: 80px;
`;

export const UsedItemsdWrapper = styled.div`
  /* background-color: gray; */
  width: 300px;
  height: 450px;
  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 20px 20px;
  cursor: pointer;
  :hover {
    transform: scale(1.05, 1.05);
    transition-duration: 0.5s;
    overflow: hidden;
    box-shadow: 1px 1px 10px 4px lightgray;
  }
`;

export const UsedItem = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  font-size: 17px;
  overflow: hidden;
`;

export const UsedItemBottomWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: space-between;
`;

export const PickCount = styled.div`
  width: 30%;
  text-align: center;
`;

export const DateWrapper = styled.div`
  width: 100%;
  padding: 0px 15px 15px 15px;
  color: lightgray;
`;
export const BasketBtn = styled.button`
  width: 30%;
`;
