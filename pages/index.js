import Head from 'next/head'
import { Inter } from '@next/font/google'
import HomeComponent from '../components/Home/HomeComponent';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { NAMESPACE_LANGAGE_COMMON, NAMESPACE_LANGAGE_HOME, TAB_LANGAGES, TAB_NAMEPACES } from '@/constants';
import { useTranslation } from 'next-i18next';
import ContainerPageComponent from '@/components/Containers/ContainerPageComponent';
import { Text, useTheme } from '@nextui-org/react';
import { PICTURES_HOME } from '@/__mocks__/_pictures_';

const homePictures = [
  PICTURES_HOME[16], //moon
  PICTURES_HOME[40], //indian
  PICTURES_HOME[63], //monkey
  PICTURES_HOME[94], //planet earth
  PICTURES_HOME[110], //castel
  PICTURES_HOME[127], //on toilet
  PICTURES_HOME[148], //air baloon
  PICTURES_HOME[128], //african village
  PICTURES_HOME[152], //painting
  PICTURES_HOME[170], //building
];

const inter = Inter({ subsets: ['latin'] })

export default function HomePage(props) {
  const {isDark} = useTheme();
  const {lang, setLang, sizes, isMobile, isTablet, isLaptop} = props;
  const {t} = useTranslation(TAB_NAMEPACES);

  return (
    <ContainerPageComponent
    picturesTitle={homePictures}
    sizes={sizes}
    isMobile={isMobile} isTablet={isTablet} isLaptop={isLaptop}
    title={
      <Text h1 size={45} b css={{
        textGradient: `45deg, $${isDark ? 'white' : 'black'} -20%, $orange600 100%, $${isDark ? 'white' : 'black'} 80%`,
      }}>
{`${t('title_page', {ns:NAMESPACE_LANGAGE_HOME})}`}
    </Text>}
    lang={lang} setLang={setLang}
    >
      <Head>

        <title>{`${t('menuHome', {ns:NAMESPACE_LANGAGE_COMMON})}`}</title>
        <meta name="description" content="Bienvenue sur notre site consacré à la démonstration d'illustrations générées par intelligence artificielle. Nous vous montrons les dernières tendances et techniques de génération d'images à l'aide de l'IA. Vous découvrirez les meilleures plateformes et outils pour créer vos propres illustrations de qualité, ainsi que les mots clés à utiliser pour optimiser les résultats. Suivez notre guide étape par étape pour créer vos propres illustrations surprenantes avec l'IA. Rejoignez notre communauté pour partager vos créations et découvrir celles des autres utilisateurs." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
<HomeComponent sizes={sizes} />
    </ContainerPageComponent>
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
