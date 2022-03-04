import { useEffect } from "react";
import { loadHotelsAsync } from "./redux/reducers/hotels/hotels.thunk";
import { useDispatch, useSelector } from "react-redux";
import IHotelsState from "./models/IHotelsState.model";
import IReducer from "./models/IReducer.model";

function App() {
  const dispatch = useDispatch();
  const hotels = useSelector((state: IReducer) => state.hotelsReducer.hotels);

  useEffect(() => {
    dispatch(loadHotelsAsync());
  }, []);

  return (
    <div>
      {hotels.map(h => <div key={h.id}>{h.id}</div>)}
    </div>
  );
}

export default App;
