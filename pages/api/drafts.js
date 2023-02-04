import Cors from 'cors';
import fs from 'fs';
import initMiddleware from '@/lib/init-middleware';
import { cwd } from 'process';
import path from 'path';
import { getListPictures, getOnePictureFromList, getRelativePath } from './constants';
import { DIR_MIDJOURNEY_DRAFTS, METHOD_GET, METHOD_POST } from '@/constants';
const PATH_PICTURES = `${process.cwd()}/public/datas/images/`;


const cors = initMiddleware(
    // You can read more about the available options here: https://github.com/expressjs/cors#configuration-options
    Cors({
        // Only allow requests with GET and POST
        methods: [METHOD_POST, METHOD_GET],
    })
)

function getAllPictures() {
    const pictures = getListPictures([], DIR_MIDJOURNEY_DRAFTS);
    /*
    if (pictures.length) {
        const array = pictures.map((item, index) => {
            return(
                {
                    title:'',
                    src: item,
                    types:["illustration"],
                }
            )
        }) 
        return (array);
    }
    */
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
        console.log("API", "access to the API \n");
        if (req.method === METHOD_GET) {
            if (req.query.action === "get_all") {
                //console.log("GET_ALL", `${req.query.action}\n`);
                const array = getAllPictures();
                //console.log("ARRAY", `${array}\n`);
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