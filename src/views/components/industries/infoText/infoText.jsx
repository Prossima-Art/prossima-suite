import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./infoText.css";
import Video from "./assets/ecommercevideo.mp4";
import Ai from "./assets/ecommerceDev.png";
import Ux from "./assets/ecommerceUx.png";
import Vr from "./assets/ecommerceVr.png";

//impor finance
import FinanceDev from "./assets/financeDev.png";
import FinanceUx from "./assets/financeUx.png";
import FinanceceAi from "./assets/financeAi.png";
import FinanceVr from "./assets/financeVr.png";

//import Healthcare
import HealthDev from "./assets/healthDev.png";
import HealthUx from "./assets/healthUx.png";
import HealthAi from "./assets/healthAi.png";
import HealthVr from "./assets/healthVr.png";

//import Education
import EducationDev from "./assets/educationDev.png";
import EducationUx from "./assets/educationUx.png";
import EducationAi from "./assets/educationAi.png";
import EducationVr from "./assets/educationVr.png";

//import Food
import FoodDev from "./assets/foodDev.png";
import FoodUx from "./assets/foodUx.png";
import FoodAi from "./assets/foodAi.png";
import FoodVr from "./assets/foodVr.png";

//import SaaS
import SaaSDev from "./assets/saasDev.png";
import SaaSUx from "./assets/saasUx.png";
import SaaSAi from "./assets/saasAi.png";
import SaaSVr from "./assets/saasVr.png";

const VideoPlayer = () => {
  return <video src={Video} autoPlay loop muted width={380} />;
};

export const InfoTextEcommerce = () => {
  return (
    <Container>
      <Row className="infoRow">
        <Col>
          <VideoPlayer />
          <p className="subtitle">Web development</p>
          <p className="smalltext">
            In the dynamic world of e-commerce and retail, the utilization of
            advanced technologies is becoming increasingly vital. Web
            development, UI/UX design, AI, and XR (Extended Reality) tools are
            revolutionizing the way online businesses operate and engage with
            their customers. Web development serves as the foundation for
            creating robust and user-friendly e-commerce websites. It enables
            businesses to build intuitive navigation, seamless checkout
            processes, and responsive design, ensuring a smooth and enjoyable
            shopping experience for customers.
          </p>
        </Col>
        <Col>
          <img src={Ux} alt="Ux" className="dev" />
          <p className="subtitle">UI/UX Design</p>
          <p className="smalltext">
            UI/UX design plays a critical role in enhancing user engagement and
            driving conversions. By employing user-centric design principles,
            e-commerce and retail platforms can create visually appealing
            interfaces, optimize product discovery, and simplify the buying
            journey. This fosters trust, encourages exploration, and ultimately
            leads to increased sales.
          </p>
          <img src={Ai} alt="Ai" className="dev" />
          <p className="subtitle">AI technologies</p>
          <p className="smalltext">
            AI technologies are reshaping the e-commerce and retail landscape by
            enabling personalized shopping experiences, advanced analytics, and
            intelligent automation. AI-powered chatbots can provide instant
            customer support, recommendation engines can offer personalized
            product suggestions, and predictive analytics can optimize inventory
            management and pricing strategies, resulting in enhanced customer
            satisfaction and business growth.
          </p>
        </Col>
        <Col>
          <img src={Vr} alt="Vr" className="dev" />
          <p className="subtitle">Web development</p>
          <p className="smalltext">
            In the dynamic world of e-commerce and retail, the utilization of
            advanced technologies is becoming increasingly vital. Web
            development, UI/UX design, AI, and XR (Extended Reality) tools are
            revolutionizing the way online businesses operate and engage with
            their customers. Web development serves as the foundation for
            creating robust and user-friendly e-commerce websites. It enables
            businesses to build intuitive navigation, seamless checkout
            processes, and responsive design, ensuring a smooth and enjoyable
            shopping experience for customers.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

// info for Finance and Banking

export const InfoTextFinance = () => {
  return (
    <Container>
      <Row className="infoRow">
        <Col>
          <img src={FinanceDev} alt="Dev" className="dev" />
          <p className="subtitle">Web development</p>
          <p className="smalltext">
            In the realm of finance and banking, the application of advanced
            technologies is revolutionizing the industry. Web development, UI/UX
            design, AI, and XR (Extended Reality) tools are empowering financial
            institutions to deliver innovative services and exceptional customer
            experiences. Web development forms the backbone of digital banking,
            enabling the creation of secure and user-friendly online platforms.
            Through web development, financial institutions can offer features
            such as seamless account access, intuitive navigation, and
            personalized dashboards, empowering customers to manage their
            finances efficiently.
          </p>
        </Col>
        <Col>
          <img src={FinanceUx} alt="Ux tecnologies" className="dev" />
          <p className="subtitle">UI/UX Design</p>
          <p className="smalltext">
          UI/UX design plays a pivotal role in enhancing the usability and engagement of financial applications. By employing intuitive design principles, banks can create visually appealing and easy-to-navigate interfaces, streamline complex financial workflows, and ensure a seamless user experience across devices. This fosters trust, improves customer satisfaction, and encourages long-term loyalty.
          </p>
          <img src={FinanceceAi} alt="Ai tecnologies" className="dev" />
          <p className="subtitle">AI technologies</p>
          <p className="smalltext">
          AI technologies are transforming the finance and banking sector by enabling intelligent automation, personalized insights, and fraud detection. AI-powered chatbots and virtual assistants provide instant customer support, while machine learning algorithms analyze vast amounts of financial data to identify patterns, personalize recommendations, and detect anomalies, enhancing risk management and decision-making processes.
          </p>
        </Col>
        <Col>
          <img src={FinanceVr} alt="Vr tecnologies" className="dev" />
          <p className="subtitle">Web development</p>
          <p className="smalltext">
          XR tools, including Virtual Reality (VR), Augmented Reality (AR), and Mixed Reality (MR), are reshaping the way financial services are delivered and experienced. Through XR, banks can provide immersive virtual banking experiences, virtual financial consultations, and AR-powered visualizations of financial data, enabling customers to better understand complex financial concepts and make informed decisions.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

// info for healthcare

export const InfoTexthealthcare = () => {
  return (
    <Container>
      <Row className="infoRow">
        <Col>
          <img src={HealthDev} alt="Dev" className="dev" />
          <p className="subtitle">Web development</p>
          <p className="smalltext">
          Web development plays a crucial role in healthcare by enabling the creation of secure and user-friendly platforms. Through web development, healthcare organizations can offer online portals for patients to access medical records, schedule appointments, and communicate with healthcare professionals. This enhances patient engagement, convenience, and accessibility to healthcare services.
          </p>
        </Col>
        <Col>
          <img src={HealthUx} alt="Ux tecnologies" className="dev" />
          <p className="subtitle">UI/UX Design</p>
          <p className="smalltext">
          UI/UX design is essential for creating intuitive and visually appealing healthcare applications. By employing user-centric design principles, healthcare organizations can develop interfaces that are easy to navigate, visually appealing, and provide a seamless user experience. This improves patient satisfaction, reduces user errors, and fosters trust in digital healthcare solutions.
          </p>
          <img src={HealthAi} alt="Ai tecnologies" className="dev" />
          <p className="subtitle">AI technologies</p>
          <p className="smalltext">
          AI technologies are transforming the healthcare landscape by automating processes, improving diagnostics, and personalizing patient care. AI-powered chatbots and virtual assistants can provide instant support, answer common medical questions, and triage patients based on their symptoms. Machine learning algorithms can analyze vast amounts of medical data to identify patterns, predict disease outcomes, and assist in treatment planning.
          </p>
        </Col>
        <Col>
          <img src={HealthVr} alt="Vr tecnologies" className="dev" />
          <p className="subtitle">Web development</p>
          <p className="smalltext">
          VR simulations allow medical professionals to practice complex procedures in a safe and controlled environment, while AR tools can provide real-time visual guidance during surgeries. XR also enables immersive patient education experiences, allowing individuals to visualize their conditions and treatment options.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

// info for Education

export const InfoTextEducation = () => {
  return (
    <Container>
      <Row className="infoRow">
        <Col>
          <img src={EducationDev} alt="Dev" className="dev" />
          <p className="subtitle">Web development</p>
          <p className="smalltext">
          In the field of education technology (EdTech), the utilization of web development, UI/UX design, AI, and XR tools is revolutionizing the way we learn and engage with educational content. These technologies are empowering educators and learners alike, enabling the creation of immersive, personalized, and interactive educational experiences.
Web development plays a crucial role in EdTech by providing a platform for online learning management systems, educational websites, and interactive applications. It allows for the seamless delivery of educational content, including e-books, videos, quizzes, and collaborative tools. Web development also facilitates the integration of learning analytics, enabling educators to track student progress, provide personalized feedback, and tailor instruction to individual needs.
          </p>
        </Col>
        <Col>
          <img src={EducationUx} alt="Ux tecnologies" className="dev" />
          <p className="subtitle">UI/UX Design</p>
          <p className="smalltext">
          UI/UX design is essential in creating user-friendly and visually appealing educational interfaces. By employing intuitive design principles, EdTech platforms can enhance the user experience, making it easy for learners to navigate through content, access resources, and engage with interactive elements. Intuitive interfaces and visually appealing designs contribute to increased learner engagement and motivation.
          </p>
          <img src={EducationAi} alt="Ai tecnologies" className="dev" />
          <p className="subtitle">AI technologies</p>
          <p className="smalltext">
          AI technologies are transforming education by personalizing learning experiences and providing intelligent support to both educators and learners. AI-powered adaptive learning systems can analyze student performance data, identify areas of strengths and weaknesses, and offer personalized recommendations for further study. Natural Language Processing (NLP) enables automated grading and feedback, saving educators time and providing learners with immediate insights.
          </p>
        </Col>
        <Col>
          <img src={EducationVr} alt="Vr tecnologies" className="dev" />
          <p className="subtitle">Web development</p>
          <p className="smalltext">
          XR tools, including Virtual Reality (VR), Augmented Reality (AR), and Mixed Reality (MR), are revolutionizing the way we experience education. VR allows learners to explore virtual environments and participate in simulated scenarios, enhancing understanding and retention. AR overlays digital content onto the physical world, creating interactive and immersive learning experiences. MR combines real and virtual elements, enabling learners to interact with digital objects in real-time.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

// info for Food

export const InfoTextFood = () => {
  return (
    <Container>
      <Row className="infoRow">
        <Col>
          <img src={FoodDev} alt="Dev" className="dev" />
          <p className="subtitle">Web development</p>
          <p className="smalltext">
          Web development is essential for food service businesses as it allows for the creation of responsive and user-friendly websites and online ordering platforms. Through web development, restaurants can showcase their menus, provide online reservation options, and offer convenient online ordering for pickup or delivery. This enhances customer convenience, accessibility, and overall satisfaction.
          </p>
        </Col>
        <Col>
          <img src={FoodUx} alt="Ux tecnologies" className="dev" />
          <p className="subtitle">UI/UX Design</p>
          <p className="smalltext">
          UI/UX design is crucial for creating visually appealing and intuitive interfaces in food service applications. By employing user-centered design principles, businesses can develop interfaces that are easy to navigate, visually enticing, and offer a seamless user experience. Intuitive interfaces contribute to customer satisfaction, encourage repeat visits, and foster brand loyalty.
          </p>
          <img src={FoodAi} alt="Ai tecnologies" className="dev" />
          <p className="subtitle">AI technologies</p>
          <p className="smalltext">
          AI technologies are transforming the food service industry by automating processes, improving efficiency, and personalizing customer experiences. AI-powered chatbots and virtual assistants can handle customer inquiries, provide real-time recommendations based on individual preferences, and assist with order customization. AI algorithms can also analyze customer data to identify trends, predict demand, and optimize inventory management.
          </p>
        </Col>
        <Col>
          <img src={FoodVr} alt="Vr tecnologies" className="dev" />
          <p className="subtitle">Web development</p>
          <p className="smalltext">
          XR tools, such as Augmented Reality (AR) and Virtual Reality (VR), are enhancing the dining experience by offering immersive and interactive elements. AR menus can provide customers with visual representations of dishes, nutritional information, and allergen alerts. VR technology can transport diners to virtual settings, allowing them to explore different dining atmospheres or witness the cooking process firsthand.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

// info for SaaS

export const InfoTextSaaS = () => {
  return (
    <Container>
      <Row className="infoRow">
        <Col>
          <img src={SaaSDev} alt="Dev" className="dev" />
          <p className="subtitle">Web development</p>
          <p className="smalltext">
          With web development, companies can create robust and scalable software solutions that cater to the specific needs of their target audience. This includes building responsive and visually appealing websites, intuitive user interfaces, and seamless user experiences.

          </p>
        </Col>
        <Col>
          <img src={SaaSUx} alt="Ux tecnologies" className="dev" />
          <p className="subtitle">UI/UX Design</p>
          <p className="smalltext">
          UI/UX design plays a pivotal role in enhancing user satisfaction and driving customer loyalty. By leveraging intuitive design principles, SaaS companies can create visually appealing interfaces, streamline workflows, and simplify complex processes, resulting in increased user adoption and engagement.
          </p>
          <img src={SaaSAi} alt="Ai tecnologies" className="dev" />
          <p className="subtitle">AI technologies</p>
          <p className="smalltext">
          AI technologies, such as machine learning and natural language processing, are transforming the SaaS sector by enabling intelligent automation, personalized recommendations, and advanced analytics. SaaS platforms powered by AI can automate repetitive tasks, provide data-driven insights, and deliver personalized experiences, ultimately improving efficiency and customer satisfaction.

          </p>
        </Col>
        <Col>
          <img src={SaaSVr} alt="Vr tecnologies" className="dev" />
          <p className="subtitle">Web development</p>
          <p className="smalltext">
          XR tools, including Virtual Reality (VR), Augmented Reality (AR), and Mixed Reality (MR), are reshaping the way SaaS products are experienced. By leveraging immersive technologies, SaaS companies can provide interactive and engaging experiences, such as virtual product demonstrations, virtual training simulations, and augmented product visualizations, leading to enhanced customer understanding and increased sales.

          </p>
        </Col>
      </Row>
    </Container>
  );
};
