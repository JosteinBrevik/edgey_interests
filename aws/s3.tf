resource "aws_s3_bucket" "winterparty2020_bucket_dev" {
  bucket = var.domain_name
  acl = "private"
  policy = data.aws_iam_policy_document.website_policy.json
  website {
    index_document = "index.html"
    error_document = "index.html"
  }

  lifecycle {
  create_before_destroy = true
}
}