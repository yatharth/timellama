import {Children} from "./types";
import {CSSProperties} from "react";

// You probably shouldn’t be using the className or style properties.
// Don’t add horizontal padding to this element directly; it will cut into maxWidth.
// Don’t add horizontal margins either; it will mess with the centering.
// Instead, just add outer div that takes care of the margins padding. Single-purpose divs!
// You probably do want an outer div if you’re using this at the top page-level.
// Outer divs work better than inner divs, as inner div spacing will once again cut into maxWidth.
function MaxWidthLayout({maxWidth, className, style, children}: { maxWidth: string, className?: string, style?: CSSProperties, children: Children }) {
    return <>

        <div style={style} className={className}>
            {children}
        </div>

        <style jsx>{`
            div {
              width: 100%;
              max-width: ${maxWidth};
              margin: 0 auto;
            }
        `}</style>

        {/*<style jsx>
            // 'box-sizing: content-box' makes sure any padding the user applies
            //  won’t be counted among the maxWidth they supplied.
            // Compare this with border-box, where padding and border do count towards
            //  an element’s width. That’s usually a sensible default; just not here.
            // If you do set this, gotta revert all direct children to what I set as
            //  the global default.
            // This makes is a not-very-transparent component, as it assumes FOR you
            //  to make everything border-box separately from the globals CSS file where
            //  I decide this. So commenting all this out.
            // Best is I just use a separate inner or outer dix to handle padding.
            // Single-purpose divs!
            div {
               box-sizing: content-box;
            }
            div > :global(*) {
                box-sizing: border-box;
            }
        </style>*/}

    </>
}

export default MaxWidthLayout;