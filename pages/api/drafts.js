import Cors from 'cors';
import fs from 'fs';
import initMiddleware from '@/lib/init-middleware';
import { cwd } from 'process';
import path from 'path';
import { getFirstLetterUpperCase, getListPictures, getOnePictureFromList, getRelativePath } from './constants';
import { DIR_MIDJOURNEY_DATAS, DIR_MIDJOURNEY_DRAFTS, METHOD_GET, METHOD_POST } from '@/constants';
const PATH_PICTURES = `${process.cwd()}/public/datas/images/`;


const cors = initMiddleware(
    // You can read more about the available options here: https://github.com/expressjs/cors#configuration-options
    Cors({
        // Only allow requests with GET and POST
        methods: [METHOD_POST, METHOD_GET],
    })
)


function writeFile(data) {
    if (!fs.existsSync(DIR_MIDJOURNEY_DATAS)) {
        fs.mkdirSync(DIR_MIDJOURNEY_DATAS, { recursive: true });
    }
    fs.writeFileSync(DIR_MIDJOURNEY_DATAS + "/data.json", JSON.stringify(data, null, 2));
}

function formatTitle(link) {
    var last = -1;
    var word = path.basename(link);
    for (let i = 0; i < 4; i++) {
        last = word.lastIndexOf("-");
        word = word.slice(0, last);
    }
    last = word.lastIndexOf("_");
    word = word.slice(0, last);
    const result = word
    .replaceAll("dambengu_", "")
    .replaceAll("/", " ")
    .replaceAll("_", " ")
    .replaceAll("-", " ")
    .trim()
//console.log(str.slice(-4)); commence depuis le quatrieme depuis la fin, jusqua la fin
// Expected output: "dog."

//console.log(str.slice(-9, -5)); commence depuis le quatrieme depuis la fin, jusquau 5eme depuis la fin
// Expected output: "lazy"
    return(
        getFirstLetterUpperCase(result)
    )
}


function getAllPictures() {
    const pictures_absolute = getListPictures([], DIR_MIDJOURNEY_DRAFTS).array;
    const pictures = getListPictures([], DIR_MIDJOURNEY_DRAFTS).array_relative;
    //console.log("PIIICTU", pictures)
    if (pictures.length) {
        const array = pictures.map((item, index) => {
            //fs.renameSync(pictures_absolute[index], pictures_absolute[index].replaceAll("dambengu_", ""));
            return(
                {
                    title:formatTitle(item),
                    src: item,
                    src:`https://ipfs.io/ipfs/Qmc8Pvj2hU7syTZVZWNHFT8dNhZypboTon2ioL6b7V6TXf/mid-journey/${path.basename(item).replaceAll("dambengu_", "")}`,
                    types:["illustration"],
                }
            )
        }) 
        writeFile(array);
        return (array);
    }
    return ([]);
}

function getOnePicture(name) {
    return (getOnePictureFromList(name, getAllPictures()))
}
/*
function getPicturesFile() {
    if (!fs.existsSync(PATH_PICTURES)) {
        fs.mkdirSync(PATH_PICTURES, { recursive: true });
        fs.writeFileSync(PATH_FILE_CRYPTO_CURRENCIES, JSON.stringify([], null, 2));
    }
    return JSON.parse(fs.readFileSync(PATH_FILE_CRYPTO_CURRENCIES));
}
*/
export default async function handler(req, res) {
    // Run cors
    await cors(req, res);

    try {
        //console.log("API", "access to the API \n");
        if (req.method === METHOD_GET) {
            if (req.query.action === "get_all") {
                //console.log("GET_ALL", `${req.query.action}\n`);
                const array = getAllPictures();
                //console.log("ARRAY", `${array.length}\n`);
                return res.status(200).json({ msg: array.length ? "Success" : "Error", files: array, length: array.length, });
                //return res.status(200).json({ msg: "Success", files: [], length: 0, });
            } else if (req.query.action === "get_one" && req.query.name) {
                const one = getOnePicture(req.query.name);
                return res.status(200).json({ msg: one ? "Success" : "Error", file: one, });
            }
        }
        
        //const array_relative = getListDraftPictures().array_relative;
        //const one = getOneDraftPictures(path_file, array);
        //const one_relative = getOneDraftPictures(path_file, array_relative);

        //console.log("COOOPY", `${cwd()}/public/pictures/images/${path.basename(one)}`)
        return res.status(400).json({ msg: "Error 400", });
        //console.log("tab", tabCryptoCurrencies);
        //console.log("result", response);
    } catch (error) {
        console.log("ERROR", error);
        return res.status(405).json({ msg: "Error 405", error: error });
    }

}