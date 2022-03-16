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

export const Intro = styled.div`
  background-color: rgb(233, 237, 218);
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;

    @media screen and (min-width: 768px) {
        min-height: 150px;
        align-items: flex-start;
    }

  .introOuter {
    background-color: rgb(233, 237, 218);
    
    padding: 10px;
    text-align: center;

    @media screen and (min-width: 768px) {
        width: 700px;
        margin-top: -80px;
    }

    .introInner {
        border: 2px solid #a7873a;
        padding: 1em;
        line-height: 1.5;

        @media screen and (min-width: 768px) {
            padding: 2.5em 2.5em 0;
            border-bottom: 0;
        }

        
    }
  }
`