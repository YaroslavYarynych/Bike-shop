import { BikeList } from "../../components/bike-list/BikeList";
import { useAppSelector } from "../../store/store";
import { EmptyMessage } from "../../components/empty-message/EmptyMessage";

import "./favouritess.scss";

export const Favourites = () => {
  const bikesFromFavs = useAppSelector((state) => state.favStore.favourites);
  return (
    <div className="favourites-container">
      {!bikesFromFavs.length ? (
        <EmptyMessage
          title="Your Bikery favourites is empty"
          content="Choose a bike"
        />
      ) : (
        <BikeList list={bikesFromFavs} />
      )}
    </div>
  );
};
