class Chapter3Controller < ApplicationController
  def index
  end
  def get_time
    sleep 1.second
    render :text => Time.now
  end
  def repeat
    render :text => params.inspect
  end
  def reverse
    @reversed_text = params[:text_to_reverse].reverse
    render :text => " => " + @reversed_text
  end
end
