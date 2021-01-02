import ReactMarkdown from "react-markdown/with-html";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { duotoneDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
// import {  } from "react-syntax-highlighter/dist/cjs/styles/prism";
import Layout from "components/Layout";
import Image from "components/Image";
import SEO from "components/Seo";
import { getPostBySlug, getPostsSlugs } from "utils/posts";
// import { defaultStyle } from "react-syntax-highlighter/dist/esm/styles/hljs";
// import { docco } from "react-syntax-highlighter/dist/cjs/styles/hljs";

const CodeBlock = ({ language, value }) => {
  // console.log(language, value);
  return (
    <SyntaxHighlighter
      language={language}
      style={duotoneDark}
      className="rounded"
    >
      {value}
    </SyntaxHighlighter>
  );
};

const MarkdownImage = ({ alt, src }) => (
  <Image
    alt={alt}
    src={`${src}`}
    // previewSrc={require(`../../content/assets/${src}?lqip`)}
    className="w-full  object-cover my-2 block shadow-lg"
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
        <header className="mt-6 lg:mt-16">
          <h1 className="my-3 ml-1 text-2xl sm:text-4xl text-gray-800  leading-tight font-semibold">
            {frontmatter.title}
          </h1>
          <p className="text-sm font-semibold text-green-800 inline-block">
            {frontmatter.date}
          </p>
          {/* if author is present show else dont show  */}
          {frontmatter.author ? (
            <span className="text-sm  text-gray-700 font-bold mx-2">
              by {frontmatter.author}
            </span>
          ) : null}
        </header>
        {/* {frontmatter.image && (
          <div className="sm:w-full">
            <Image
              alt={frontmatter.title}
              src={frontmatter.image}
              // previewSrc={require(`${frontmatter.image}?lqip`)}
              className="w-full h-48  object-cover sm:h-84 sm:object-top rounded"
            />
          </div>
        )} */}
        <div className="lg:w-5/6 ">
          <ReactMarkdown
            escapeHtml={false}
            source={post.content}
            renderers={{ code: CodeBlock, image: MarkdownImage }}
          />
        </div>
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
