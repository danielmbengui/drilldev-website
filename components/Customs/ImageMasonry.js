import React, {useState} from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
//import Container from '@mui/material/Container';

import Masonry from '@mui/lab/Masonry';
import { styled } from '@mui/material/styles';
import ModalCustom from './ModalCustom';
import {Container,Grid, Card, Text, Button, Row, Link } from '@nextui-org/react';
import Image from 'next/image';
import { myLoader } from '@/lib/ImageLoader';
import { IconButton, ImageListItem, ImageListItemBar, ListSubheader } from '@mui/material';
import { useTranslation } from 'next-i18next';
import { NAMESPACE_LANGAGE_COMMON } from '@/constants';
import VisibilityIcon from '@mui/icons-material/Visibility';
import FileDownloadIcon from '@mui/icons-material/FileDownload';

const Label = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(0.5),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  borderBottomLeftRadius: 0,
  borderBottomRightRadius: 0,
}));

export default function ImageMasonry(props) {
  const {t} = useTranslation();
  const {isMobile, pictures} = props;
  const [picture, setPicture] = useState(null);
  const [visible, setVisible] = useState(false);

  return (
    <Box maxWidth={"xl"} sx={{ minHeight: 500 }}>
            <ImageListItem key="Subheader" cols={2}>
        <ListSubheader component="div">{t('menuGallery', {ns:NAMESPACE_LANGAGE_COMMON})}</ListSubheader>
      </ImageListItem>
      <Masonry columns={{xs:2, sm:3, md:4}} spacing={1}>

        {pictures.map((item, index) => (
          <div key={index} style={{
            cursor:'pointer'
          }}>
            <ImageListItem>
             <img
             onClick={() => {
              setPicture(item);
              setVisible(true);
            }}
              src={`${item.src}?w=162&auto=format`}
              srcSet={`${item.src}?w=162&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
              style={{
                display: 'block',
                width: '100%',
                maxWidth:'100%',
                maxHeight:'auto',
                borderRadius:10
              }}
            />
            <ImageListItemBar
            title={item.title}
            sx={{fontWeight:'bold', textAlign:'start'}}
            //subtitle={item.prompt}
            actionIcon={
              <Grid.Container alignItems='center' gap={0}>
                <Grid gap={0}>
                <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${item.title}`}
              >
                <VisibilityIcon onClick={() => {
            setPicture(item);
            setVisible(true);
          }} sx={{
            color:'white',
            ":hover": {
              color:'var(--primary)'
              //backgroundColor:'secondary.main'
          }
          }} />
              </IconButton>
                </Grid>
                <Grid gap={0}>
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${item.title}`}
                href={item.src}
                download={item.src}
              >
                <FileDownloadIcon sx={{
                  color:'white',
            ":hover": {
              color:'var(--primary)'
              //backgroundColor:'secondary.main'
          }
          }} />
              </IconButton>
                </Grid>
              </Grid.Container>
            }
          />
            </ImageListItem>
          </div>
        ))}
      </Masonry>
      <ModalCustom 
      isMobile={isMobile}
      picture={picture}
      visible={visible} setVisible={setVisible}

      />
    </Box>
  );
}

const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
    title: 'Fern',
  },
  {
    img: 'https://images.unsplash.com/photo-1627308595229-7830a5c91f9f',
    title: 'Snacks',
  },
  {
    img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
    title: 'Mushrooms',
  },
  {
    img: 'https://images.unsplash.com/photo-1529655683826-aba9b3e77383',
    title: 'Tower',
  },
  {
    img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
    title: 'Sea star',
  },
  {
    img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    title: 'Honey',
  },
  {
    img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
    title: 'Basketball',
  },
  {
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Breakfast',
  },
  {
    img: 'https://images.unsplash.com/photo-1627328715728-7bcc1b5db87d',
    title: 'Tree',
  },
  {
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Burger',
  },
  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Camera',
  },
  {
    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    title: 'Coffee',
  },
  {
    img: 'https://images.unsplash.com/photo-1627000086207-76eabf23aa2e',
    title: 'Camping Car',
  },
  {
    img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
    title: 'Hats',
  },
  {
    img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
    title: 'Tomato basil',
  },
  {
    img: 'https://images.unsplash.com/photo-1627328561499-a3584d4ee4f7',
    title: 'Mountain',
  },
  {
    img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
    title: 'Bike',
  },
];