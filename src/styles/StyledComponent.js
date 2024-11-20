import styled from 'styled-components'

export const Wrap = styled.div`
   overflow: hidden;
   min-width: ${(props) => props.$minWidth || '1024px'};
   height: 100vh;
   background-color: #f6f6f8;
   padding-bottom: 50px;
`
export const HeadBackColor = styled.div`
   background-color: #ecf7ff;
   padding: 8px 0;
`
export const Content = styled.div`
   max-width: 1300px;
   width: 100%;
   margin: 0 auto;
   padding: 0 20px;
   display: flex;
   align-items: center;
`
export const MainWeatherBoxWrap = styled.div`
   display: flex;
   justify-content: space-between;
   width: 100%;
`
export const MainWeatherBox = styled.div`
   margin-top: 40px;
   border: 1px solid #ededed;
   background-color: #fff;
   border-radius: 7px;
   height: 300px;
   padding: 15px;
`
