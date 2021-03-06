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
    {name: 'ððµð¢ð­ðªð¤ð´', converter: makeConverterFromMap(ITALICS_MAP)},
    {name: 'ðð¼ð¹ð±', converter: makeConverterFromMap(BOLD_MAP)},
    {name: 'ðð©ðð¡ððð¨ ð½ð¤ð¡ð', converter: makeConverterFromMap(ITALICS_BOLD_MAP)},
    {name: 'ð¼ðððððððð', converter: makeConverterFromMap(MONOSPACE_MAP)},
    {name: 'ï¼·ï½ï½ï½', converter: makeConverterFromMap(WIDE_MAP)},
    {name: 'ð¹ðððððð ðð£ð', converter: makeConverterFromMap(BLACKBOARD_MAP)},
    {name: 'ðððð°ðð´ð³', converter: makeConverterFromMap(SQUARED_MAP)},
    {name: 'â²lÄ±ppÇp', converter: makeConverterFromMap(FLIPPED_MAP)},
    {name: 'ðºðððð ð°ðððððð', converter: makeConverterFromMap(SERIF_ITALICS_MAP)},
    {name: 'ððð«ð¢ð ðð¨ð¥ð', converter: makeConverterFromMap(SERIF_BOLD_MAP)},
    {name: 'ðð¬ð±ð¥ð¦ð ', converter: makeConverterFromMap(GOTHIC_MAP)},
    {name: 'ð²ððððð ð­ððð', converter: makeConverterFromMap(GOTHIC_BOLD_MAP)},
    {name: 'ððððð¾ðð', converter: makeConverterFromMap(CURSIVE_MAP)},
    {name: 'ðð¾ð»ð¼ð²ð¿ð® ðð¸ðµð­', converter: makeConverterFromMap(CURSIVE_BOLD_MAP)},
]


