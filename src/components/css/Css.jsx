import './css.css'
function Css() {
    return (
        <>
            <ul>
                <li>What is CSS?
                    <ul>
                        <li>CSS (Cascading Style Sheets) is a style sheet language used to describe the presentation of HTML elements — such as layout, colors, and fonts.</li>
                    </ul>
                </li>
                <li>What are the different ways to apply CSS?
                    <ul>
                        <li>Inline CSS — inside the HTML element using the style attribute.</li>
                        <li>Internal CSS — inside the <style /> tag in the <head /> section.</li>
                        <li>External CSS — in a separate .css file linked using <pre><link /></pre> tag.</li>
                    </ul>
                </li>
                <li>What is the difference between id and class selectors?
                    <ul>
                        <li>id: unique per page; defined using #idName.</li>
                        <li>class: reusable; defined using .className.</li>
                        <li>
                            Example:
                            <pre>
                                {`#header { color: blue; } .title { font-size: 20px; }`}
                            </pre>
                        </li>
                    </ul>
                </li>
                <li>What are pseudo-classes and pseudo-elemets in CSS?
                    <ul>
                        <li>Pseudo-classes define a special state of an element.</li>
                        <li>class: reusable; defined using .className.</li>
                        <li>
                            Example:
                            <pre>
                                {`a:hover { color: blue; input:focus { border-color: blue; }}`}
                            </pre>
                        </li>
                        <li>Pseudo-elements allow you to style specific parts of an element’s content — for example, the first line, first letter, or to insert content before or after the element’s content.</li>
                        <li>They are written with two colons (::) (modern syntax).</li>
                        <li>
                            <ul>
                                <li>
                                    ::before -- Inserts content before an element’s content<br />
                                    ::after -- Inserts content after an element’s content<br />
                                    ::first-letter	Styles the first letter of text<br />
                                    ::first-line	Styles the first line of text<br />
                                    ::selection	Styles text that is selected by the user<br />
                                    ::placeholder	Styles placeholder text inside input fields<br />
                                    ::marker	Styles bullet points or numbering in lists<br />
                                    ::backdrop	Styles the background of full-screen elements (like modals)
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li>
                    Explain the CSS box model.
                    <ul>
                        <li>Every element is a box consisting of: content, padding border and margin</li>
                    </ul>
                </li>
                <li>
                    What are CSS combinators?
                    <ul>
                        <li>They define relationships between selectors:
                            <ul>
                                <li>
                                    Descendant: div p (all p tag inside div tag)<br />
                                    Child: div {'>'} p (direct children)<br />
                                    Adjacent sibling: div + p<br />
                                    General sibling: div ~ p
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li>
                    What is specificity in CSS?
                    <ul>
                        <li>It determines which CSS rule is applied when multiple rules target the same element.
                            <ul>
                                <li>Order of priority:
                                    <ul>
                                        <li>
                                            Inline styles (highest)<br />
                                            IDs<br />
                                            Classes / attributes / pseudo-classes<br />
                                            Elements / pseudo-elements<br />
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li>
                    What are flexbox and grid?
                    <ul>
                        <li>
                            Flexbox: 1D layout (row or column)<br />
                            <pre>
                                display: flex;
                                justify-content: center;
                                align-items: center;
                            </pre><br />
                            Grid: 2D layout (rows and columns)<br />
                            <pre>
                                display: grid;
                                grid-template-columns: 1fr 1fr;
                            </pre>
                        </li>
                    </ul>
                </li>
                <li>
                    What is the difference between position: relative and position: absolute?
                    <ul>
                        <li>
                            relative: positioned relative to its normal position. <br />
                            absolute: positioned relative to its nearest positioned ancestor.
                        </li>
                    </ul>
                </li>
                <li>
                    What is z-index and how does it work?
                    <ul>
                        <li>
                            Defines the stacking order of elements. Higher z-index means it appears above lower ones.
                            Only works on positioned elements (relative, absolute, fixed, sticky).
                        </li>
                    </ul>
                </li>
                <li>
                    What are CSS variables (custom properties)?
                    <ul>
                        <li>
                            Variables store reusable values.
                            <ul>
                                <li>
                                    <pre>{`:root {--main-color: #4CAF50;}`}</pre>
                                    <pre>{`button {background: var(--main-color);}`}</pre>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li>
                    Difference between em and rem?
                    <ul>
                        <li>
                            em → relative to the parent font size. <br />
                            rem → relative to the root (html) font size.
                        </li>
                    </ul>
                </li>
                <li>
                    What is the difference between visibility: hidden and display: none?
                    <ul>
                        <li>
                            display: none → removes the element from layout. <br />
                            visibility: hidden → hides the element but space remains reserved.
                        </li>
                    </ul>
                </li>
                <li>
                    What is the difference between inline, block, and inline-block elements?
                    <ul>
                        <li>
                            inline: no line break, width ignored (e.g., <span />). <br />
                            block: starts on new line, takes full width (e.g., {`<div></div>`}). <br />
                            inline-block: inline element that allows width & height.
                        </li>
                    </ul>
                </li>
                <li>
                    What are transitions and animations in CSS?
                    <ul>
                        <li>
                            Transition: smooth change between property values.
                            <ul>
                                <li>
                                    {`div {transition: all 0.3s ease;}`} <br />
                                    Animation: define keyframes for complex effects.
                                </li>
                                <li>
                                    {`@keyframes move {
                                        0% { left: 0; }
                                        100% { left: 100px; }
                                        }`}
                                    <br />
                                    {`div {
                                        animation: move 2s infinite;
                                    }`}
                                </li>
                            </ul>
                        </li>
                        <li>
                            What is object-fit used for?
                            <ul>
                                <li>
                                    Defines how an image or video should fit within its container. <br />
                                    {`img {
                                    width: 100%;
                                    height: 300px;
                                    object-fit: cover;
                                    }`}
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li>
                    Explain calc() function in CSS.
                    <ul>
                        <li>Allows arithmetic in CSS property values. <br /> width: calc(100% - 50px);</li>
                    </ul>
                </li>
                <li>
                    What is the difference between min-width, max-width, and width?
                    <ul>
                        <li>
                            width: sets fixed width. <br />
                            min-width: element can’t be smaller than this. <br />
                            max-width: element can’t be larger than this.
                        </li>
                    </ul>
                </li>
            </ul>
        </>
    )
}

export default Css