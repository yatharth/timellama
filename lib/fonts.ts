type Font = { name: string, converter: (inputText: string) => (string) }

export const fonts: Font[] = [
    {name: 'Italics', converter: (inputText => ("<i>" + inputText + "</i>"))},
    {name: 'Bold', converter: (inputText => ("<b>" + inputText + "</b>"))},
]


