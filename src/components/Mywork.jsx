import "./Mywork.css"
const Work = () => {
    return ( 
        <div id="work">
            <h1 id="sechead">My Works</h1>
            <p>The projects I made till now :</p>
            <div id='Projects'>
                
                <div id="project1" className="proj">
                    <h2>Project 1:Rock-Paper-Scissors</h2>
                    <a className="w" target="_blank" href="https://rock-paper-and-scissors-beta.vercel.app/">Link to project 1</a>
                    <p>It is a project which is made using html,css and javascript.</p>
                </div>
                <div id="project2" className="proj">
                    <h2>Project 2:Quiz-App</h2>
                    <a className="w" target="_blank" href="https://quiz-app-one-umber-27.vercel.app/">Link to project 2</a>
                    <p>It is a project which is made using html,css and javascript.</p>
                </div>
                <div id="project3" className="proj">
                    <h2>Project 3: Tic-Tac-Toe</h2>
                    <a className="w" target="_blank" href="https://tic-tac-toe-umber.vercel.app/">Link to project 3</a>
                    <p>It is a project which is made using html,css and javascript.</p>
                </div>
                <div id="project4" className="proj"> 
                    <h2>Project 4:Weather-App</h2>
                    <a className="w" target="_blank" href="https://pranav-weather-app.vercel.app/">Link to project 4</a>
                    <p>It is a project which is made using html,css and react.</p> 
                </div>
            </div>
        </div>
     );
}
 
export default Work;