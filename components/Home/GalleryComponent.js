import React, { useEffect, useState } from "react";
import { Layout } from "../Containers/Layout.js";
import NavbarComponent from "../Navbar/NavbarComponent.js";
import { Container, Card, Text, Link, Grid, Avatar, useTheme, Input } from "@nextui-org/react";
import { Image } from "@nextui-org/react";
import ImageMasonry from "../Customs/ImageMasonry.js";
import ContainerPage from "../Containers/ContainerPage.js";
import SearchIcon from '@mui/icons-material/Search';

const logoLightTheme = "/images/logos/logo_orange_complete_no_back.png";
const logoDarkTheme = "/images/logos/logo_orange_complete_no_back.png";
//const logoLightTheme = "/images/logos/logo_original_light_complete_no_back.png";
//const logoDarkTheme = "/images/logos/logo_original_dark_complete_no_back.png";
//const logoDarkTheme = "/images/logos/logo_original_dark_complete_no_back.png";

//const logoLightTheme = "/images/logos/logo_black_light_complete_no_back.png";
//const logoDarkTheme = "/images/logos/logo_white_dark_complete_no_back.png";
const PICTURES = require("../../public/collections/data-pictures.json");

function getRandomSortPictures() {
  const randomOrder = [];
  const randomPictures = [];
  const min = 0;
  const max = PICTURES.length;
  for (let i = 0; i < max; i++) {
    let random = Math.floor(Math.random() * (max - min) + min);
    while (randomOrder.includes(random)) {
      random = Math.floor(Math.random() * (max - min) + min);
    }
    const element = PICTURES[random];
    randomOrder.push(random);
    randomPictures.push(element);
  }

  return randomPictures; // The maximum is exclusive and the minimum is inclusive
}


export default function GalleryComponent(props) {
  const {lang, isMobile} = props;
  const { isDark } = useTheme();
  const [variant, setVariant] = useState("static");
  const [srcModal, setSrcModal] = useState("");
  const [titleModal, setTitleModal] = useState("");
  const [typesModal, setTypesModal] = useState([]);
  const [picture, setPicture] = useState(null);
  const [pictures, setPictures] = useState([]);

  const variants = ["static", "floating", "sticky"];
  const [visible, setVisible] = useState(false);
  const handler = () => setVisible(true);

  useEffect(() => {
if (getRandomSortPictures()) {
  setPictures(getRandomSortPictures());
} else {
  setPictures(PICTURES);
}
  }, [])

  const closeHandler = () => {
    setPicture(null);
    setTitleModal("");
    setTypesModal([]);
    setVisible(false);
    console.log("closed");
  };

  const MockItem = ({ text }) => {
    return (
      <Card css={{ h: "$24", $$cardColor: '$colors$primary' }}>
        <Card.Body>
          <Text h6 size={15} color="white" css={{ mt: 0 }}>
            {text}
          </Text>
        </Card.Body>
      </Card>
    );
  };

  return (
    <Container lg css={{ textAlign: 'center', mt:80, }}>

<Grid.Container gap={4} justify={'center'}>
        <Grid justify="center">
          <Card css={{
              background:'$accents4',
              color:'white',
            }}>
            <Card.Body >
            <Input
            color="primary"
            css={{
              color:'$primary',
              //background:'$accents5'
            }}
          
          //labelLeft="search" 
          onChange={() => {

          }}
          label="Search image"
          status="primary"
          bordered
          aria-label="search bar"
            clearable
            contentRightStyling={false}
            placeholder="type a category, name, ideas, etc."
            contentRight={
              <SearchIcon />
            }
          />
            </Card.Body>
          </Card>
        </Grid>
        </Grid.Container>
    <ImageMasonry 
    isMobile={isMobile} 
    pictures={pictures}
    />
  </Container>
  )
}
