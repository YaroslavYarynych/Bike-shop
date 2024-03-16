import { BikeItem } from "../bike-item";
import { EntityType } from "../../utils/types";

import styles from "./BikeList.module.scss";

type Props = {
  list: EntityType[];
};

export const BikeList: React.FC<Props> = ({ list }) => {
  return (
    <div className={styles.bike__list_container}>
      {list.map((item, index) => (
        <BikeItem item={item} key={item.id} index={index} />
      ))}
    </div>
  );
};
