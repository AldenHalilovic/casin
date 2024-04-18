import { Box, Typography, Icon, Button } from "@mui/material";
import CasinoIcon from "@mui/icons-material/Casino";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";

const SponsorComponent = () => {
  const sponsors = [
    { id: 1, name: "Casino", logo: "casino.png" },
    { id: 2, name: "Sports", logo: "Sports.png" },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        backgroundColor: "darkpurple",
        p: 2,
      }}
    >
      <Box
        sx={{ display: "flex", justifyContent: "space-around", width: "100%" }}
      >
        {sponsors.map((sponsor) => (
          <Box
            key={sponsor.id}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "baseline",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center" }}>
              {sponsor.name === "Casino" ? (
                <CasinoIcon />
              ) : (
                <SportsSoccerIcon />
              )}
              <Typography>{sponsor.name}</Typography>
            </Box>
            <img
              src={sponsor.logo}
              alt={sponsor.name}
              style={{ width: "600px", height: "300px" }}
            />
            <Typography variant="body1">
              {sponsor.name === "Casino"
                ? "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                : "Lorem Ipsum is simply dummy text of the printing and typesetting industey."}
            </Typography>
            {sponsor.name === "Casino" ? (
              <Button variant="contained" color="primary">
                Go to Casino
              </Button>
            ) : (
              <Button variant="contained" color="secondary">
                Go to SportBook
              </Button>
            )}
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default SponsorComponent;
