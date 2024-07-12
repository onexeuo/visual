// SPA (Single Page Application)

import './CSS/ReactLayout.css';

const contents = ['Javascript contents', 'Typescript contents', 'React contents'];

export default function ReactLayout(){
    const titleText = 'My React SPA Website';
    const menus = ['Javascript', 'Typescript', 'React'];
    const footerText = 'Copyright ⓒ 2024 All right reserverd it`s me';
    return(
        <div id="wrapper">
            <Header titleText={titleText} />
            <Nav menus={menus} />
            <Content contents={contents} />
            <Footer footerText={footerText} />
        </div>
    );
}

function Header(props){
    return(
        <Header>
            <h1>{props.titleText}</h1>
        </Header>
    )
}
function Nav(props){
    return(
        <Nav>
            <ul>
                {props.menus.map(
                    (menu, index) => 
                        <li data-index={index} key={index} onClick={changeMenu}>{menu}</li>
                )};
            </ul>
        </Nav>
    );
    function changeMenu(event){
        document.querySelector('#content').textContent
            = contents[event.target.dataset.index];
    }
}
function Content(props) {
    return(
        <div id='content'>
            {props.contents}
        </div>
    )
}
function Footer(props){
    return(
        <Footer>
            {props.Footer}
        </Footer>
    )
}








