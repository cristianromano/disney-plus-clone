import React from 'react'
import styled from 'styled-components'

function Login() {
    return (
        <Container>
            <CTA>
                <CTALogoOne src="/images/cta-logo-one.svg" alt=''/>
                <SignUp>GET ALL THERE</SignUp>
                <Description>Enjoy it on your favorite screen, be it your TV, tablet, computer, phone and others. I had a unique experience with a wide selection of titles in 4K. In addition, you can watch on four screens simultaneously so that no one is left out.</Description>
                <CTALogoTwo src="/images/cta-logo-two.png" alt=''/>
            </CTA>
        </Container>
    )
}

export default Login


const Container = styled.div`
    height: calc(100vh - 70px);
    display: flex;
    position: relative;
    align-items: top;
    justify-content: center;
    

    :before{
        position: absolute;
        top: 0;
        bottom: 0;
        content: "";
        left: 0;
        right:0;
        opacity: 0.7;
        background-image: url("/images/login-background.jpg");
        z-index: -1;
        background-position: top;
        background-size: cover;
    }

`

const CTA = styled.div`
max-width: 650px;
padding: 80px 40px;
width: 90%;
display: flex;
flex-direction: column;
margin-top: 100px;
`

const CTALogoOne = styled.img`




`

const CTALogoTwo = styled.img`




`

const SignUp = styled.a`

width: 100%;
background-color: #0063e5;
font-weight: bold;
padding: 17px 0;
color: #f9f9f9;
border-radius: 4px ;
text-align: center;
font-size: 18px;
cursor: pointer;

transition: all 250ms;
letter-spacing: 1.5px;
margin-top: 8px;
margin-bottom: 12px;

:hover{
    background-color: #0483ee;
}
`

const Description = styled.p`

font-size: 11px;
letter-spacing: 1.5px;
text-align: center;
line-height: 1.5;
`