import type {NextPage} from 'next'
import {useState} from 'react'
import {CopyToClipboard} from 'react-copy-to-clipboard'
import {toast} from 'bulma-toast'
import TextareaAutosize from 'react-textarea-autosize'
import Head from 'next/head';
import Link from 'next/link'

import MaxWidthLayout from '../components/MaxWidthLayout'
import {fonts} from "../lib/fonts";


// MAYBE IN FUTURE PROJECTS:
// - TODO: Consider using Next.js’s _app.js layout functionality? Only makes sense when I have multiple pages.
// - TODO: Consider adding another page, just to see how prefetching and instant navigation works.
// - TODO: Consider buying the cheapest domain possible? And fronting with Cloudflare, and configuring on Vercel.

// STILL MIGHT DO SOMETIME:
// - TODO: Update reference to bulma-toast onces my PRs are merged.

// REJECTED FOR MINIMAL ROI
// - TODO: Link to igfonts.io for more fonts.
// - TOOD: Link to icanhazcheezburger memes.
// - TODO: Consider allowing editing from within converted fields? Meh, not much value add. And creating decoder function for two-way functionality would be too hard.
// - TODO: Consider adding a tag under input text called "what’s this?” that jumps to the explanatory card.
// - TODO: Consider adding quick jumps to all the font styles right below input field..
// - TODO: Use ✍️ emoji as favicon instead of the wand.


const Index: NextPage = () => {

    const [inputText, setInputText] = useState("");
    const isInputEmpty = !inputText;

    const onCopy = (copiedText: string, wasSuccess: boolean) => {
        toast({
            message: wasSuccess ? "Copied!" : "Could not copy to clipboard.",
            type: wasSuccess ? 'is-success' : 'is-danger',
            extraClasses: 'is-light px-4 py-3 mb-4',
        })
    };

    return <>

        <Head>
            <title>icanhazfonts</title>
            <meta name='description' content="Convert text into 𝘪𝘵𝘢𝘭𝘪𝘤𝘴, 𝗯𝗼𝗹𝗱, and other 𝕗𝕒𝕟𝕔𝕪 Unicode letters to use on
                            Twitter, Instagram, and other places." />
        </Head>

        <div className='py-6 px-5'>
            <MaxWidthLayout maxWidth='30rem'>


                <div className='mb-6'>
                    <TextareaAutosize autoFocus minRows={3} className={'textarea'} placeholder={"Add text here"}
                                      value={inputText} onChange={(event) => setInputText(event.target.value)}/>
                </div>

                <div className=''>
                    {fonts.map((font) =>
                        <div key={font.name} className='field mb-5'>
                            <div className='level is-mobile mb-3'>
                                <div className='level-left'>
                                    <div className='level-item'>
                                        <label className='label'>
                                            {font.name}
                                        </label>
                                    </div>
                                    <div className='level-item'>
                                        <CopyToClipboard text={font.converter(inputText)} onCopy={onCopy}>
                                            <button className='button is-small' disabled={isInputEmpty}>
                                                Copy to Clipboard
                                            </button>
                                        </CopyToClipboard>
                                    </div>
                                </div>
                            </div>
                            <div className='control'>
                                <TextareaAutosize minRows={1} className='textarea'
                                                  readOnly={true}
                                                  placeholder={"Modified text will show up here"}
                                                  value={font.converter(inputText)}
                                    //  contentEditable={false} suppressContentEditableWarning={true}
                                />
                            </div>
                        </div>
                    )}
                </div>

                <div className='card mt-6'>
                    <div className='card-content'>
                        <div className="block title is-5 mb-3">
                            <Link href='/'><a className='is-underlined'>
                                <span className='has-text-weight-bold'>icanhazfonts</span>
                                <span className='has-text-weight-normal'>.vercel.app</span>
                            </a></Link>
                        </div>
                        <div className='is-size-6'>
                            Quick way to get 𝘪𝘵𝘢𝘭𝘪𝘤𝘴, 𝗯𝗼𝗹𝗱, and other 𝕗𝕒𝕟𝕔𝕪 letters to paste into
                            Twitter, Instagram, and other places.
                        </div>
                    </div>
                </div>

            </MaxWidthLayout>
        </div>

        <footer className='footer py-6 px-4 mt-6'>
            <div className='content has-text-centered'>
                <p>
                    <strong>icanhazfonts</strong> by <a href='https://yatharth.io'>Yatharth Agarwal</a>.
                </p>
                <p>
                    The source code is licensed <a href='http://opensource.org/licenses/mit-license.php'>MIT</a>.<br/>
                    The website content is licensed <a
                    href='http://creativecommons.org/licenses/by-nc-sa/4.0/'>CC-BY-NC-SA-4.0</a>.
                </p>
                <p>
                    Find the source on <a href='https://github.com/yatharth/icanhazfonts'>Github</a>.<br/>
                    Built with <a href='https://bulma.io'>Bulma</a> and <a href='https://nextjs.org'>Next.js</a>.
                </p>
            </div>
        </footer>

        <style jsx>{`
            // Bulma sets the min-height of textarea to 8rem by default. This is too much!
            // If I set minRows to 1 or 2 in TextareaAutosize, it will never get that small, because of the min-height set in CSS by Bulma.
            // So I override that min-height and set my own.
            // It should have been fine to just set it to 1px or something.
            // However, TextareaAutosize has an issue with sizing the textarea correctly when the value is empty.
            // It shows scrollbars and doesn’t set it to be tall enough.
            // So instead, I set the min-height 3rem, which by manually playing I found looks close enough to 1 row of text.
            // This still showed scroll bars on Android, so I somewhat hackily disable them only if the value is empty.
            // I think a better alternative might be to style the ::placeholder pseudo-element as overflow: hidden or overflow:visible,
            //  because I think what’s going on is the height of the placeholder text is incorrectly calculated as too high.
            // However, the initial height on the textarea set by TextareaAutosize is still way smaller than I thought it would be
            //  with minRows=1, so the min-height: 3rem would still be necessary, and overall, it doesn’t matter too much.
            div :global(textarea) {
                min-height: 3rem !important;
                overflow: ${isInputEmpty ? 'hidden' : 'auto'};
            }
        `}</style>

    </>
}

export default Index
