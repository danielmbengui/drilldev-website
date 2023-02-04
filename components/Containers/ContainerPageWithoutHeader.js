import React from "react";
import { Layout } from "./Layout.js";
import NavbarComponent from "../Navbar/NavbarComponent.js";
import { Card, Container, Grid, Image, useTheme } from "@nextui-org/react";

const logoLightTheme = "/images/logos/logo_orange_complete_no_back.png";
const logoDarkTheme = "/images/logos/logo_orange_complete_no_back.png";

export default function ContainerPageWithoutHeader(props) {
    const {isDark} = useTheme();
  const {children, title, pages, lang, setLang, isMobile, isLaptop,} = props;

  return (
    <Layout padding={15}>
      <NavbarComponent
      lang={lang} setLang={setLang}
        variant={"floating"}
        activeColorContent={"primary"}
        variantContent={"highlight-rounded"}
        pages={pages}
        //sx={{zIndex:10}} 
      />
        <Grid.Container gap={5} direction="column" alignItems="center">
              {
                title && <Grid justify="center" xs={12} css={{
                  //bgColor:'cyan',
                  border:`3px solid $textSecondary`,
                  opacity:0.9,
                  borderRadius:15,
                  bg:'$accents0',
                  textAlign:'center'
                }}>
                {title}
                </Grid>
              }

        </Grid.Container>
      {children}
    </Layout>
  )
}
