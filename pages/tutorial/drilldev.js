import Head from 'next/head'
import { Inter } from '@next/font/google';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { NAMESPACE_LANGAGE_COMMON, NAMESPACE_LANGAGE_HOME, TAB_LANGAGES, TAB_NAMEPACES } from '@/constants';
import { useTranslation } from 'next-i18next';
import ContainerPageComponent from '@/components/Containers/ContainerPageComponent';
import { Button, Card, Collapse, Grid, Link, Modal, Text, useTheme } from '@nextui-org/react';
import TutorialComponent from '@/components/Home/TutorialComponent';
import { useEffect, useState } from 'react';
import fs from 'fs';
import path from 'path';
import { cwd } from 'process';
import Image from 'next/image';
import axios from 'axios';
import { useRouter } from 'next/router';
import useSWR from 'swr';
import Script from 'next/script';
import { Pagination } from "@nextui-org/react";
import MidjourneyComponent from '@/components/Tutorial/MidjourneyComponent';
import ContainerPageWithoutHeaderComponent from '@/components/Containers/ContainerPageWithoutHeaderComponent';
import DrillDevComponent from '@/components/Tutorial/DrillDevComponent';

//const fetcher = (...args) => fetch(...args).then((res) => res.json())
const fetcher = url => axios.get(url).then(res => res.data)

export default function DrillDevPage(props) {
    //const { data, error } = useSWR('/api/drafts?action=get_all', fetcher)

    const { isDark } = useTheme();
    const { lang, setLang, isMobile, isTablet, isLaptop } = props;
    const { t } = useTranslation(TAB_NAMEPACES);


    return (
      <ContainerPageWithoutHeaderComponent
      isMobile={isMobile} isTablet={isTablet} isLaptop={isLaptop}
      title={
          <Text h1 size={45} b css={{
              textGradient: `45deg, $${isDark ? 'white' : 'black'} -20%, $orange600 100%, $${isDark ? 'white' : 'black'} 80%`,
          }}>
              {t('menuTutorial', {ns:NAMESPACE_LANGAGE_COMMON})} {`- Midjourney`}
          </Text>}
      lang={lang} setLang={setLang}>
        <Head>
        <title>{`${t('menuHome', { ns: NAMESPACE_LANGAGE_COMMON })}`}</title>
        <meta name="description" content="Bienvenue sur notre site consacr?? ?? la d??monstration d'illustrations g??n??r??es par intelligence artificielle. Nous vous montrons les derni??res tendances et techniques de g??n??ration d'images ?? l'aide de l'IA. Vous d??couvrirez les meilleures plateformes et outils pour cr??er vos propres illustrations de qualit??, ainsi que les mots cl??s ?? utiliser pour optimiser les r??sultats. Suivez notre guide ??tape par ??tape pour cr??er vos propres illustrations surprenantes avec l'IA. Rejoignez notre communaut?? pour partager vos cr??ations et d??couvrir celles des autres utilisateurs." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
        <DrillDevComponent
lang={lang}
setLang={setLang}
isMobile={isMobile}
isTablet={isTablet}
isLaptop={isLaptop}
        />
      </ContainerPageWithoutHeaderComponent>
    )
}


export async function getStaticProps({ locale }) {


    return {
        props: {
          //tabPrice: response,
            ...(await serverSideTranslations(locale, TAB_NAMEPACES, null, TAB_LANGAGES)),
            // Will be passed to the page component as props
        },
    }
  }
