import React, { useState, useEffect } from "react";
import { Typography, Box } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { pages } from "../../api/data";

const accordionData = pages.find((page: any) => page.type === "accordion");

const AccordionPage = () => {
  const [data, setData] = useState([]);
  const [openIndexes, setOpenIndexes] = useState<boolean[]>([]);

  useEffect(() => {
    fetch("/api/server")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((pages) => {
        const accordionData = pages.find(
          (page: any) => page.type === "accordion"
        );
        if (accordionData && accordionData.items) {
          setData(accordionData.items);
          setOpenIndexes(
            new Array<boolean>(accordionData.items.length).fill(false)
          );
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  const handleClick = (index: number) => {
    setOpenIndexes((prevIndexes) =>
      prevIndexes.map((isOpen, idx) => (idx === index ? !isOpen : isOpen))
    );
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        maxHeight: "100vh",
        overflow: "auto",
        padding: "25px",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          textAlign: "center",
          color: "white",
        }}
      >
        FAQ
      </Typography>
      {data.map((section: any, index: number) => (
        <Box
          key={index}
          sx={{
            margin: "1em 0",
            width: "70%",
            bgcolor: "#2d3a42",
            boxShadow: "none",
            borderRadius: "10px",
            borderWidth: 1,
            borderStyle: "solid",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "1em",
              cursor: "pointer",
            }}
            onClick={() => handleClick(index)}
          >
            <Typography sx={{ fontWeight: "bold" }}>
              {section.question}
            </Typography>
            <ExpandMoreIcon
              sx={{
                transform: openIndexes[index]
                  ? "rotate(180deg)"
                  : "rotate(0deg)",
                transition: "transform 0.3s",
              }}
            />
          </Box>
          {openIndexes[index] && (
            <Box
              sx={{
                padding: "1em",
              }}
            >
              <Typography>{section.body}</Typography>
            </Box>
          )}
        </Box>
      ))}
    </Box>
  );
};

export default AccordionPage;
