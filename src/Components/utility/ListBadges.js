export default function ListBadges(badges = []) {
    const icons = {
        html: "fa-html5",
        javascript: "fa-js",
        nodejs: "fa-node-js",
        react: "fa-react",
        css: "fa-css3-alt"
    }
    return <div className="badges">{badges.map((e) => {
        return <div id="popover__wrapper"><i className={"fa-brands " + icons[e.toLowerCase()]}></i><div className='popover__Content'>{e}</div></div>
    })}</div>
}