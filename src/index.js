import './style.scss';

function requireJS(r) {
  return r.keys().map(r);
}

requireJS(require.context('./', true, /\.js$/));