import {Children} from "./types";
import {CSSProperties} from "react";

// It’s recommended to wrap this within a div that has horizontal padding and vertical padding set as needed.
function MaxWidthLayout({maxWidth = '30rem', style, children}: { maxWidth?: string, style?: CSSProperties, children: Children }) {
    return <>

        <div style={style}>
            {children}
        </div>

        <style jsx>{`
            div {
              width: 100%;
              max-width: ${maxWidth};
              margin: 0 auto;
            }
        `}</style>

    </>
}

export default MaxWidthLayout;