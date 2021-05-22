import React from "react";
import "./DisplayProperty.css"

const DisplayProperty = () =>{
    // css display property is used to change the
    // default display property of an html element
    return(
        <div className="parent-DisplayProperty">
            {/*inline -> a, img, span, input etc*/}
            {/*block -> h1, div, p, section etc*/}

            {/*display-attributes*/}
            {/*inline*/}
            <div className="common-styles-displayProperty sec-1-inline">
                <h1>1. i am heading</h1>
                <h1>2. i am heading</h1>
                <h1>3. i am heading</h1>
                <h1>4. i am heading</h1>
            </div>
            {/*block*/} => inline elements to block
            <div className="common-styles-displayProperty sec-2-block">
                <a href="">home</a>
                <a href="">about</a>
                <a href="">cart</a>
                <a href="">location</a>
                <div className="paragraphs">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aspernatur in ipsa iste molestias placeat possimus vel! Aspernatur, assumenda ea exercitationem maxime nam non ullam veritatis voluptates. Ab dignissimos, excepturi.
                        <span>1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla, voluptatibus!</span>
                        <span>2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla, voluptatibus!</span>
                        <span>3. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla, voluptatibus!</span>
                        <span>4. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla, voluptatibus!</span>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum debitis delectus distinctio dolorum facilis magnam mollitia obcaecati quam rerum sint. Aperiam blanditiis cupiditate facere facilis inventore modi molestias provident quam ratione saepe. Animi commodi ipsa ipsum, labore molestiae neque placeat quas suscipit vero voluptate! At fugiat impedit inventore neque, nulla odio odit officia placeat quibusdam repudiandae sapiente sed sequi ut voluptas voluptatum. Ad adipisci, delectus dignissimos dolor est expedita hic id impedit laboriosam officia qui quibusdam quisquam quod ratione, repellat saepe sit sunt. At beatae cumque quia reprehenderit sed! Beatae deserunt facere fuga, id inventore nostrum praesentium sequi. Ab, natus.
                    </p>
                </div>
            </div>
            {/*inline-block*/}
            <div className="parent-display-inline-block">
                <div className="child-display-inline-block">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus accusantium aliquid dicta doloremque eius hic incidunt labore maxime nesciunt odio officia pariatur quasi, quidem sint suscipit tempora ut. Architecto dignissimos fuga nemo numquam odio officia quae, sed unde vel.</p>
                </div>
                <div className="child-display-inline-block">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus accusantium aliquid dicta doloremque eius hic incidunt labore maxime nesciunt odio officia pariatur quasi, quidem sint suscipit tempora ut. Architecto dignissimos fuga nemo numquam odio officia quae, sed unde vel.</p>
                </div>
                <div className="child-display-inline-block">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus accusantium aliquid dicta doloremque eius hic incidunt labore maxime nesciunt odio officia pariatur quasi, quidem sint suscipit tempora ut. Architecto dignissimos fuga nemo numquam odio officia quae, sed unde vel.</p>
                </div>
                <div className="child-display-inline-block">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus accusantium aliquid dicta doloremque eius hic incidunt labore maxime nesciunt odio officia pariatur quasi, quidem sint suscipit tempora ut. Architecto dignissimos fuga nemo numquam odio officia quae, sed unde vel.</p>
                </div>
                <div className="child-display-inline-block">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus accusantium aliquid dicta doloremque eius hic incidunt labore maxime nesciunt odio officia pariatur quasi, quidem sint suscipit tempora ut. Architecto dignissimos fuga nemo numquam odio officia quae, sed unde vel.</p>
                </div>
                <div className="child-display-inline-block">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus accusantium aliquid dicta doloremque eius hic incidunt labore maxime nesciunt odio officia pariatur quasi, quidem sint suscipit tempora ut. Architecto dignissimos fuga nemo numquam odio officia quae, sed unde vel.</p>
                </div>
            </div>
            {/*none*/}
            <div className="display-none">
                <p>hii im display none</p>
            </div>

            {/*/!*flex*!/ =>*/}
            {/*separate topic will discuss on this*/}

        </div>
    )
}

export default DisplayProperty