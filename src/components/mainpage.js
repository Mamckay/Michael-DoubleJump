import React from "react";
import { Link } from "react-router-dom";
import "./css/mainpage.css";

export default class MainPage extends React.Component {
  render() {
    return (
      <div className="containerFeaturedReview">
        <div className="intro">
          <span>Welcome to Double Jump!</span>
          <br />
          <p>
            This sites purpose is to provide reviews and a means to purchase
            video games and accessories
          </p>
          <p>Sign up to utilize the most of this site.</p>
        </div>
        <div className="customHr" />
        <img
          alt="missing"
          className="imgFeatureReview"
          src="https://s3.dexerto.com/thumbnails/_thumbnailLarge/Is-Fallout-76-down-Bethesda-confirms-downtime-for-nuke-silo-hot-fix-January-2.jpg"
        />
        <h2 className="reviewTitle">Featured Review</h2>
        <br />
        <span className="authorTitle">Author: Angry Joe</span>
        <br />
        <p className="reviewBody">
          After more than 50 hours plundering the irradiated wasteland of
          Fallout 76, the greatest mystery still lingering is who this mutated
          take on Fallout is intended for. Like many of Vault-Tec’s underground
          bunkers, Bethesda’s multiplayer riff on its post-nuclear RPG series is
          an experiment gone awry. There are bright spots entangled in this mass
          of frustratingly buggy and sometimes conflicting systems, but what fun
          I was able to salvage from the expansive but underpopulated West
          Virginia map was consistently overshadowed by the monotony of its
          gathering and crafting treadmill. On the surface, Fallout 76 is
          another dose of Bethesda’s tried-and-true open-world RPG formula on a
          larger-than-ever map that’s begging to be explored. As you emerge from
          Vault 76 you’ll start in a relatively peaceful forest and venture out
          into more dangerous pockets of the irradiated wasteland. My favorite
          is traveling the lengths of the Cranberry Bog, where the pinkish-red
          fields are seemingly inviting from afar but turn out to be full of a
          snaking system of trenches and alien forests that hide the worst
          horrors of the wasteland, but there are many more.
        </p>
        <img
          className="rightImg"
          alt="fallout76"
          src="https://cdn0.tnwcdn.com/wp-content/blogs.dir/1/files/2018/06/Fallout-76-hed-796x419.jpg"
        />
        <p className="reviewBody">
          But while the lighting and art direction of these different regions
          are great at setting the eerie mood and tone of a destroyed
          Appalachia, the actual objects like trees, shrubs, buildings, cars,
          and more somehow look flatter and less detailed than those in Fallout
          4 did three years ago. Coupling that with Bethesda’s
          still-unimpressive character animations, Fallout 76 isn’t a
          good-looking game except when viewed from the exact right angles. When
          you look closer, it becomes obvious that Bethesda’s ambitious idea to
          replace all human NPCs with other players results in a lack of
          meaningful interaction with the world. Other than 20-something other
          players spread so thinly over a massive map that chance encounters are
          rare outside of quest locations, just about the only voices you’ll
          hear are recordings of long-dead questgivers, robots, and AI
          constructs who simply deliver information at you. Where past Fallout
          games have more than made up for some of their frustrations with
          brow-furrowing questions like whether to destroy the town of Megaton
          or what should become of the New Vegas Strip, there’s no opportunity
          for the morally tricky decision-making in Fallout 76 because no one
          talking to you can hear you. Because of that, the so-called main story
          quests to track down and eliminate the source of a spreading plague
          boil down to obediently following a breadcrumb trail of journals and
          notes. With the exception of some occasional goofy and creative tasks,
          it all feels like chasing ghosts. And though later missions mask the
          shallowness with some cool large-scale battles and events, they’re
          fleeting moments.
        </p>
        <div>
          <iframe
            className="featuredVideo"
            title="main review"
            width="500"
            height="320"
            src="https://www.youtube.com/embed/SjrDbSgB9IU"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    );
  }
}
