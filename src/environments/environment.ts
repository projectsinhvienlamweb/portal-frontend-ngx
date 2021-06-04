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
    'aws_cognito_identity_pool_id': 'ap-southeast-1:2e60453d-1c9c-4ce5-ac28-7f1842645289',
    'aws_cognito_region': 'ap-southeast-1',
    'aws_user_pools_id': 'ap-southeast-1_vmFHg7JIC',
    'aws_user_pools_web_client_id': '34oukmtdqr4hh9405o7prmrjma',
    'oauth': {},
  },
};
