import { getContext } from "svelte";

export const context = {
  subscribe: null,
  addNotification: null,
  removeNotification: null,
  clearNotifications: null,
};

export const getNotificationsContext = () => getContext(context);
