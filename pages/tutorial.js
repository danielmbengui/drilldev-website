import Head from 'next/head'
import { Inter } from '@next/font/google'
import HomeComponent from '../components/Home/HomeComponent';
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

export default function TutorialPage(props) {
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

    useEffect(() => {
        //run();
    }, [])

    /*
    useEffect(() => {
        new Crate({
            server: '961031452059910205', // Serveur DevWeb3
            channel: '961031452684865588' // #general
        })
    }, []);
    */

    return (
        <ContainerPageWithoutHeader
            isMobile={isMobile} isTablet={isTablet} isLaptop={isLaptop}
            title={
                <Text h1 size={45} b css={{
                    textGradient: `45deg, $${isDark ? 'white' : 'black'} -20%, $orange600 100%, $${isDark ? 'white' : 'black'} 80%`,
                }}>
                    {t('menuTutorial', {ns:NAMESPACE_LANGAGE_COMMON})}
                </Text>}
            lang={lang} setLang={setLang}
        >
            <Head>
                <title>{`${t('menuHome', { ns: NAMESPACE_LANGAGE_COMMON })}`}</title>
                <meta name="description" content="Bienvenue sur notre site consacré à la démonstration d'illustrations générées par intelligence artificielle. Nous vous montrons les dernières tendances et techniques de génération d'images à l'aide de l'IA. Vous découvrirez les meilleures plateformes et outils pour créer vos propres illustrations de qualité, ainsi que les mots clés à utiliser pour optimiser les résultats. Suivez notre guide étape par étape pour créer vos propres illustrations surprenantes avec l'IA. Rejoignez notre communauté pour partager vos créations et découvrir celles des autres utilisateurs." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>

            <Grid.Container>
                
                <Grid justify='center' xs={12}>
                <Pagination total={20} onChange={(page) => {
                    console.log("PAGE", page)
                }} initialPage={step} />
                </Grid>
                <Grid xs={12} justify='center'>
        <Button.Group size="md" bordered>
          <Button>One</Button>
          <Button disabled>Two</Button>
          <Button disabled>Three</Button>
        </Button.Group>
      </Grid>
      <Grid.Container justify='center'>
      <Collapse.Group splitted bordered accordion={false} css={{
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

            <Button
                onPress={() => {
                    async function postMessageToDiscord(message) {
                        message = message || 'Hello World!';

                        var discordUrl = `https://discord.com/api/webhooks/1070200455252152321/6Z8X1dGG6z2wRm-pxx9xKSa6f0B6fbJ9Ci4iwVaMXI-BjiqYyO4iqfUsMhFJLSmIVnXJ`;
                        var payload = JSON.stringify({ content: message, message: message });

                        var params = {
                            headers: {
                                'Content-Type': 'application/json',
                            },
                            method: 'POST',
                            payload: payload,
                            muteHttpExceptions: true,
                        };

                        var response = await axios.post(discordUrl, {
                            content: message,
                            //embeds:'prompt'
                        });

                        console.log(response);
                    }

                    postMessageToDiscord("/imagine prompt a white man class");
                }}
            >
                POST
            </Button>
            {
                /*
                            <iframe src="https://discord.com/widget?id=961031452059910205&theme=dark" width="350" height="500" allowtransparency="true" frameBorder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>

                */
            }
            {
                error && <div>Failed to load</div>
            }
            {
                !data && <div>Loading...</div>
            }
            {
/**
                 data && <div>
                    <h1>{data.files.length}</h1>
                    <p>{data.files.length}</p>
                    {
                        data.files.map((item, index) => {
                            return (
                                <Image
                                    key={`${item} - ${index}`}
                                    width={150}
                                    height={150}
                                    alt={"ok"}
                                    src={`${item}`}
                                    style={{
                                        cursor: 'pointer'
                                    }}
                                    onClick={() => {
                                        setPicture(item)
                                        setVisible(true)

                                    }}
                                />
                            )
                        })
                    }
                </div>
 */
            }



            <Modal
                closeButton
                //width="600px"
                //width={{xs:"90%", sm:"50%"}}
                width="600px"
                //fullWidth
                fullScreen={isMobile}
                blur
                aria-label="modal image"
                aria-labelledby="modal-title"
                aria-describedby="modal-description"
                open={visible}
                onClose={handleClose}
                justify="center"
                css={{
                    backgroundColor: "$accents0",
                }}
            >
                <Modal.Header justify="center">
                    <Text id="modal-title" h2 b css={{ textAlign: 'center', }}>{`Hello`}</Text>
                </Modal.Header>
                <Modal.Body>
                    {
                        picture && <Image
                            //key={`${picture} - ${index}`}
                            src={`${picture}`}
                            width={150}
                            height={150}
                            alt={"hello"}
                        />
                    }
                </Modal.Body>
            </Modal>
        </ContainerPageWithoutHeader>
    )
}


export async function getStaticProps({ locale, params, locales }) {
    // '__dirname' -> variable to point to current directory

    // Function to get current filenames
    // in directory
    /*
    fs.readdir(`${cwd()}/public/images/mid-journey`, (err, files) => {
        if (err)
            console.log(err);
        else {
            console.log("\nCurrent directory filenames:");
            files.forEach(file => {
                console.log(file);
            })
        }
    })
*/
    /*
    fs.lstatSync(path_string).isDirectory() 
    
    stats.isFile()
    stats.isDirectory()
    stats.isBlockDevice()
    stats.isCharacterDevice()
    stats.isSymbolicLink() // (only valid with fs.lstat())
    stats.isFIFO()
    stats.isSocket()
    */
    // Function to get current filenames
    // in directory with specific extension
    //const url_relative = `/images/mid-journey/`;
    //const url = `${cwd()}/public/images/mid-journey/`;
    //const ok = fs.readdirSync(url);
    //const prompt = "Mufasa A full body inside the cliff of hope. uiltra detailed. illustrated disney movie style";
    /*
    const array = await axios.get(`${process.env.domain}/api/drafts`, {
        params: {
            action: "get_all",
            //title: "Astronaut on the TV",
            //image:"astronaut-2",
            //types:JSON.stringify(['illustration',]),
            //tags:JSON.stringify(['freestyle', 'astronaut', 'moon', 'tv', 'living room']),
            //prompt:"astronaut with angolan flag ar",
        }
    })
        .then((response) => {
            return (response.data.files);
        }).catch((error) => {
            console.log("ERROR", error)
            return ([])
        });
        */
    /*
    ok.forEach((file, index) => {
        var url_file = '';
        if (fs.lstatSync(`${url}${file}`).isFile()) {
            if (path.extname(file) == ".png") {
                array.push(`${url_relative}${file}`)
                //url_file = `${url}${file}`;
                console.log("Image - " + index + " : " + url_file)
            }
        } else if (fs.lstatSync(`${url}${file}`).isDirectory()) {
            const url_dir = `${url}${file}/`;
            const url_relative_dir = `${url_relative}${file}/`;
            const dirBis = fs.readdirSync(url_dir);
            dirBis.forEach((file, index) => {
                if (path.extname(file) == ".png") {
                    array.push(`${url_relative_dir}${file}`)
                    url_file = `${url_dir}${file}`;
                    console.log("Image - " + index + " : " + url_file)
                }
            })
        }
        //array.push(url_file);
    })
    */
    /*
    console.log("RESULT", array,)
    console.log("LOCALE", locale)
    console.log("AS_P", process.cwd())
    console.log("PATH_N", process.cwd())
    console.log("LOCALES", locales)
    */


    return {
        props: {
            //pictures: array,
            //renameFile:renameFile(),
            ...(await serverSideTranslations(locale, TAB_NAMEPACES, null, locales)),
            // Will be passed to the page component as props
        },
    }
}
