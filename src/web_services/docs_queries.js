import { gql } from "@apollo/client";

export const GetData = () => {
  return gql`
    {
      __type(name: "Query") {
        fields {
          description
        }
      }
    }
  `;
};

export const GetArguments = () => {
  return gql`
    {
      __type(name: "Query") {
        fields {
          name
          args {
            name
            description
            defaultValue
            type {
              name
            }
          }
        }
      }
    }
  `;
};
