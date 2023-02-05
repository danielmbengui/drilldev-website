import React, { useEffect, useState } from "react";
import { Layout } from "../Containers/Layout.js";
import NavbarComponent from "../Navbar/NavbarComponent.js";
import { Card, Text, Link, Avatar, useTheme, Input, Pagination } from "@nextui-org/react";
import { Image } from "@nextui-org/react";
import ImageMasonry from "../Customs/ImageMasonry.js";
import ContainerPageComponent from "../Containers/ContainerPageComponent.js";
import SearchIcon from '@mui/icons-material/Search';
import { Container, Grid } from "@mui/material";

const logoLightTheme = "/images/logos/logo_orange_complete_no_back.png";
const logoDarkTheme = "/images/logos/logo_orange_complete_no_back.png";
//const logoLightTheme = "/images/logos/logo_original_light_complete_no_back.png";
//const logoDarkTheme = "/images/logos/logo_original_dark_complete_no_back.png";
//const logoDarkTheme = "/images/logos/logo_original_dark_complete_no_back.png";

//const logoLightTheme = "/images/logos/logo_black_light_complete_no_back.png";
//const logoDarkTheme = "/images/logos/logo_white_dark_complete_no_back.png";
//const PICTURES = require("../../public/collections/data-pictures.json");

function getRandomSortPictures(_pictures = []) {
  const randomOrder = [];
  const randomPictures = [];
  const min = 0;
  const max = _pictures.length;
  for (let i = 0; i < max; i++) {
    let random = Math.floor(Math.random() * (max - min) + min);
    while (randomOrder.includes(random)) {
      random = Math.floor(Math.random() * (max - min) + min);
    }
    const element = _pictures[random];
    randomOrder.push(random);
    randomPictures.push(element);
  }

  return randomPictures; // The maximum is exclusive and the minimum is inclusive
}


export default function GalleryComponent(props) {
  const {picturesFetch, lang, isMobile} = props;
  const [filteredList, setFilteredList] = useState(picturesFetch);
  const [search, setSearch] = useState('');
  const { isDark } = useTheme();
  const [variant, setVariant] = useState("static");
  const [srcModal, setSrcModal] = useState("");
  const [titleModal, setTitleModal] = useState("");
  const [typesModal, setTypesModal] = useState([]);
  const [picture, setPicture] = useState(null);
  const [pictures, setPictures] = useState([
    {
      title:"aie 1",
      src:"https://ipfs.io/ipfs/Qmch6wfXx3SxANUd8JorEJ5cTAzyAJUmF3q8iaatKuqTSX/astronaut/astronaut-1.png",
      types:["illustration"]
    },
    {
      title:"aie 1",
      src:"https://ipfs.io/ipfs/Qmch6wfXx3SxANUd8JorEJ5cTAzyAJUmF3q8iaatKuqTSX/astronaut/astronaut-2.png",
      types:["illustration"]
    },
    {
      title:"Popeye",
      src:"https://ipfs.io/ipfs/Qmch6wfXx3SxANUd8JorEJ5cTAzyAJUmF3q8iaatKuqTSX/cartoon/popeye.png",
      types:["illustration"]
    }

    
  ]);

  const variants = ["static", "floating", "sticky"];
  const [visible, setVisible] = useState(false);
  const handler = () => setVisible(true);

  
  useEffect(() => {
    console.log("GALLLLEEERY", filteredList)
//const empire = pilots.filter(pilot => pilot.faction === "Empire");
  }, [search])
  

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
<Grid container justifyContent={'center'}>
    <Grid container justifyContent={'center'} sx={{mb:3}}>
        <Grid item>
          <Card css={{
              background:'$accents0',
              color:'white',
            }}>
            <Card.Body >
            <Grid container direction={'column'} alignItems='center' rowSpacing={2}>
              <Grid item >
              <Input
            color="primary"
            css={{
              color:'$primary',
              //background:'$accents0'
            }}
          value={search}
          //labelLeft="search" 
          onChange={(e) => {
            const _search = e.target.value;
            console.log("EVENT", _search)
            setSearch(_search);
            const _pictures = picturesFetch.filter(picture => {
              return(picture.title.toLowerCase().includes(_search.toLowerCase()))
            });
            setFilteredList(_pictures);
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
              </Grid>
              <Grid item>
                <Text h5>
                <Text b>{`Nb : `}</Text>               
                <Text as={'span'}>{filteredList.length}</Text>
                </Text>
              </Grid>
            </Grid>
            </Card.Body>
          </Card>
        </Grid>
</Grid>

    <ImageMasonry 
    isMobile={isMobile} 
    pictures={filteredList}
    />
    </Grid>
  )
}
