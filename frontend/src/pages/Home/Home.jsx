import { useState } from "react";
import Header from "../../component/Header/Header";
import ExploreMenu from "../../component/ExploreMenu/ExploreMenu";
import FoodDisplay from "../../component/FoodDisplay/FoodDisplay";
import FAQDisplay from "../../component/FAQDisplay/FAQDisplay";

const Home = () => {
  const [category, setCategory] = useState("All");
  
  return (
    <div>
      <Header />
      <ExploreMenu category={category} setCategory={setCategory}/>
      <FoodDisplay category={category} />
      <FAQDisplay />
    </div>
  );
};

export default Home;
