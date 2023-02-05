import Head from 'next/head'
import { Inter } from '@next/font/google';
import GalleryComponent from '@/components/Home/GalleryComponent';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { NAMESPACE_LANGAGE_COMMON, TAB_LANGAGES, TAB_NAMEPACES } from '@/constants';
import { useTranslation } from 'next-i18next';
import ContainerPageComponent from '@/components/Containers/ContainerPageComponent';
import { Text, useTheme } from '@nextui-org/react';
import ContainerPageWithoutHeaderComponent from '@/components/Containers/ContainerPageWithoutHeaderComponent';
import axios from 'axios';

export default function GalleryPage(props) {
  const {isDark} = useTheme();
    const {picturesFetch, lang, setLang, isMobile, isTablet, isLaptop} = props;
  const {t} = useTranslation(TAB_NAMEPACES);
  return (
    <ContainerPageWithoutHeaderComponent
    isMobile={isMobile} isTablet={isTablet} isLaptop={isLaptop}
        /*
        title={
          <Text h1 size={45} b css={{
            textGradient: `45deg, $${isDark ? 'white' : 'black'} -20%, $orange600 100%, $orange600 100%`,
          }}>
    {`En parcourant la galerie, vous pourrez découvrir les différentes créations réalisées par nos soins`}
        </Text>}
        */
    lang={lang} setLang={setLang}
    >
      <Head>
        <title>{`${t('menuGallery', {ns:NAMESPACE_LANGAGE_COMMON})}`}</title>
        <meta name="description" content="Bienvenue sur notre site consacré à la démonstration d'illustrations générées par intelligence artificielle. Nous vous montrons les dernières tendances et techniques de génération d'images à l'aide de l'IA. Vous découvrirez les meilleures plateformes et outils pour créer vos propres illustrations de qualité, ainsi que les mots clés à utiliser pour optimiser les résultats. Suivez notre guide étape par étape pour créer vos propres illustrations surprenantes avec l'IA. Rejoignez notre communauté pour partager vos créations et découvrir celles des autres utilisateurs." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
<GalleryComponent picturesFetch={picturesFetch} lang={lang} isMobile={isMobile} />
    </ContainerPageWithoutHeaderComponent>
  )
}

export async function getStaticProps({ locale }) {
  function getRandomSortPictures(_pictures) {
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

/*
  const ok = await axios.get(`${process.env.domain}/api/drafts`, {
    params : {
      action:'get_all'
    }
  }).then((response) => {
    //console.log("RESP", response.data.files);
    return (response.data.files);
  }).catch(() => {
    //console.log("ERROR", error.message)
    return ([]);
  })
*/
const ok = await axios.get(`https://ipfs.io/ipfs/QmViuer9UvLm4a7WBQtbC4Zo5KEhkCrEcowEC1xrDmg24p/data.json`).then((response) => {
  console.log("RESP", response.data.length);
  return (response.data);
}).catch((error) => {
  console.log("ERROR", error)
  return ([]);
})

  const data = require("../public/pictures/datas/data.json");
  return {
      props: {
        picturesFetch: getRandomSortPictures(ok),
          ...(await serverSideTranslations(locale, TAB_NAMEPACES, null, TAB_LANGAGES)),
          // Will be passed to the page component as props
      },
  }
}
