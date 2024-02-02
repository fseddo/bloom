import { compile } from "path-to-regexp";
import { AppRoute } from "./AppRoute";

type ExtractParams<AppRoute> = AppRoute extends `${infer Segment}/${infer Rest}`
  ? Segment extends `:${infer Param}`
    ? Record<Param, string> & ExtractParams<Rest>
    : ExtractParams<Rest>
  : AppRoute extends `:${infer Param}`
  ? Record<Param, string>
  : {};

  
export const getPath = <T extends AppRoute>(
  path: T,
  params: Partial<ExtractParams<T>>
) => {
  return compile(path, { encode: encodeURIComponent })(params);
};
