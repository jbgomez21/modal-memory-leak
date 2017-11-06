export namespace Utils {
    'use strict';

    export function uriToBase64(url, mimeType): Promise<string> {
        return new Promise((resolve, reject) => {

            let image = new Image();

            image.onload = () => {
                let canvas = document.createElement('canvas');
                canvas.width = image.naturalWidth; // or 'width' if you want a special/scaled size
                canvas.height = image.naturalHeight; // or 'height' if you want a special/scaled size

                canvas.getContext('2d').drawImage(image, 0, 0);

                let base64 = canvas.toDataURL(mimeType);

                resolve(base64);
            };

            image.src = url;
        });
    }
}
