/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  amplifyConfig: {
    'aws_project_region': 'ap-southeast-1',
    'aws_cognito_identity_pool_id': 'ap-southeast-1:3dde6e04-17ac-4f38-87fe-84b23cda6911',
    'aws_cognito_region': 'ap-southeast-1',
    'aws_user_pools_id': 'ap-southeast-1_ll4yIM5ax',
    'aws_user_pools_web_client_id': '3c15dfd0cf8si85lpfj046lioo',
    'oauth': {},
    'aws_cloud_logic_custom': [
      {
        'name': 'AdminQueries',
        'endpoint': 'https://xaeo1xy4fc.execute-api.ap-southeast-1.amazonaws.com/dev',
        'region': 'ap-southeast-1',
      },
    ],
  },
};
