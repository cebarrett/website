#!/usr/bin/ruby
require 'rubygems'
require 'sinatra'

get '/' do
  request.ip
end

