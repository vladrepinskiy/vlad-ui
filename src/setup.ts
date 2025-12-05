import { setup } from "goober";
import { createElement } from "react";
import { useTheme } from "./hooks/useTheme";
import { shouldForwardProp } from "goober/should-forward-prop";

export const setupGoober = () => {
  setup(
    createElement,
    undefined,
    useTheme,
    shouldForwardProp((prop) => !prop.startsWith("$"))
  );
};
