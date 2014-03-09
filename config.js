colors =require('colors');

colors.setTheme({
    silly   : 'rainbow',
    input   : 'grey',
    verbose : 'cyan',
    prompt  : 'grey',
    info    : 'green',
    data    : 'grey',
    help    : 'cyan',
    warn    : 'yellow',
    debug   : 'blue',
    error   : 'red'
  });


/**
 * @global Basic path.
 */
basicPath = __dirname;

APP_ENV   = 'dev';