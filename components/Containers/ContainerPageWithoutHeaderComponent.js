import React, { useEffect, useState } from "react";
import { Layout } from "./Layout.js";
import NavbarComponent from "../Navbar/NavbarComponent.js";
import { Button, changeTheme, Popover, Switch, Text, useTheme, TriggerTypes, Card } from "@nextui-org/react";
import { getRandomNumber } from "@/lib/func/func.js";
import { Container, Grid, MenuItem } from "@mui/material";
import ResponsiveAppBar from "../Navbar/ResponsiveAppBar.js";
import { SunIcon } from "../Customs/SunIcon.js";
import { MoonIcon } from "../Customs/MoonIcon.js";
import { updateLangageStorage } from "@/lib/storage/UserStorageFunctions.js";
import { useTranslation } from "next-i18next";
import DropdownCustom from "../Customs/Dropdown.js";
import { NAMESPACE_LANGAGE_COMMON, PAGE_LINK_GALLERY, PAGE_LINK_HOME, PAGE_LINK_TUTORIAL } from "@/constants.js";
import { useRouter } from "next/router.js";
import MenuMobile from "../Navbar/MenuMobile.js";
import MenuIcon from '@mui/icons-material/Menu';
import Image from "next/image.js";
import { myLoader } from "@/lib/ImageLoader.js";
import FooterComponent from "../Home/FooterComponent.js";
const logoLightTheme = "/images/logos/logo_orange_complete_no_back.png";
const logoDarkTheme = "/images/logos/logo_orange_complete_no_back.png";
const logoMobileTheme = "/images/logos/logo_orange_pic_no_back.png";

const PICTURES = require("../../public/collections/data-pictures.json");

function getRandomPicture(_pictures) {
  const random = getRandomNumber(0, _pictures.length);
  return (_pictures[random]);
}

export default function ContainerPageWithoutHeaderComponent(props) {
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
    <Layout padding={10}>
      <NavbarComponent
        lang={lang} setLang={setLang}
        variant={"floating"}
        activeColorContent={"primary"}
        variantContent={"highlight-rounded"}
        pages={pages}a
        sizes={sizes}        
      />
      <Container>
      {children}
      </Container>
      <Container>
        <FooterComponent />
      </Container>
    </Layout>
  )
}
