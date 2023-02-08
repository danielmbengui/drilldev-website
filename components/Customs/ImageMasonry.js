import React, {useEffect, useState} from 'react';
import Paper from '@mui/material/Paper';
//import Container from '@mui/material/Container';

import Masonry from '@mui/lab/Masonry';
import { styled } from '@mui/material/styles';
import ModalCustom from './ModalCustom';
import {Container,Grid, Card, Text, Button, Row, Link, Pagination } from '@nextui-org/react';
import Image from 'next/image';
import { myLoader } from '@/lib/ImageLoader';
import { IconButton, ImageListItem, ImageListItemBar, ListSubheader } from '@mui/material';
import { useTranslation } from 'next-i18next';
import { NAMESPACE_LANGAGE_COMMON } from '@/constants';
import VisibilityIcon from '@mui/icons-material/Visibility';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import "react-responsive-carousel/lib/styles/carousel.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import "yet-another-react-lightbox/styles.css";
import { PICTURES_HOME } from '@/__mocks__/_pictures_';
import BasicExample from '../Carousels/BasicExample';

import Lightbox from "yet-another-react-lightbox";
import Captions from "yet-another-react-lightbox/plugins/captions";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Video from "yet-another-react-lightbox/plugins/video";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/captions.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

const Label = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(0.5),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  borderBottomLeftRadius: 0,
  borderBottomRightRadius: 0,
}));

const MAX_PIC_PER_PAGE = 200;

function getPicturesPerPage(page = 1, pictures = []){
    const _pictures = pictures.filter((item, index) => {
      if((index >= MAX_PIC_PER_PAGE * (page - 1)) && (index < MAX_PIC_PER_PAGE * page)) {
        return (item);
    }
    });
    return(_pictures);
}

function downloadImage(url) {
  fetch(url, {
    mode : 'no-cors',
  })
    .then(response => response.blob())
    .then(blob => {
    let blobUrl = window.URL.createObjectURL(blob);
    let a = document.createElement('a');
    a.download = url.replace(/^.*[\\\/]/, '');
    a.href = blobUrl;
    document.body.appendChild(a);
    a.click();
    a.remove();
  })
}

export default function ImageMasonry(props) {
  const {manager, handleChangeState} = props;
  const [indexPicture, setIndexPicture] = useState(-1);

  return (
    <Grid.Container css={{ minHeight: 500, width:'100%',}}>
            <Grid xs={12} justify='center' css={{
              mb:30,
              maxWidth:'fit-content'
            }}>
            <Pagination 
            onChange={(page) => {
              handleChangeState("page", page)
            }}
        boundaries={0}
        siblings={1}
      noMargin
      //loop
      page={manager.page}
      size={'md'}
      css={{maxWidth:'100%'}}
      total={manager.total_page}
      //initialPage={1}
      />
            </Grid>
      <Grid xs={12} justify='center'>
      <Masonry columns={{xs:2, sm:3, md:5}}>

{manager.list.map((item, index) => {
  return (
    <div key={index} style={{
      cursor:'pointer'
    }}>
      <ImageListItem>
       <Image
       onClick={() => {
        //setPicture(item);
        //setVisible(true);
        setIndexPicture(index)
      }}
        src={`${item.src}`}
        srcSet={`${item.src}`}
        alt={item.title}
        //loading="lazy"
        width={500}
        height={400}
        style={{
          display: 'flex',
          width: 'auto',
          maxWidth: '100%',
          height:'auto',
          maxHeight:'100%',
          borderRadius:10
        }}
        loader={myLoader}
        priority
        //priority={index < 4 ? true : false}
        //loading={index < 4 ? 'eager' : 'lazy'}
        quality={100}
      />
      <ImageListItemBar
      title={item.title}
      sx={{
        fontWeight:'bold', 
        textAlign:'start',
        borderBottomLeftRadius:10,
        borderBottomRightRadius:10,
      }}
      //subtitle={item.prompt}
      actionIcon={
        <Grid.Container alignItems='center' gap={0}>
          <Grid gap={0}>
          <IconButton
          sx={{ 
            color: 'rgba(255, 255, 255, 0.54)' }}
          aria-label={`info about ${item.title}`}
          onClick={() => {
            //setPicture(item);
            //setVisible(true);
            setIndexPicture(index);
          }}
        >
          <VisibilityIcon  sx={{
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
          //href={item.src}
          //download={item.src}
          onClick={() => {
            downloadImage(item.src);
          }}
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
  )
})}
</Masonry>
      </Grid>
      <Lightbox
      title={'Captions, Fullscreen, Slideshow, Thumbnails, Video, Zoom'}
        open={indexPicture >= 0}
        close={() => setIndexPicture(-1)}
        slides={manager.list}
        plugins={[Captions, Zoom, Fullscreen, Thumbnails, /*Video, Slideshow*/]}
        index={indexPicture}
      />
    </Grid.Container>
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