import type {NextPage} from 'next'
import {useState} from 'react'
import {CopyToClipboard} from 'react-copy-to-clipboard'
import {toast} from 'bulma-toast'
import TextareaAutosize from 'react-textarea-autosize'
import Link from 'next/link'

import MaxWidthLayout from '../components/MaxWidthLayout'
import {fonts} from "../lib/fonts";


// TODO: use next.js layout functionality?
// TODO: consider cheapest domains?
// TODO: allow contentEditable, but have onChange rerun converters!
// TODO: consider using Container class from Bulma
// TODO: make editing functionality work lol
// TODO: look into title, header, etc.
// TODO: look into fronting with Cloudflare
// TODO: link to igfonts.io for more fonts
// TOOD: link to icanhaz memes
// TODO: add a jump to "what’s this?”
// TODO: add quick jumps


const Index: NextPage = () => {

    const [inputText, setInputText] = useState("");

    const onCopy = (copiedText: string, wasSuccess: boolean) => {
        toast({
            message: wasSuccess ? "Copied!" : "Could not copy to clipboard.",
            type: wasSuccess ? 'is-success' : 'is-danger',
            extraClasses: 'is-light px-4 py-3 mb-4',
        })
    };

    return <>
        <MaxWidthLayout>
            <div className='py-6'>

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
                                        <CopyToClipboard
                                            text={font.converter(inputText)}
                                                         onCopy={onCopy}>
                                            <button className='button is-small' disabled={!inputText}>Copy to Clipboard</button>
                                        </CopyToClipboard>
                                    </div>
                                </div>
                            </div>
                            <div className='control'>
                                <TextareaAutosize minRows={1} className='textarea foo'
                                    // disabled={true}
                                    //  contentEditable={false} suppressContentEditableWarning={true}
                                                  readOnly={true}
                                                  placeholder={"Modified text will show up here"}
                                                  value={font.converter(inputText)}/>
                            </div>
                        </div>
                    )}
                </div>

                <div className='card mt-6'>
                    <div className='card-header'>
                        {/*<div className="card-header-title">*/}

                        {/*</div>*/}
                    </div>
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

            </div>

        </MaxWidthLayout>

        <footer className='footer py-6 mt-6'>
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
            // We need the :global() as the styled-jsx won’t scope properly to the TextareaAutosize elements. The parent div gets scoped properly though. 
            // We set the min-height to a tiny number, so the minRows attribute of TextareaAutoresize can take over, without the min-height set by Bulma of 8rem or so intefering. 
            div :global(textarea) {
                min-height: 1rem !important;
            }
        `}</style>

    </>
}

export default Index
