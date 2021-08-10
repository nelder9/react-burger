import React from "react";
import ProfileMenu from "../../components/profile-menu/profile-menu";
import styles from "./profile-orders.module.css";

export default function ProfileOrdersPage() {
  return (
    <div className={styles.container}>
      <ProfileMenu />
      <div>Заказы</div>
    </div>
  );
};
