import { createTheme } from "@nextui-org/react";

// 2. Call `createTheme` and pass your custom values
export const lightTheme = createTheme({
  type: 'light',
  //className: 'light-modern',
  
  media:{
    
    mobile:'(min-width: 10px)',
    tablet:'600px',
    laptop:'(min-width: 905px)',
    lg:'(min-width: 1240px)',
    xl:'(min-width: 1536px)',
    //xl:'0',
    //mobile:0,
    //tablet:600,
    //laptop:905,
    //desktop:1240,
    //tv:1536,
  },
  
  theme: {
    /*
    breakpoints: {
      xs:'(min-width: 10px)',
      sm:'600px',
      md:'905px',
      lg:'(min-width: 1240px)',
      xl:'(min-width: 1536px)',
    },
    */
    colors: {
        // generic colors
    white: '#ffffff',
    black: '#000000',

    // background colors (light)
    background: "$white",
    backgroundAlpha: "rgba(255, 255, 255, 0.8)", // used for semi-transparent backgrounds like the navbar
    foreground: "$black",
    backgroundContrast: "$accents2",
    //semantic colors (light)
        orange100: '#FDEBD5',
        orange200: '#FCD2AC',
        orange300: '#F8B181',
        orange400: '#F19160',
        orange500: 'var(--primary)',
        orange600: '#C74222',
        orange700: '#A72917',
        orange800: '#86150E',
        orange900: '#6F090A',

        // brand colors
    primaryLight: '$orange500',
    primaryLightHover: '$orange600', // commonly used on hover state
    primaryLightActive: '$black', // commonly used on pressed state
    primaryLightContrast: '$black', // commonly used for text inside the component
    primary: '$orange500',
    primaryBorder: '$orange600',
    primaryBorderHover: '$orange600',
    primarySolidHover: '$orange600',
    primarySolidContrast: '$black', // commonly used for text inside the component
    primaryShadow: '$orange200',

    gradient: 'linear-gradient(112deg, $blue100 -25%, $pink500 -10%, $purple500 80%)',
    link: '$orange500',

    text: '$black',
    textSecondary: '$white',

    }, // optional
  }
});

export const darkTheme = createTheme({
  type: 'dark',
  //className: 'dark-modern',
  /*
  media:{
    xs:'(min-width: 10px)',
    sm:'(min-width: 600px)',
    md:'(min-width: 905px)',
    lg:'(min-width: 1240px)',
    xl:'(min-width: 1536px)',
    //xl:'0',
    //mobile:0,
    //tablet:600,
    //laptop:905,
    //desktop:1240,
    //tv:1536,
  },
  */
  theme: {    
    colors: {
        // generic colors
    white: '#ffffff',
    black: '#000000',

    // background colors (light)
    background: "$black",
    backgroundAlpha: "rgba(0, 0, 0, 0.5)", // used for semi-transparent backgrounds like the navbar
    foreground: "$white",
    backgroundContrast: "$accents1",
    //semantic colors (light)
        orange100: '#FDEBD5',
        orange200: '#FCD2AC',
        orange300: '#F8B181',
        orange400: '#F19160',
        orange500: 'var(--primary)',
        orange600: '#C74222',
        orange700: '#A72917',
        orange800: '#86150E',
        orange900: '#6F090A',

        // brand colors
    primaryLight: '$orange500',
    primaryLightHover: '$orange300', // commonly used on hover state
    primaryLightActive: '$orange400', // commonly used on pressed state
    primaryLightContrast: '$white', // commonly used for text inside the component
    primary: '$orange500',
    primaryBorder: '$orange600',
    primaryBorderHover: '$orange600',
    primarySolidHover: '$orange600',
    primarySolidContrast: '$white', // commonly used for text inside the component
    primaryShadow: '$orange200',

    gradient: 'linear-gradient(112deg, $orange100 -25%, $pink500 -10%, $purple500 80%)',
    link: '$orange500',

    text: '$white',
    textLight: '$black',
    textSecondary: '$black',
    }, // optional
  }
})