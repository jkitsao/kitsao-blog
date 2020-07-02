import ReactMarkdown from "react-markdown/with-html";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
// import { darcula } from "react-syntax-highlighter/dist/esm/styles/prism";
// import { dark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import Layout from "components/Layout";
import Image from "components/Image";
import SEO from "components/Seo";
import { getPostBySlug, getPostsSlugs } from "utils/posts";
// import { defaultStyle } from "react-syntax-highlighter/dist/esm/styles/hljs";
// import { docco } from "react-syntax-highlighter/dist/cjs/styles/hljs";

const CodeBlock = ({ language, value }) => {
  // console.log(language, value);
  return <SyntaxHighlighter language={language}>{value}</SyntaxHighlighter>;
};

const MarkdownImage = ({ alt, src }) => (
  <Image
    alt={alt}
    src={require(`../../content/assets/${src}`)}
    // previewSrc={require(`../../content/assets/${src}?lqip`)}
    className="w-full"
  />
);

export default function Post({ post, frontmatter }) {
  // console.log(frontmatter);
  return (
    <Layout>
      <SEO
        title={frontmatter.title}
        description={frontmatter.description || post.excerpt}
      />

      <article>
        <header className="my-5">
          <h1 className="my-3 text-3xl sm:text-4xl text-gray-900 font-bold lg:text-5xl leading-tight">
            {frontmatter.title}
          </h1>
          <p className="text-lg text-green-800 inline-block">
            {frontmatter.date}
          </p>
          {/* if author is present show else dont show  */}
          {frontmatter.author ? (
            <span className="text-lg text-red-800 font-bold mx-2">
              by {frontmatter.author}
            </span>
          ) : null}
        </header>
        <div className=" w-full sm:w-3/4">
          <Image
            alt={frontmatter.title}
            src={frontmatter.image}
            // previewSrc={require(`${frontmatter.image}?lqip`)}
            className="w-full h-3/4 rounded lg:ml-12"
          />
        </div>

        <ReactMarkdown
          escapeHtml={false}
          source={post.content}
          renderers={{ code: CodeBlock, image: MarkdownImage }}
        />
      </article>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = getPostsSlugs();

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const postData = getPostBySlug(slug);

  return { props: postData };
}
