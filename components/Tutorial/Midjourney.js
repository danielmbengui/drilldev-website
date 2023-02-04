import Head from 'next/head';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { NAMESPACE_LANGAGE_COMMON, NAMESPACE_LANGAGE_HOME, TAB_LANGAGES, TAB_NAMEPACES } from '@/constants';
import { useTranslation } from 'next-i18next';
import ContainerPage from '@/components/Containers/ContainerPage';
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
import ContainerPageWithoutHeader from '@/components/Containers/ContainerPageWithoutHeader';
import { Pagination } from "@nextui-org/react";






//const fetcher = (...args) => fetch(...args).then((res) => res.json())
const fetcher = url => axios.get(url).then(res => res.data)

export default function MidjourneyComponent(props) {
    const { data, error } = useSWR('/api/drafts?action=get_all', fetcher)

    const { isDark } = useTheme();
    const { lang, setLang, isMobile, isTablet, isLaptop } = props;
    const { t } = useTranslation(TAB_NAMEPACES);
    const [visible, setVisible] = useState(false);
    const [picture, setPicture] = useState(null);

    const [step, setStep] = useState(1);

    const handleClose = () => {
        setPicture(null);
        setVisible(false);
    }

    return (
        <Grid.Container justify='center'>
<Grid.Container justify='center' maxWidth='xs'>
<Collapse.Group splitted bordered accordion={false} css={{
    //maxWidth:'max-content'
//background:'$accents0'
}}>
<Collapse title="Discord" subtitle="Se connecter/Créer un compte">
<Text>
  {"Pour pouvoir générer des images gratuitement et simplement, vous devez d'abord posséder un compte discord."}
  {"Indispensable pour la suite du tutoriel !"} 
</Text>
<Text>
  {"Si vous vouler vous inscrire sur discord, veuillez cliquer sur le bouton "} <Link css={{
    tt:'uppercase'
  }} isExternal target={'_blank'} href='https://discord.com/' flat>{`ici`}</Link>
</Text>
<Text>
<Link target={'_blank'} href={`https://support.discord.com/hc/${lang}/articles/360033931551-Getting-Started`} isExternal>{`comment créer un compte ? `}</Link>
</Text>
</Collapse>
<Collapse
title="Serveur DrillDev"
subtitle={
  <>
    {`Venez rejoindre `} <Text b>{`la communauté !`}</Text>
  </>
}
>
<Text>
  {`Vous voulez générer des images en intelligence artificielle, rejoingez le `}
  <Link as={'a'} isExternal target={'_blank'} href='https://discord.gg/vfTQAQPWwp' flat>{`Serveur DrillDev`}</Link>

</Text>
<Text>
  {`Vous pourrez égalment vous inspirer des commandes des autres participants du groupe. Pas mal non ?`}
</Text>
<Text>
  {`Le salon possède 5 salons disponibles à la génération gratuites d'images !`}
</Text>
<Grid xs={12} justify='center'>
<Button as={'a'} target={'_blank'} href='https://discord.gg/vfTQAQPWwp' flat>{`Serveur DrillDev`}</Button>
</Grid>
</Collapse>
<Collapse
title="Générer des images"
subtitle={
  <>
    {`Ça y'est vous pouvez `} <Text b>{`commencer`}</Text>
  </>
}
>
<Text color='error'>
  {`2 mots exentielles à retenir !`}
</Text>
<Text>
  imagine ET prompt
</Text>
<Text>
  imagine ET prompt
</Text>
<Text>
  {`Je le répète 2 fois, car ces 2 mots sont vraiment essentiels pour la suite !`}
</Text>
<Grid xs={12} justify='center'>
<Button as={'a'} target={'_blank'} href='https://discord.gg/vfTQAQPWwp' flat>{`Image quelquun qui tape le mot image et prompt, répété, gif ou mp4`}</Button>
</Grid>
<Text>
  {`Comme sur l'illustartion ci dessus, les deux mots clés qui servent à générer des images sont donc imagine et prompt.`}
</Text>
<Text>
  {`- '/imagine' : se définit par une commande sur Discord (précédé d'un '/')`}
</Text>
<Text>
  {`- 'prompt' : se définit par 'trouver le nom jai oublié' sur Discord (en surbrillance)`}
</Text>
<Text>
  {`- '/imagine prompt "laissez parler votre imagination"' : permet de générer une image en moins de 2 minutes`}
</Text>
<Text b>
  {`PAR EXEMPLE: '/imagine prompt a beautiful website design about digital art'`}
</Text>
<Grid xs={12} justify='center'>
<Button as={'a'} target={'_blank'} href='https://discord.gg/vfTQAQPWwp' flat>{`Montrer le avant et le après`}</Button>
</Grid>
</Collapse>
<Collapse title="Les jointures" subtitle="Créer une génération à partir d'une ou plusieurs photos">
<Text>
  {"Pour pouvoir générer des images gratuitement et simplement, vous devez d'abord posséder un compte discord."}
  {"Indispensable pour la suite du tutoriel !"} 
</Text>
<Text>
  {"Si vous vouler vous inscrire sur discord, veuillez cliquer sur le bouton "} <Link css={{
    tt:'uppercase'
  }} isExternal target={'_blank'} href='https://discord.com/' flat>{`ici`}</Link>
</Text>
<Text>
<Link target={'_blank'} href={`https://support.discord.com/hc/${lang}/articles/360033931551-Getting-Started`} isExternal>{`comment créer un compte ? `}</Link>
</Text>
</Collapse>
<Collapse title="Les styles" subtitle="Pour créer des illustrations stylisées">
<Text>
  {"Pour pouvoir générer des images gratuitement et simplement, vous devez d'abord posséder un compte discord."}
  {"Indispensable pour la suite du tutoriel !"} 
</Text>
<Text>
  {"Si vous vouler vous inscrire sur discord, veuillez cliquer sur le bouton "} <Link css={{
    tt:'uppercase'
  }} isExternal target={'_blank'} href='https://discord.com/' flat>{`ici`}</Link>
</Text>
<Text>
<Link target={'_blank'} href={`https://support.discord.com/hc/${lang}/articles/360033931551-Getting-Started`} isExternal>{`comment créer un compte ? `}</Link>
</Text>
</Collapse>
<Collapse title="Les paramètres" subtitle="Pour optimiser vos illustrations">
<Text>
  {"Pour pouvoir générer des images gratuitement et simplement, vous devez d'abord posséder un compte discord."}
  {"Indispensable pour la suite du tutoriel !"} 
</Text>
<Text>
  {"Si vous vouler vous inscrire sur discord, veuillez cliquer sur le bouton "} <Link css={{
    tt:'uppercase'
  }} isExternal target={'_blank'} href='https://discord.com/' flat>{`ici`}</Link>
</Text>
<Text>
<Link target={'_blank'} href={`https://support.discord.com/hc/${lang}/articles/360033931551-Getting-Started`} isExternal>{`comment créer un compte ? `}</Link>
</Text>
</Collapse>
<Collapse title="Les DrillDev prompts" subtitle="Nos mots cléfs pour les générations du site interneet">
<Text>
  {"Pour pouvoir générer des images gratuitement et simplement, vous devez d'abord posséder un compte discord."}
  {"Indispensable pour la suite du tutoriel !"} 
</Text>
<Text>
  {"Si vous vouler vous inscrire sur discord, veuillez cliquer sur le bouton "} <Link css={{
    tt:'uppercase'
  }} isExternal target={'_blank'} href='https://discord.com/' flat>{`ici`}</Link>
</Text>
<Text>
<Link target={'_blank'} href={`https://support.discord.com/hc/${lang}/articles/360033931551-Getting-Started`} isExternal>{`comment créer un compte ? `}</Link>
</Text>
</Collapse>
</Collapse.Group>

<Grid.Container>
<Grid xs={12} justify='center'>
<Card>
    <Card.Body css={{
        textAlign:'center'
    }}>
    <Text>
        {`Toutes les infos trouvées sur ce tutoriel proviennent du site internet officiel de Midjourney`}
        </Text>
        <Text>
        {`Nous ne sommes en aucun cas affilié, partenaire ou toute autre relation avec cette entité.`}
        </Text>
        <Text>
        {`Pour tout ce qui concerne le droit d'auteurs des photos générées, celles-ci restent encore floues au niveau légal.`}
        </Text>
        <Text>
        {`Chaque nouvelle technologie possède son lot d'étspes.... blablablalbs`}
        </Text>
    </Card.Body>
</Card>
</Grid>
</Grid.Container>

<Grid xs={12} justify='center'>
<Text>{`1. Vous devez posséder un compte Discord `} </Text>
</Grid>
<Grid xs={12} justify='center'>
<Text>
<Button as={'a'} target={'_blank'} href='https://discord.com/' flat>{`créer un compte `}</Button>
</Text>
</Grid>
<Grid xs={12} justify='center'>
<Text>
<Link target={'_blank'} href={`https://support.discord.com/hc/${lang}/articles/360033931551-Getting-Started`} isExternal>{`comment créer un compte ? `}</Link>
</Text>
</Grid>
</Grid.Container>

<Grid.Container>
<Grid xs={12} justify='center'>
<Text>{`2. Rejoindre notre Serveur`} </Text>
</Grid>
<Grid xs={12} justify='center'>
<Button as={'a'} target={'_blank'} href='https://discord.gg/vfTQAQPWwp' flat>{`Serveur DrillDev`}</Button>
</Grid>
</Grid.Container>

<Grid.Container>
<Grid xs={12} justify='center'>
<Text>{`3. Aller dans le salon 'gfdgfdsgfds' pour créer des images`} </Text>
</Grid>
<Grid xs={12} justify='center'>
<Button as={'a'} target={'_blank'} href='https://discord.gg/vfTQAQPWwp' flat>{`Serveur DrillDev`}</Button>
</Grid>
</Grid.Container>

<Grid.Container>
<Grid xs={12} justify='center'>
<Text>{`4. Générer les images à l'aides des commandes `}<Link href={`#`}>{'prompts'}</Link></Text>
</Grid>
<Grid xs={12} justify='center'>
<Button as={'a'} target={'_blank'} href='https://discord.gg/vfTQAQPWwp' flat>{`Serveur DrillDev`}</Button>
</Grid>
</Grid.Container>

<Grid.Container>
<Grid xs={12} justify='center'>
<Text>{`5. Télécharger votre image / vos images `}<Link isExternal href={`https://discord.com/invite/vfTQAQPWwp`}>{'depuis le serveur DrillDev'}</Link></Text>
</Grid>
<Grid xs={12} justify='center'>
<Button as={'a'} target={'_blank'} href='https://discord.gg/vfTQAQPWwp' flat>{`Serveur DrillDev`}</Button>
</Grid>
</Grid.Container>


        </Grid.Container>
    )
}
