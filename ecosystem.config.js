module.exports = {
  apps : [{
    name: 'rapunzel',
    script: 'npm start',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env_production: {
      NODE_ENV: 'production',
      PORT: 3000,
    },
  }],

  deploy : {
    production : {
      user : 'dev',
      host : 'rapunzel.talestorm.ru',
      ref  : 'origin/master',
      repo : 'git@gitlab.com:plan_9/rapunzel.git',
      path : '/opt/rapunzel',
      'pre-deploy-local' : '',
      'post-deploy' : 'npm install && npm run build && pm2 startOrRestart ecosystem.config.js --env production',
      'pre-setup': '',
    }
  }
};
