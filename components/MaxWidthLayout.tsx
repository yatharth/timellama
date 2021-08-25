import {Children} from "./types";
import {CSSProperties} from "react";

function MaxWidthLayout({maxWidth = '30rem', verticalPadding, style, children}: { maxWidth?: string, verticalPadding?: string, style?: CSSProperties, children: Children }) {
    return <>

        <div style={style}>
            {children}
        </div>

        <style jsx>{`
            div {
              width: 100%;
              max-width: ${maxWidth};
              margin: 0 auto;
              
              padding-top: ${verticalPadding};
              padding-bottom: ${verticalPadding};
            }
        `}</style>

    </>
}

export default MaxWidthLayout;