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
    'aws_cognito_identity_pool_id': 'ap-southeast-1:f5039d9a-3d11-41be-b618-742ed3e4f511',
    'aws_cognito_region': 'ap-southeast-1',
    'aws_user_pools_id': 'ap-southeast-1_9QWSYGzXk',
    'aws_user_pools_web_client_id': '1rav411nccnp73htopbhml8s61',
    'oauth': {},
  },
};
