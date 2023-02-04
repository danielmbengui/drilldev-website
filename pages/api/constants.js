import { DIR_MIDJOURNEY_DRAFTS, EXT_JPG, EXT_PNG, TEXT_PUBLIC } from '@/constants';
import axios from 'axios';
import fs from 'fs';
import path from 'path';
import * as IPFS from 'ipfs-core';
import { create, urlSource } from 'ipfs-http-client'

//import * as IPFS from 'ipfs-core';
//import { IPFS } from 'ipfs-http-client';
/*
import {
    fileOpen,
    directoryOpen,
    fileSave,
    supported,
  } from 'https://unpkg.com/browser-fs-access';
  */

export function getFirstLetterUpperCase(word) {
    if (word)
        return (word.charAt(0).toUpperCase() + word.slice(1));
    return (word);
}

export function getRelativePath(path) {
    if (path.includes(TEXT_PUBLIC)) {
        const length_public = TEXT_PUBLIC.length;
        const index_public = path.indexOf(TEXT_PUBLIC);
        return (path.slice(index_public + length_public));
    }
    return (path);
}

export async function getListPictures(array = [], directory = DIR_MIDJOURNEY_DRAFTS) {
    //const IPFS = require('ipfs-http-client');
const ipfs = create();
    //const ipfs = IPFS({ host: 'ipfs.infura.io', port: 5001, protocol: 'https' });
    

async function listDirectory(cid, path) {
    //const result = await ipfs.files.ls(`/ipfs/${'Qmch6wfXx3SxANUd8JorEJ5cTAzyAJUmF3q8iaatKuqTSX'}`);
    const result = ipfs.files.ls(`/ipfs/${cid}`);
    console.log("RESULT ONE", result);
}

await listDirectory('Qmch6wfXx3SxANUd8JorEJ5cTAzyAJUmF3q8iaatKuqTSX', '');

    //const _array = array;
    // Options are optional.
    /*
const options = {
    // Set to `true` to recursively open files in all subdirectories,
    // defaults to `false`.
    recursive: true,
    // Suggested directory in which the file picker opens. A well-known directory, or a file or directory handle.
    startIn: 'downloads',
    // By specifying an ID, the user agent can remember different directories for different IDs.
    id: 'projects',
    // Callback to determine whether a directory should be entered, return `true` to skip.
    skipDirectory: (entry) => entry.name[0] === '.',
  };
  
  const blobs = await directoryOpen(options);
  */
    /*
        const _dir = fs.readdirSync(directory);
        _dir.forEach((item,) => {
            const url = `${directory}/${item}`;
            const isDir = fs.lstatSync(url).isDirectory();
            const isFile = fs.lstatSync(url).isFile();
            if (isDir) {
                getListPictures(_array, url);
            } else if (isFile) {
                if (path.extname(url) === EXT_PNG || path.extname(EXT_JPG)) {
                    _array.push(url);
                }
            }
        });
        const _array_relative = [];
        _array.forEach((item, index) => {
            _array_relative.push(getRelativePath(item));
        })
        return ({
            array: _array,
            array_relative: _array_relative,
        });
        */
        //const fs = require('fs');
/*
        await axios.get("https://ipfs.io/ipfs/Qmch6wfXx3SxANUd8JorEJ5cTAzyAJUmF3q8iaatKuqTSX")
        .then((response) => {
            console.log("RESPONSE", response);
        }).catch((error) => {
            console.log("ERROR",)
        })
        */
    console.log("RESULT", directory)
    return ({
        array: [],
        array_relative: [],
    });
}

export function getOnePictureFromList(name_image, list) {
    for (let i = 0; i < list.length; i++) {
        const element = list[i];
        if (path.basename(element, path.extname(element)) === name_image) {
            return (element);
        }
    }
    return (null);
}