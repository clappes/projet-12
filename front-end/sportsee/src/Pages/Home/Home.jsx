import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import ApiService from "../../api/ApiService.js";

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
    const [userData, setUserData] = useState(null);
    const [activityData, setActivityData] = useState(null);
    const [performanceData, setPerformanceData] = useState(null);
    const [sessionsData, setSessionsData] = useState(null);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);

    const apiService = new ApiService();

    const fetchAllData = async (userId) => {
        try {
            const user = await apiService.getUser(userId);
            if (!user || user === "can not get user") {
                setError(true);
                return;
            }
            setUserData(user);

            const activity = await apiService.getActivity(userId);
            setActivityData(activity);

            const performance = await apiService.getPerformance(userId);
            setPerformanceData(performance);

            const sessions = await apiService.getSessions(userId);
            setSessionsData(sessions);
        } catch (err) {
            console.error("Error fetching data:", err);
            setError(true);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (id) {
            fetchAllData(id);
        }
    }, [id]);

    if (error) {
        return <Navigate to="/error" replace={true} />;
    }
  
    if (loading) {
        return <div>Chargement des données...</div>; // Affichage pendant le chargement
      }
    
      return (
        <>
          <LeftSideBar />
          <section className="dashboard">
            <article className="name-info">
              <h1 className="name">
                Bonjour <span className="red">{userData?.userInfos?.firstName}</span>
              </h1>
              <p className="subtitle">Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
            </article>
            <article className="charts-info">
              <div className="activity">
                <BarsChart data={activityData} />
              </div>
              <div className="sessions-duration">
                <CardLineChart data={sessionsData} />
              </div>
              <div className="feature">
                <RadarsChart data={performanceData} />
              </div>
              <div className="score">
                <RadialBarsChart score={userData?.todayScore || userData?.score} />
              </div>
              <div className="nutrition-score">
                <CardRight icon={calorie} count={userData?.keyData?.calorieCount} type={"Calories"} />
                <CardRight icon={protein} count={userData?.keyData?.proteinCount} type={"Proteines"} />
                <CardRight icon={carbohydrate} count={userData?.keyData?.carbohydrateCount} type={"Glucides"} />
                <CardRight icon={lipid} count={userData?.keyData?.lipidCount} type={"Lipides"} />
              </div>
            </article>
          </section>
        </>
      );
    }
    

export default Home;