/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
export const environment = {
  production: true,
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
  }
};
