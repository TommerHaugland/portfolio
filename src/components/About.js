import React, { useEffect, useState } from "react";
import sanityClient from "../client.js";
import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

export default function About() {
  const [author, setAuthor] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "author"] {
      name,
      bio,
      "authorImage": image.asset->url
    }`
      )
      .then((data) => setAuthor(data[0]))
      .catch(console.error);
  }, []);

  if (!author) return <div>Loading...</div>;

  return (
    <main className="relative">
      <div className="p-10 container mx-auto relative">
        <section className=" rounded-lg shadow-2xl lg: flex p-20">
          {author.authorImage && (
            <img
              src={urlFor(author.authorImage).url()}
              alt={author.name}
              className="rounded w-32 h-32 lg:w-64 lg:h-64 mr-8"
            />
          )}

          <div className="text-lg flex flex-col justify-center">
            <h1 className="cursive text-6xl  mb-4">
              Hey there. I'm <span className="">{author.name}</span>
            </h1>
            <div className="prose lg:prose-xl text-white">
              <BlockContent
                blocks={author.bio}
                projectId="fus97s2v"
                dataset="production"
              />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
