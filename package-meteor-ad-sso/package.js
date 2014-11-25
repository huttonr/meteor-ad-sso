Package.describe({
  name : 'emgee:ad-sso',
  summary: 'Active Directory SSO',
  version: '0.1.0-pre1',
  git: 'https://github.com/emgee3/meteor-ad-sso.git'
});

Package.on_use(function (api) {
  api.versionsFrom('METEOR@1.0');

  api.use('templating', 'client');
  api.use('jquery', 'client');
  api.use('session', 'client');
  api.use('tracker', 'client');

  api.use('underscore', 'server');
  api.use('iron:router@1.0.3');

  api.use('accounts-base', ['client', 'server']);

  api.add_files('client.css', 'client');
  api.add_files('client.html', 'client');
  api.add_files('client.js', 'client');

  api.add_files('server.js', 'server');

  api.export('SSO', ['client', 'server']);
});

