import "./LeftSideBar.css";
import LeftSideBarCard from "../../components/LeftSideBarCard/LeftSideBarCard";

import Yoga from '../../assets/yoga.svg'
import biker from '../../assets/biker.svg'
import dumbbell from '../../assets/dumbbell.svg'
import swimer from '../../assets/swimer.svg'


function LeftSideBar() {
  return (
    <section className="leftsidebar">
        <div className="iconesection">
            <LeftSideBarCard src={Yoga} />
            <LeftSideBarCard src={swimer} />
            <LeftSideBarCard src={biker} />
            <LeftSideBarCard src={dumbbell} />
        </div>
      <article className="copyrightsection">
        <p className="copyright">Copyright, SportSee 2020</p>
      </article>
    </section>
  );
}

export default LeftSideBar;