import React from "react";

import { OpacityImage } from "@/shared/ui/OpacityImage";

import styles from './TheGradientBackground.module.scss'
import { images } from "@/shared/lib/images";

export const ThirdGradientBackground = React.memo<
    React.PropsWithChildren
>(({ 
    children
}) => {
    return (
        <div className={styles.root}>
            <OpacityImage
                className={styles.desktop}
                src={images.main.gradient3.desktop}
                alt={'desktop-decoration'}
            />
            <OpacityImage
                className={styles.mobile}
                src={images.main.gradient3.mobile}
                alt={'desktop-decoration'}
            />
            {children}
        </div>
    )
})