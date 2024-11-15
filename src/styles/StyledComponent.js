import styled from 'styled-components'

export const Wrap = styled.div`
   overflow: hidden;
   min-width: ${(props) => props.$minWidth || '1200px'};
   background-color: #f6f6f8;
   padding-bottom: 50px;
`
export const Head = styled.div`
   display: flex;
   align-items: center;
   padding: 7px 25px;
   background-color: #ecf7ff;
`
export const MainTodayWeather = styled.div`
   margin-top: 40px;
   border: 1px solid #ededed;
   background-color: #fff;
   border-radius: 7px;
   width: 50%;
`
