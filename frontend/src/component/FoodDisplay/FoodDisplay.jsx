import { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import FoodItem from "../FoodItem/FoodItem";

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);
  
  const filteredFoodList = food_list.filter(
    (item) => category === "All" || category === item.category
  );

  return (
    <Box width="80%" margin={"40px auto"}>
      <Typography
        variant="h2"
        sx={{ fontSize: "max(2vw, 24px)", fontWeight: 600 }}
      >
        {filteredFoodList.length} results
      </Typography>
      <Grid
        container
        spacing={2}
        sx={{
          marginTop: "30px",
          rowGap: "50px",
        }}
      >
        {food_list.map((item, index) => {
          if (category === "All" || category === item.category) {
            return (
              <Grid item size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={item._id}>
                <FoodItem
                  key={index}
                  id={item._id}
                  name={item.name}
                  price={item.price}
                  category={item.category}
                  image={item.image}
                />
              </Grid>
            );
          }
        })}
      </Grid>
    </Box>
  );
};

export default FoodDisplay;
