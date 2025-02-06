import axios from "axios";
import fs from "fs";

const HASHNODE_DATA_FILE_PATH = "./data/hashnode.json";
const HASHNODE_API_URL = "https://gql.hashnode.com/";
const HASHNODE_USERNAME = process.env.NEXT_PUBLIC_HASHNODE_USERNAME;
const HASHNODE_POSTS_NUM = 10;

const main = async () => {
  const query = `
query($username: String!, $size: Int!) {
  user(username: $username) {
    publications(first: 1, sortBy: DATE_CREATED_DESC) {
      edges {
        node {
          domainInfo {
            hashnodeSubdomain
          }
          posts(first: $size) {
            edges {
              node {
                id
                slug
                url
                publishedAt
                title
                brief
                content {
                  markdown
                }
                readTimeInMinutes
                coverImage {
                  url
                }
              }
            }
          }
        }
      }
    }
  }
}
`;

  await axios
    .post(
      HASHNODE_API_URL,
      JSON.stringify({
        query,
        variables: {
          username: HASHNODE_USERNAME,
          size: HASHNODE_POSTS_NUM,
        },
      }),
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
    .then(res => {
      const domain =
        res.data.data.user.publications.edges[0].node.domainInfo
          .hashnodeSubdomain + ".hashnode.dev";

      const parsedPosts =
        res.data.data.user.publications.edges[0].node.posts.edges.map(post => {
          const {
            content: { markdown: contentMarkdown },
            readTimeInMinutes,
            coverImage: { url: coverImageUrl },
            ...postWithoutContent
          } = post.node;
          const wordCount = contentMarkdown.split(/\s+/gu).length;
          return {
            ...postWithoutContent,
            readingTime: readTimeInMinutes,
            coverImageUrl,
            wordCount,
          };
        });

      fs.writeFileSync(
        HASHNODE_DATA_FILE_PATH,
        JSON.stringify({ posts: parsedPosts, domain })
      );
    })
    .catch(error => {
      console.log(error);
    });
};

main();
