require 'spec_helper'

describe Chapter2Controller do

  describe "GET 'myaction'" do
    it "should be successful" do
      get 'myaction'
      response.should be_success
    end
  end

end
