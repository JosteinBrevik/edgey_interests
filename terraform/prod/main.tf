provider "aws" {
  profile = "playground"
  region = "eu-west-1"
}

provider "aws" {
  # us-east-1 instance
  region = "us-east-1"
  alias = "use1"
}