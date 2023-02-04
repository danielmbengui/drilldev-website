import React, { useEffect, useState } from 'react';
import { getDocumentTheme } from '@nextui-org/react';
import '@/styles/globals.css';
import { NextUIProvider } from '@nextui-org/react';
import { lightTheme, darkTheme } from '@/styles/theme';
import { DEFAULT_LANGAGE, STORAGE_SCREEN_MODE, TAB_NAMEPACES } from '@/constants';
import {SSRProvider} from '@react-aria/ssr'; 
import { useMediaQuery } from "@/styles/useMediaQuery";
import { getLangageStorage } from '@/lib/storage/UserStorageFunctions';
import { appWithTranslation, useTranslation } from 'next-i18next';
import Script from 'next/script';
import FooterComponent from '@/components/Home/FooterComponent';

const MyApp = ({ Component, pageProps }) => {
  const {i18n} = useTranslation();
  const isMobile = useMediaQuery(650);
  const isTablet = useMediaQuery(960);
  const isLaptop = useMediaQuery(1280);
  const [isDark, setIsDark] = useState();  
  const [lang, setLang] = useState(DEFAULT_LANGAGE);

  const mobile = useMediaQuery(600);
  const tablet = useMediaQuery(905);
  const laptop = useMediaQuery(1240);
  const desktop = useMediaQuery(1440);
  const tv = useMediaQuery(5000);
  const sizes = {
    mobile:mobile,
    tablet:tablet,
    laptop:laptop,
    desktop:desktop,
    tv:tv,
  }

  useEffect(() => {
    let _lang = getLangageStorage();
    setLang(_lang);
    i18n.changeLanguage(_lang);
      //console.log("LAAANG MAIN", _lang)
  }, [])

  useEffect(() => {
    // you can use any storage
    let theme = window.localStorage.getItem(STORAGE_SCREEN_MODE);

    setIsDark(theme === 'dark');
    const observer = new MutationObserver(() => {
      let newTheme = getDocumentTheme(document?.documentElement);
      

      setIsDark(newTheme === 'dark');
    });

    // Observe the document theme changes
    observer.observe(document?.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme', 'style']
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // You now have access to `window`
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        dataLayer.push(arguments)
      }
      gtag('js', new Date());
      gtag('config', 'G-MJ6X1M1YRR');
    }

    var ads = document.getElementsByClassName("adsbygoogle").length;
    for (var i = 0; i < ads; i++) {
      try {
        (adsbygoogle = window.adsbygoogle || []).push({});
      } catch (e) { }
    }
  }, []);

  return (
    <SSRProvider>
                <Script async src="https://www.googletagmanager.com/gtag/js?id=G-MJ6X1M1YRR" />
<Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2953886510697247"
  crossOrigin="anonymous" />
    <NextUIProvider theme={isDark ? darkTheme : lightTheme}>
      <Component {...pageProps} lang={lang} setLang={setLang} 
      sizes={sizes}
      isMobile={isMobile} isTablet={isTablet} isLaptop={isLaptop}
       />
       <FooterComponent />
    </NextUIProvider>
    </SSRProvider>
  );
}

export default appWithTranslation(MyApp);
