import md5 from 'blueimp-md5';

export function hash(keyword: string) { return md5(keyword); }
export function isMongoId(oid: string) { return oid.length === 24 && !isNaN(Number('0x' + oid)) }
export function isArray(a: []) { return (!!a) && (a.constructor === Array); }
export function isObject(a: {}) { return (!!a) && (a.constructor === Object); }

export function calcuatePercentage(completed = 0, total = 1) {
    if (completed === 0 && total === 0) return 0;
    return Math.ceil((completed / total) * 100);
}

// https://stackoverflow.com/questions/21631127/find-the-array-index-of-an-object-with-a-specific-key-value-in-underscore
export function findObjectIndex(arr: [], cond: (el: {}) => boolean) {
    var i, x;
    for (i in arr) {
        x = arr[i];
        if (cond(x)) return parseInt(i);
    }
    return -1;
};

// https://stackoverflow.com/a/2901136
export function number_format(number: number, decimals: number, seperator: string, thousands_sep: string) {
    // http://kevin.vanzonneveld.net
    // +   original by: Jonas Raoni Soares Silva (http://www.jsfromhell.com)
    // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +     bugfix by: Michael White (http://getsprink.com)
    // +     bugfix by: Benjamin Lupton
    // +     bugfix by: Allan Jensen (http://www.winternet.no)
    // +    revised by: Jonas Raoni Soares Silva (http://www.jsfromhell.com)
    // +     bugfix by: Howard Yeend
    // +    revised by: Luke Smith (http://lucassmith.name)
    // +     bugfix by: Diogo Resende
    // +     bugfix by: Rival
    // +      input by: Kheang Hok Chin (http://www.distantia.ca/)
    // +   improved by: davook
    // +   improved by: Brett Zamir (http://brett-zamir.me)
    // +      input by: Jay Klehr
    // +   improved by: Brett Zamir (http://brett-zamir.me)
    // +      input by: Amir Habibi (http://www.residence-mixte.com/)
    // +     bugfix by: Brett Zamir (http://brett-zamir.me)
    // +   improved by: Theriault
    // +   improved by: Drew Noakes
    // *     example 1: number_format(1234.56);
    // *     returns 1: '1,235'
    // *     example 2: number_format(1234.56, 2, ',', ' ');
    // *     returns 2: '1 234,56'
    // *     example 3: number_format(1234.5678, 2, '.', '');
    // *     returns 3: '1234.57'
    // *     example 4: number_format(67, 2, ',', '.');
    // *     returns 4: '67,00'
    // *     example 5: number_format(1000);
    // *     returns 5: '1,000'
    // *     example 6: number_format(67.311, 2);
    // *     returns 6: '67.31'
    // *     example 7: number_format(1000.55, 1);
    // *     returns 7: '1,000.6'
    // *     example 8: number_format(67000, 5, ',', '.');
    // *     returns 8: '67.000,00000'
    // *     example 9: number_format(0.9, 0);
    // *     returns 9: '1'
    // *    example 10: number_format('1.20', 2);
    // *    returns 10: '1.20'
    // *    example 11: number_format('1.20', 4);
    // *    returns 11: '1.2000'
    // *    example 12: number_format('1.2000', 3);
    // *    returns 12: '1.200'
    var n = !isFinite(number) ? 0 : +number,
        prec = !isFinite(decimals) ? 0 : Math.abs(decimals),
        sep = (typeof thousands_sep === 'undefined') ? ',' : thousands_sep,
        dec = (typeof seperator === 'undefined') ? '.' : seperator,
        toFixedFix = function (n: number, prec: number) {
            // Fix for IE parseFloat(0.55).toFixed(0) = 0;
            var k = Math.pow(10, prec);
            return Math.round(n * k) / k;
        },
        s = (prec ? toFixedFix(n, prec) : Math.round(n)).toString().split('.');
    if (s[0].length > 3) {
        s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
    }
    if ((s[1] || '').length < prec) {
        s[1] = s[1] || '';
        s[1] += new Array(prec - s[1].length + 1).join('0');
    }
    return s.join(dec);
}

export function hasLength(a = []) { return a.length > 0; }
export function hasAnyKey(o = {}) { return Object.keys(o).length > 0; }

export function getBeforeDecimalPoint(number = 0.0) {
    if (typeof (number) === 'number') {
        return number.toString().split('.')[0]
    }
    return 0;
}

export function downloadAsTxtFile(data: string, filename: string) {
    const file = new File([data], `${filename}.txt`, {
        type: 'text/plain',
    });

    const link = document.createElement('a');
    const url = URL.createObjectURL(file);

    link.href = url;
    link.download = file.name;
    document.body.appendChild(link);
    link.click();

    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
}

export function loadScript(src: string) {
    return new Promise((resolve) => {
        const script = document.createElement("script");
        script.src = src;
        script.onload = () => {
            resolve(true);
        };
        script.onerror = () => {
            resolve(false);
        };
        document.body.appendChild(script);
    });
}

export function setValueToKey(obj: {}, field: string, data: any) {
    const isArray = (val: any) => val && Array.isArray(val);
    const isObject = (val: any) => val && typeof val === 'object' && !Array.isArray(val);
    const addDelimiter = (a: string, b: string): string => a ? `${a}.${b}` : b;
    // create the path along with change it's values
    const paths: any = (obj: { [key: string]: [] } = {}, head = '') => {
        return Object.entries(obj).reduce((product: any[], [key, value]) => {
            let fullPath = addDelimiter(head, key)
            if (obj.hasOwnProperty(field)) obj[field] = data; // important line of code
            if (isArray(value)) value.forEach((value) => paths(value, fullPath));
            return isObject(value) ? product.concat(paths(value, fullPath)) : product.concat(fullPath);
        }, []);
    }
    // return the paths
    return paths(obj);
}

export function getQueryParam(): any {
    return new Proxy(new URLSearchParams(window.location.search), {
        get: (searchParams, prop: string) => searchParams.get(prop),
    });
}

export function isDark() {
    return document.body.classList.contains('dark');
}

export function toggleDark() {
    document.body.classList.toggle('dark');
}

export function switchDark(bool: boolean = false) {
    document.body.classList.toggle('dark', bool);
}

export function randomId(length: number) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
        counter += 1;
    }
    return result;
}

export function sortDocuments(docs: any[]) {
    docs.sort((a, b) => (new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()));
    return docs;
};

export function imageFallback(url: string, final: (final: string) => void) {
    var im = document.createElement("img");
    im.onload = function () { final(url); }
    im.onerror = function () { final('assets/icon/icon.png'); }
    im.src = url;
}