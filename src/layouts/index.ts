import { ReactNode, ReactElement } from "react";

export type LayoutType = {
  children: ReactNode;
};

export type GenericChildrenType<Type> = {
  children?: ReactElement<Type> | ReactElement<Type>[];
};
