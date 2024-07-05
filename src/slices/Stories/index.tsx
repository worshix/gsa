import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Stories`.
 */
export type StoriesProps = SliceComponentProps<Content.StoriesSlice>;

/**
 * Component for "Stories" Slices.
 */
const Stories = ({ slice }: StoriesProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for stories (variation: {slice.variation}) Slices
    </section>
  );
};

export default Stories;
