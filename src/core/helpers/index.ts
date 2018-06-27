import { compareImages, isSame } from '@bouzuya/compare-images';
import * as Jimp from 'jimp';

export const saveJimp = (image: Jimp, src: string) => {
  return new Promise((resolve, reject) => {
    image.write(src, (err, img) => {
      if (err) {
        reject(err);
      }
      resolve(img);
    });
  });
};

export const isEqualImages = async (srcImage1: string, srcImage2: string) => {
  const tmp = await Jimp.read(srcImage1);
  const original = await Jimp.read(srcImage2);
  const result = compareImages(tmp.bitmap, original.bitmap);
  return isSame(result);
};
