// Compiled by ClojureScript 1.7.228 {}
goog.provide('escaton_client.core');
goog.require('cljs.core');
goog.require('clojure.browser.repl');
if(typeof escaton_client.core.conn !== 'undefined'){
} else {
escaton_client.core.conn = clojure.browser.repl.connect.call(null,"http://localhost:9000/repl");
}
cljs.core.enable_console_print_BANG_.call(null);
cljs.core.println.call(null,"Hello world YO!");

//# sourceMappingURL=core.js.map