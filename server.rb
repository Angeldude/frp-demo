require 'sinatra'

get '/' do
  send_file File.read(File.join('public', 'index.html'))
end
