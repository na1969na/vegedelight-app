import { Divider, Box, Typography, IconButton } from "@mui/material";
import { useState } from "react";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";

const FAQDisplay = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is this website?",
      answer:
        "This website is a food delivery website that allows you to order food from a variety of restaurants.",
    },
    {
      question: "How do I order food?",
      answer:
        "To order food, select a category from the menu at the top of the page, then select a restaurant from the list of restaurants that appear.",
    },
    {
      question: "How do I pay for my order?",
      answer: "You can pay for your order using a credit card or PayPal.",
    },
    {
      question: "How do I know when my order will arrive?",
      answer:
        "You will receive an email with an estimated delivery time after you place your order.",
    },
  ];

  return (
    <Box
      sx={{
        width: {
          xs: "90%",
          sm: "80%",
          md: "70%",
          lg: "60%",
          xl: "50%",
        },
        margin: {
          xs: "20px auto",
          sm: "30px auto",
          md: "40px auto",
          lg: "50px auto",
          xl: "70px auto",
        },
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "30px",
      }}
    >
      <Box display="flex" alignItems="center" gap="10px">
        <AutoAwesomeIcon sx={{ fontSize: "max(2vw, 24px)", fontWeight: 600 }} />
        <Typography
          variant="h1"
          sx={{ fontSize: "max(2vw, 24px)", fontWeight: 600 }}
        >
          FAQs
        </Typography>
      </Box>
      {faqs.map((faq, index) => (
        <Box
          key={index}
          sx={{
            width: {
              xs: "90%",
              sm: "80%",
              md: "70%",
              lg: "60%",
              xl: "50%",
            },
          }}
        >
          <Box
            display="flex"
            alignItems="center"
            justifyContent={"space-between"}
          >
            <Typography variant="h6">{faq.question}</Typography>
            <IconButton onClick={() => toggleFAQ(index)}>
              {openIndex === index ? (
                <RemoveCircleIcon sx={{ color: "#3e3930" }} />
              ) : (
                <AddCircleIcon sx={{ color: "#00917d" }} />
              )}
            </IconButton>
          </Box>
          {openIndex === index && (
            <Typography variant="body1" mt={1}>
              {faq.answer}
            </Typography>
          )}
          {index < faqs.length - 1 && <Divider sx={{ mt: 2, mb: 2 }} />}
        </Box>
      ))}
    </Box>
  );
};

export default FAQDisplay;
