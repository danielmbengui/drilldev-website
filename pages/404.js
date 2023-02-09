import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import NextLink from 'next/link';
import { Box, Container, Typography } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { NAMESPACE_LANGAGE_404, NAMESPACE_LANGAGE_COMMON, PAGE_LINK_HOME, TAB_LANGAGES, TAB_NAMEPACES } from '../constants';
import { useTranslation } from 'next-i18next';
import { Button, Image, Link, Text, useTheme } from '@nextui-org/react';
import ContainerPageComponent from '@/components/Containers/ContainerPageComponent';
import ContainerPageWithoutHeaderComponent from '@/components/Containers/ContainerPageWithoutHeaderComponent';
import { useRouter } from 'next/router';

const NotFoundPage = (props) => {
  const router = useRouter();
  const {lang, setLang} = props;
  const {isDark} = useTheme();
  const { t, i18n} = useTranslation(NAMESPACE_LANGAGE_404)
/*
  const onChangeLanguage = (language) => {
    i18n.changeLanguage(language);
};

useEffect(() => {
    onChangeLanguage(langage);
}, [langage]);
*/

  return (
    <ContainerPageWithoutHeaderComponent
    title={
      <Text h1 size={60} b css={{
        textGradient: `45deg, $${isDark ? 'white' : 'black'} -20%, $orange600 100%, $${isDark ? 'white' : 'black'} 80%`,
      }}>
{`${t('title_page', {ns:NAMESPACE_LANGAGE_404})}`}
    </Text>}
    lang={lang} setLang={setLang}
    >
      <Head>
        <title>{`${t('menu404', { ns: NAMESPACE_LANGAGE_COMMON })}`}</title>
        <meta name="description" content={t('description_page', { ns: NAMESPACE_LANGAGE_404 })} />
      </Head>
      <Box
        component="main"
        sx={{
          alignItems: 'center',
          display: 'flex',
          flexGrow: 1,
          minHeight: '100%'
        }}
      >
        <Container maxWidth="md">
          <Box
            sx={{
              alignItems: 'center',
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            <Text
              align="center"
              color="textPrimary"
              h2
              size={90}
              css={{
                fontWeight:'$normal'
              }}
            >
              {`${t('page_not_there')}`}
            </Text>
            <Text
              align="center"
              color="textPrimary"
              h3
              //size={60}
              css={{
                fontWeight:'$normal'
              }}
            >
              {`${t('message_error')}`}
            </Text>
            <Box sx={{ textAlign: 'center', my:10 }}>
              <Image
                alt="image page 404"
                src="/images/404/background.png"
                width={'100%'}
                height={'100%'}
              />
            </Box>
            <Button
                //component="a"
                size="lg"
                //shadow
                icon={(<ArrowBackIcon fontSize="small" />)}
               // variant="contained"
                flat
                onPress={() => {
                    router.back();
                }}
                css={{
                  mt:3,
                  textTransform:"uppercase",
                  ":hover": {
                  //backgroundColor:'secondary.main'
              }}}
              >
                {t('back_to_dasboard')}
              </Button>
          </Box>
        </Container>
      </Box>
    </ContainerPageWithoutHeaderComponent>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, TAB_NAMEPACES, null, TAB_LANGAGES)),
      // Will be passed to the page component as props
    },
  }
}

export default NotFoundPage;
