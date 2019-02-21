module.exports = {
  rules: {
    'init-declarations': 'off', // allow variables to be declared without assignment in same statement

    'no-catch-shadow': 'off', // in IE8 and below the catch clause in a try catch block leaks into outer scope
    'no-delete-var': 'error', // disallow deleting variables
    'no-label-var': 'error', // disallow labels sharing name with variables
    'no-restricted-globals': [ // disallow certain restricted global variables
      'error',
      'addEventListener',
      'blur',
      'close',
      'closed',
      'confirm',
      'defaultStatus',
      'defaultstatus',
      'error',
      'event',
      'external',
      'find',
      'focus',
      'frameElement',
      'frames',
      'history',
      'innerHeight',
      'innerWidth',
      'isFinite',
      'length',
      'location',
      'locationbar',
      'menubar',
      'moveBy',
      'moveTo',
      'name',
      'onblur',
      'onerror',
      'onfocus',
      'onload',
      'onresize',
      'onunload',
      'open',
      'opener',
      'opera',
      'outerHeight',
      'outerWidth',
      'pageXOffset',
      'pageYOffset',
      'parent',
      'print',
      'removeEventListener',
      'resizeBy',
      'resizeTo',
      'screen',
      'screenLeft',
      'screenTop',
      'screenX',
      'screenY',
      'scroll',
      'scrollbars',
      'scrollBy',
      'scrollTo',
      'scrollX',
      'scrollY',
      'self',
      'status',
      'statusbar',
      'stop',
      'toolbar',
      'top',
    ],
    'no-shadow': 'error', // disallow declaration of variables already declared in the outer scope
    'no-shadow-restricted-names': 'error', // no shadowing restricted names like arguments
    'no-undef': 'error', // disallow undeclared variable unless global
    'no-undef-init': 'error', // don't initialize variable as undefined
    'no-undefined': 'off', // allow for use of undefined
    'no-unused-vars': 'error', // all variables must be used if declared
    'no-use-before-define': 'error', // define before using a function, variable, or class
  },
};
