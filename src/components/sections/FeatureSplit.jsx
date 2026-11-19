import React from "react";
import { Eyebrow } from "../ui";
import { ParallaxImage } from "../scroll";

/**
 * FeatureSplit — large image beside a text column.
 *
 * caption: small label under the image
 * meta:    emphasised line between the body copy and the action
 * action:  any node, typically a <Button variant="link">
 * ratio:   "wide" gives the image ~60% of the row, "even" splits 50/50
 */
const FeatureSplit = ({
  image,
  imageAlt = "",
  caption,
  eyebrow,
  title,
  text,
  meta,
  action,
  ratio = "wide",
  headingLevel: Heading = "h3",
}) => (
  <div className={`mn-split mn-split--${ratio}`}>
    <figure className="mn-split__media">
      <ParallaxImage src={image} alt={imageAlt} loading="lazy" />
      {caption && (
        <figcaption>
          <Eyebrow as="span">{caption}</Eyebrow>
        </figcaption>
      )}
    </figure>
    <div className="mn-split__body">
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <Heading className="mn-heading mn-heading--md">{title}</Heading>
      {text && <p className="mn-split__text">{text}</p>}
      {meta && <p className="mn-split__meta">{meta}</p>}
      {action}
    </div>
  </div>
);

export default FeatureSplit;
