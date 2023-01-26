This action automatically adds assignees/reviewers to PRs. It will add the author, and a frontend engineer if the author is not a frontend engineer. The list of frontend engineers it chooses from is defined in `index.ts`.

Once changes are made to the source (`index.ts`) then run `yarn build` and added the built files.