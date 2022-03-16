import styled from 'styled-components';



export const Hero = styled.div`
  background-image: ${({ image }) => `url(${image})`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 768px) {
    min-height: 700px;
  }

  h1 {
    color: #f1f6df;
    text-transform: uppercase;
    background: rgba(51,58,50,.7);
    padding: 10px 20px;
    font-size: 30px;

    @media screen and (min-width: 768px) {
        font-size: 70px;
    }

    span {
        visibility: hidden;
        display: none;
    }
  }
`;