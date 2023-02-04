import React, { useEffect, useState } from "react";
import { Button, changeTheme, Popover, Switch, Text, useTheme, TriggerTypes, Card } from "@nextui-org/react";
import { getRandomNumber } from "@/lib/func/func.js";
import { Container, Grid, MenuItem } from "@mui/material";
import { updateLangageStorage } from "@/lib/storage/UserStorageFunctions.js";
import { useTranslation } from "next-i18next";
import DropdownCustom from "../Customs/Dropdown.js";
import { NAMESPACE_LANGAGE_COMMON, PAGE_LINK_GALLERY, PAGE_LINK_HOME, PAGE_LINK_TUTORIAL } from "@/constants.js";
import { useRouter } from "next/router.js";
import { Layout } from "../Containers/Layout.js";
const logoLightTheme = "/images/logos/logo_orange_complete_no_back.png";
const logoDarkTheme = "/images/logos/logo_orange_complete_no_back.png";
const logoMobileTheme = "/images/logos/logo_orange_pic_no_back.png";

const PICTURES = require("../../public/collections/data-pictures.json");

function getRandomPicture(_pictures) {
  const random = getRandomNumber(0, _pictures.length);
  return (_pictures[random]);
}

export default function FooterComponent(props) {
  const {t, i18n,} = useTranslation();
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
    <Layout >
      <Container maxWidth={'5000px'} sx={{
        //p:30,
        mb: 5,
        width:'100%',
        textAlign:'center',
        //p:30,
        mt:{xs:13, md:15},
      }}>
        <Text>© {new Date().getFullYear()} DrillDdev</Text>
<Text>
All Rights Reserved.</Text>
      </Container>
    </Layout>
  )
}
