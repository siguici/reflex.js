import { Container, type Context } from "./reflex";

export { reflect } from "./reflex";

export default function (context: Context) {
  return new Container(context);
}
