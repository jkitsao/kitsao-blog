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
    className="w-full h-48 lg:h-84 object-cover my-2 block shadow-lg"
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
        <header className="mt-4">
          <h1 className="my-3 ml-1 text-2xl sm:text-4xl text-gray-900  lg:text-5xl leading-tight font-medium">
            {frontmatter.title}
          </h1>
          <p className="text-sm lg:text-lg text-green-800 inline-block">
            {frontmatter.date}
          </p>
          {/* if author is present show else dont show  */}
          {frontmatter.author ? (
            <span className="text-sm lg:text-lg text-red-800 font-bold mx-2">
              by {frontmatter.author}
            </span>
          ) : null}
        </header>
        <div className="sm:w-full">
          <Image
            alt={frontmatter.title}
            src={frontmatter.image}
            // previewSrc={require(`${frontmatter.image}?lqip`)}
            className="w-full h-48 object-contain object-cover sm:h-84 sm:object-top rounded"
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
