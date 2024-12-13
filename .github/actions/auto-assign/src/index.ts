import * as core from '@actions/core';
import * as github from '@actions/github';
import type { PullRequestEvent } from '@octokit/webhooks-types';

const engineerPool = [
  'evad1n',
  'ckgardner',
  'goodpickle',
  'Thienhuynh95',
  'nick-lanners',
];

async function run() {
  try {
    const { issue, payload } = github.context;
    const { pull_request } = payload as PullRequestEvent;

    if (!pull_request) {
      throw new Error('No PR found');
    }

    const author = pull_request.user.login;

    const { number: issue_number, owner, repo } = issue;

    if (!process.env.GITHUB_TOKEN) {
      throw new Error('No github token');
    }

    const client = github.getOctokit(process.env.GITHUB_TOKEN).rest;
    console.log('Trying to add reviewers', JSON.stringify(engineerPool));
    const reviewerResult = await client.pulls.requestReviewers({
      owner,
      pull_number: issue_number,
      repo,
      /** Request all engineers that were not the author */
      reviewers: engineerPool.filter(engineer => engineer !== author),
    });
    core.debug('Reviewer response: ' + JSON.stringify(reviewerResult));

    console.log('Trying to add assignees: ', JSON.stringify([author]));

    const result = await client.issues.addAssignees({
      assignees: [author],
      issue_number,
      owner,
      repo,
    });

    core.debug('Response: ' + JSON.stringify(result));
  } catch (error: any) {
    core.setFailed(error.message);
  }
}

run();
