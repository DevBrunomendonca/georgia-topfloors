import styled from "styled-components";

export const ContainerAbout = styled.section`
  min-height: 550px;
  background: linear-gradient(180deg, rgba(207,150,66,1) 3%, rgba(207,150,66,0.2049194677871149) 92%) , url('/banner-about.png') center ;
  background-size: cover;
`

export const ContentAbout = styled.div`
  margin: 0 auto;
  max-width: 1280px;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  padding-top: 18rem;
  h2, p{
    color: var(--second-color);
    max-width: 850px;
  }
  button{
    background-color: var(--second-color);
    &:hover{
      background-color: var(--first-color);
      border: 2px solid var(--first-color);
    }
  }
`