import Link from "next/link";
import Image from "components/Image";
import Layout from "components/Layout";
import Bio from "components/Bio";
import SEO from "components/Seo";
import { getSortedPosts } from "utils/posts";

export default function Home({ posts }) {
  return (
    <Layout>
      <SEO title="All posts" />
      <Bio />
      {posts.map(
        ({
          frontmatter: { title, description, date, image, author },
          slug,
        }) => (
          <article
            key={slug + title + date}
            className="bg-white rounded shadow-2xl cursor-pointer sm:flex my-2 p-1 sm:p-2 "
          >
            <Image
              alt={title}
              src={`${image}?lqip`}
              // previewSrc={`${image}?lqip`}
              className="w-full h-56 sm:w-56 sm:h-56 rounded-lg object-cover "
            />
            <Link href={"/post/[slug]"} as={`/post/${slug}`}>
              <div className="ml-3 px-2 w-full sm:w-1/2 sm:pt-10">
                <header>
                  <h3 className="mb-1 mt-0">
                    <a className="text-xl lg:text-2xl font-medium text-orange-700 no-underline">
                      {title}
                    </a>
                  </h3>
                  <span className="mb-2 text-xs inline-block font-bold">
                    {date}
                  </span>
                  {author ? (
                    <span className="mb-2 text-xs font-bold mx-2 text-green-700">
                      {author}
                    </span>
                  ) : null}
                </header>
                <section>
                  <p className="mb-4 text-indigo-900 text-sm">{description}</p>
                </section>
              </div>
            </Link>
          </article>
        )
      )}
    </Layout>
  );
}

export async function getStaticProps() {
  const posts = getSortedPosts();

  return {
    props: {
      posts,
    },
  };
}
