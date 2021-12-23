import styled from "@emotion/styled";

export const Container = styled.div`
  margin: 0 auto;
  box-sizing: border-box;

  max-width: 1200px;
`;

export const Title = styled.div`
  text-align: center;
  margin-top: 50px;
  margin-bottom: 50px;
  color: #636363;
  text-shadow: 6px 6px 6px lightgray;
  font-size: 25px;
`;

export const BestItemWrapper = styled.div`
  display: flex;
`;

export const BestItemCardWrapper = styled.div`
  display: block;
  padding: 0px 15px 0px 0px;
  width: 100%;
  cursor: pointer;
`;

export const ImageWrapper = styled.div`
  overflow: hidden;
  height: 300px;

  img {
    display: block;
    width: 100%;
    height: 100%;
    :hover {
      overflow: hidden;
      transform: scale(1.05, 1.05);
      transition-duration: 0.5s;
      /* transform: scale(1.02);
      transition: all 0.3s ease-in-out; */
    }
  }
`;

export const ItemInfo = styled.div`
  display: block;
  padding: 15px 10px 10px 0px;
`;

export const InfoTitle = styled.span`
  overflow: hidden;
  max-height: 58px;
  font-weight: 400;
  font-size: 18px;
  color: #333;
  line-height: 29px;
  cursor: pointer;
`;

export const InfoPrice = styled.span`
  display: block;
  padding-top: 7px;
  font-size: 18px;
  font-weight: 800;
  line-height: 29px;
  color: #333;
`;

export const InfoTag = styled.span`
  display: inline-block;
  /* height: 22px; */
  margin: 7px 6px 0px 0px;
  padding: 0px 8px;
  border-radius: 4px;
  background-color: #f3f3f3;
  font-weight: 700;
  font-size: 12px;
  line-height: 22px;
  vertical-align: middle;
`;

export const UsedItemsContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  /* justify-content: center;
  align-content: center; */
  flex-wrap: wrap;
  /* margin: 50px; */
  /* padding: 80px; */
  margin: 0 -10px;
`;

export const UsedItemsdWrapper = styled.div`
  /* background-color: gray; */
  width: 25%;
  /* height: 450px; */
  margin-bottom: 35px;

  /* margin: 20px 20px; */
  padding: 0 10px;
  cursor: pointer;
  :hover {
    transform: scale(1.05, 1.05);
    transition-duration: 0.5s;
    overflow: hidden;
    box-shadow: 1px 1px 10px 4px lightgray;
  }
`;

export const InnerWrapper = styled.div``;

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
