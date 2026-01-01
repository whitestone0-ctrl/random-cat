"use server";

import { CAT_API_KEY } from "./env";

type Image = {
    url: string;
}

// APIから画像を取得する関数
export async function fetchImage(): Promise<Image> {
    if (!CAT_API_KEY) {
        throw new Error("環境変数 CAT_API_KEY が設定されていません");
    }

    const res = await fetch("https://api.thecatapi.com/v1/images/search", {
        headers: { "x-api-key": CAT_API_KEY }, // 追加
    });
    const images = await res.json();
    console.log("fetchImage: 画像情報を取得しました", images);
    return images[0]; // 画像情報の配列から最初の要素を返す
}