import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./privacy.css";

const currentyer = new Date().getFullYear();

export default function PrivacyPolicyPage() {
  return (
    <Container className="mx-auto mt-5">
      <Row className="PrivacyComp">
        <Col>
          <h1 className="title">Privacy Policy</h1>
        </Col>
      </Row>

      <Row className="tagLine">
        <Col className="">
          <p className="title2">
            Our commitment lies in the complete protection of your privacy.
          </p>
        </Col>
      </Row>

      <Row className="mt-5">
      <Col className="privacyText" xs={12} md={12} sm={12}>
            <span className='orangeTag'>Personal Information</span>
            <p className="subtitle"> Collection & use of your personal information</p>
            <p className='paragrafo alinLeft'> As a part of our service, we gather information from the users of our website, our clients, and the talent that apply to join our company. We collect and use your personal information in order to run our website(s) and provide you with the services you’ve requested. We never sell or rent our client lists to anybody. Prossima Art may share your information with trusted parties to assist with statistical analysis, send you email newsletters, provide customer service, etc.We may keep track of which pages our users visit in order to evaluate which Prossima Art services are the most popular. Customers whose activity suggests that they are interested in a certain subject area are sent tailored content and advertising on Prossima Art. We will only disclose your personal information if required to do so by law or in good faith.</p>
          </Col>
      </Row>

      <Row className="mt-5">
      <Col className="privacyText" xs={12} md={12} sm={12}>
            <span className='blueTag'>COOKIES</span>
            <p className="subtitle"> Cookies Policy</p>
            <p className='paragrafo alinLeft'> Cookies are small data files that may or may not contain an anonymous unique identification. A website sends cookies to your browser, which are then transferred to your device. Cookies are used to collect data so that we can enhance our services for you. You may set your browser to reject all cookies or to notify you when one is received. Many browsers have a help feature that will tell you how to accept cookies, disable cookies, or be notified when you receive a new cookie. You may not be able to access some aspects of our Service if you do not allow cookies, therefore we recommend that you leave them set on.</p>
          </Col>
      </Row>


      <Row className="mt-5">
      <Col className="privacyText" xs={12} md={12} sm={12}>
            <span className='redTag'>RESOURCES</span>
            <p className="subtitle"> Newsletters & Blogs</p>
            <p className='paragrafo alinLeft'> We provide opportunities to sign-up for our email newsletters sent out periodically. You can subscribe to it by sharing your email address and confirming by clicking on the confirmation link sent out to you. In this process, we collect your email address, IP address, and time of subscription. We discreetly use this information for the distribution of email newsletters only. You can cancel the subscription at any time with the help of unsubscribe instructions followed in each newsletter. Once you unsubscribe, all the personal information is deleted permanently from our system. We periodically post blogs on our website that are accessed publicly. You can freely comment on your reviews, suggestions, or start discussions in the comment section of the blogs. We want to inform you that any information that is shared by you in the comments can be read, shared, or collected by anyone who reads them.</p>
          </Col>
      </Row>


      <Row className="mt-5">
      <Col className="privacyText" xs={12} md={12} sm={12}>
            <span className='greenTag'>ANALYTICS</span>
            <p className="subtitle"> Google Analytics</p>
            <p className='paragrafo alinLeft'> We use Google Analytics in order to monitor and analyze how users interact with our website. This helps us in improving the quality of services, content, and communication that we provide to our users. We would like to assure you that no personal data is stored in this process and you can verify it with the Google Analytics policy as well.</p>
          </Col>
      </Row>


      <Row className="mt-5">
      <Col className="privacyText" xs={12} md={12} sm={12}>
            <span className='purpleTag'>CONSENT</span>
            <p className="subtitle"> Acceptance of Policy</p>
            <p className='paragrafo alinLeft'> You agree to our privacy policy by accessing this website or using services provided by this website. Please do not use our website or the services provided by this website if you do not agree with any of the terms. We also reserve the right, at our discretion, to amend, modify, add, or remove elements of this policy by simply posting such changes, updates, or modifications on the website. Continued use of our site after the policy terms have been changed indicates your acceptance of these terms.</p>
          </Col>
      </Row>


      <Row className="my-5">
      <Col className="privacyText" xs={12} md={12} sm={12}>
            <span className='grayTag'>UPDATE</span>
            <p className="subtitle"> This Privacy Policy was last updated in {currentyer}.</p>
          </Col>
      </Row>
    </Container>
  );
}
