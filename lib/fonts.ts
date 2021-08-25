import {
    ITALICS_BOLD_MAP,
    BOLD_MAP,
    GOTHIC_BOLD_MAP,
    GOTHIC_MAP,
    ITALICS_MAP,
    SERIF_BOLD_MAP,
    SERIF_ITALICS_MAP,
    MONOSPACE_MAP,
    SQUARED_MAP,
    CURSIVE_MAP,
    BLACKBOARD_MAP,
    WIDE_MAP,
    FLIPPED_MAP,
    CURSIVE_BOLD_MAP
} from "./maps";

type Map = { [key: string]: string }
type Converter = (inputText: string) => (string)
type Font = { name: string, converter: Converter }

const makeConverterFromMap = (map: Map): Converter => {
    return (inputText =>
        inputText.split('').map((character: string) => (
            map.hasOwnProperty(character) ? map[character] : map.hasOwnProperty(character.toLowerCase()) ? map[character.toLowerCase()] : character
        )).join('')
    );
};

export const fonts: Font[] = [
    {name: '𝘐𝘵𝘢𝘭𝘪𝘤𝘴', converter: makeConverterFromMap(ITALICS_MAP)},
    {name: '𝗕𝗼𝗹𝗱', converter: makeConverterFromMap(BOLD_MAP)},
    {name: '𝙄𝙩𝙖𝙡𝙞𝙘𝙨 𝘽𝙤𝙡𝙙', converter: makeConverterFromMap(ITALICS_BOLD_MAP)},
    {name: '𝙼𝚘𝚗𝚘𝚜𝚙𝚊𝚌𝚎', converter: makeConverterFromMap(MONOSPACE_MAP)},
    {name: 'Ｗｉｄｅ', converter: makeConverterFromMap(WIDE_MAP)},
    {name: '𝔹𝕝𝕒𝕔𝕜𝕓𝕠𝕒𝕣𝕕', converter: makeConverterFromMap(BLACKBOARD_MAP)},
    {name: '🅂🅀🅄🄰🅁🄴🄳', converter: makeConverterFromMap(SQUARED_MAP)},
    {name: 'Ⅎlıppǝp', converter: makeConverterFromMap(FLIPPED_MAP)},
    {name: '𝑺𝒆𝒓𝒊𝒇 𝑰𝒕𝒂𝒍𝒊𝒄𝒔', converter: makeConverterFromMap(SERIF_ITALICS_MAP)},
    {name: '𝐒𝐞𝐫𝐢𝐟 𝐁𝐨𝐥𝐝', converter: makeConverterFromMap(SERIF_BOLD_MAP)},
    {name: '𝔊𝔬𝔱𝔥𝔦𝔠', converter: makeConverterFromMap(GOTHIC_MAP)},
    {name: '𝕲𝖔𝖙𝖍𝖎𝖈 𝕭𝖔𝖑𝖉', converter: makeConverterFromMap(GOTHIC_BOLD_MAP)},
    {name: '𝒞𝓊𝓇𝓈𝒾𝓋𝑒', converter: makeConverterFromMap(CURSIVE_MAP)},
    {name: '𝓒𝓾𝓻𝓼𝓲𝓿𝓮 𝓑𝓸𝓵𝓭', converter: makeConverterFromMap(CURSIVE_BOLD_MAP)},
]


