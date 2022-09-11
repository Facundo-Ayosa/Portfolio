import Card from "./cards";
import data from '../../resources/database.json'
function Projects() {
    const icons = {
    html: "fa-html5",
    javascript: "fa-js",
    nodejs: "fa-node-js",
    react: "fa-react",
    css: "fa-css3-alt"
    }
    const card = data.projects.map((e, i) => {
        return <Card key={i} title={e.title} origin={e.origin} description={e.description} badges={e.badges} />;
    });
    return (<section id="projects">
            <h2>These are some of my projects</h2>
            <div id="card-container">
                {card}
            </div>
    </section>);
}

const badgesDeprecated = <div id="badges-box">
<div id="card-box">
</div>
<div id="badges-name-container">
<h2>Technologies</h2>
<div id="badges-names">
    <p><i class="fa-brands fa-html5"></i> HTML</p>
    <p><i class="fa-brands fa-css3-alt"></i> CSS</p>
    <p><i class="fa-brands fa-js"></i> JavaScript</p>
    <p><i class="fa-brands fa-node-js"></i> Node.js</p>
    <p><i class="fa-brands fa-react"></i> React.js</p>
</div>
</div>
</div>


export default Projects;