import { Box } from "@mui/material";
import NavbarNew from "./components/NavbarNew";
import Banner from "./components/Banner";

import { CompanyLogos } from "./components/CompanyLogos";
import { SuccessStory } from "./components/SuccessStory";
import { CardContainer } from "./components/CardContainer";
import { YourEmail } from "./components/YourEmail";

function App() {
  return (
    <Box>
      <NavbarNew />
      <Banner />
      <CompanyLogos />
      <SuccessStory />
      <CardContainer />
      <YourEmail />
    </Box>
  );
}

export default App;
