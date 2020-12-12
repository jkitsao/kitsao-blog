import Link from "next/link";
import Image from "components/Image";
import Layout from "components/Layout";
// import Bio from "components/Bio";
import SEO from "components/Seo";
import { getSortedPosts } from "utils/posts";

export default function Home({ posts }) {
  return (
    <Layout>
      <SEO title="All posts" />

      {posts.map(
        ({
          frontmatter: { title, description, date, image, author },
          slug,
        }) => (
          <article
            key={slug + title + date}
            className="bg-white shadow-lg cursor-pointer sm:flex my-2 p-1 pb-3 sm:pb-2 overflow-x-hidden sm:p-2 mb-3 hover:shadow-2xl"
            // style={{ borderBottom: "2px solid green" }}
          >
            <Image
              alt={title}
              src={`${image}?lqip`}
              // previewSrc={`${image}?lqip`}
              className="w-full h-48 sm:w-56 object-cover sm:rounded-lg mb-1"
            />
            <Link href={"/post/[slug]"} as={`/post/${slug}`}>
              <div className="ml-3 lg:ml-2  sm:px-10  w-full sm:w-3/4 sm:pt-2">
                <header>
                  <h3 className="mb-1 mt-0">
                    <a className="text-lg lg:text-2xl font-semibold text-teal-900 no-underline">
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
                {/* <button className="bg-green-700 cursor-pointer hover:bg-green-500 sm:block text-white px-2 border-none outline-none shadow-lg text-sm">
                  read more
                </button> */}
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
