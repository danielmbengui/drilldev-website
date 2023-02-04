import React, { useEffect, useState } from "react";
import { Button, changeTheme, Popover, Switch, Text, useTheme, TriggerTypes, Card, Grid, Link } from "@nextui-org/react";
import { getRandomNumber } from "@/lib/func/func.js";
import { Container, MenuItem } from "@mui/material";
import { updateLangageStorage } from "@/lib/storage/UserStorageFunctions.js";
import { useTranslation } from "next-i18next";
import DropdownCustom from "../Customs/Dropdown.js";
import { NAMESPACE_LANGAGE_COMMON, PAGE_LINK_GALLERY, PAGE_LINK_HOME, PAGE_LINK_TUTORIAL, WEBSITE_NAME } from "@/constants.js";
import { useRouter } from "next/router.js";
import { Layout } from "../Containers/Layout.js";
import Image from "next/image.js";
import { myLoader } from "@/lib/ImageLoader.js";
const logoLightTheme = "/images/logos/logo_orange_complete_no_back.png";
const logoDarkTheme = "/images/logos/logo_orange_complete_no_back.png";
const logoMobileTheme = "/images/logos/logo_orange_pic_no_back.png";

const PICTURES = require("../../public/collections/data-pictures.json");

function getRandomPicture(_pictures) {
  const random = getRandomNumber(0, _pictures.length);
  return (_pictures[random]);
}

export default function FooterComponent(props) {
  const { t, i18n, } = useTranslation();
  const router = useRouter()
  const { isDark } = useTheme();
  const { children, title, picturesTitle, pages, lang, setLang, sizes, isMobile, isLaptop, } = props;
  const [src, setSrc] = useState(null);
  useEffect(() => {
    if (picturesTitle && picturesTitle.length > 0) {
      setSrc(getRandomPicture(picturesTitle).src);
    } else {
      setSrc(getRandomPicture(PICTURES).src)
    }

  }, [])

  const handleChange = () => {
    const nextTheme = isDark ? 'light' : 'dark';
    window.localStorage.setItem('data-theme', nextTheme); // you can use any storage
    changeTheme(nextTheme);
  }

  const onChangeLanguage = (_lang) => {
    setLang(_lang);
    i18n.changeLanguage(_lang);
    updateLangageStorage(_lang);
    //handleClose();
    console.log("onChangeLanguage NavbarComponent", _lang)
  };

  const menuItems = [
    {
      name: t('menuGallery', { ns: NAMESPACE_LANGAGE_COMMON }),
      href: PAGE_LINK_GALLERY,
    },
    {
      name: t('menuTutorial', { ns: NAMESPACE_LANGAGE_COMMON }),
      href: PAGE_LINK_TUTORIAL,
    }
  ];

  return (
    <Container maxWidth={'5000px'} sx={{
      //p:30,
      mb: 5,
      //mt:20,
      width: '100%',
      textAlign: 'center',
      background:'transparent',
      background:'red',
      //p:30,
      mt: { xs: 5, md: 10 },
    }}>
      <Grid.Container css={{ mb: 10,}} justify="center">
        <Grid xs={12} sm={4} justify="center" alignItems="center" >
        <Card css={{ width: 'fit-content', background:'$accents0', opacity:0.9}}>
          <Card.Body >
            <Grid.Container justify="center" css={{textAlign:'center'}}>
              <Grid css={{mb:5}}>
                  <Text h4>{`Rejoins la communauté ${WEBSITE_NAME}`}</Text>
                </Grid>
              <Grid.Container justify="center" gap={1}>
                <Grid justify="center" >
                  <Link target={'_blank'} href={`https://tiktok.com`}>
                  <Image
                    src='/images/logos/others/tik-tok.png'
                    alt={`logo Drill Dev`}
                    width={50}
                    height={50}
                    style={{
                      maxWidth: '100%',
                      maxHeight: '100%',
                    }}
                    loader={myLoader}
                    priority
                    quality={100}
                  />
                  </Link>
                </Grid>
                <Grid justify="center" >
                  <Link target={'_blank'} href={`https://instagram.com`}>
                  <Image
                    src='/images/logos/others/instagram.png'
                    alt={`logo Drill Dev`}
                    width={50}
                    height={50}
                    style={{
                      maxWidth: '100%',
                      maxHeight: '100%',
                    }}
                    loader={myLoader}
                    priority
                    quality={100}
                  />
                  </Link>
                </Grid>
                <Grid justify="center">
                  <Link target={'_blank'} href={`https://youtube.com`}>
                  <Image
                    src='/images/logos/others/youtube.png'
                    alt={`logo Drill Dev`}
                    width={50}
                    height={50}
                    style={{
                      maxWidth: '100%',
                      maxHeight: '100%',
                    }}
                    loader={myLoader}
                    priority
                    quality={100}
                  />
                  </Link>
                </Grid>
                <Grid justify="center">
                  <Link target={'_blank'} href={`https://twitter.com`}>
                  <Image
                    src='/images/logos/others/twitter.png'
                    alt={`logo Drill Dev`}
                    width={50}
                    height={50}
                    style={{
                      maxWidth: '100%',
                      maxHeight: '100%',
                    }}
                    loader={myLoader}
                    priority
                    quality={100}
                  />
                  </Link>
                </Grid>
              </Grid.Container>
            </Grid.Container>
          </Card.Body>
        </Card>
        </Grid>
      </Grid.Container>
      <Grid.Container justify="center">
        <Grid>
          <Text>© {new Date().getFullYear()} DrillDdev</Text>
          <Text>
            All Rights Reserved.</Text>
        </Grid>
      </Grid.Container>
    </Container>
  )
}
