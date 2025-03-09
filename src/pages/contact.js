import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Container = styled.section`
  max-width: 600px;
  margin: auto;
  padding: 40px 20px;
  text-align: center;

  @media (max-width: 600px) {
    padding: 30px 15px;
  }
`;

const Heading = styled(motion.h2)`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 20px;

  @media (max-width: 600px) {
    font-size: 2rem;
  }
`;

const ContactInfo = styled.div`
  margin-bottom: 30px;
  p {
    font-size: 1.1rem;
    color: #555;
    margin: 8px 0;
  }

  a {
    color: #ff5733;
    text-decoration: none;
    font-weight: bold;
    transition: 0.3s;

    &:hover {
      text-decoration: underline;
      color: #e64a2e;
    }
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Input = styled.input`
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;
  outline: none;
  transition: 0.3s;

  &:focus {
    border-color: #ff5733;
  }
`;

const TextArea = styled.textarea`
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;
  outline: none;
  resize: none;
  height: 120px;
  transition: 0.3s;

  &:focus {
    border-color: #ff5733;
  }
`;

const Button = styled(motion.button)`
  padding: 12px 20px;
  background-color: #ff5733;
  color: white;
  font-size: 1rem;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: #e64a2e;
  }
`;

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${formData.name}! Your message has been sent.`);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <Container>
      <Heading as={motion.h2} initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
        Contact Me
      </Heading>

      <ContactInfo>
        <p>Email: <a href="mailto:shayra@example.com">shayra690@gmail.com</a></p>
        <p>LinkedIn: <a href="https://linkedin.com/in/shayra" target="_blank" rel="noopener noreferrer">https://www.linkedin.com/in/shayra-ansari-44b9a533b/</a></p>
      </ContactInfo>

      <Form onSubmit={handleSubmit} as={motion.form} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
        <Input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
        <Input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
        <TextArea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} required />
        <Button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>Send Message</Button>
      </Form>
    </Container>
  );
};

export default Contact;
