import { useEffect, useState } from "react";
import "./App.css";
import PageContainer from "./container/PageContainer";
import Header from "./components/Header";
import RouterConfg from "./config/RouterConfg";
import Loading from "./components/Loading";
import Drawer from "@mui/material/Drawer";
import { useDispatch, useSelector } from "react-redux";
import Basket from "./components/Basket";
import { calculateTotalAmount, setDrawer } from "./redux/slices/basketSlice";

function App() {
  const [count, setCount] = useState(0);

  const { products, drawer, totalAmoumt } = useSelector(
    (store) => store.basket
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(calculateTotalAmount());
  }, []);

  return (
    <div>
      <PageContainer>
        <Header />
        <RouterConfg />
        <Loading />
      </PageContainer>
      <Drawer
        anchor="right"
        open={drawer}
        onClose={() => dispatch(setDrawer())}
      >
        {products &&
          products.map((product) => (
            <Basket key={product.id} product={product} />
          ))}
        <h3 style={{ marginLeft: "30px" }}>Toplam Tutar: {totalAmoumt}</h3>
      </Drawer>
    </div>
  );
}

export default App;
