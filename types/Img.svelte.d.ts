/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface ImgProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["img"]> {
  /**
   * Specify the image source
   */
  src?: string;

  /**
   * @default ""
   */
  alt?: string;

  /**
   * @default "16x9"
   */
  ratio?: string;

  /**
   * @default "#f4f4f4"
   */
  backgroundColor?: string;
}

export default class Img extends SvelteComponentTyped<
  ImgProps,
  {
    load: CustomEvent<{ timing: number }>;
    error: CustomEvent<{ timing: number }>;
    click: WindowEventMap["click"];
    mouseover: WindowEventMap["mouseover"];
    mouseenter: WindowEventMap["mouseenter"];
    mouseout: WindowEventMap["mouseout"];
  },
  { error: {}; loading: {} }
> {}
