import React, { useState } from "react";
import { Typography, Box } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import data from "../../api/data.json";

const accordionData = data.pages.find((page: any) => page.type === "accordion");

const AccordionPage = ({ data }: { data: any }) => {
  const [openIndexes, setOpenIndexes] = useState<boolean[]>(
    new Array(data.content.length).fill(false)
  );

  const handleClick = (index: number) => {
    const newOpenIndexes = [...openIndexes];
    newOpenIndexes[index] = !newOpenIndexes[index];
    setOpenIndexes(newOpenIndexes);
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
      {data &&
        data.content &&
        data.content.map((section: any, index: number) => (
          <Box
            key={index}
            sx={{
              margin: "1em 0",
              width: "70%",
              bgcolor: "#95bcd5",
              boxShadow: "none",
              borderRadius: "10px",
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
                {section.title}
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
                  borderBottomLeftRadius: "10px",
                  borderBottomRightRadius: "10px",
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

export default function Page() {
  return (
    <>
      <AccordionPage data={accordionData} />;
    </>
  );
}
