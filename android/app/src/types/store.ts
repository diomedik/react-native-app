export interface Store {
    Translater: Translater
}

interface Translater {
    valueToTranslate: string
    valueTranslated: string
}