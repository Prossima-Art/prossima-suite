import React from "react";
import { Accordion } from "react-bootstrap";

const faqList = [
  {
    question: "What is Prossima.art?",
    answer:
      "Prossima.art is a web services company that connects small and medium-sized businesses to digital innovation. It offers a variety of resources and services for companies, such as artificial intelligence bots, sentiment analysis, as well as experience design services focused on user and lead conversion.",
    id: 1,
  },

  {
    question: "What experience design services do you offer?",
    answer:
      "Our company offers a wide range of experience design services, including:",
      topic1: "User research and needs analysis.",
      topic2: "User interface design (UI) and user experience design (UX).",
      topic3: "Information architecture and interaction design.",
      topic4: "Prototyping and usability testing.",
      topic5: "Design of digital and mobile products.",
      topic6: "Service design and customer experience trategy.",
    id: 2,
  },

  {
    question: "What AI and ML services do you offer?",
    answer:
      "We offer a variety of AI and ML-related services, including:",
      topic1: "Development of personalized Machine Learning models.",
      topic2: "Data analysis and extraction of insights.",
      topic3: "Sentiment analysis using AI techniques.",
      topic4: "Implementation of machine learning algorithms.",
      topic5: "Process automation using AI techniques.",
      topic6: "AI and ML implementation strategy and consultancy.",
    id: 3,
  },

  {
    question: "What development services do you offer?",
    answer:
      "Our company offers a variety of development services, including:",
      topic1: "Development of websites and web applications.",
      topic2: "Custom software development.",
      topic3: "Integration of systems and APIs.",
      topic4: "Software maintenance and support.",
    id: 4,
  },

];


export default function FAQ() {

    return (
        <div>
            <Accordion>
                {faqList.map((faq) => (
                    <Accordion.Item  key={faq.id} eventKey={faq.id}>
                    <Accordion.Header>{faq.question}</Accordion.Header>
                    <Accordion.Body>
                    {faq.answer}
                    {faq.topic1}
                    {faq.topic2}
                    </Accordion.Body>
                  </Accordion.Item>
                    
                ))}
            </Accordion>
        </div>
    );
}


