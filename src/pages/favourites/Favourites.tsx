import { BikeList } from "../../components/bike-list/BikeList";
import { useAppSelector } from "../../store/store";
import { EmptyMessage } from "../../components/empty-message/EmptyMessage";

import styles from "./favourites.module.scss";

export const Favourites = () => {
  const bikesFromFavs = useAppSelector((state) => state.favStore.favourites);
  const localeFavs = localStorage.getItem("favs");
  const storedFavsItems = localeFavs ? JSON.parse(localeFavs) : [];

  return (
    <div className={styles.favourites_container}>
      {!bikesFromFavs.length && !storedFavsItems.length ? (
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
