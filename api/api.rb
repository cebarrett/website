#!/usr/bin/ruby
require 'rubygems'
require 'rack'
require 'sinatra'

Process.daemon()

get '/' do
  headers = request.env
    .collect {|pair| [ Rack::Utils.escape_html(pair[0]), Rack::Utils.escape_html(pair[1]) ]}
    .collect {|pair| pair.join(": ") << "<br>"}
    .sort
  [200, {'Content-Type' => 'text/html'}, headers]
end

