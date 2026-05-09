import React from "react";
import "./Features.css";

import features from "../../data/features.json";

interface FeatureCardProps {
  title: string;
  description: string;
  image: string;
}

/*Declaration of two components in a single file*/

/* Component 1 (used inside component 2) 
  ReactFC = 'React Function Component'.
  We're stating to TypeScript that 'FeatureCard' will hold a function that defines a component.
  Said component, takes FeatureCardProps as a parameter.
*/
const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  image,
}) => {
  return (
    <div className="feature-card">
      <img src={image} alt="Feature card image" />

      <div className="card-content">
        <h1>{title}</h1>
        <p>{description}</p>
        <button className="card-button">Learn More</button>
      </div>
    </div>
  );
};

/* Component 2 */
export default function Features() {
  return (
    <section className="features-grid">
      {features.map((feature) => (
        <FeatureCard
          key={feature.title}
          title={feature.title}
          description={feature.description}
          image={feature.image}
        />
      ))}

      {/*
      Above, we are importing data from a JSON to render the feature cards.
      This is to ilustrate how the map function can render `n` components.

      ||Try adding another entry into the JSON file and see what happens||

      However, in this case, since we have a set number of desired feature cards,
      we could also just do:

      <FeatureCard
        title="Fun Stuff"
        description="Submit your artwork, get new desktop wallpapers, coloring pages and the
          latest comics."
        image={art}
      />

      <FeatureCard
        title="Membership"
        description="Learn about the features and benefits of becoming a member of Club
          Penguin."
        image={membership}
      />

      <FeatureCard
        title="Online Shop"
        description="Take Club Penguin with you. Check out the shop to see the latest in
        penguin gear."
        image={games}
      />

      <FeatureCard
        title="Help & Support"
        description="Find answers to the most frequent questions about Club Penguin. Updated
          weekly."
        image={teacher}
      />

      <FeatureCard
        title="Parents"
        description="Learn more about Club Penguin in this section designed for parents of
          penguins."
        image={parenting}
      />

      */}
    </section>
  );
}
