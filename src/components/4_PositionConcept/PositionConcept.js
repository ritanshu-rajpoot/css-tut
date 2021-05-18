import React from "react";
import "./PositionConcept.css"

const PositionConcept = ()=>{
    return(
        <div className="parent-positionConcept">
            {/*static*/}
            <div className="common-positionConcept">
                <p className="static">Hi from static</p>
            </div>
            {/*relative*/}
            <div className="common-positionConcept">
                <p className="relative">Hi from relative</p>
            </div>
            {/*absolute*/}
            <div className="common-positionConcept ancestor">
                <div className="absolute">
                    <p className="">Hi from div-1</p>
                </div>
                <div className="" style={{position:"absolute",right:"20px"}}>
                    <p className="">Hi from div-2</p>
                </div>
                <div className="" style={{position:"absolute",bottom:"90px"}}>
                    <p className="">Hi from div-3</p>
                </div>
                <div className="" style={{position:"absolute",top:"100px", right:"40px"}}>
                    <p className=""> Hi from div-4 </p>
                </div>
            </div>
            {/*fixed*/}
            <div className="common-positionConcept fixed">
                <p>position fixed</p>
            </div>
            {/*sticky*/}
            <div className="common-positionConcept sticky">
                <p>position sticky</p>
            </div>
            <div className="texts-container">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci aliquam beatae cum cumque debitis doloribus ea eius eos et expedita fuga fugiat in incidunt ipsa iusto magnam maiores nam neque, non perferendis quam quidem quisquam ratione soluta tempora, totam? Ab aspernatur aut debitis dicta distinctio dolores ducimus earum error in ipsum libero maiores minus modi molestias mollitia nihil nisi nobis officia omnis quaerat quibusdam quod ratione recusandae repellat repellendus sapiente sed sit suscipit tempore unde veritatis vitae voluptate, voluptatem? Accusantium culpa deleniti dolorem ea eveniet fugiat iure nam, odio provident quia quo repudiandae sequi soluta. Adipisci at commodi dolores eius iste odio quo sint tenetur veritatis, voluptate. Distinctio, dolorem et harum nihil optio reprehenderit sapiente? Aliquid amet architecto deleniti dolore, esse ex id molestiae nihil officia, porro praesentium quos voluptatibus! At aut consectetur cumque deserunt dicta dolor dolorum eius excepturi, inventore iure maxime minus molestias, mollitia necessitatibus nesciunt non nostrum, numquam odit officia omnis optio perferendis placeat quas qui ratione reiciendis rem repellat repellendus reprehenderit rerum soluta sunt suscipit temporibus ut vel vero voluptas. Ad adipisci blanditiis consequuntur deserunt ea earum, error explicabo fugiat illum laudantium molestiae odit possimus praesentium quidem quo quos repudiandae rerum sequi similique voluptate? Tempora!</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci aliquam beatae cum cumque debitis doloribus ea eius eos et expedita fuga fugiat in incidunt ipsa iusto magnam maiores nam neque, non perferendis quam quidem quisquam ratione soluta tempora, totam? Ab aspernatur aut debitis dicta distinctio dolores ducimus earum error in ipsum libero maiores minus modi molestias mollitia nihil nisi nobis officia omnis quaerat quibusdam quod ratione recusandae repellat repellendus sapiente sed sit suscipit tempore unde veritatis vitae voluptate, voluptatem? Accusantium culpa deleniti dolorem ea eveniet fugiat iure nam, odio provident quia quo repudiandae sequi soluta. Adipisci at commodi dolores eius iste odio quo sint tenetur veritatis, voluptate. Distinctio, dolorem et harum nihil optio reprehenderit sapiente? Aliquid amet architecto deleniti dolore, esse ex id molestiae nihil officia, porro praesentium quos voluptatibus! At aut consectetur cumque deserunt dicta dolor dolorum eius excepturi, inventore iure maxime minus molestias, mollitia necessitatibus nesciunt non nostrum, numquam odit officia omnis optio perferendis placeat quas qui ratione reiciendis rem repellat repellendus reprehenderit rerum soluta sunt suscipit temporibus ut vel vero voluptas. Ad adipisci blanditiis consequuntur deserunt ea earum, error explicabo fugiat illum laudantium molestiae odit possimus praesentium quidem quo quos repudiandae rerum sequi similique voluptate? Tempora!</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci aliquam beatae cum cumque debitis doloribus ea eius eos et expedita fuga fugiat in incidunt ipsa iusto magnam maiores nam neque, non perferendis quam quidem quisquam ratione soluta tempora, totam? Ab aspernatur aut debitis dicta distinctio dolores ducimus earum error in ipsum libero maiores minus modi molestias mollitia nihil nisi nobis officia omnis quaerat quibusdam quod ratione recusandae repellat repellendus sapiente sed sit suscipit tempore unde veritatis vitae voluptate, voluptatem? Accusantium culpa deleniti dolorem ea eveniet fugiat iure nam, odio provident quia quo repudiandae sequi soluta. Adipisci at commodi dolores eius iste odio quo sint tenetur veritatis, voluptate. Distinctio, dolorem et harum nihil optio reprehenderit sapiente? Aliquid amet architecto deleniti dolore, esse ex id molestiae nihil officia, porro praesentium quos voluptatibus! At aut consectetur cumque deserunt dicta dolor dolorum eius excepturi, inventore iure maxime minus molestias, mollitia necessitatibus nesciunt non nostrum, numquam odit officia omnis optio perferendis placeat quas qui ratione reiciendis rem repellat repellendus reprehenderit rerum soluta sunt suscipit temporibus ut vel vero voluptas. Ad adipisci blanditiis consequuntur deserunt ea earum, error explicabo fugiat illum laudantium molestiae odit possimus praesentium quidem quo quos repudiandae rerum sequi similique voluptate? Tempora!</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci aliquam beatae cum cumque debitis doloribus ea eius eos et expedita fuga fugiat in incidunt ipsa iusto magnam maiores nam neque, non perferendis quam quidem quisquam ratione soluta tempora, totam? Ab aspernatur aut debitis dicta distinctio dolores ducimus earum error in ipsum libero maiores minus modi molestias mollitia nihil nisi nobis officia omnis quaerat quibusdam quod ratione recusandae repellat repellendus sapiente sed sit suscipit tempore unde veritatis vitae voluptate, voluptatem? Accusantium culpa deleniti dolorem ea eveniet fugiat iure nam, odio provident quia quo repudiandae sequi soluta. Adipisci at commodi dolores eius iste odio quo sint tenetur veritatis, voluptate. Distinctio, dolorem et harum nihil optio reprehenderit sapiente? Aliquid amet architecto deleniti dolore, esse ex id molestiae nihil officia, porro praesentium quos voluptatibus! At aut consectetur cumque deserunt dicta dolor dolorum eius excepturi, inventore iure maxime minus molestias, mollitia necessitatibus nesciunt non nostrum, numquam odit officia omnis optio perferendis placeat quas qui ratione reiciendis rem repellat repellendus reprehenderit rerum soluta sunt suscipit temporibus ut vel vero voluptas. Ad adipisci blanditiis consequuntur deserunt ea earum, error explicabo fugiat illum laudantium molestiae odit possimus praesentium quidem quo quos repudiandae rerum sequi similique voluptate? Tempora!</p>
            </div>
        </div>
    )
}

export default PositionConcept
