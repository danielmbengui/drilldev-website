import * as React from "react";

import Lightbox from "yet-another-react-lightbox";
import Captions from "yet-another-react-lightbox/plugins/captions";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Video from "yet-another-react-lightbox/plugins/video";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/captions.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

import { slides, advancedSlides } from "./data/slides";
import Paragraph from "./components/Paragraph";
import LightboxButton from "./components/LightboxButton";
import FileDownloadIcon from '@mui/icons-material/FileDownload';

const BasicExample = () => {
  const [basicExampleOpen, setBasicExampleOpen] = React.useState(false);
  const [advancedExampleOpen, setAdvancedExampleOpen] = React.useState(false);

  return (
    <>
      <Paragraph>
        Full-blown example with most of the plugins enabled (Captions,
        Fullscreen, Slideshow, Thumbnails, Video, Zoom).
      </Paragraph>

      <Lightbox
      title={'Captions, Fullscreen, Slideshow, Thumbnails, Video, Zoom'}
        open={advancedExampleOpen}
        close={() => setAdvancedExampleOpen(false)}
        slides={advancedSlides}
        plugins={[Captions, Zoom, Fullscreen, Thumbnails, Video, Slideshow]}
        index={advancedSlides.length ? 2023 : 1}
      />

      <LightboxButton title={'test'} onClick={() => {
        console.log("CLICK test");
        setAdvancedExampleOpen(true)
      }} />

      <Paragraph>
        Basic example demonstrating lightbox core features with no plugins.
      </Paragraph>

      <Lightbox
        open={basicExampleOpen}
        close={() => setBasicExampleOpen(false)}
        slides={slides}
      />

      <LightboxButton title={'basic'} onClick={() => setBasicExampleOpen(true)} />
    </>
  );
};

export default BasicExample;
