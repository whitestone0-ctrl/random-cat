"use client";

import { useState } from "react";
import { fetchImage } from "./fetch-image";
import styles from "./page.module.css";

// コンポーネントの引数を定義する
type CatImageProps = {
    url: string;
};

// 画像を表示するコンポーネント
export function CatImage({ url }: CatImageProps) {
    const [imageUrl, setImageUrl] = useState(url);

    const refreshImage = async () => {
        setImageUrl("");
        const image = await fetchImage();
        setImageUrl(image.url);
    };

    return (
        <div className={styles.page}>
            <button onClick={refreshImage} className={styles.button}>画像を変更する</button>
            <div className={styles.frame}>
                {imageUrl && <img src={imageUrl} />}
            </div>
        </div>
    );
}