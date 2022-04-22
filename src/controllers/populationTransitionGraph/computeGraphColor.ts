import { Prefecture } from "models/prefecture";

export function computeGraphLineColor(pref: Prefecture): string {
    return computeColor(pref) + "88";
}

export function computeGraphDotColor(pref: Prefecture): string {
    return computeColor(pref);
}

function computeColor(pref: Prefecture): string {
    const chromaIndex = pref.code % hueCount;
    const brightnessIndex = Math.floor(pref.code / hueCount) % 4; // mod4 → 万が一48色では足りなくなったときの回避処理

    const hue = hues[chromaIndex];
    const parseBrightness = brightnessParsers[brightnessIndex];

    return parseBrightness(hue);
}

const hueCount = 12;
const hues = [
    "#FF0000",
    "#FF8800",
    "#FFFF00",
    "#88FF00",
    "#00FF00",
    "#00FF88",
    "#00FFFF",
    "#0088FF",
    "#0000FF",
    "#8800FF",
    "#FF00FF",
    "#FF0088",
];

// 原色を明るさ調整して色に変化をつける
// これで48色用意できるので、一応都道府県に対応させられる
const brightnessParsers = [
    (s: string) => s.replace("8", "C").replace("0", "8"),
    (s: string) => s,
    (s: string) => s.replace("F", "C").replace("0", "4"),
    (s: string) => s.replace("8", "4").replace("F", "8"),
];
