import mainvisual01 from '../../common/images/mainvisual01.png';
import '../../styles/homepage/MainVisual.css';

function MainVisual() {

    return (
        <div className="main-visual">
            <img src={mainvisual01} useMap="#Map" alt="logo" />
            <map name="Map" alt="logo">
                <area shape="rect" coords="26,293,168,335" href="http://localhost:3000/" />
            </map>
        </div>
    );
}

export default MainVisual;

