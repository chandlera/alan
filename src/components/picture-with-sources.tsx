/** @jsx h */
import { h } from "../../deps.ts";

export default function PictureWithSources(props: {largeSource: string, smallSource: string}) {
    const {
      largeSource,
      smallSource
    } = props;
  
    return (
      <picture>
        <source srcSet={smallSource} media="(max-width: 600px)" />
        <source srcSet={largeSource} media="(max-width: 1500px)" />
        <source srcSet={largeSource} />
        <img srcSet={largeSource} alt="Flowers" />
      </picture>
    );
  }