import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getUser } from "../../api";
import { Navigate } from "react-router-dom";

import LeftSideBar from "../../components/LeftSideBar/LeftSideBar";
import BarsChart from "../../components/BarChart/BarsChart";
import CardRight from "../../components/CardRight/CardRight";
import RadarsChart from "../../components/RadarsChart/RadarsChart";
import CardLineChart from "../../components/CardLineChart/CardLineChart";
import RadialBarsChart from "../../components/RadialBarsChart/RadialBarsChart";


import calorie from "../../assets/energy.svg"
import protein from "../../assets/chicken.svg"
import carbohydrate from "../../assets/apple.svg"
import lipid from "../../assets/cheeseburger.svg"

function Home() {

    const { id } = useParams();
    const [data, setData] = useState(null);
    const [error, setError] = useState(false);

    const fetchUser = async (id) => {
        const response = await getUser(id);
        if (response === "can not get user") {
          setError(true);
        } else {
          setData(response);
        }
    };

    useEffect(() => {
        if (id) {
          fetchUser(id);
        }
    }, [id]);

    if (error) {
        return <Navigate to="/error" replace={true} />;
    }
  
  return (
    <>
        <LeftSideBar />
        <section className="dashboard">
            <article className="name-info">
                <h1 className="name">Bonjour <span className="red">{data?.userInfos.firstName}</span></h1>
                <p className="subtitle">Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
            </article>
            <article className="charts-info">
                <div className="activity">
                    <BarsChart />
                </div>
                <div className="sessions-duration">
                    <CardLineChart />
                </div>
                <div className="feature">
                    <RadarsChart />
                </div>
                <div className="score">
                    <RadialBarsChart />
                </div>
                <div className="nutrition-score">
                    <CardRight icon={calorie} count={data?.keyData.calorieCount} type={"Calories"} />
                    <CardRight icon={protein} count={data?.keyData.proteinCount} type={"Proteines"}/>
                    <CardRight icon={carbohydrate} count={data?.keyData.carbohydrateCount} type={"Glucides"}/>
                    <CardRight icon={lipid} count={data?.keyData.lipidCount} type={"Lipides"}/>
                </div>
            </article>
        </section>
    </>
  );
}

export default Home;