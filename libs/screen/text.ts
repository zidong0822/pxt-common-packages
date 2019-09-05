namespace image {

    export interface Font {
        charWidth: number;
        charHeight: number;
        data: Buffer;
        multiplier?: number;
    }

    //% whenUsed
    export const font8: Font = {
        charWidth: 6,
        charHeight: 8,
        data: hex`
2000000000000000 210000005e000000 2200000e000e0000 230028fe28fe2800 24004c92ff926400 250002651248a640
26006c92926ca000 270000000e000000 280000007c820000 29000000827c0000 2a00543810385400 2b0010107c101000
2c00000090700000 2d00101010101000 2e00000060600000 2f00006010080600 3000003c42423c00 310000447e400000
3200004462524c00 330000424a4e3200 34003028247e2000 3500004e4a4a3200 3600003c4a4a3000 3700000262120e00
380000344a4a3400 3900000c52523c00 3a0000006c6c0000 3b00000096760000 3c00102828444400 3d00282828282800
3e00444428281000 3f00000259090600 40003c425a560800 4100781412147800 42007e4a4a4a3400 4300003c42422400
4400007e42423c00 4500007e4a4a4200 4600007e0a0a0200 4700003c42523400 4800007e08087e00 490000427e420000
4a002040423e0200 4b00007e08146200 4c00007e40404000 4d007e0418047e00 4e00007e04087e00 4f003c4242423c00
5000007e12120c00 5100003c5262bc00 5200007e12126c00 530000244a522400 540002027e020200 5500003e40403e00
5600001e70701e00 57007e2018207e00 5800422418244200 5900060870080600 5a000062524a4600 5b00007e42420000
5c00000608106000 5d000042427e0000 5e00080402040800 5f00808080808000 6000000002040000 6100003048487800
6200007e48483000 6300003048484800 6400003048487e00 6500003068585000 660000107c120400 67000018a4a47800
6800007e08087000 690000487a400000 6a000040847d0000 6b00007e10284000 6c0000427e400000 6d00780830087000
6e00007808087000 6f00003048483000 700000fc24241800 710000182424fc00 7200007810081000 7300005058682800
740000083e482000 7500003840407800 7600001860601800 7700384030403800 7800004830304800 7900005ca0a07c00
7a00004868584800 7b00000836410000 7c000000fe000000 7d00004136080000 7e00000804080400 a000000000000000
a10000007a000000 a200003048fc4800 a30090fc92928400 a400542844285400 a5002a2c782c2a00 a6000000ee000000
a7000094aaaa5200 a800000200020000 a9003e414955413e aa0000242a2e0000 ab00102854284400 ac00001010107000
ad00001010101000 ae003e415d45413e af00000202020200 b000000814140800 b1008888be888800 b2000024322c0000
b30000222a140000 b400000004020000 b50000f840207800 b6000c1e7e027e00 b700000010000000 b800000080400000
b90000243e200000 ba0000242a240000 bb00442854281000 bc00025f70f84000 bd00021f90c8b000 be0011557af84000
bf000030484d2000 c000601916186000 c100601816196000 c200601a151a6000 c300601a151a6100 c400601914196000
c500601a151a6000 c6007c0a7e4a4200 c700001ea1611200 c800007c55564400 c900007c56554400 ca00007c56554600
cb00007c55544500 cc0000457e440000 cd0000447e450000 ce0000467d460000 cf0000457c450000 d000087e4a423c00
d100007e09127d00 d200003845463800 d300003846453800 d400003846453a00 d500003a45463900 d600003845443900
d700442810284400 d80000fc724e3f00 d900003c41423c00 da00003c42413c00 db00003c42413e00 dc00003c41403d00
dd00040872090400 de00007e24241800 df00007c025a2400 e0000030494a7800 e10000304a497800 e20000304a497a00
e3000032494a7900 e40000304a487a00 e50000304a4d7a00 e600304878685000 e7000018a4642400 e8000030695a5000
e90000306a595000 ea0000306a595200 eb0000306a585200 ec0000497a400000 ed0000487a410000 ee00004a79420000
ef00004a78420000 f00000304a4b3d00 f100007a090a7100 f2000030494a3000 f30000304a493000 f40000304a493200
f5000032494a3100 f60000304a483200 f700101054101000 f800007068583800 f900003841427800 fa00003842417800
fb00003842417a00 fc00003842407a00 fd0000b84241f800 fe0000ff24241800 ff00005ca1a07d00 0001601915196000
010100304a4a7a00 0201611a16196000 030100314a4a7900 04013c0a094abc00 050100182464bc00 0601003846452800
070100304a494800 0801003846452a00 090100304a494a00 0a01003844452800 0b010030484a4800 0c01003845462900
0d010030494a4900 0e01007c45463900 0f0100314a497e00 1001087e4a423c00 110130484c7e0400 1201007d55554500
130100326a5a5200 1401007d56564500 150100316a5a5100 1601007c55544400 170100306a585000 1801003f65a52100
1901001874ac2800 1a01007c55564500 1b010030695a5100 1c01003846553600 1d0100304a49f200 1e01003946563500
1f0100314a4af100 2001003844553400 21010018a4a57800 2201001ea1691a00 23010018a6a57800 2401007812117a00
25017e080a710200 2601047e147e0400 2701047e0c087000 28010002457e4500 29010002497a4100 2a0100457d450000
2b01004a7a420000 2c0100014a7a4900 2d0100014a7a4100 2e0100217fa10000 2f0100247da00000 300100447d440000
3101004878400000 32017e0022423e00 33013d0040847d00 34012040463d0600 350100800af90200 360100bf440a3100
370100bf48142000 3801007810284800 3901007c40424100 3a0100467d400000 3b01003fa0602000 3c0100a17f200000
3d01007c41424100 3e0100457e410000 3f01007e40484000 400100427e400800 4101107e48404000 420100527e480000
4301007c0a117c00 440100780a097000 450100bf42043f00 460100bc44043800 4701007c09127d00 480100790a097000
49010a0678087000 4a01003f02847f00 4b01003c04847800 4c01394545453900 4d0100324a4a3200 4e01394646463900
4f0100314a4a3100 50013a4544463900 5101324948320100 52013c427e4a4200 5301304830685000 5401007c16354800
5501007812091000 560100bf49093600 570100bc48040800 5801007d16354800 5901007912091000 5a01004856552400
5b0100505a692800 5c01004856552600 5d0100505a692a00 5e010012a5691200 5f010028ac741400 6001004855562500
61010050596a2900 62010101bf410100 630100049f641000 640104057e050400 650100083d4a2100 660102127e120200
670100183e582000 6801003a41423900 6901003a41427900 6a01003d41413d00 6b01003a42427a00 6c01003942423900
6d01003942427900 6e01003a45453a00 6f01003a45457a00 70013a41403a0100 71013a41407a0100 7201001f60a01f00
7301001c60a03c00 7401782211227800 7501384231423800 7601081261120800 770100b84241fa00 7801040970090400
79010064564d4400 7a0100486a594800 7b010064544d4400 7c010048685a4800 7d010064554e4500 7e010048695a4900
7f0100087c020400 8f01003452523c00 920100887e090200 a0013c42423c0806 a101003048483008 af01003e403e0806
b001003840781008 b501006a5a4a4e00 b601005878585800 d101003845463900 d2010030494a3100 e601003845563500
e7010030494af100 fa0100742a750000 fb0100304c4a7d00 fc0178147e554400 fd0130487a695000 fe010078744e3d00
ff0100706a593800 18020012a5691200 19020028ac741400 1a020101bf410100 1b0200049f641000 bb0200000c0a0000
bc0200000a060000 bd020000060a0000 c602000201020000 c702000102010000 c902000202020000 d802000102020100
d902000002000000 da02000205020000 db02000040800000 dc02000201020100 dd02020100020100 7403000002010000
7503000080400000 7a030000c0800000 7e03000096760000 8403000003000000 8503020003000200 8603037c12127c00
8703000010000000 880303007e4a4200 890303007e087e00 8a030300427e4200 8c03033c42423c00 8e0303000e700e00
8f03035c62625c00 900302003b400200 9103781412147800 92037e4a4a4a3400 9303007e02020200 9403605846586000
9503007e4a4a4200 96030062524a4600 9703007e08087e00 98033c4a4a4a3c00 990300427e420000 9a03007e08146200
9b03601806186000 9c037e0418047e00 9d03007e04087e00 9e0300424a4a4200 9f033c4242423c00 a003007e02027e00
a103007e12120c00 a30300665a424200 a40302027e020200 a503060870080600 a60318247e241800 a703422418244200
a8030e107e100e00 a9035c6202625c00 aa0300457c450000 ab03040970090400 ac030030484a7900 ad030030685a5100
ae0378100a09f000 af03003a41200000 b0033a4043403a00 b103003048487800 b20300fe25251a00 b3030c30c0300c00
b403344a4a4a3000 b503003068585000 b603021aa6a24200 b7033c080404f800 b803003c4a4a3c00 b903003840200000
ba03007820504800 bb03641212227c00 bc03fc2020103c00 bd03182040201800 be03112d2ba94100 bf03003048483000
c003087808780800 c103f82424241800 c2031824a4a44800 c303304848582800 c403000838482800 c503384040403800
c6031c20f8241800 c703c4281028c400 c8031c20fc201c00 c903304820483000 ca03000238422000 cb03384240423800
cc0330484a493000 cd03384042413800 ce03304822493000 d0033c52525c2000 d10310344a3c0800 d203067804020400
d303120a7c020400 d4030d7009040800 d5031824ff241800 d603384828483800 d70348302221d800 da031c2221a14200
db031824a4a44200 dc037e1212020200 dd0300fc24240400 de033e2010087c00 df030c0ac9281800 e003700c621c7000
e10301092516f800 e2039ea0bea07e00 e30398a0b8a07800 e4030c1214107e00 e503001028207800 e603be9088887000
e70348544e443800 e803245252524c00 e903285454544800 ea0364524c526400 eb03086458640800 ec03385454542200
ed03306848682400 ee03184a7e4a1800 ef031848ff0a0800 f003483020205800 f10378a4a4a49800 f203304848485000
f303006080847d00 f4033c4a4a4a3c00 f503003058584800 0004007c55564400 0104007c55544500 020401013f857900
0304007c06050400 04043c4a4a422400 050400244a522400 060400427e420000 070400457c450000 08042040423e0200
09047c027e483000 0a047e087e483000 0b0402027e0a7200 0c04007c102a4500 0d047c2112087c00 0e040c5152523d00
0f043f20e0203f00 1004781412147800 11047e4a4a4a3000 12047e4a4a4a3400 1304007e02020200 1404c07c427ec000
1504007e4a4a4200 160476087e087600 170424424a4a3400 1804007e08047e00 1904007d120a7d00 1a04007e08146200
1b04403c02027e00 1c047e0418047e00 1d04007e08087e00 1e043c4242423c00 1f047e0202027e00 2004007e12120c00
2104003c42422400 220402027e020200 23040e5050503e00 240418247e241800 2504422418244200 26043f2020bf6000
27040e1010107e00 28047e407e407e00 29043f203fa07f00 2a04027e48483000 2b047e4848307e00 2c04007e48483000
2d0424424a4a3c00 2e047e183c423c00 2f04006c12127e00 3004304848784000 3104003c4a4a3100 3204007868502000
3304007808080800 3404c0704878c000 3504306868500000 3604483078304800 3704004058683000 3804784020107800
3904794222127900 3a04007820304800 3b04403008087800 3c04781020107800 3d04781010107800 3e04304848483000
3f04780808087800 4004fc2424241800 4104304848485000 4204080878080800 43041ca0a0a07c00 44041824ff241800
4504004830304800 46043c2020bc6000 4704182020207800 4804784078407800 49043c203ca07c00 4a04087850502000
4b04785050207800 4c04007850502000 4d04485868300000 4e04783030483000 4f04502828780000 50040030696a5000
51040032686a5000 5204023f0a887000 530400780a090800 5404003068584800 5504005058682800 560400487a400000
5704004a78420000 5804004080847d00 5904700878502000 5a04781078502000 5b04047e14106000 5c04007822314800
5d04784122107800 5e0418a1a2a27900 5f043c20e0203c00 6204027f4a483000 6304087e58502000 70040e107e100e00
7104182078201800 72043c4a4a4a3c00 7304306858683000 7404001e70180c00 7504001860301000 9004007e02020300
9104007808080c00 9204087e0a0a0200 9304207828080800 96043b043f043be0 970424183c1824c0 9a04003f040a31c0
9b04003c101824c0 ae04060870080600 af040c10e0100c00 b004161870181600 b1042c30e0302c00 b20421120c1221c0
b3040024181824c0 ba047e0808087000 bb04007e08087000 d804003452523c00 d904002868583000 e20400457d450000
e304004a7a420000 e8043c4a4a4a3c00 e904003058583000 ee04003d41413d00 ef04003a42427a00 d005681020285000
d105484848784000 d205004830600000 d305080808780800 d405680808087800 d505000008780000 d605080818680800
d705087808087800 d805784050487800 d905000008180000 da0504040404fc00 db05484848483800 dc050e4848281800
dd05087848487800 de05582010487000 df05000004fc0000 e005004040487800 e105000878483800 e205487840281800
e305041c0404fc00 e405485848483800 e50504f820140800 e605485060685000 e705f40424241c00 e805080808087000
e905785058403800 ea05487808087800 f005087800087800 f105081800087800 f205081800081800 f305000010080000
f405100800100800 021e7c5455542800 031e007e48493000 0a1e007c45443800 0b1e003049487e00 1e1e007c15140400
1f1e001079140800 401e7e0419047e00 411e780832087000 561e007c15140800 571e00fc25241800 601e004854552400
611e0050586a2800 6a1e04047d040400 6b1e00083d482000 801e7c2112207c00 811e384132403800 821e7c2012217c00
831e384032413800 841e7c2110217c00 851e384230423800 f21e040972080400 f31e00b84142f800 a3207e0a7a120a00
a420a8fcaa828400 a720087e2a1c0800 ab200098a4a6bf02 ac20183c5a5a4200 af20627f22443800 9021103854101000
912108047e040800 9221101054381000 932110207e201000 9421103810103810 95212844fe442800 
`,

    }

    // A unicode 12x12 pixel font based on https://github.com/adobe-fonts/source-han-sans
    //% whenUsed jres
    export const font12: Font = {
        charWidth: 12,
        charHeight: 12,
        data: hex``
    }

    export function getFontForText(text: string) {
        for (let i = 0; i < text.length; ++i) {
            // this is quite approximate
            if (text.charCodeAt(i) > 0x2000)
                return image.font12
        }
        return image.font8
    }

    //% deprecated=1 hidden=1
    export function doubledFont(f: Font): Font {
        return scaledFont(f, 2)
    }

    export function scaledFont(f: Font, size: number): Font {
        size |= 0
        if (size < 2)
            return f
        return {
            charWidth: f.charWidth * size,
            charHeight: f.charHeight * size,
            data: f.data,
            multiplier: f.multiplier ? size * f.multiplier : size
        }
    }

    //% whenUsed
    export const font5: Font = {
        charWidth: 6,
        charHeight: 5,
        // source https://github.com/lancaster-university/microbit-dal/blob/master/source/core/MicroBitFont.cpp
        data: hex`
2000000000000000 2100001700000000 2200000300030000 23000a1f0a1f0a00 24000a17151d0a00 2500130904121900
26000a15150a1000 2700000300000000 2800000e11000000 290000110e000000 2a00000a040a0000 2b0000040e040000
2c00001008000000 2d00000404040000 2e00000800000000 2f00100804020100 30000e11110e0000 310000121f100000
3200191515120000 33000911150b0000 34000c0a091f0800 3500171515150900 3600081416150800 3700110905030100
38000a1515150a00 390002150d050200 3a00000a00000000 3b0000100a000000 3c0000040a110000 3d00000a0a0a0000
3e0000110a040000 3f00020115050200 40000e1115090e00 41001e05051e0000 42001f15150a0000 43000e1111110000
44001f11110e0000 45001f1515110000 46001f0505010000 47000e1111150c00 48001f04041f0000 4900111f11000000
4a000911110f0100 4b001f040a110000 4c001f1010100000 4d001f0204021f00 4e001f0204081f00 4f000e11110e0000
50001f0505020000 5100060919160000 52001f05050a1000 5300121515090000 540001011f010100 55000f10100f0000
5600070810080700 57001f0804081f00 58001b04041b0000 590001021c020100 5a00191513110000 5b00001f11110000
5c00010204081000 5d000011111f0000 5e00000201020000 5f00101010101000 6000000102000000 61000c12121e1000
62001f1414080000 63000c1212120000 64000814141f0000 65000e1515120000 6600041e05010000 67000215150f0000
68001f0404180000 6900001d00000000 6a000010100d0000 6b001f040a100000 6c00000f10100000 6d001e0204021e00
6e001e02021c0000 6f000c12120c0000 70001e0a0a040000 7100040a0a1e0000 72001c0202020000 730010140a020000
7400000f14141000 75000e10101e1000 7600060810080600 77001e1008101e00 7800120c0c120000 7900121408040200
7a00121a16120000 7b0000041f110000 7c00001f00000000 7d00111f04000000 7e00000404080800 d3000c1213130c00
f3000c12130d0000 04010e05051e1000 05010609191f0800 06010c1213131200 07010c1213130000 18010f0b1b190000
19010e151d1a0000 41011f1412100000 4201100f14120000 43011f0205081f00 44011e03031c0000 5a0110140b030200
5b0110140b030000 7901121a17130000 7a01121a17130000 7b01121b17120000 7c01121b17120000`,
    }
}

namespace texteffects {
    export interface TextEffectState {
        xOffset: number;
        yOffset: number;
    }
}

interface Image {
    /**
     * Renders text to the image
     * @param text the characters to print
     * @param x the left corner coordinate
     * @param y the upper corner coordinate
     * @param color the color of the characters
     * @param font the desired font
     */
    //% blockId=imagePrint block="print $text at x $x y $y $color"
    //% helper=imagePrint
    print(text: string, x: number, y: number, color?: number, font?: image.Font, offsets?: texteffects.TextEffectState[]): void;

    /**
     * Renders text to the image from the center of the screen
     * @param text the characters to print
     * @param y the upper corner coordinate
     * @param color the color of the characters
     * @param font the desired font
     */
    //% blockId=imagePrintCenter block="print center $text at y $y $color"
    //% helper=imagePrintCenter
    printCenter(text: string, y: number, color?: number, font?: image.Font): void;
}

namespace helpers {
    export function imagePrintCenter(img: Image, text: string, y: number, color?: number, font?: image.Font) {
        if (!font) font = image.getFontForText(text)
        let w = text.length * font.charWidth
        let x = (img.width - w) / 2
        imagePrint(img, text, x, y, color, font)
    }

    export function imagePrint(img: Image, text: string, x: number, y: number, color?: number, font?: image.Font, offsets?: texteffects.TextEffectState[]) {
        x |= 0
        y |= 0
        if (!font)
            font = image.getFontForText(text)
        if (!color) color = 1
        let x0 = x
        let cp = 0
        let mult = font.multiplier ? font.multiplier : 1
        let dataW = Math.idiv(font.charWidth, mult)
        let dataH = Math.idiv(font.charHeight, mult)
        let byteHeight = (dataH + 7) >> 3
        let charSize = byteHeight * dataW
        let dataSize = 2 + charSize
        let fontdata = font.data
        let lastchar = Math.idiv(fontdata.length, dataSize) - 1
        let imgBuf: Buffer
        if (mult == 1) {
            imgBuf = control.createBuffer(8 + charSize)
            imgBuf[0] = 0x87
            imgBuf[1] = 1
            imgBuf[2] = dataW
            imgBuf[4] = dataH
        }
        while (cp < text.length) {
            let xOffset = 0, yOffset = 0;
            if (offsets && cp < offsets.length) {
                xOffset = offsets[cp].xOffset
                yOffset = offsets[cp].yOffset
            }

            let ch = text.charCodeAt(cp++)
            if (ch == 10) {
                y += font.charHeight + 2
                x = x0
            }

            if (ch < 32)
                continue // skip control chars

            let l = 0
            let r = lastchar
            let off = 0 // this should be a space (0x0020)
            let guess = (ch - 32) * dataSize
            if (fontdata.getNumber(NumberFormat.UInt16LE, guess) == ch)
                off = guess
            else {
                while (l <= r) {
                    let m = l + ((r - l) >> 1);
                    let v = fontdata.getNumber(NumberFormat.UInt16LE, m * dataSize)
                    if (v == ch) {
                        off = m * dataSize
                        break
                    }
                    if (v < ch)
                        l = m + 1
                    else
                        r = m - 1
                }
            }

            if (mult == 1) {
                imgBuf.write(8, fontdata.slice(off + 2, charSize))
                img.drawIcon(imgBuf, x + xOffset, y + yOffset, color)
                x += font.charWidth
            } else {
                off += 2
                for (let i = 0; i < dataW; ++i) {
                    let j = 0
                    let mask = 0x01
                    let c = fontdata[off++]
                    while (j < dataH) {
                        if (mask == 0x100) {
                            c = fontdata[off++]
                            mask = 0x01
                        }
                        let n = 0
                        while (c & mask) {
                            n++
                            mask <<= 1
                        }
                        if (n) {
                            img.fillRect(x + xOffset * mult, y + (j + yOffset) * mult, mult, mult * n, color)
                            j += n
                        } else {
                            mask <<= 1
                            j++
                        }
                    }
                    x += mult
                }
            }
        }
    }
}
