/// <reference types="svelte" />

export interface ImgProps extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["img"]> {
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

export default class Img {
  $$prop_def: ImgProps;
  $$slot_def: {
    error: {};
    loading: {};
  };

  $on(eventname: "load", cb: (event: CustomEvent<{ timing: number }>) => void): () => void;
  $on(eventname: "error", cb: (event: CustomEvent<{ timing: number }>) => void): () => void;
  $on(eventname: "click", cb: (event: WindowEventMap["click"]) => void): () => void;
  $on(eventname: "mouseover", cb: (event: WindowEventMap["mouseover"]) => void): () => void;
  $on(eventname: "mouseenter", cb: (event: WindowEventMap["mouseenter"]) => void): () => void;
  $on(eventname: "mouseout", cb: (event: WindowEventMap["mouseout"]) => void): () => void;
  $on(eventname: string, cb: (event: Event) => void): () => void;
}
