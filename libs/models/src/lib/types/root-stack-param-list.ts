import { AppRoutes } from "../enums/app-routes";

export type RootStackParamList = {
  [AppRoutes.list]: undefined;
  [AppRoutes.card]: undefined;
};

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace ReactNavigation {
    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    interface RootParamList extends RootStackParamList {}
  }
}