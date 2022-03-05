import { useEffect } from "react";
import { loadHotelsAsync } from "./redux/reducers/hotels/hotels.thunk";
import { useDispatch } from "react-redux";
import Hotels from "./components/Hotels/Hotels";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadHotelsAsync());
  }, []);

  return (
    <div>
      <Hotels />
    </div>
  );
}

export default App;
