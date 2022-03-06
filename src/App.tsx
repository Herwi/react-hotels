import { useEffect } from "react";
import { loadHotelsAsync } from "./redux/reducers/hotels/hotels.thunk";
import { useDispatch } from "react-redux";
import Hotels from "./components/Hotels/Hotels";
import Theme from "./Theme";
import Header from "./components/Header/Header";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadHotelsAsync());
  }, []);

  return (
    <Theme>
      <Header />
      <Hotels />
    </Theme>
  );
};

export default App;
