/**
 * @file index.js
 */

'use strict';

/**
 * クラス
 */
class Misc {
/**
 * コンストラクタ
 */
    constructor() {
        this.cl = this.constructor.name;

        this.side = 1024;
        this.sidediv = 4;

/**
 * regular の太さ
 */
        this.UD_PR = `UD デジタル 教科書体 NP-R`;
/**
 * 太字
 */
        this.UD_PB = `UD デジタル 教科書体 NP-B`;

        this.STORAGE = 'canvastex36';
    }


/**
 * 初期化する
 * @param {HTMLCanvasElement} canvas 
 */
    async init(canvas) {
        console.log(`init`);
        {
            this.loadSetting();
        }

        this.draw11();
    }

    setListener() {
        {
            const el = document.getElementById('idload');
            if (el) {
                el.addEventListener('click', async ev => {

                });
            }
        }
    }

    saveImage() {
        /**
         * @type {HTMLCanvasElement}
         */
        const cv = window.maincanvas;
        const str = cv.toDataURL('image/png');
        const a = document.createElement('a');
        a.download = `a.png`;
        a.href = str;
        a.dispatchEvent(new MouseEvent('click'));
    }

    update() {
        requestAnimationFrame(this.update.bind(this));

        if (this.renderer) {
            this.renderer.render(this.scene, this.camera);
        }
    }

    loadSetting() {
        const name = this.STORAGE;

        const str = localStorage.getItem(name);
        if (str == null || str === '') {
            return;
        }
        try {
            const obj = JSON.parse(str);
            if (obj == null) {
                return;
            }

            this.poseObj = obj;
        } catch(ec) {
            console.warn(`catch`, ec.message);
        }
    }

    saveSetting() {
        console.log(`saveSetting called`);
        const name = this.STORAGE;

        const obj = this.poseObj;
        localStorage.setItem(name, JSON.stringify(obj));
    }

    onload() {
        const sp = new URLSearchParams(location.search);

        this.setListener();
        this.init();
        this.update();

        this.drawAlpha(window.idgrad12);
        this.drawRound(window.idgrad13, {
            radius: 30,
            half: 32,
        });
        this.drawRound(window.idgrad14, {
            radius: 30,
            half: 96,
        });

        this.draw1(window.idcanvas1);
        this.draw2(window.idcanvas2);
        this.draw3(window.idcanvas3);
        this.draw4(window.idcanvas4);

        this.drawTwo(window.idcanvas7);

        this.drawFont(window.idfont);
    }

/**
 * 32x32 パーティクル想定テクスチャ
 */
    draw11() {
        console.log(`draw11 called`);
        const cv = document.createElement('canvas');
        document.body.appendChild(cv);
        let w = 32;
        let h = 32;
        cv.width = w;
        cv.height = h;
        let c = cv.getContext('2d');
        {
            let mx = 0;
            let my = 0;
            let q = w / 4;

            const img = c.getImageData(0, 0, w, h);
            for (let y = 0; y < h; ++y) {
                for (let x = 0; x < w; ++x) {
                    let offset = (w * y + x) * 4;
                    let lv = 0;

                    if (q <= x && x < w - q) {
                        if (q <= y && y < h - q) {
                            lv = 255;
                        } else { // 上と下
                            my = (y < q) ? y : h - 1 - y;                            
                            lv = 255 * my / q;
                        }
                    } else {
                        mx = (x < q) ? x : w - 1 - x;
                        if (q <= y && y < h - q) {
                            lv = 255 * mx / q;
                        } else {
                            my = (y < q) ? y : h - 1 - y;

                            mx = q - mx;
                            my = q - my;
                            lv = 255 * (q - Math.sqrt(mx ** 2 + my ** 2)) / q;
                        }
                    }

                    lv = Math.floor(lv);
                    lv = Math.max(0, Math.min(255, lv));
                    let r = lv;
                    let g = lv;
                    let b = lv;
                    let a = 255;

                    img.data[offset] = r;
                    img.data[offset+1] = g;
                    img.data[offset+2] = b;
                    img.data[offset+3] = a;
                }
            }
            c.putImageData(img, 0, 0);
        }
    }

    drawFont(el) {
        let family = `HoloLens MDL2 Assets`;

        family = `Segoe MDL2 Assets`; // こっちが上書きしてないか?
        el.style['font-family'] = family;
        let s = ``;
    // 見つけたここだわ
//        for (let i = 0xe700; i <= 0xefff; ++i) {
    for (let h = 0; h < 16; ++h) {
        for (let i = 0; i < 16; ++i) {
            for (let j = 0; j < 16; ++j) {
                s += String.fromCodePoint(0xe000 + h * 256 + i * 16 + j);
            }
            s += `<br />`;
        }
        s += `<br />`;
    }

        el.innerHTML = s;
    }

/**
 * アルファ用グレー
 * @param {HTMLCanvasElement} cv 
 */
drawAlpha(cv) {
    const c = cv.getContext('2d');
    if (c == null) {
        return;
    }

    let w = 64;
    let h = 64;
    cv.width = w;
    cv.height = h;

    const ratio = window.devicePixelRatio;

    cv.style.width = `${w / ratio}px`;
    cv.style.height = `${h / ratio}px`;


    {
        let inner = 27 + 1;
        const g = c.createRadialGradient(w/2, h/2, inner,
            w/2, h/2, 30);
        g.addColorStop(0, '#ffffff');
        g.addColorStop(1, '#000000');

        c.fillStyle = g;
        c.fillRect(0, 0, w, h);
    }
}

/**
 * 
 * @param {HTMLCanvasElement} cvgray 元
 * @param {HTMLCanvasElement} cv 先
 * @param {number} sx 
 * @param {number} sy
 */
    setAlphaFromGray(cvgray, cv, sx, sy) {
        let w = cvgray.width;
        let h = cvgray.height;

        const cgray = cvgray.getContext('2d');
        const c = cv.getContext('2d');

        const datagray = cgray.getImageData(0, 0, w, h);
        const data = c.getImageData(0, 0, cv.width, cv.height);

        for (let y = 0; y < h; ++y) {
            for (let x = 0; x < w; ++x) {
                let src = (y * w + x) * 4;
                let dst = ((sy+y) * cv.width + (sx+x)) * 4;

                let a = datagray.data[src+0];
                data.data[dst+3] = a;
            }
        }

        c.putImageData(data, 0, 0);
    }

/**
 * 
 * @param {HTMLCanvasElement} cv 
 */
    draw1(cv) {
        const c = cv.getContext('2d');
        if (c == null) {
            return;
        }

        let w = this.side;
        let h = this.side;
        cv.width = w;
        cv.height = h;

        cv.style.width = `${w / this.sidediv}px`;
        cv.style.height = `${h / this.sidediv}px`;

        for (let y = 0; y < h; ++y) {
            for (let x = 0; x < w; ++x) {

            }
        }

        c.textAlign = 'center'
        c.textBaseline = 'hanging';
        {
            let px = 500;
            let family = `Segoe MDL2 Assets`;
            family = `HoloLens MDL2 Assets`;
            family = `HGP創英ﾌﾟﾚｾﾞﾝｽEB ｴｸｽﾄﾗﾎﾞｰﾙﾄﾞ`;
            family = 'Cambria';
            family = 'Javanese Text';
            family = 'Courier New';

            c.font = `bold ${px}px ${family}`;

            c.fillStyle = `rgba(255,0,0, 1)`;
            let s;
            let x;
            for (let j = 0; j < 16; ++j) {
                x = 0 + j * px;
                s = String.fromCodePoint(0x40 + j);
                c.fillText(s, x, h/2);
            }
            s = `ＡＢＣＤＥ`;
            c.fillText(s, 0, 0);
        }
    }
    /**
     * 
     * @param {HTMLCanvasElement} cv 
     */
    draw2(cv) {
        const c = cv.getContext('2d');
        if (c == null) {
            return;
        }

        let w = this.side;
        let h = this.side;
        cv.width = w;
        cv.height = h;

        cv.style.width = `${w / this.sidediv}px`;
        cv.style.height = `${h / this.sidediv}px`;

        for (let y = 0; y < h; ++y) {
            for (let x = 0; x < w; ++x) {

            }
        }

        c.textAlign = 'center'
        c.textBaseline = 'hanging';
        {
            let y = 150;
            let px = 900;
            let family = `UD デジタル 教科書体 NP-R`;
            family = 'Impact';
            c.font = `normal ${px}px ${family}`;

            c.fillStyle = `rgba(238,17,17, 1)`;
            let s = `26`;
            c.fillText(s, w/2, y);
        }
    }
/**
 * 
 * @param {HTMLCanvasElement} cv 
 */
    draw3(cv) {
        const c = cv.getContext('2d');
        if (c == null) {
            return;
        }

        let w = 64;
        let h = 64;
        cv.width = w;
        cv.height = h;
        const ratio = window.devicePixelRatio;
        cv.style.width = `${w / ratio}px`;
        cv.style.height = `${h / ratio}px`;

        const img = c.getImageData(0, 0, w, h);
        for (let y = 0; y < h; ++y) {
            for (let x = 0; x < w; ++x) {
                const ft = (x * w + y) * 4;

                const ix = Math.floor(x / 16);
                const iy = Math.floor(y / 16);
                const light = (((ix & 1) + (iy & 1)) & 1) !== 0;
                let lv = light ? 224 : 192;

                img.data[ft] = lv;
                img.data[ft+1] = lv;
                img.data[ft+2] = lv;
                img.data[ft+3] = 255;
            }
        }
        c.putImageData(img, 0, 0);

    }

/**
 * GAME OVER や タイトル
 * @param {HTMLCanvasElement} cv 
 */
    draw4(cv) {
        const c = cv.getContext('2d');
        if (c == null) {
            return;
        }

        let w = 256;
        let h = 256;
        cv.width = w;
        cv.height = h;
        const ratio = window.devicePixelRatio;

        cv.style.width = `${w / ratio}px`;
        cv.style.height = `${h / ratio}px`;

        c.fillStyle = 'white';
        c.fillRect(0, 0, w, h * 2 / 4);

        {
            let px = 34;
//            let family = 'メイリオ';
            c.font = `bold ${px}px ${this.UD_PB}`;
            c.textAlign = 'center';
            c.textBaseline = 'middle';
            let s = 'GAME OVER';
            let x = w / 2;
            let y = h / 8;
            c.lineWidth = 2.5;
            //c.lineWidth = 5;
            c.strokeStyle = 'black';
            c.strokeText(s, x, y);
            c.fillStyle = 'red';
            c.fillText(s, x, y);
            // ストローク 先, 埋め 後
            // 教科書体の場合ストロークがめっちゃはみ出すので
            // 埋めは後で一択
            this.setAlphaFromGray(window.idgrad14, cv, 0, 0);
        }
        {
            let px = 34;
            let family = this.UD_PB;
            c.font = `bold ${px}px ${family}`;
            c.textAlign = 'center';
            c.textBaseline = 'middle';
            let s = 'GAME OVER';
            let x = w / 2;
            let y = h * 1 / 4 + h / 8;
            c.strokeStyle = 'black';
            c.fillStyle = 'white';

            c.lineWidth = 2.6;
            c.strokeText(s, x, y);
            c.fillText(s, x, y);

            this.setAlphaFromGray(window.idgrad14, cv, 0, 64);
        }

        console.log('draw4 ', location.protocol);
        if (location.protocol.startsWith('http')) {
            c.drawImage(window.idlogo04, 0, h / 2);
        } else {
                let px = 48;
    //            let family = 'メイリオ';
                c.font = `bold ${px}px ${this.UD_PB}`;
                c.textAlign = 'center';
                c.textBaseline = 'middle';
                let s = '  ニコパチ！';
                let x = w / 2;
                let y = h * 2 / 4 + h / 8;
    
                c.lineWidth = 12;
                c.strokeStyle = 'black';
                c.strokeText(s, x, y);
    
                c.fillStyle = 'white';
                c.fillText(s, x, y);
    
                c.lineWidth = 2;
                c.strokeStyle = '#808080';
                c.strokeText(s, x, y);
        }

        {
            let px = 60;
//            let family = 'メイリオ';
            c.font = `bold ${px}px ${this.UD_PB}`;
            c.textAlign = 'center';
            c.textBaseline = 'middle';
            let s = 'ニコパチ';
            let x = w / 2;
            let y = h * 3 / 4 + h / 8;

            c.lineWidth = 12;
            c.strokeStyle = 'black';
            c.strokeText(s, x, y);

            c.fillStyle = 'white';
            c.fillText(s, x, y);

            c.lineWidth = 2;
            c.strokeStyle = '#808080';
            c.strokeText(s, x, y);
        }

        try {
            /*
            c.drawImage(window.idicon, 0, 0);

            const img = c.getImageData(0, 0, w, h);
            for (let y = 0; y < h; ++y) {
                for (let x = 0; x < w; ++x) {
                    const f = (x + y * w) * 4;
                    let r = img.data[f];
                    let g = img.data[f+1];
                    let b = img.data[f+2];
                    let a = img.data[f+3];
                    if (r === 0 && g === 255 && b === 0 && a === 255) {
                        r = 255;
                        g = 255;
                        b = 255;
                        a = 254;

                        img.data[f] = r;
                        img.data[f+1] = g;
                        img.data[f+2] = b;
                        img.data[f+3] = a;
                    }
                }
            }
            c.clearRect(0, 0, w, h);

            c.putImageData(img, 0, 0);
            */
        } catch(ec) {
            console.warn('catch 4', ec.message);
        }

    }

/**
 * enter の後からアンチエイリアス版
 * @param {HTMLCanvasElement} cv 
 */
drawTwo(cv) {
    const c = cv.getContext('2d');
    if (c == null) {
        return;
    }

    const selcol = '#f8b62d';

    let w = 64;
    let h = 64;
    cv.width = w * 4;
    cv.height = h * 4;
    const ratio = window.devicePixelRatio;

    cv.style.width = `${w * 4 / ratio}px`;
    cv.style.height = `${h * 4 / ratio}px`;

    for (let i = 0; i < 16; ++i) {
        let ix = i & 3;
        let iy = Math.floor(i / 4);

        let selected = ((ix & 1) !== 0);

        if (iy === 0) { // 上の段

            if (ix <= 1) {

                c.fillStyle = selected ? selcol : 'black';
                c.fillRect(ix * w, iy * h, w, h);

//        let s = `${"\u23ce"}`; // enter
//        s = "\u21B5"; // 直角 微妙
//        s = "\u2ba8"; // ちょろっと
                let s = "\u2936"; // 丸角 △

                let x = 0;
                let y = h / 2;
                let offsetX = 4 + ix * w;
                let offsetY = 2 + iy * h;
                let px = 50;
                let family = 'メイリオ';
                family = 'UD デジタル教科書体 N-R';
//        family = 'segoe ui emoji';
                c.font = `bold ${px}px ${family}`;
                c.textAlign = 'center';
                c.textBaseline = 'middle';

                x = -4 + w / 2 + offsetX;
                y = h / 2 - 2 + offsetY;
                c.strokeStyle = '#808080';
                c.fillStyle = selected ? 'black' : 'white';

// 外
                c.strokeStyle = '#ffffff';
// 中外の場合
//        c.fillText(s, x, y);
//        c.strokeText(s, x, y);

// 外中の場合
//        c.strokeText(s, x, y);
//        c.fillText(s, x, y);
                x += -2;
                y = h / 2 + 1 + offsetY;
                c.fillText(s, x, y);

            } else { // ESC ボタン

                c.fillStyle = selected ? selcol : 'black';
                c.fillRect(ix * w, iy * h, w, h);
    
                let offsetX = ix * w + 2;
                let offsetY = iy * h;
        
                let s = 'ESC';
                let x = w / 2 - 2 + offsetX;
                let y = h / 2 + offsetY;
                let px = 20;
                let family = 'Consolas';
                family = this.UD_PB;
                c.font = `bold ${px}px ${family}`;
                c.textAlign = 'center';
                c.textBaseline = 'middle';
        
        // 中
                c.fillStyle = selected ? 'black' : 'white';
        // 外
                c.strokeStyle = '#000000';
        // 中外の場合
        //        c.fillText(s, x, y);
        //        c.strokeText(s, x, y);
        
        // 外中の場合
        //        c.strokeText(s, x, y);
        //        c.fillText(s, x, y);
        
                c.fillText(s, x, y);

            }

        } else if (iy === 1) {

            if (ix <= 1) { // 表彰台

                let offsetX = ix * w;
                let offsetY = iy * h;
    
                c.fillStyle = selected ? selcol : 'black';
                c.fillRect(ix * w, iy * h, w, h);
    
                c.beginPath();
                let rx = w / 10;
                let ry = 6;
                offsetY -= 2;
                c.moveTo(w/2 - rx + offsetX, h / 2 - ry * 2 + offsetY);
                c.lineTo(w/2 + rx + offsetX, h / 2 - ry * 2 + offsetY);
                c.lineTo(w/2 + rx + offsetX, h / 2 + offsetY);
                c.lineTo(w/2 + rx * 3 + offsetX, h/2 + offsetY);
                c.lineTo(w/2 + rx * 3 + offsetX, h/2 + ry * 2 + offsetY);
                c.lineTo(w/2 - rx * 3 + offsetX, h/2 + ry * 2 + offsetY);
                c.lineTo(w/2 - rx * 3 + offsetX, h/2 - ry * 1 + offsetY);
                c.lineTo(w/2 - rx + offsetX, h/2 - ry * 1 + offsetY);
                c.closePath();
                c.lineJoin = 'round';
                c.lineWidth = 3;
                c.strokeStyle = selected ? 'black' : 'white';
                c.stroke();

            } else { // ゲージ

                c.fillStyle = selected ? selcol : 'black';
                c.fillRect(ix * w, iy * h, w, h);

                let offsetX = ix * w + 2;
                let offsetY = iy * h;
        
                let s = 'POW';
                let x = w / 2 - 2 + offsetX;
                let y = h / 2 + offsetY;
                let px = 16;
                let family = 'Consolas';
                family = this.UD_PB;
                c.font = `bold ${px}px ${family}`;
                c.textAlign = 'center';
                c.textBaseline = 'middle';
    
    // 中
                c.fillStyle = selected ? 'black' : 'white';
    // 外
                c.strokeStyle = '#000000';
    // 中外の場合
    //        c.fillText(s, x, y);
    //        c.strokeText(s, x, y);
    
    // 外中の場合
    //        c.strokeText(s, x, y);
    //        c.fillText(s, x, y);
    
                c.fillText(s, x, y);

                // 上下に三角つけるか
                let rr = 8;
                for (let k = 0; k < 2; ++k) {
                    let cx = ix * w + w / 2;
                    let cy = iy * h + h / 2 + 14 * (k === 0 ? -1 : 1);
                    c.beginPath();
                    c.moveTo(cx, cy + rr * (k === 0 ? -1 : 1));
                    c.lineTo(cx + rr, cy);
                    c.lineTo(cx - rr, cy);
                    c.closePath();
                    c.fill();
                }

            }
    
        } else if (iy === 2) { // 上から三番目

            if (ix === 0) {
// UP!
                c.fillStyle = 'red';
                c.fillRect(ix * w, iy * h, w, h);

                let offsetX = ix * w;
                let offsetY = iy * h;
        
                let s = 'UP!';
                let x = w / 2 + offsetX;
                let y = h / 2 + offsetY;
                let px = 20;
                let family = this.UD_PB;
                c.font = `bold ${px}px ${family}`;
                c.textAlign = 'center';
                c.textBaseline = 'middle';
    
    // 中
                c.fillStyle = selected ? 'black' : 'white';
    // 外
                c.strokeStyle = '#000000';
                c.fillText(s, x, y);

            } else if (ix === 1) {

// 時計
let offsetX = ix * w;
let offsetY = iy * h;

//c.fillStyle = selected ? 'black' : 'black';
//c.fillRect(ix * w, iy * h, w, h);

c.fillStyle = 'white';
c.beginPath();
let rr = 24 / 2;
c.arc(w/2 + offsetX, h/2 + offsetY, rr,
    0, Math.PI * 2);
c.fill();

c.lineWidth = 2;
c.stroke();

c.beginPath();
let rx = w / 5 / 2;
let ry = h / 4 / 2;
c.moveTo(w/2 + offsetX, h / 2 - ry + offsetY);
c.lineTo(w/2 + offsetX, h / 2 + offsetY);
c.lineTo(w/2 + rx + offsetX, h / 2 + offsetY);
c.lineJoin = 'round';
c.lineCap = 'round';
c.lineWidth = 3 - 1;
c.strokeStyle = selected ? 'black' : 'black';
c.stroke();

            } else if (ix === 2) {

// 金
let offsetX = ix * w;
let offsetY = iy * h;

c.save();

c.translate(w/2 + offsetX, h/2 + offsetY);
c.rotate(Math.PI * 0.25);

c.beginPath();
let rr = 24 / 2;
c.arc(0.0, 0.0, rr,
    0, Math.PI * 2);
c.fillStyle = '#ffc355';
c.fill();

c.lineWidth = 2;
c.strokeStyle = '';
c.stroke();

c.scale(0.8, 1.0);

c.beginPath();
rr = 5;
c.arc(-6, 0, rr, 0, Math.PI * 2);
c.fillStyle = 'white';
c.fill();

c.restore();

            } else if (ix === 3) {

// 銀
                let offsetX = ix * w;
                let offsetY = iy * h;
    
                c.save();

                c.translate(w/2 + offsetX, h/2 + offsetY);
                c.rotate(Math.PI * 0.25);
    
                c.beginPath();
                let rr = 24 / 2;
                c.arc(0.0, 0.0, rr,
                    0, Math.PI * 2);
                c.fillStyle = '#aaaaaa';
                c.fill();

                c.lineWidth = 2;
                c.strokeStyle = '';
                c.stroke();

                c.scale(0.8, 1.0);

                c.beginPath();
                rr = 5;
                c.arc(-6, 0, rr, 0, Math.PI * 2);
                c.fillStyle = 'white';
                c.fill();

                c.restore();
            }

        } else { // 一番下の段

            if (ix === 0) {

                let offsetX = ix * w;
                let offsetY = iy * h;

                //c.fillStyle = selected ? 'yellow' : 'black';
                //c.fillRect(ix * w, iy * h, w, h);

                c.beginPath();
                let rx = w * 6 / 8;
                c.moveTo(w - rx + offsetX, h/2 + offsetY);
                c.lineTo(w + rx + offsetX, h/2 + offsetY);
                c.closePath();
                c.lineJoin = 'round';
                c.lineWidth = 16;
                c.strokeStyle = selected ? 'gray' : 'gray';
                c.stroke();

            } else if (ix === 2) {

                let offsetX = ix * w;
                let offsetY = iy * h;
        
                let s = 'TOUCH';
                let x = w + offsetX;
                let y = h / 2 + offsetY;
                let px = 20;
                let family = 'Consolas';
                family = `UD デジタル 教科書体 NP-B`;
                c.font = `bold ${px}px ${family}`;
                c.textAlign = 'center';
                c.textBaseline = 'middle';
    
                c.fillStyle = 'white';
                c.fillRect(ix * w, iy * h, w * 2, h);

    // 中
                c.fillStyle = selected ? 'red' : 'red';
    // 外
                c.strokeStyle = '#000000';
    // 中外の場合
    //        c.fillText(s, x, y);
    //        c.strokeText(s, x, y);
    
    // 外中の場合
    //        c.strokeText(s, x, y);
    //        c.fillText(s, x, y);
    
                c.fillText(s, x, y - 12);
                c.fillText('START', x, y + 12);
            }
        }

        const gray = window.idgrad12;
        if (iy !== 3 && iy !== 2) {
            this.setAlphaFromGray(gray, cv, ix * w, iy * h);
        }

        {
            this.setAlphaFromGray(gray, cv, 0 * w, 2 * h);
        }

        {
            this.setAlphaFromGray(window.idgrad13, cv, 2 * w, 3 * h);
        }

    }

}

/**
 * 横長描画
 * @param {HTMLCanvasElement} cv 対象のキャンバス
 * @param {Object} inopt.radius 半分の目安
 * @param {Object} inopt.half 長さの半分
 */
    drawRound(cv, inopt) {
        const rr = inopt.radius;
        const half = inopt.half;
        const w = cv.width;
        const h = cv.height;
        const ratio = window.devicePixelRatio;
        cv.style.width = `${w / ratio}px`;
        cv.style.height = `${h / ratio}px`;
        {
            const c = cv.getContext('2d');
            const img = c.getImageData(0, 0, w, h);

            for (let y = 0; y < h; ++y) {
                for (let x = 0; x < w; ++x) {
                    let fts = (w * y + x) * 4;
                    let ftd = (w * y + x) * 4;

                    let l = 0;
                    let dx = x - w / 2;
                    if (Math.abs(dx) <= half) { // 半直線の内側
                        l = Math.abs(y - h / 2);
                    } else { // 端っこが近い
                        let tx = x - (w / 2 + (dx < 0 ? -1 : 1) * half);
                        let ty = y - h / 2;
                        l = Math.sqrt(tx ** 2 + ty ** 2);
                    }

                    const _calc = (d) => {
                        let ret = 0.0;
                        let k = 1.0 / 2.0;
                        //let a = 28.0;
                        let b = 0.0;
                        ret = k * (rr - d) + b;
                        ret = Math.max(0.0, Math.min(1.0, ret));
                        return ret;
                    };

                    // l が直線からの距離

                    let lv = _calc(l) * 255;
                    lv = Math.floor(lv);



                    img.data[ftd] = lv;
                    img.data[ftd+1] = lv;
                    img.data[ftd+2] = lv;
                    img.data[ftd+3] = 255;
                }
            }

            c.putImageData(img, 0, 0);
        }        
    }

} // class Misc

const misc = new Misc();
window.addEventListener('load', () => {
    misc.onload();
});

