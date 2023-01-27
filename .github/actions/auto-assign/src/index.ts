import * as github from '@actions/github';
import * as core from '@actions/core';
import { PullRequestEvent } from '@octokit/webhooks-types';

const engineerPool = ['evad1n', 'ckgardner', 'goodpickle', 'Thienhuynh95'];

async function run() {
  try {
    const { payload, issue } = github.context;
    const { pull_request } = payload as PullRequestEvent;

    if (!pull_request) {
      throw new Error('No PR found');
    }

    const author = pull_request.user.login;

    const { owner, repo, number: issue_number } = issue;

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
      owner,
      repo,
      issue_number,
      assignees: [author],
    });

    core.debug('Response: ' + JSON.stringify(result));
  } catch (error: any) {
    core.setFailed(error.message);
  }
}

run();
