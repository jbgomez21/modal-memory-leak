export namespace Utils {
    'use strict';

    export function isPresent(elem: any): boolean {
        return elem !== null && elem !== undefined;
    }

    export function isEmpty(elem: string): boolean {
        return elem === null || elem === undefined || elem.length === 0;
    }

    export function leftOffset(el): number {
        let rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;

        return rect.left + scrollLeft;
    }

    //outerWidth incluye margin+padding+border+width
    export function outerWidth(el: HTMLElement, includeMargins: boolean = true) {
        let style: any;

        if (document.defaultView && document.defaultView.getComputedStyle) {
            style = document.defaultView.getComputedStyle(el, null);
        } else {
            style = (<any>el).currentStyle;
        }

        if (style) {
            let width = pxToNumber(style['width']);
            let marginLeft = includeMargins ? pxToNumber(style['marginLeft']) : 0;
            let marginRight = includeMargins ? pxToNumber(style['marginRight']) : 0;

            return width + marginLeft + marginRight;
        }

        return 0;
    }

    export function pxToNumber(value: string): number {
        let l = value.length;
        return l > 2 ? parseInt(value.substr(0, l - 2), 10) : 0;
    }

    export function degToRad(degrees) {
        return degrees * (Math.PI / 180);
    }

    export function numberWithSign(value: number): string {
        return (value >= 0 ? '+' : '-') + Math.abs(value);
    }

    export function promiseSerial(array: any[]): Promise<any[]> {
        return array.reduce((promise, func) =>
            promise.then(result => func().then(Array.prototype.concat.bind(result))), Promise.resolve([]));
    }

    export function alignTo(n: number, align: number) {
        return ("0".repeat(align) + n).slice(-align);
    }

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
