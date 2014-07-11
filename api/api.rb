#!/usr/bin/env ruby

require 'rubygems'
require 'rack'
require 'sinatra'
require 'sinatra/json'

Process.daemon()

get '/' do
  headers = request.env
    .reduce({}) do |accu, pair|
        accu[pair[0]] = pair[1]
        accu
    end
  json(headers)
end
