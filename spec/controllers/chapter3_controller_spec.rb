require 'spec_helper'

describe Chapter3Controller do

  describe "GET 'index'" do
    it "should be successful" do
      get 'index'
      response.should be_success
    end
  end

  describe "GET 'get_time'" do
    it "should be successful" do
      get 'get_time'
      response.should be_success
    end
  end

  describe "GET 'repeat'" do
    it "should be successful" do
      get 'repeat'
      response.should be_success
    end
  end

  describe "GET 'reverse'" do
    it "should be successful" do
      get 'reverse'
      response.should be_success
    end
  end

end
